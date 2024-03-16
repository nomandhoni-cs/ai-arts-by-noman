/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://artsbynomandhoni.netlify.app",
  changefreq: "daily",
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: ["/404"],
  additionalPaths: async () => {
    const additionalPaths = [];
    for (let i = 0; i <= 285; i++) {
      additionalPaths.push({ loc: `/p/${i}` });
    }
    return additionalPaths;
  },
};
