'use client';

import { useEffect, useRef, useState } from 'react';
import { cssTimeMs } from '@/lib/cssTime';
import { BrandName, LogoMark } from './Logo';

const links = [
  { href: '#courses', label: 'Courses' },
  { href: '#approach', label: 'How we teach' },
  { href: '#schools', label: 'For schools' },
  { href: '#codequest', label: 'CodeQuest' },
  { href: '#bespoke', label: 'Bespoke' },
  { href: '#faq', label: 'FAQ' },
];

// Mobile menu uses the transitions.dev "Menu dropdown": .is-open to show,
// .is-closing for the short close animation, then back to rest.
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }

  function closeMenu() {
    if (!open) return;
    setOpen(false);
    setClosing(true);
    const ms = cssTimeMs('--dropdown-close-dur', 150);
    closeTimer.current = setTimeout(() => setClosing(false), ms);
  }

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu();
        menuBtn.current?.focus();
      }
    }
    // A tap anywhere outside the header closes the menu.
    function onPointer(e: PointerEvent) {
      if (!headerRef.current?.contains(e.target as Node)) closeMenu();
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  });

  return (
    <header className="site-header" ref={headerRef}>
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
          onClick={() => (open ? closeMenu() : openMenu())}
        >
          <span className="sr-only">Menu</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <nav
          id="site-nav"
          className={`nav-links t-dropdown${open ? ' is-open' : ''}${closing ? ' is-closing' : ''}`}
          data-origin="top-right"
          aria-label="Main"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) closeMenu();
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
