import { CourseLink } from './CourseContext';
import EnrolForm from './EnrolForm';
import { CONTACT } from '@/lib/contact';
import { FAQS, FEES, ghs } from '@/lib/content';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">Web Development Training · Ghana</p>
          <h1>
            Learn to build websites <span>by building them.</span>
          </h1>
          <p className="lede">
            Hands-on, instructor-led lessons. Each one goes from a short demonstration to supported practice, then you
            make a change on your own. You finish with a working project you can publish and explain.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#courses">
              See the courses
            </a>
            <a className="btn btn-ghost" href="#schools">
              Programmes for schools
            </a>
          </div>
        </div>
        <figure className="code-card" aria-label="Example of code a learner writes in the first course">
          <div className="code-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>index.html</span>
          </div>
          <pre>
            <code>
              <span className="t">&lt;header&gt;</span>
              {'\n  '}
              <span className="t">&lt;h1&gt;</span>Ama&apos;s Kitchen<span className="t">&lt;/h1&gt;</span>
              {'\n  '}
              <span className="t">&lt;p&gt;</span>Fresh jollof, every day.<span className="t">&lt;/p&gt;</span>
              {'\n'}
              <span className="t">&lt;/header&gt;</span>
              {'\n'}
              <span className="t">&lt;button</span> <span className="a">id</span>=<span className="s">&quot;order&quot;</span>
              <span className="t">&gt;</span>Order now<span className="t">&lt;/button&gt;</span>
              {'\n\n'}
              <span className="c">{'// week 5: make it do something'}</span>
              {'\n'}
              <span className="k">const</span> btn = document.<span className="f">querySelector</span>(
              <span className="s">&apos;#order&apos;</span>);
              {'\n'}
              btn.<span className="f">addEventListener</span>(<span className="s">&apos;click&apos;</span>, () =&gt; {'{'}
              {'\n  '}
              btn.textContent = <span className="s">&apos;Order received ✓&apos;</span>;{'\n'}
              {'});'}
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}

function Fill({ children }: { children: React.ReactNode }) {
  return <span className="fill">{children}</span>;
}

export function Courses() {
  return (
    <section className="section" id="courses" aria-labelledby="courses-title">
      <div className="wrap">
        <p className="eyebrow">Courses</p>
        <h2 className="section-title" id="courses-title">
          Two tracks. Pick where you are starting from.
        </h2>

        <div className="tracks">
          <article className="track basic">
            <span className="tag">Beginner</span>
            <h3>Basic: Build &amp; Publish Your First Website</h3>
            <p className="sub">Build a responsive website for a small business and put it online. No experience needed.</p>
            <dl className="facts">
              <div><dt>When</dt><dd>6 Saturdays, 9 am – 12 pm</dd></div>
              <div><dt>Hours</dt><dd>18 live hours + 2–3 hrs/week practice</dd></div>
              <div><dt>Skills</dt><dd>HTML, CSS, introductory JavaScript</dd></div>
              <div><dt>Fee</dt><dd>{ghs(FEES.basic)}</dd></div>
            </dl>
            <CourseLink className="btn btn-ink" course="Basic">
              Reserve a Basic seat
            </CourseLink>
          </article>

          <article className="track intensive">
            <span className="tag">Intermediate</span>
            <h3>Intensive: Build &amp; Deploy a React App</h3>
            <p className="sub">Build and deploy a booking app with a database, user accounts and access controls.</p>
            <dl className="facts">
              <div><dt>When</dt><dd>12 weeks · Tue &amp; Thu 7–9 pm, Sat 9 am – 12 pm</dd></div>
              <div><dt>Hours</dt><dd>84 live hours + 6–10 hrs/week practice</dd></div>
              <div><dt>Skills</dt><dd>React, APIs, databases, auth, testing, deployment</dd></div>
              <div><dt>Entry</dt><dd>45-minute readiness check (HTML, CSS, JS)</dd></div>
              <div><dt>Fee</dt><dd>
                {ghs(FEES.intensive)} · or 3 payments of {ghs(FEES.intensive / 3)}
              </dd></div>
            </dl>
            <CourseLink className="btn btn-teal" course="Intensive">
              Book a readiness check
            </CourseLink>
          </article>
        </div>

        <h3 className="sub-title">What you will learn</h3>
        <ul className="learn">
          <li><strong>Structure</strong>Semantic HTML pages, links, images and forms</li>
          <li><strong>Style</strong>CSS layouts that work on phones and larger screens</li>
          <li><strong>Behaviour</strong>JavaScript interactions, then React components</li>
          <li><strong>Go live</strong>Publishing, Git &amp; GitHub, and deployment</li>
        </ul>
      </div>
    </section>
  );
}

const steps = [
  ['Watch it built', 'A short, live demonstration of one idea, written from scratch so you see every step.'],
  ['Practise with support', 'You repeat it on your own laptop with the instructor on hand to help you get unstuck.'],
  ['Change it on your own', 'A small challenge you solve without step-by-step help, so the skill is really yours.'],
  ['Show and explain', 'You finish by presenting your project and explaining how it works.'],
];

const whys = [
  ['Small, practical groups', 'Lessons are instructor-led and built around real practice time, not long lectures.'],
  ['Starter files every week', 'Each session comes with prepared files, so you spend your time learning rather than setting up.'],
  ['Certificate of completion', 'Meet the course requirements and receive an Alpha Designs certificate of completion.'],
];

export function Approach() {
  return (
    <section className="section alt" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <p className="eyebrow">How we teach</p>
        <h2 className="section-title" id="approach-title">
          Every lesson ends with something you made yourself.
        </h2>
        <ol className="steps">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <div className="why">
          {whys.map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const schoolSteps = [
  ['Meet with us', 'We talk through your timetable, pupils’ ages and what you’d like them to achieve.'],
  ['Watch a demonstration', 'An observed lesson with your pupils, so you can see how they respond.'],
  ['Run a small pilot', 'Six sessions of 60–90 minutes each, at times the school approves.'],
  ['Review together', 'A completion summary on participation, finished work and next steps.'],
];

export function Schools() {
  return (
    <section className="section schools" id="schools" aria-labelledby="schools-title">
      <div className="wrap schools-grid">
        <div>
          <p className="eyebrow eyebrow-light">For schools</p>
          <h2 className="section-title" id="schools-title">
            Bring web development to your pupils.
          </h2>
          <p className="lede">
            We work with primary, JHS and SHS schools to run practical coding lessons as a club, enrichment period or
            holiday programme. Start with an observed demonstration, then decide whether to run a small pilot.
          </p>
          <ul className="ticks">
            <li><strong>Full Basic course</strong> for SHS students, split into shorter school-approved sessions</li>
            <li><strong>Child-friendly notes, workbooks and coding challenges</strong> adapted to pupils&apos; ages</li>
            <li><strong>Safe by design:</strong> pupils use invented details, and nothing is published without school and parent permission</li>
            <li>
              <strong>CodeQuest included:</strong> our online classroom for pupils and teachers.{' '}
              <a className="inline-link" href="#codequest">
                See it below <span aria-hidden="true">↓</span>
              </a>
            </li>
          </ul>
          <CourseLink className="btn btn-gold" course="School programme">
            Request a school meeting
          </CourseLink>
        </div>

        <aside className="path-card" aria-labelledby="path-title">
          <p className="path-label">How it starts</p>
          <h3 id="path-title">From first meeting to finished work</h3>
          <ol className="path">
            {schoolSteps.map(([title, text]) => (
              <li key={title}>
                <strong>{title}</strong>
                {text}
              </li>
            ))}
          </ol>
          <p className="path-note">No commitment until you&apos;ve seen a lesson with your own pupils.</p>
        </aside>
      </div>
    </section>
  );
}


export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap narrow">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title" id="faq-title">
          Good to know before you join
        </h2>
        <div className="faq">
          {FAQS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Enrol() {
  return (
    <section className="enrol" id="enrol" aria-labelledby="enrol-title">
      <div className="wrap enrol-grid">
        <div>
          <h2 id="enrol-title">Reserve your seat</h2>
          <p>Join the free introduction to meet the instructor, see a lesson and ask questions before you commit.</p>
          <dl className="contact">
            <div><dt>Free intro</dt><dd>Date and time confirmed when you book</dd></div>
            <div>
              <dt>Call / WhatsApp</dt>
              <dd>
                <a href={`tel:+${CONTACT.phoneIntl}`}>{CONTACT.phoneDisplay}</a>
                {' · '}
                <a href={`https://wa.me/${CONTACT.phoneIntl}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </dd>
            </div>
            <div><dt>Venue</dt><dd>Online or in person, confirmed when you book</dd></div>
          </dl>
        </div>
        <EnrolForm />
      </div>
    </section>
  );
}
