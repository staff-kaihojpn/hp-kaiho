/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3015',
  generateRobotsTxt: true, // (optional)
  // ...other options
  output: 'export',
}