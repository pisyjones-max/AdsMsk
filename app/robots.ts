import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Разрешаем Яндекс-боту всё
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://ads.msk.ru/sitemap.xml',
    host: 'https://ads.msk.ru',
  }
}