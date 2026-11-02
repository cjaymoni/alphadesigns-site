import { BrandName, LogoMark } from './Logo';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="brand" role="img" aria-label="Alpha Designs">
          <LogoMark />
          <BrandName hidden />
        </div>
        <p>
          All times are Ghana time. A laptop is required. The certificate is a provider certificate of completion, not an
          accredited qualification. Courses do not guarantee employment.
        </p>
        <p className="copy">© {new Date().getFullYear()} Alpha Designs</p>
      </div>
    </footer>
  );
}
