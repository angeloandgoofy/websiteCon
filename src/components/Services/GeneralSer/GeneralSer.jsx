import { Link } from "react-router-dom";
import styles from "./GeneralSer.module.css";
import Seo from "../../Seo/Seo";
import { SERVICES } from "../../../constants/services";
import { SITE } from "../../../constants/site";

function GeneralServices() {
  return (
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

      <header className={styles.header}>
        <h1 className={styles.title}>Home Remodeling &amp; General Contracting Services</h1>
        <p className={styles.subtitle}>
          Professional home improvement and maintenance across {SITE.areaText}.
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
