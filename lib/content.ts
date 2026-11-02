// Shared page content, used by the page and by the structured data for search engines.

export const FEES = { basic: 1200, intensive: 4500 };

export const ghs = (n: number) => `GHS ${n.toLocaleString('en-GH')}`;

export const FAQS: [string, string][] = [
  ['Do I need any experience?', 'Not for the Basic course. It starts from your first HTML page. The Intensive course expects you to be comfortable with HTML, CSS and some JavaScript, which is why it starts with a readiness check.'],
  ['What is the readiness check?', 'A 45-minute practical exercise in three short parts: a little HTML and CSS, a JavaScript function connected to a button, and finding a bug. It helps us make sure the Intensive course is the right fit. If it is not yet, the Basic course is a good place to start.'],
  ['What equipment do I need?', 'A laptop. A phone alone is not enough for writing and testing code. You will also need an internet connection for publishing your work.'],
  ['Is the certificate accredited?', 'No. It is an Alpha Designs certificate of completion, awarded when you meet the course requirements. It is not an accredited qualification.'],
  ['Will this get me a job?', 'We cannot promise employment. What you will have is a working project you built yourself, published online, that you can show and explain.'],
  ['What if I miss a session?', 'Each week has catch-up exercises so you can work through what you missed before the next session.'],
  ['What time zone are the classes in?', 'All times are Ghana time (GMT).'],
];
