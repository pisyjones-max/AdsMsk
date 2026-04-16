'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useInView } from '@/lib/useInView'

const CATEGORIES = ['Все', 'Реклама', 'Маркетплейсы', 'Автоматизация', 'Разработка']

const SERVICES = [
  {
    category: 'Реклама',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
      </svg>
    ),
    title: 'Яндекс.Директ',
    tagline: 'Горячие заявки из поиска',
    desc: 'Настраиваем поиск и РСЯ. Собираем семантику, пишем объявления, оптимизируем. Снижаем стоимость заявки.',
    results: 'Средний CPL: −65%',
    href: '/services/context-ads',
    gradient: 'from-orange-500 to-red-500',
    highlight: true,
  },
  {
    category: 'Реклама',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Реклама ВКонтакте',
    tagline: 'Целевая аудитория РФ',
    desc: 'Настройка аудиторий, создание конвертирующих креативов, воронки продаж. Работаем без Google.',
    results: 'CTR до 3.5%',
    href: '/services/target-ads',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    category: 'Маркетплейсы',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
    ),
    title: 'Wildberries / Ozon',
    tagline: 'Выход и рост продаж',
    desc: 'Регистрация, SEO карточек, контент, юнит-экономика, аналитика, реклама. Ведение под ключ.',
    results: 'Рост продаж ×3 за 90 дней',
    href: '/services/marketplaces',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Автоматизация',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: 'Telegram-боты',
    tagline: 'Замените менеджера на бота',
    desc: 'Боты для продаж, консультаций, обработки заявок 24/7. Интеграции с CRM. Автоворонки.',
    results: 'Конверсия +67%',
    href: '/services/telegram-bots',
    gradient: 'from-cyan-500 to-blue-500',
    highlight: true,
  },
  {
    category: 'Автоматизация',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Автопостинг',
    tagline: 'Вы ведёте бизнес — мы ведём контент',
    desc: 'Автоматизация публикаций в Telegram и ВКонтакте. Контент-план, массовое ведение аккаунтов.',
    results: 'Охват ×5 без доп. усилий',
    href: '/services/autoposting',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    category: 'Разработка',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Сайты и лендинги',
    tagline: 'Быстро, красиво, конвертирует',
    desc: 'Лендинги под рекламу, интернет-магазины с SEO-структурой. Next.js — Lighthouse 90+.',
    results: 'LCP < 2.5s',
    href: '/services/websites',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    category: 'Автоматизация',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: 'CRM и автоматизация',
    tagline: 'Система вместо хаоса',
    desc: 'Внедрение CRM, автоматизация заявок, интеграции ботов с рекламой. До 80% рутины автоматизируем.',
    results: '80% рутины — автоматически',
    href: '/services/crm',
    gradient: 'from-amber-500 to-orange-500',
  },
]

export function Services() {
  const [activeCategory, setActiveCategory] = useState('Все')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const filtered = activeCategory === 'Все'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory)

  return (
    <section ref={ref} id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 mb-4">
            Не «услуги», а{' '}
            <span className="text-transparent bg-clip-text bg-gradient-cta">результаты</span>
          </h2>
          <p className="text-lg text-gray-600">
            Каждое направление — это система, которая приносит измеримый рост.
          </p>
        </div>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Карточки */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative flex flex-col p-6 rounded-2xl border
                          ${service.highlight
                            ? 'border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5'
                            : 'border-gray-200 bg-white'}
                          hover:border-brand-primary/50 hover:shadow-xl hover:shadow-brand-primary/10
                          transition-all duration-300
                          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-4 bg-gradient-cta text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Популярно
                </span>
              )}

              {/* Иконка с градиентом */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4
                              group-hover:scale-110 transition-transform duration-300 w-fit`}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-brand-accent uppercase tracking-wide mb-3">
                {service.tagline}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>

              {/* Результат */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <span className="text-green-500 text-sm font-bold">✓</span>
                <span className="text-sm font-semibold text-gray-700">{service.results}</span>
              </div>

              {/* Стрелка */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                              group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Нижний CTA */}
        <div className="text-center mt-12">
          <Link
            href="#lead-form"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-4 transition-all duration-200"
          >
            Не знаете, что нужно вашему бизнесу? Получите бесплатный разбор
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}