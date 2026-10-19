import { NavLink, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NAV_ITEMS, SITE } from "../../constants/site";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useScrolled } from "../../hooks/useScrolled";

function Navbar() {
  const isScrolled = useScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <div className={styles.navContent}>
        <NavLink to="/" className={styles.logoLink}>
          <img className={styles.mark} src="/logo.svg" alt="" aria-hidden="true" />
          <span className={styles.brand}>
            <span>Rossi Brothers</span>
            <small>Contracting</small>
          </span>
        </NavLink>

        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="primary-navigation"
          className={`${styles.navRight} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}
        >
          <a href={SITE.phoneHref} className={styles.phoneNumber}>
            <Phone size={16} aria-hidden="true" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.link} className={styles.navItem}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
