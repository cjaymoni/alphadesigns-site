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
    title: 'Alpha Designs · Learn to build websites by building them',
    description:
      'Instructor-led web development courses in Ghana for beginners, intermediate learners and schools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Designs · Learn to build websites by building them',
    description:
      'Instructor-led web development courses in Ghana for beginners, intermediate learners and schools.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0f1b2d',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GH" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
