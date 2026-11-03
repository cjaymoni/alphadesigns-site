import { CONTACT } from '@/lib/contact';
import { NAV_LINKS } from '@/lib/nav';
import { BrandName, LogoMark } from './Logo';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-about">
          <a className="brand" href="#top" aria-label="Alpha Designs home">
            <LogoMark />
            <BrandName />
          </a>
          <p>Web development training and bespoke builds in Ghana.</p>
          <a className="btn btn-gold btn-sm" href="#enrol">
            Reserve a seat
          </a>
        </div>

        <nav className="footer-col" aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="footer-heading">Explore</h2>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Get in touch</h2>
          <ul>
            <li>
              <a href={`tel:+${CONTACT.phoneIntl}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <a href={`https://wa.me/${CONTACT.phoneIntl}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="footer-note">
          All times are Ghana time. A laptop is required. The certificate is a provider certificate of completion, not an
          accredited qualification. Courses do not guarantee employment.
        </p>
        <p className="copy">© {new Date().getFullYear()} Alpha Designs</p>
      </div>
    </footer>
  );
}
