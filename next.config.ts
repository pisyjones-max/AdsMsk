import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Отключаем, пока не установлен critters (часто ломает сборку)
  // experimental: { optimizeCss: true },

  images: {
    formats: ['image/avif', 'image/webp'],
    // ВАЖНО: для локальных картинок из /public — remotePatterns не нужен
    // Добавляем только если используете внешние URL
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Разрешаем оба хоста — домен и IP (на время разработки)
    // Раскомментировать если нужен IP:
    // unoptimized: true,  // временно для диагностики
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
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
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
