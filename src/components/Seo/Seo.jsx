/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { SITE } from "../../constants/site";
function Seo({
  title = SITE.defaultTitle,
  description = SITE.defaultDescription,
  path = "/",
  type = "website",
  jsonLd,
}) {
  const canonical = `${SITE.url}${path}`;
  const image = `${SITE.url}/og-image.webp`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE.name} home remodeling project`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}

export default Seo;
