import { Clock, MapPin, Send } from "lucide-react";
import styles from "./Links.module.css";
import { SITE } from "../../constants/site";
import { useScrolled } from "../../hooks/useScrolled";

function TopHeader() {
  const scrolled = useScrolled();

  const socials = [
    {
      href: SITE.whatsapp,
      label: `Contact ${SITE.name} on WhatsApp`,
      icon: <Send size={18} aria-hidden="true" />,
    },
  ];

  return (
    <div className={`${styles.topHeader} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.infoGroup}>
          <div className={styles.infoItem}>
            <MapPin size={16} aria-hidden="true" />
            <span>Serving {SITE.areaText}</span>
          </div>
          <div className={styles.infoItem}>
            <Clock size={16} aria-hidden="true" />
            <span>{SITE.hoursDisplay}</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          {socials.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
