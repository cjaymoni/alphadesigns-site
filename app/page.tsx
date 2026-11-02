import Bespoke from '@/components/Bespoke';
import CodeQuest from '@/components/CodeQuest';
import { CourseProvider } from '@/components/CourseContext';
import { Approach, Courses, Enrol, Faq, Hero, Schools } from '@/components/Sections';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import RevealObserver from '@/components/RevealObserver';
import StructuredData from '@/components/StructuredData';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <CourseProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Courses />
        <Approach />
        <Schools />
        <CodeQuest />
        <Bespoke />
        <Faq />
        <Enrol />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <StructuredData />
      <RevealObserver />
    </CourseProvider>
  );
}
