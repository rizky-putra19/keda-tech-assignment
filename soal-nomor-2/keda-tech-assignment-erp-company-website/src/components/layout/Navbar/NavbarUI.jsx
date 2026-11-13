import { useNavbarContext } from "./NavbarContext";
import classNames from "classnames";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRICING", href: "#pricing" },
  { label: "CONTACT", href: "#contact" },
];

export default function NavbarUI() {
  const { isMenuOpen, handleToggleMenu, handleNavigation, handleLogin } =
    useNavbarContext();

  return (
    <header className="navbar">
      <nav className="container navbar__container" aria-label="Main navigation">
        <a href="#home" className="navbar__brand" onClick={handleNavigation}>
          KeDA Tech ERP
        </a>

        <div className="navbar__desktop-nav">
          <ul className="navbar__links">
            {navLinks.map(({ label, href }) => (
              <li className="navbar__item" key={href}>
                <a className="navbar__link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className="navbar__login" onClick={handleLogin}>
            LOGIN
          </button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={handleToggleMenu}
        >
          ☰
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={classNames("navbar__mobile-nav", {
          "navbar__mobile-nav--open": isMenuOpen,
        })}
      >
        <div className="container">
          <ul className="navbar__mobile-links">
            {navLinks.map(({ label, href }) => (
              <li className="navbar__item" key={href}>
                <a
                  className="navbar__link"
                  href={href}
                  onClick={handleNavigation}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className="navbar__login" onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}
