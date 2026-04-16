import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Продвижение на Wildberries и Ozon — выход и рост продаж | AdsMsk',
  description:
    'Выход на Wildberries и Ozon под ключ: регистрация, SEO карточек, контент, юнит-экономика, аналитика, реклама. Рост продаж ×3 за 90 дней. AdsMsk Москва.',
  alternates: { canonical: 'https://ads.msk.ru/services/marketplaces' },
}

const FEATURES = [
  { icon: '🚀', title: 'Выход на маркетплейс',    desc: 'Регистрация аккаунта, заполнение карточек, загрузка первых товаров.' },
  { icon: '🔍', title: 'SEO карточек',             desc: 'Ключевые слова, оптимизация заголовка, описания, характеристик.' },
  { icon: '📸', title: 'Контент и фото',           desc: 'Профессиональные фото, инфографика, видео, 3D-модели.' },
  { icon: '📊', title: 'Юнит-экономика',           desc: 'Расчёт себестоимости, маржи, порог рентабельности.' },
  { icon: '📈', title: 'Аналитика',                desc: 'MPStats, Маяк, Wildbox — отслеживаем тренды и конкурентов.' },
  { icon: '💰', title: 'Реклама внутри площадки',  desc: 'Настройка трафаретов, поиска и акций Wildberries / Ozon.' },
]

export default function MarketplacesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Маркетплейсы</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Wildberries и Ozon — рост продаж ×3 за 90 дней
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Полное сопровождение: от регистрации до топовых позиций.
            SEO карточек, аналитика, юнит-экономика, реклама внутри площадки.
          </p>
          <a href="#lead-form"
             className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                        px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
            Получить бесплатный аудит магазина →
          </a>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: '×3',    l: 'рост продаж за 90 дней' },
              { v: '30+',   l: 'магазинов под управлением' },
              { v: 'Топ-10',l: 'позиции в нише' },
              { v: '4.9★',  l: 'оценка клиентов' },
            ].map((m, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-brand-primary font-display">{m.v}</p>
                <p className="text-gray-500 text-sm mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 text-center mb-12">
            Что входит в сопровождение
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