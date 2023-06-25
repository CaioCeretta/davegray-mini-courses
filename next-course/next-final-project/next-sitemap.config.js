/** @type {import('next-sitemap').IConfig } */

module.exports = {
  siteUrl: process.env.SITE_UTL || 'http://localhost:3000',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}
