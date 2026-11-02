import { CONTACT } from '@/lib/contact';

const GREETING = 'Hello Alpha Designs, I have a question about your courses.';

// Floating button that opens a WhatsApp chat with a greeting already typed.
export default function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(GREETING)}`;
  return (
    <a className="wa-fab" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 7.6c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.6 4.1 6.4 5.6 3.1 1.2 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5l-2.3-1.1c-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.1-2-2.5-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7l-1-2.6Z"
          fill="currentColor"
          transform="translate(12 12) scale(.62) translate(-12 -12.6)"
        />
      </svg>
      <span className="wa-label">Chat with us</span>
    </a>
  );
}
