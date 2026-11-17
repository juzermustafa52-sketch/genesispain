import type { MetadataRoute } from 'next';

// Replace the placeholder domain and enable indexing only after the production domain is finalized.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://example.com/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
