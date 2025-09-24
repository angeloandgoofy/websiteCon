import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.webp";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    { name: "HOME", link: "/" },
    {
      name: "SERVICES",
      subItems: [
        { name: "Bathroom Remodel Services", link: "/bathroom" },
        { name: "Kitchen Remodel Services", link: "/kitchen" },
        { name: "General Remodel Services", link: "/services" },
      ],
    },
    { name: "CONTACT", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`} aria-label="Main navigation">
      <div className={styles.navContent}>
        <div className={styles.logoTitle}>
          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} className={styles.logo} alt="A.R CONSTRUCTION - Home Remodeling" />
          </NavLink>
          <h3 className={styles.h3}>A.R Construction</h3>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navRight} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <a href="tel:+6467533206" className={styles.phoneNumber}>
            <svg
              className={styles.phoneIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(646) 753-3206</span>
          </a>
          <ul className={styles.navList}>
            {items.map((item, index) => (
              <li
                key={index}
                className={`${styles.navItem} ${item.subItems ? styles.dropdown : ""}`}
              >
                {item.subItems ? (
                  <>
                    <span className={styles.navLink} aria-haspopup="true">
                      {item.name}
                      <svg
                        className={styles.dropdownArrow}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" fill="none" />
                      </svg>
                    </span>
                    <ul className={styles.dropdownMenu}>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className={styles.dropdownItem}>
                          <NavLink
                            to={subItem.link}
                            className={({ isActive }) =>
                              `${styles.navLink} ${isActive ? styles.active : ""}`
                            }
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;