'use client';

import { useEffect } from 'react';

// Plays the "texts reveal" transition: hero copy straight away, section headings as they scroll into view.
export default function RevealObserver() {
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('.t-stagger'));
    const show = (el: HTMLElement) => el.classList.add('is-shown');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    for (const el of blocks) {
      if (el.dataset.reveal === 'load') requestAnimationFrame(() => show(el));
      else observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
