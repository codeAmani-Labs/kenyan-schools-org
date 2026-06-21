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

  // Optional: County-focused entries for better geo SEO
  // We can derive unique counties and create virtual emphasis (though pages are school-based)
  const uniqueCounties = [...new Set(schools.map(s => s.county))];
  const countyRoutes: MetadataRoute.Sitemap = uniqueCounties.map((county) => {
    // Link to directory filtered by county (client-side but good for crawling intent)
    // For true dynamic pages we'd create /counties/[county], but we emphasize via school metadata + sitemap
    const encodedCounty = encodeURIComponent(county);
    return {
      url: `${baseUrl}/directory?county=${encodedCounty}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    };
  });

  return [...staticRoutes, ...schoolRoutes, ...countyRoutes];
}
