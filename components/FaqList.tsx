'use client';

import { useId, useState } from 'react';

// FAQ accordion (transitions.dev "Accordion expand"): the answer grows open and the chevron flips.
export default function FaqList({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className="faq">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        const headId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div className="t-acc faq-item" data-open={isOpen} key={q}>
            <h3>
              <button
                type="button"
                className="t-acc-head"
                id={headId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {q}
                <span className="t-acc-chevron" aria-hidden="true">
                  <svg viewBox="0 0 16 16">
                    <path d="M4 6.5L8 10.5L12 6.5" />
                  </svg>
                </span>
              </button>
            </h3>
            <div className="t-acc-panel" id={panelId} role="region" aria-labelledby={headId} aria-hidden={!isOpen}>
              <div className="t-acc-panel-inner">
                <p>{a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
