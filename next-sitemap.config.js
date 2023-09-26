/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://'+ (process.env.NEXT_PUBLIC_SITE_URL || 'localhost:3000'),
  generateRobotsTxt: true, // (optional)
  // ...other options
  output: 'export',
}