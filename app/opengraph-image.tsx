import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// The preview image shown when the site is shared on WhatsApp, Facebook, X, LinkedIn, etc.
export const alt = 'Alpha Designs: learn to build websites, or let us build yours. Web development training and bespoke websites and web apps in Ghana.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const display = await readFile(join(process.cwd(), 'assets/fonts/SpaceGrotesk-Bold.ttf'));
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0f1b2d',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 100 100">
            <polygon
              points="12,86 48,14 48,42 44,42 44,56 56,56 56,42 52,42 52,14 88,86 68,86 50,66 32,86"
              fill="#ffffff"
            />
            <rect x="44" y="42" width="12" height="14" fill="#f2a900" />
          </svg>
          <div style={{ display: 'flex', fontSize: 44, letterSpacing: -1, fontFamily: 'Space Grotesk' }}>
            <span style={{ fontWeight: 700 }}>alpha</span>
            <span style={{ color: '#6fc3df' }}>designs</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ color: '#f2a900', fontSize: 26, letterSpacing: 4, textTransform: 'uppercase' }}>
            Training · Websites · Web apps · Ghana
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 80, fontWeight: 700, lineHeight: 1.05, fontFamily: 'Space Grotesk', letterSpacing: -2 }}>
            <span>Learn to build websites,</span>
            <span style={{ color: '#f2a900' }}>or let us build yours.</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, fontSize: 23, color: '#c9d2e0' }}>
          <span>Beginner course</span>
          <span style={{ color: '#3a4a63' }}>•</span>
          <span>React intensive</span>
          <span style={{ color: '#3a4a63' }}>•</span>
          <span>School programmes</span>
          <span style={{ color: '#3a4a63' }}>•</span>
          <span>Bespoke websites &amp; apps</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Space Grotesk', data: display, style: 'normal', weight: 700 }] },
  );
}
