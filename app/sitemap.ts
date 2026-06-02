import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// Static single-page site + the ecosystem entry points worth indexing.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date('2026-06-02');
  return [
    { url: 'https://forge.sbknext.com', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://forge.sbknext.com/#architecture', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://forge.sbknext.com/#install', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://forge.sbknext.com/#gallery', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://forge.sbknext.com/#built', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
