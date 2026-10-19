const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

<<<<<<< HEAD
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  //{ url: '/bathroom', changefreq: 'monthly', priority: 0.8 },
  //{ url: '/kitchen', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];
=======
const links = ["/", "/services", "/contact"];
>>>>>>> d2a6561 ( refactored the code)

const stream = new SitemapStream({
  hostname: "https://velvety-dieffenbachia-688e02.netlify.app",
});
links.forEach((url) => stream.write({ url }));
stream.end();

streamToPromise(stream).then((data) =>
  createWriteStream("./public/sitemap.xml").write(data)
);
