import { Resend } from 'resend';
import { COURSES } from '@/lib/courses';

// Sends a seat reservation to the Alpha Designs inbox using Resend.
// Settings come from .env.local (see .env.example).

const LIMITS = { name: 100, phone: 30, message: 2000 };

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESERVATION_TO_EMAIL;
  const from = process.env.RESERVATION_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return Response.json({ error: 'not-configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'bad-request' }, { status: 400 });
  }

  // Hidden field that people never see; bots that fill it in are quietly ignored.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const phone = clean(body.phone, LIMITS.phone);
  const message = clean(body.message, LIMITS.message);
  const course = (COURSES as readonly string[]).includes(body.course as string) ? (body.course as string) : 'Not sure yet';

  if (!name || !phone) {
    return Response.json({ error: 'missing-fields' }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Phone / WhatsApp', phone],
    ['Interested in', course],
  ];
  if (message) rows.push(['Message', message]);

  const text = ['New seat reservation from the website.', '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');
  const html =
    '<p>New seat reservation from the website.</p><table cellpadding="6" style="border-collapse:collapse">' +
    rows
      .map(
        ([k, v]) =>
          `<tr><th align="left" valign="top">${k}</th><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
      )
      .join('') +
    '</table>';

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: to.split(',').map((s) => s.trim()),
    subject: `Seat reservation: ${course} – ${name}`,
    text,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'send-failed' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
