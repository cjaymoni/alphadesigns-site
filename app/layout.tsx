import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  category: 'education',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE.name,
    locale: 'en_GH',
    title: SITE.shareTitle,
    description: SITE.shareDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.shareTitle,
    description: SITE.shareDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0f1b2d',
};

const REVEAL_FALLBACK_MS = 2500;
const REVEAL_BOOT_SCRIPT = `document.documentElement.classList.add('js');setTimeout(function(){var d=document.documentElement;if(!d.dataset.revealReady)d.classList.remove('js')},${REVEAL_FALLBACK_MS});`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GH" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks that JavaScript runs, so reveal animations may start hidden (see globals.css).
            If RevealObserver never starts (e.g. a script fails to load), drop the mark after
            2.5s so no content stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
