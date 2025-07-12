import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import styles from "./Links.module.css";

function TopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.topHeader} ${scrolled ? styles.scrolled : ""}`}>
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ROSSI CONSTRUCTION",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+19297207437",
                "contactType": "Customer Service"
              },
              {
                "@type": "ContactPoint",
                "url": "https://wa.me/19297207437",
                "contactType": "Customer Service"
              }
            ],
            "openingHours": "Mo-Sa 08:00-18:00"
          }
        `}</script>
      </Helmet>
      <div className={styles.container}>
        {/* Location and Contact Info */}
        <div className={styles.infoGroup}>
          <div className={styles.infoItem}>
            <MapPin size={16} aria-hidden="true" />
            <span>Serving Bayside, Long Island, Bronx, Manhattan, Boston</span>
          </div>
         
          <div className={styles.infoItem}>
            <Clock size={16} aria-hidden="true" />
            <span>Mon - Sat: 8AM - 6PM</span>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          {[
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
            },
            {
              href: "https://wa.me/19297207437",
              label: "Contact ROSSI CONSTRUCTION on WhatsApp",
              icon: <Send size={18} aria-hidden="true" />,
            },
          ].map(({ href, label, icon }, index) => (
            <a
              key={index}
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