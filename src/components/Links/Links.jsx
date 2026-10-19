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
<<<<<<< HEAD
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ROSSI CONSTRUCTION",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+16316054283",
                "contactType": "Customer Service"
              },
              {
                "@type": "ContactPoint",
                "url": "https://wa.me/16316054283",
                "contactType": "Customer Service"
              }
            ],
            "openingHours": "Mo-Sa 08:00-18:00"
          }
        `}</script>
      </Helmet>
=======
>>>>>>> d2a6561 ( refactored the code)
      <div className={styles.container}>
        <div className={styles.infoGroup}>
          <div className={styles.infoItem}>
            <MapPin size={16} aria-hidden="true" />
<<<<<<< HEAD
            <span>Serving Maine, New Hampshire, Massachusetts, New York</span>
=======
            <span>Serving {SITE.areaText}</span>
>>>>>>> d2a6561 ( refactored the code)
          </div>
          <div className={styles.infoItem}>
            <Clock size={16} aria-hidden="true" />
            <span>{SITE.hoursDisplay}</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
<<<<<<< HEAD
          {[/*
            {
              href: "https://www.instagram.com/rossiconstruction",
              label: "Follow ROSSI CONSTRUCTION on Instagram",
              icon: <Instagram size={18} aria-hidden="true" />,
            },
            {
              href: "https://www.tiktok.com/@rossiconstruction",
              label: "Follow ROSSI CONSTRUCTION on TikTok",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.socialIcon}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
                </svg>
              ),
            },*/
            {
              href: "https://wa.me/16467533206",
              label: "Contact ROSSI BROTHERS CONTRACTING on WhatsApp",
              icon: <Send size={18} aria-hidden="true" />,
            },
          ].map(({ href, label, icon }, index) => (
=======
          {socials.map(({ href, label, icon }) => (
>>>>>>> d2a6561 ( refactored the code)
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
