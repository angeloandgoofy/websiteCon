export const SITE = {
  name: "ROSSI BROTHERS CONTRACTING",
  url: "https://velvety-dieffenbachia-688e02.netlify.app",
  phoneDisplay: "(646) 753-3206",
  phoneHref: "tel:+16467533206",
  phoneE164: "+16467533206",
  whatsapp: "https://wa.me/16467533206",
  hoursDisplay: "Mon – Sat: 8AM – 6PM",
  openingHours: "Mo-Sa 08:00-18:00",
  areas: [
    "Maine",
    "Long Island",
    "Queens",
    "New Hampshire",
    "Massachusetts",
    "New York",
  ],
  areaText:
    "Maine, Long Island, Queens, New Hampshire, Massachusetts, and New York",
  defaultTitle: "Home Remodeling | ROSSI BROTHERS CONTRACTING",
  defaultDescription:
    "ROSSI BROTHERS CONTRACTING provides home remodeling and general contracting across Maine, Long Island, Queens, New Hampshire, Massachusetts, and New York. Contact us to discuss your project.",
};

export const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
      telephone: SITE.phoneE164,
      image: `${SITE.url}/og-image.webp`,
      logo: `${SITE.url}/logo.svg`,
      description: SITE.defaultDescription,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164,
        contactType: "customer service",
        areaServed: SITE.areas,
        availableLanguage: ["English"],
      },
    },
  ],
};
