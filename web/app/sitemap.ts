import { MetadataRoute } from 'next';
import schoolsData from '@/data/schools.json';
import { School } from '@/lib/types';

const schools = schoolsData as School[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kenyanschools.org';

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/schools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95, // High priority for crawl signals and indexation
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contribute`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/citations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/counties`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },
  ];

  // Dynamic school pages - focus on county geolocations
  const schoolRoutes: MetadataRoute.Sitemap = schools.map((school) => {
    // Boost priority for National schools
    const isNational = school.tier === 'National';
    const priority = isNational ? 0.85 : 0.75;

    // Include county in URL for better geo targeting if we had county routes,
    // but use school slug + ensure metadata has county.
    return {
      url: `${baseUrl}/schools/${school.slug}`,
      lastModified: new Date(school.lastUpdated || '2026-06-21'),
      changeFrequency: 'monthly' as const,
      priority,
    };
  });

  // Dedicated county pages for better topical and geo SEO organization (per 2026 Google guidance)
  const uniqueCounties = [...new Set(schools.map(s => s.county))];
  const countyRoutes: MetadataRoute.Sitemap = uniqueCounties.map((county) => {
    const encodedCounty = encodeURIComponent(county);
    return {
      url: `${baseUrl}/counties/${encodedCounty}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...schoolRoutes, ...countyRoutes];
}
