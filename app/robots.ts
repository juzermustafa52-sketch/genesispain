import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://genesispain.vercel.app/sitemap.xml',
    host: 'https://genesispain.vercel.app',
  };
}
