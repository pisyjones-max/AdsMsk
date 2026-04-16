import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { JsonLd }         from '@/components/seo/JsonLd'
import { Header }         from '@/components/layout/Header'
import { StickyContacts } from '@/components/ui/StickyContacts'
import { ExitIntentPopup } from '@/components/ui/ExitIntentPopup'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ads.msk.ru'
  ),
  title: {
    default: 'AdsMsk — Приводим клиентов и автоматизируем продажи',
    template: '%s | AdsMsk',
  },
  description:
    'Яндекс.Директ, ВКонтакте реклама, Telegram-боты, Wildberries/Ozon, сайты. 120+ проектов. Москва и вся РФ.',
  keywords: [
    'Яндекс Директ настройка Москва',
    'реклама ВКонтакте',
    'Telegram бот для бизнеса',
    'выход на Wildberries',
    'продвижение на Ozon',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'AdsMsk',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <head>
        <JsonLd />
        {/* Яндекс.Метрика */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
              })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
              ym(103922217,'init',{
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <StickyContacts />
        <ExitIntentPopup />
        {/* Яндекс.Метрика noscript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103922217"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}