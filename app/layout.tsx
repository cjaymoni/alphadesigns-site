import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Alpha Designs · Web Development Training in Ghana',
  description:
    'Hands-on, instructor-led web development training in Ghana. Build and publish your first website, or build and deploy a React app. Programmes for schools too.',
  openGraph: {
    title: 'Alpha Designs · Learn to build websites by building them',
    description: 'Instructor-led web development courses in Ghana for beginners, intermediate learners and schools.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1b2d',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
