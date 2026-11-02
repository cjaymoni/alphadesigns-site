import { CONTACT } from '@/lib/contact';
import { FAQS, FEES } from '@/lib/content';
import { SITE } from '@/lib/site';

// Describes the organisation, courses and FAQ to search engines (schema.org JSON-LD).
export default function StructuredData() {
  const org = {
    '@type': 'EducationalOrganization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/apple-icon`,
    description: SITE.description,
    telephone: `+${CONTACT.phoneIntl}`,
    email: CONTACT.email,
    areaServed: { '@type': 'Country', name: 'Ghana' },
    address: { '@type': 'PostalAddress', addressCountry: 'GH' },
  };

  const course = (name: string, description: string, fee: number, workload: string, level: string) => ({
    '@type': 'Course',
    name,
    description,
    provider: { '@id': `${SITE.url}/#organization` },
    educationalLevel: level,
    inLanguage: 'en',
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      price: fee,
      priceCurrency: 'GHS',
      url: `${SITE.url}/#enrol`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: workload,
    },
  });

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      org,
      { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, publisher: { '@id': org['@id'] } },
      course(
        'Basic: Build & Publish Your First Website',
        'A beginner web development course in Ghana. Build a responsive website for a small business with HTML, CSS and introductory JavaScript, then publish it online. 6 Saturdays, no experience needed.',
        FEES.basic,
        'PT18H',
        'Beginner',
      ),
      course(
        'Intensive: Build & Deploy a React App',
        'A 12-week intermediate course in Ghana. Build and deploy a booking app with React, APIs, a database, user accounts, testing and deployment.',
        FEES.intensive,
        'PT84H',
        'Intermediate',
      ),
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
