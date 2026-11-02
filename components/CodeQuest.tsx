import Image from 'next/image';
import { CourseLink } from './CourseContext';
import dashboard from '@/public/codequest/dashboard.png';
import lesson from '@/public/codequest/lesson.png';
import arcade from '@/public/codequest/arcade.png';
import badges from '@/public/codequest/badges.png';

const features = [
  {
    img: lesson,
    alt: 'A CodeQuest lesson challenge above a live code editor with a Run code button',
    title: 'Try it, don’t just read it',
    text: 'Every lesson ends in a creative challenge and a live code editor. Pupils change the code, press Run and see the result straight away.',
  },
  {
    img: arcade,
    alt: 'The CodeQuest game arcade showing the Code scramble and Brain sparks games',
    title: 'Games that make practice stick',
    text: 'Code puzzles and quick quizzes. Only a better score earns points, so pupils replay to understand, not to guess.',
  },
  {
    img: badges,
    alt: 'A pupil’s badge collection with badges such as First spark and Game explorer',
    title: 'Badges that reward effort',
    text: 'Pupils earn badges and XP as they go, and keep their work and notes in their own backpack.',
  },
];

const roles = [
  ['Pupils', 'Work through lessons and games. Everything they make is saved to their own account.'],
  ['Teachers', 'Present lessons to the class and follow their own pupils’ progress.'],
  ['School admins', 'Create and manage accounts, without seeing any pupil’s work.'],
];

export default function CodeQuest() {
  return (
    <section className="section codequest" id="codequest" aria-labelledby="codequest-title">
      <div className="wrap">
        <div className="cq-intro">
          <div>
            <p className="eyebrow">CodeQuest · included with school programmes</p>
            <h2 className="section-title" id="codequest-title">
              A classroom pupils actually want to open.
            </h2>
          </div>
          <p className="cq-lede">
            CodeQuest is our online classroom. Pupils learn in short lessons, try every idea in a live code editor and
            play games that make practice fun. Teachers present from it and see how their class is getting on, all in
            one place.
          </p>
        </div>

        <figure className="browser">
          <div className="code-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>CodeQuest · Pupil home</span>
          </div>
          <Image
            src={dashboard}
            alt="The CodeQuest pupil home page: a welcome banner, a progress tracker and the next three lessons"
            sizes="(max-width: 1152px) calc(100vw - 32px), 1120px"
            placeholder="blur"
          />
        </figure>

        <ul className="cq-features">
          {features.map((f) => (
            <li key={f.title}>
              <div className="shot">
                <Image src={f.img} alt={f.alt} sizes="(max-width: 820px) 360px, 300px" placeholder="blur" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>

        <div className="cq-roles">
          <dl className="cq-numbers">
            <div><dt>42</dt><dd>lessons</dd></div>
            <div><dt>173</dt><dd>slide cards</dd></div>
            <div><dt>3</dt><dd>separate areas</dd></div>
          </dl>
          <ul>
            {roles.map(([who, what]) => (
              <li key={who}>
                <strong>{who}</strong>
                {what}
              </li>
            ))}
          </ul>
        </div>

        <div className="cq-cta">
          <CourseLink className="btn btn-ink" course="School programme">
            Request a school meeting
          </CourseLink>
          <p>We’ll show CodeQuest live at the demonstration.</p>
        </div>
      </div>
    </section>
  );
}
