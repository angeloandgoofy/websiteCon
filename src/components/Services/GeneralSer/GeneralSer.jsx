import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./GeneralSer.module.css";

const GeneralServices = () => {
  const services = [
    {
      id: 1,
      title: "Electrical Services",
      icon: "⚡",
      description: "Professional electrical installations and repairs including lighting fixtures, circuit breakers, and complete rewiring solutions.",
      features: [
        "Light fixture installation & repair",
        "Panel upgrades",
        "Outlet installation",
        "Electrical troubleshooting",
        "Smart home wiring",
      ],
    },
    {
      id: 2,
      title: "Plumbing",
      icon: "🔧",
      description: "Comprehensive plumbing services from repairs to complete system installations, ensuring your home's water systems run efficiently.",
      features: [
        "Pipe repair & replacement",
        "Fixture installation",
        "Water heater services",
        "Drain cleaning",
        "Leak detection",
      ],
    },
    {
      id: 3,
      title: "Drywall",
      icon: "🏗️",
      description: "Expert drywall installation, repair, and finishing services to maintain your home's interior walls in perfect condition.",
      features: [
        "New installation",
        "Patch repairs",
        "Texture matching",
        "Finishing & painting",
        "Moisture damage repair",
      ],
    },
    {
      id: 4,
      title: "Concrete Work",
      icon: "🏗️",
      description: "Professional concrete services for both structural and decorative applications, enhancing your property's functionality and appeal.",
      features: [
        "Foundation repair",
        "Driveway installation",
        "Walkway construction",
        "Decorative concrete",
        "Concrete resurfacing",
      ],
    },
    {
      id: 5,
      title: "Lighting Design",
      icon: "💡",
      description: "Transform your space with expert lighting design and installation services that combine functionality with aesthetic appeal.",
      features: [
        "LED upgrades",
        "Accent lighting",
        "Outdoor lighting",
        "Smart lighting systems",
        "Energy-efficient solutions",
      ],
    },
    {
      id: 6,
      title: "General Maintenance",
      icon: "🔨",
      description: "Comprehensive maintenance services to keep your property in top condition, addressing issues before they become major problems.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Seasonal maintenance",
        "Safety upgrades",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(null);

  return (
    <main id="service3" className={styles.servicesContainer}>
      <Helmet>
        <title>General Home Renovation Services in Bayside, Long Island, Bronx, Manhattan, Boston | ROSSI CONSTRUCTION</title>
        <meta
          name="description"
          content="ROSSI CONSTRUCTION offers expert electrical, plumbing, drywall, concrete, lighting, and maintenance services in Bayside, Long Island, Bronx, Manhattan, and Boston."
        />
        <meta
          name="keywords"
          content="home renovation, electrical services Bayside, plumbing Long Island, drywall Bronx, concrete Manhattan, lighting Boston, ROSSI CONSTRUCTION"
        />
        <link rel="canonical" href="https://www.rossiconstruction.com/services" />
        <meta property="og:title" content="General Home Renovation Services | ROSSI CONSTRUCTION" />
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
            "description": "ROSSI CONSTRUCTION offers expert electrical, plumbing, drywall, concrete, lighting, and maintenance services in Bayside, Long Island, Bronx, Manhattan, and Boston.",
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
                    "name": "ROSSI CONSTRUCTION",
                    "telephone": "(929) 720-7437",
                    "url": "https://www.rossiconstruction.com"
                  }
                }`
              ).join(",")}
            ]
          }
        `}</script>
      </Helmet>

      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>General Home Renovation Services</h1>
        <p className={styles.subtitle}>
          Professional home improvement and maintenance services delivered with excellence in Bayside, Long Island, Bronx, Manhattan, and Boston.
        </p>
      </header>

      {/* Services Section */}
      <section className={styles.servicesGrid} aria-label="Our Renovation Services">
        {services.map((service) => (
          <article
            key={service.id}
            className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ""}`}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
            onFocus={() => setActiveService(service.id)}
            onBlur={() => setActiveService(null)}
            tabIndex="0"
            role="button"
            aria-label={`Learn about ${service.title}`}
            aria-expanded={activeService === service.id}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
           
            <ul className={styles.featuresList}>
              {service.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className={styles.serviceLinks}>
              <Link
                to="/contact"
                className={styles.contactLink}
                aria-label={`Contact us for ${service.title}`}
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/19297207437"
                className={styles.learnMore}
                aria-label={`Learn more about ${service.title} on WhatsApp`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Call to Action Section */}
      <footer className={styles.callToAction}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Home?</h2>
        <p className={styles.ctaText}>
          Contact us today for a free consultation and estimate on your home renovation project in Bayside, Long Island, Bronx, Manhattan, or Boston.
        </p>
        <Link
          to="/contact"
          className={styles.ctaButton}
          aria-label="Schedule a consultation"
        >
          Schedule Consultation
        </Link>
      </footer>
    </main>
  );
};

export default GeneralServices;