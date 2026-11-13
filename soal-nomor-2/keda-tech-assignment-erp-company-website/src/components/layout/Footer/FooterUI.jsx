import { FOOTER_LINKS, FOOTER_COPYRIGHT } from "@/constant/footer.constants";

export default function FooterUI() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a
          href="#home"
          className="footer__brand"
          aria-label="KeDA Tech ERP - Kembali ke Home"
        >
          KeDA Tech ERP
        </a>

        <p className="footer__copyright">{FOOTER_COPYRIGHT}</p>

        <nav className="footer__navigation" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link, index) => (
            <span key={link.id} className="footer__navigation-item">
              <a href={link.href} className="footer__link">
                {link.label}
              </a>

              {index < FOOTER_LINKS.length - 1 && (
                <span className="footer__separator" aria-hidden="true">
                  .
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
