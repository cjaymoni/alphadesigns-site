// Basic site facts used for search engines and link previews.
export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://alphadesigns.dev').replace(/\/$/, ''),
  name: 'Alpha Designs',
  title: 'Web Development Training & Websites in Ghana | Alpha Designs',
  description:
    'Alpha Designs teaches web development and builds bespoke websites, web apps and training in Ghana. Hands-on courses for beginners, React learners and schools.',
  shareTitle: 'Alpha Designs · Web development training and bespoke builds in Ghana',
  shareDescription:
    'Hands-on courses for beginners, intermediate learners and schools, plus bespoke websites, web apps and tailored training for your business or organisation.',
};
