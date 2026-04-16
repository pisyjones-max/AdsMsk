import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Исправляет 404 на многих серверах
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // ВКЛЮЧАЕМ ДЛЯ ПРОВЕРКИ (если картинки появятся - дело в оптимизаторе)
    unoptimized: true,
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      { source: '/seo-optimization-of-product-cards.html', destination: '/services/marketplaces', permanent: true },
      { source: '/parsing.html',       destination: '/services/marketplaces', permanent: true },
      { source: '/unit-economy.html',  destination: '/services/marketplaces', permanent: true },
      { source: '/analytics.html',     destination: '/services/marketplaces', permanent: true },
      { source: '/marketing.html',     destination: '/services/context-ads',  permanent: true },
      { source: '/content-creation.html', destination: '/services/marketplaces', permanent: true },
      { source: '/comands.html',       destination: '/team',                  permanent: true },
      { source: '/novation_keys.html', destination: '/cases',                 permanent: true },
      { source: '/photo_keys.html',    destination: '/cases',                 permanent: true },
    ]
  },
}

export default nextConfig