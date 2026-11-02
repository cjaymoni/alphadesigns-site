'use client';

import { useEffect, useRef, useState } from 'react';
import { BrandName, LogoMark } from './Logo';

const links = [
  { href: '#courses', label: 'Courses' },
  { href: '#approach', label: 'How we teach' },
  { href: '#schools', label: 'For schools' },
  { href: '#codequest', label: 'CodeQuest' },
  { href: '#bespoke', label: 'Bespoke' },
  { href: '#faq', label: 'FAQ' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Alpha Designs home">
          <LogoMark />
          <BrandName />
        </a>
        <button
          ref={menuBtn}
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <nav
          id="site-nav"
          className={`nav-links${open ? ' open' : ''}`}
          aria-label="Main"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setOpen(false);
          }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-gold btn-sm" href="#enrol">
            Reserve a seat
          </a>
        </nav>
      </div>
    </header>
  );
}
