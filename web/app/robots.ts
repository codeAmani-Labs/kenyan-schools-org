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
    sitemap: 'https://kenyanschool.org/sitemap.xml',
    host: 'https://kenyanschool.org',
  };
}
