import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Разработка сайтов и лендингов в Москве — Next.js, быстро | AdsMsk',
  description:
    'Разрабатываем сайты и лендинги на Next.js: Lighthouse 90+, SEO-структура, высокая конверсия. Лендинги под рекламу, интернет-магазины. AdsMsk Москва.',
  alternates: { canonical: 'https://ads.msk.ru/services/websites' },
}

const FEATURES = [
  { icon: '⚡', title: 'Высокая скорость',         desc: 'Next.js + Tailwind. Lighthouse 90+. LCP < 2.5 сек. Core Web Vitals в норме.' },
  { icon: '🔍', title: 'SEO с нуля',               desc: 'Правильная структура H1-H3, мета-теги, schema.org, sitemap, robots.' },
  { icon: '📱', title: 'Mobile-first',              desc: 'Сайт одинаково хорошо работает на телефоне, планшете и десктопе.' },
  { icon: '🎯', title: 'Под рекламу',              desc: 'Лендинги с конверсионными элементами: CTA, формы, Telegram, соц. доказательства.' },
  { icon: '🛒', title: 'Интернет-магазины',        desc: 'Каталог, корзина, оплата, личный кабинет. Интеграция с 1С и складом.' },
  { icon: '🔒', title: 'Безопасность и хостинг',  desc: 'SSL, защита от DDoS, настройка хостинга, резервное копирование.' },
]

export default function WebsitesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Сайты и лендинги</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Сайты и лендинги, которые продают, а не просто существуют
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Next.js, Lighthouse 90+, SEO-структура с первого дня.
            Лендинги под рекламу, интернет-магазины, корпоративные сайты.
          </p>
          <a href="#lead-form"
             className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                        px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
            Обсудить проект →
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 text-center mb-12">
            Что мы делаем
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-brand-primary/40 hover:shadow-md transition-all">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </>
  )
}