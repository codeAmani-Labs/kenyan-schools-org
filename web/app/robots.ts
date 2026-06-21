import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/_next/',
        ],
      },
      // Optionally block aggressive bots if needed
      // {
      //   userAgent: 'Googlebot',
      //   allow: '/',
      // },
    ],
    sitemap: 'https://kenyanschools.org/sitemap.xml',
    host: 'https://kenyanschools.org',
  };
}
