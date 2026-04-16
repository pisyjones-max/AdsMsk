'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/lib/useInView'

const CASE_FILTERS = ['Все', 'Яндекс.Директ', 'Маркетплейсы', 'Telegram-бот', 'ВКонтакте']

const CASES = [
  {
    filter: 'Яндекс.Директ',
    niche: 'Строительные материалы',
    image: '/img/case-1.jpg',
    title: 'Снизили стоимость заявки в 3 раза',
    before: { label: 'Стоимость заявки', value: '2 800 ₽' },
    after:  { label: 'Стоимость заявки', value: '940 ₽' },
    metric: '−66% CPL',
    period: '2 месяца',
    desc: 'Перенастроили Яндекс.Директ с нуля. Собрали минус-слова, переписали объявления, настроили РСЯ.',
    href: '/cases/stroymat-direct',
  },
  {
    filter: 'Маркетплейсы',
    niche: 'Мебель и декор',
    image: '/img/case-2.jpg',
    title: 'Выход на Ozon: ×3 к продажам за 90 дней',
    before: { label: 'Продаж в месяц', value: '43 шт.' },
    after:  { label: 'Продаж в месяц', value: '187 шт.' },
    metric: '+335% продажи',
    period: '3 месяца',
    desc: 'SEO карточек, профессиональный контент, настройка рекламы на Ozon, юнит-экономика.',
    href: '/cases/novation-ozon',
  },
  {
    filter: 'Telegram-бот',
    niche: 'Услуги красоты',
    image: '/img/case-3.jpg',
    title: 'Telegram-бот заменил двух администраторов',
    before: { label: 'Конверсия в запись', value: '12%' },
    after:  { label: 'Конверсия в запись', value: '34%' },
    metric: '+183% конверсия',
    period: '1 месяц',
    desc: 'Разработали бота: запись, консультация, напоминания, интеграция с CRM. Работает 24/7.',
    href: '/cases/beauty-bot',
  },
  {
    filter: 'ВКонтакте',
    niche: 'Интернет-магазин одежды',
    image: '/img/case-4.jpg',
    title: 'ВКонтакте Ads: 890 заявок за месяц',
    before: { label: 'Заявок в месяц', value: '45' },
    after:  { label: 'Заявок в месяц', value: '890' },
    metric: 'CPL — 180 ₽',
    period: '1 месяц',
    desc: 'Настроили таргет ВКонтакте, создали креативы, построили воронку через сообщения группы.',
    href: '/cases/fashion-vk',
  },
  {
    filter: 'Маркетплейсы',
    niche: 'Электроника',
    image: '/img/case-5.jpg',
    title: 'Фотоэпиляторы на Ozon: выход в топ-10',
    before: { label: 'Позиция', value: 'Топ-100' },
    after:  { label: 'Позиция', value: 'Топ-7' },
    metric: '+240% выручка',
    period: '2 месяца',
    desc: 'SEO карточек, 3D-фото, видео-обзор, запуск рекламы внутри маркетплейса.',
    href: '/cases/epilator-ozon',
  },
]

export function Cases() {
  const [activeFilter, setActiveFilter] = useState('Все')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const filtered = activeFilter === 'Все'
    ? CASES
    : CASES.filter((c) => c.filter === activeFilter)

  return (
    <section ref={ref} id="cases" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Результаты наших клиентов
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 mb-4">
            Кейсы с реальными цифрами
          </h2>
          <p className="text-lg text-gray-600">
            Не обещаем — показываем. Вот что произошло с бизнесом наших клиентов.
          </p>
        </div>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CASE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeFilter === f
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/50'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Грид кейсов */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-200
                         hover:border-brand-primary/40 hover:shadow-xl
                         transition-all duration-400
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {c.filter}
                  </span>
                  <span className="bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg">
                    {c.niche}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  {c.metric}
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {c.title}
                </h3>

                {/* Было / стало */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-red-500 font-medium mb-1">БЫЛО</p>
                    <p className="text-xs text-gray-500">{c.before.label}</p>
                    <p className="text-lg font-bold text-red-600">{c.before.value}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-green-500 font-medium mb-1">СТАЛО</p>
                    <p className="text-xs text-gray-500">{c.after.label}</p>
                    <p className="text-lg font-bold text-green-600">{c.after.value}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{c.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">⏱ {c.period}</span>
                  <span className="text-brand-primary text-sm font-semibold flex items-center gap-1
                                  group-hover:gap-2 transition-all">
                    Читать кейс
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}