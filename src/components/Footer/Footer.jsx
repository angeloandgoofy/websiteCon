import { NavLink } from "react-router-dom";
import { SITE, NAV_ITEMS } from "../../constants/site";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>{SITE.name}</p>
          <p className={styles.copy}>
            Home remodeling across {SITE.areaText}.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.link}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contact}>
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <p>{SITE.hoursDisplay}</p>
        </div>
      </div>
      <p className={styles.legal}>
        © {year} {SITE.name}.
      </p>
    </footer>
  );
}

export default Footer;
