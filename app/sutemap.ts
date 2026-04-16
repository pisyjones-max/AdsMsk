import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ads.msk.ru'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/cases`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/team`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/personal`,                lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ]

  const services: MetadataRoute.Sitemap = [
    'context-ads',
    'target-ads',
    'marketplaces',
    'telegram-bots',
    'autoposting',
    'websites',
    'crm',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const cases: MetadataRoute.Sitemap = [
    'stroymat-direct',
    'novation-ozon',
    'beauty-bot',
    'fashion-vk',
    'epilator-ozon',
  ].map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...services, ...cases]
}