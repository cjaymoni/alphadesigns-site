'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { COURSES, type Course } from '@/lib/courses';
import { cssTimeMs } from '@/lib/cssTime';
import { useCourse } from './CourseContext';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

type Status = { text: string; error?: boolean };

// WhatsApp opens a pre-written message; email is sent straight to us through /api/reserve.
export default function EnrolForm() {
  const { course, setCourse } = useCourse();
  const [status, setStatus] = useState<Status>({ text: '' });
  const [invalid, setInvalid] = useState({ name: false, phone: false });
  const [sending, setSending] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Status text uses the transitions.dev "Text states swap": old text exits, new text enters.
  const [shown, setShown] = useState<Status>({ text: '' });
  const swapRef = useRef<HTMLSpanElement>(null);
  const entering = useRef(false);
  useEffect(() => {
    const el = swapRef.current;
    if (!el || status === shown) return;
    if (!shown.text) {
      setShown(status);
      return;
    }
    const dur = cssTimeMs('--text-swap-dur', 150);
    el.classList.add('is-exit');
    const t = setTimeout(() => {
      entering.current = true;
      setShown(status);
    }, dur);
    return () => clearTimeout(t);
  }, [status, shown]);
  useLayoutEffect(() => {
    const el = swapRef.current;
    if (!el || !entering.current) return;
    entering.current = false;
    el.classList.remove('is-exit');
    el.classList.add('is-enter-start');
    void el.offsetHeight; // force reflow so the next change transitions
    el.classList.remove('is-enter-start');
  }, [shown]);

  // Empty required fields shake (transitions.dev "Error state shake").
  function shake(el: HTMLElement | null) {
    if (!el) return;
    el.classList.remove('is-shaking');
    void el.offsetWidth; // force reflow so the shake replays
    el.classList.add('is-shaking');
    const ms = cssTimeMs('--shake-dur-a', 80) * 2 + cssTimeMs('--shake-dur-b', 60) * 2;
    setTimeout(() => el.classList.remove('is-shaking'), ms + 20);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const via = submitter?.dataset.via || 'whatsapp';
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const note = String(data.get('message') ?? '').trim();

    setInvalid({ name: !name, phone: !phone });
    if (!name || !phone) {
      setStatus({ text: 'Add your name and a phone number so we can reply.', error: true });
      if (!name) shake(nameRef.current);
      if (!phone) shake(phoneRef.current);
      (!name ? nameRef : phoneRef).current?.focus();
      return;
    }

    if (via === 'whatsapp') {
      if (!WHATSAPP_NUMBER) {
        setStatus({ text: 'WhatsApp isn’t set up yet. Use “Send by email” instead.', error: true });
        return;
      }
      const lines = [
        `Hello Alpha Designs, I'd like to reserve a seat.`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Interested in: ${course}`,
      ];
      if (note) lines.push(`Message: ${note}`);
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
        '_blank',
        'noopener',
      );
      setStatus({ text: 'Your message is ready. Press send in WhatsApp to finish.' });
      return;
    }

    setSending(true);
    setStatus({ text: 'Sending…' });
    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, course, message: note, website: data.get('website') }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ text: `Thanks, ${name}. We’ve received your request and will contact you on ${phone} soon.` });
      } else if (res.status === 503) {
        setStatus({ text: 'Email sending is not set up yet. Please call or WhatsApp us instead.', error: true });
      } else {
        setStatus({ text: 'Sorry, your request didn’t send. Please try again, or WhatsApp us instead.', error: true });
      }
    } catch {
      setStatus({ text: 'Couldn’t connect. Check your internet connection and try again.', error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="enrol-form" id="enrol-form" noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="f-name">Your name</label>
        <input
          id="f-name"
          ref={nameRef}
          className="t-input"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          aria-invalid={invalid.name}
          aria-describedby={invalid.name ? 'form-status' : undefined}
          onInput={() => invalid.name && setInvalid((v) => ({ ...v, name: false }))}
        />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Phone or WhatsApp</label>
        <input
          id="f-phone"
          ref={phoneRef}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="t-input"
          required
          maxLength={30}
          aria-invalid={invalid.phone}
          aria-describedby={invalid.phone ? 'form-status' : undefined}
          onInput={() => invalid.phone && setInvalid((v) => ({ ...v, phone: false }))}
        />
      </div>
      <div className="field">
        <label htmlFor="f-course">I&apos;m interested in</label>
        <select id="f-course" name="course" value={course} onChange={(e) => setCourse(e.target.value as Course)}>
          {COURSES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">
          Anything you&apos;d like us to know? <span className="opt">(optional)</span>
        </label>
        <textarea id="f-msg" name="message" rows={3} maxLength={2000} />
      </div>
      {/* Spam trap: hidden from people, often filled in by bots. */}
      <div className="hp" inert>
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="send-row">
        <button className="btn btn-ink" type="submit" data-via="whatsapp">
          Send on WhatsApp
        </button>
        <button className="btn btn-outline" type="submit" data-via="email" disabled={sending} aria-busy={sending}>
          {sending ? 'Sending…' : 'Send by email'}
        </button>
      </div>
      <p className={`form-status${shown.error ? ' error' : ''}`} id="form-status" role="status">
        <span className="t-text-swap" ref={swapRef}>
          {shown.text}
        </span>
      </p>
    </form>
  );
}
