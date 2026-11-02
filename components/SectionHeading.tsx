// Eyebrow + section title that rise into view when scrolled to (see RevealObserver).
export default function SectionHeading({
  eyebrow,
  id,
  light,
  children,
}: {
  eyebrow: string;
  id: string;
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="t-stagger">
      <p className={`eyebrow${light ? ' eyebrow-light' : ''} t-stagger-line t-stagger-line--1`}>{eyebrow}</p>
      <h2 className="section-title t-stagger-line t-stagger-line--2" id={id}>
        {children}
      </h2>
    </div>
  );
}
