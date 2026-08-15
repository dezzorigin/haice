import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hiacemedanaceh.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
