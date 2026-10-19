const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = ["/", "/services", "/contact"];

const stream = new SitemapStream({
  hostname: "https://velvety-dieffenbachia-688e02.netlify.app",
});
links.forEach((url) => stream.write({ url }));
stream.end();

streamToPromise(stream).then((data) =>
  createWriteStream("./public/sitemap.xml").write(data)
);
