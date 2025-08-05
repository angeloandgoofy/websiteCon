const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/bathroom', changefreq: 'monthly', priority: 0.8 },
  { url: '/kitchen', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const stream = new SitemapStream({ hostname: 'https://velvety-dieffenbachia-688e02.netlify.app' });
links.forEach(link => stream.write(link));
stream.end();

streamToPromise(stream).then(data =>
  createWriteStream('./public/sitemap.xml').write(data)
);
