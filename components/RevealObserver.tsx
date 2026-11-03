'use client';

import { useEffect } from 'react';

// Containers whose children rise in one after another (see "Content reveals" in globals.css).
const REVEAL_GROUPS = [
  '.tracks', '.learn', '.steps', '.why', '.ticks', '.cq-features', '.cq-numbers', '.cq-roles ul',
  '.offers', '.process', '.faq', '.enrol-grid > div:first-child',
];

// Single elements that rise in on their own.
const REVEAL_ITEMS = [
  '.code-card', '.sub-title', '.schools-grid .lede', '.schools-grid > div:first-child > .btn', '.path-card',
  '.cq-lede', '.browser', '.cq-cta', '.bespoke-lede', '.bespoke-foot > .btn', '.enrol-form',
];

/**
 * Plays the "texts reveal" transition: hero copy straight away, then section headings
 * (`.t-stagger`) and section content (REVEAL_GROUPS / REVEAL_ITEMS) as they scroll into view.
 */
export default function RevealObserver() {
  useEffect(() => {
    // Tells the layout's fallback timer that reveals are running (see app/layout.tsx).
    document.documentElement.dataset.revealReady = 'true';

    const show = (el: Element) => el.classList.add('is-shown');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    for (const el of document.querySelectorAll<HTMLElement>('.t-stagger')) {
      if (el.dataset.reveal === 'load') requestAnimationFrame(() => show(el));
      else observer.observe(el);
    }
    for (const el of document.querySelectorAll([...REVEAL_GROUPS, ...REVEAL_ITEMS].join(','))) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
