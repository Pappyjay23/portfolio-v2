import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // If you have any draft folders
    },
    sitemap: 'https://peacejp.dev/sitemap.xml',
  }
}