import { CourseLink } from './CourseContext';

const offers = [
  {
    title: 'Websites',
    text: 'Fast, mobile-friendly sites for businesses, churches, schools and events, designed around what your visitors need to do.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    title: 'Web apps and tools',
    text: 'Booking systems, dashboards, portals and learning platforms with accounts and saved data. CodeQuest is one we built.',
    icon: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
      </>
    ),
  },
  {
    title: 'Tailored training',
    text: 'Courses and workshops shaped around your team, school or organisation, with notes and exercises to match.',
    icon: (
      <>
        <path d="M2 9l10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
  },
];

const process = [
  ['Talk', 'Tell us what you need and who it is for.'],
  ['Plan', 'We agree the scope, timeline and price in writing.'],
  ['Build', 'You see progress and give feedback as we go.'],
  ['Launch', 'We put it live and show you how to look after it.'],
];

export default function Bespoke() {
  return (
    <section className="section alt bespoke" id="bespoke" aria-labelledby="bespoke-title">
      <div className="wrap">
        <div className="bespoke-head">
          <div>
            <p className="eyebrow">Bespoke work</p>
            <h2 className="section-title" id="bespoke-title">
              Need something built? We make it for you.
            </h2>
          </div>
          <p className="bespoke-lede">
            The people who teach our courses also design and build for clients. Whether it is a website, a web app or
            training for your team, we make it to fit you rather than a template.
          </p>
        </div>

        <ul className="offers">
          {offers.map((o) => (
            <li key={o.title}>
              <svg
                className="offer-icon"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {o.icon}
              </svg>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </li>
          ))}
        </ul>

        <div className="bespoke-foot">
          <ol className="process" aria-label="How a bespoke project works">
            {process.map(([title, text], i) => (
              <li key={title}>
                <span className="process-num" aria-hidden="true">
                  {i + 1}
                </span>
                <strong>{title}</strong>
                {text}
              </li>
            ))}
          </ol>
          <CourseLink className="btn btn-ink" course="Bespoke project">
            Tell us about your project
          </CourseLink>
        </div>
      </div>
    </section>
  );
}
