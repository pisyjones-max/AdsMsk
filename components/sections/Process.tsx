'use client'

import { useRef } from 'react'
import { useInView } from '@/lib/useInView'

const STEPS = [
  {
    step: '01',
    icon: '🔍',
    title: 'Бесплатный разбор',
    desc: 'Анализируем ваш бизнес, нишу, конкурентов. Показываем, где вы теряете клиентов и деньги прямо сейчас.',
    duration: '15 минут',
  },
  {
    step: '02',
    icon: '📐',
    title: 'Стратегия и КП',
    desc: 'Составляем конкретный план с цифрами: какие каналы, какой бюджет, какой результат ожидать.',
    duration: '1–2 дня',
  },
  {
    step: '03',
    icon: '⚡',
    title: 'Быстрый запуск',
    desc: 'Первые заявки уже через 72 часа после старта. Настраиваем, тестируем, оптимизируем.',
    duration: '3 дня',
  },
  {
    step: '04',
    icon: '📈',
    title: 'Рост и масштаб',
    desc: 'Еженедельные отчёты, A/B-тесты, масштабирование успешных связок. Система работает — вы растёте.',
    duration: 'Постоянно',
  },
]

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Как мы работаем
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 mb-4">
            От первого звонка до первой заявки — 3 дня
          </h2>
          <p className="text-lg text-gray-600">
            Никакой бюрократии. Прозрачный процесс с понятным результатом на каждом этапе.
          </p>
        </div>

        {/* Шаги */}
        <div className="relative">
          {/* Линия-коннектор (десктоп) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent mx-32" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Иконка-шаг */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary
                                  flex items-center justify-center text-2xl shadow-lg shadow-brand-primary/30
                                  group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  {/* Номер */}
                  <span
                    className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-brand-primary
                               rounded-full flex items-center justify-center text-brand-primary
                               text-xs font-extrabold shadow-md"
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Время */}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary
                                 bg-brand-primary/10 px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="#lead-form"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-secondary
                       text-white font-bold px-10 py-4 rounded-2xl text-lg
                       hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30"
          >
            Начать бесплатный разбор
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}