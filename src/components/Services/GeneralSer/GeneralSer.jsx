import { Link } from "react-router-dom";
import styles from "./GeneralSer.module.css";
import Seo from "../../Seo/Seo";
import { SERVICES } from "../../../constants/services";
import { SITE } from "../../../constants/site";

function GeneralServices() {
  return (
<<<<<<< HEAD
    <main id="service3" className={styles.servicesContainer}>
      <Helmet>
        <title>General Home Renovation Services in Mine, New York, Long Island, Queens, New Hampshire, Massachusetts | ROSSI BROTHERS CONTRACTING</title>
        <meta
          name="description"
          content="ROSSI BROTHERS CONTRACTING offers expert electrical, plumbing, drywall, concrete, lighting, and maintenance services in Bayside, Long Island, Bronx, Manhattan, and Boston."
        />
        <meta
          name="keywords"
          content="home renovation, electrical services Bayside, plumbing Long Island, drywall Bronx, concrete Manhattan, lighting Boston, ROSSI BROTHERS CONTRACTING"
        />
        <link rel="canonical" href="https://www.rossiconstruction.com/services" />
        <meta property="og:title" content="General Home Renovation Services | ROSSI BROTHERS CONTRACTING" />
        <meta
          property="og:description"
          content="Expert home renovation services including electrical, plumbing, drywall, concrete, lighting, and maintenance in Bayside, Long Island, Bronx, Manhattan, and Boston."
        />
        <meta property="og:image" content="https://www.rossiconstruction.com/images/services.jpg" />
        <meta property="og:url" content="https://www.rossiconstruction.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "General Home Renovation Services",
            "description": "ROSSI BROTHERS CONTRACTING offers expert electrical, plumbing, drywall, concrete, lighting, and maintenance services in Bayside, Long Island, Bronx, Manhattan, and Boston.",
            "url": "https://www.rossiconstruction.com/services",
            "hasPart": [
              ${services.map(
                (service) => `
                {
                  "@type": "Service",
                  "name": "${service.title}",
                  "description": "${service.description}",
                  "serviceType": "${service.title}",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "ROSSI BROTHERS CONTRACTING",
                    "telephone": "(929) 720-7437",
                    "url": "https://www.rossiconstruction.com"
                  }
                }`
              ).join(",")}
            ]
          }
        `}</script>
      </Helmet>
=======
    <div id="service3" className={styles.servicesContainer}>
      <Seo
        title={`Remodeling Services | ${SITE.name}`}
        description={`${SITE.name} provides home remodeling and general contracting, including electrical, plumbing, drywall, concrete, lighting, HVAC, and maintenance services across ${SITE.areaText}.`}
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${SITE.name} renovation services`,
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: SITE.name,
                url: SITE.url,
                telephone: SITE.phoneE164,
              },
            },
          })),
        }}
      />
>>>>>>> d2a6561 ( refactored the code)

      <header className={styles.header}>
<<<<<<< HEAD
        <h1 className={styles.title}>General Contracting & Home Remodeling</h1>
        <p className={styles.subtitle}>
          Trusted Home Remodeling and general contracting services in Maine, Long Island, Queens, New Hampshire, Massachusetts, and New York. 
=======
        <h1 className={styles.title}>Home Remodeling &amp; General Contracting Services</h1>
        <p className={styles.subtitle}>
          Professional home improvement and maintenance across {SITE.areaText}.
>>>>>>> d2a6561 ( refactored the code)
        </p>
      </header>

      <section className={styles.servicesGrid} aria-label="Renovation services">
        {SERVICES.map((service) => (
          <article key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceIcon} aria-hidden="true">
              {service.icon}
            </div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <ul className={styles.featuresList}>
              {service.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className={styles.serviceLinks}>
              <Link to="/contact" className={styles.contactLink}>
                Contact us
              </Link>
              <a
                href={SITE.whatsapp}
                className={styles.learnMore}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.callToAction}>
        <h2 className={styles.ctaTitle}>Ready to transform your home?</h2>
        <p className={styles.ctaText}>
          Schedule a free consultation for your renovation project in {SITE.areaText}.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          Schedule consultation
        </Link>
      </section>
    </div>
  );
}

export default GeneralServices;
