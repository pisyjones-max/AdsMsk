'use client'

import { useRef } from 'react'
import { useInView } from '@/lib/useInView' // кастомный хук ниже

const PAINS = [
  {
    icon: '💸',
    title: 'Сливаете бюджет на рекламу без результата',
    desc: 'Яндекс.Директ настроен "как попало" — деньги уходят, заявок нет. Конкуренты забирают ваших клиентов.',
  },
  {
    icon: '📦',
    title: 'Товары на Wildberries не продаются',
    desc: 'Карточки без SEO-оптимизации, плохие фото, неправильная юнит-экономика — и вы в минусе с каждой продажи.',
  },
  {
    icon: '🤖',
    title: 'Менеджеры не успевают обрабатывать заявки',
    desc: 'Клиенты пишут в нерабочее время, ждут ответа часами и уходят к конкурентам. Вы теряете деньги каждый день.',
  },
  {
    icon: '📉',
    title: 'Нет системы — только хаос',
    desc: 'Реклама, соцсети, сайт — всё разрознено. Нет воронки, нет аналитики, нет понимания, что вообще работает.',
  },
  {
    icon: '📱',
    title: 'ВКонтакте и Telegram не приносят продаж',
    desc: 'Посты выходят редко, аудитория не растёт, таргет не настроен. Потенциальные клиенты проходят мимо.',
  },
  {
    icon: '🔍',
    title: 'Сайт не ранжируется и не конвертирует',
    desc: 'Медленный сайт, слабое SEO, нет призыва к действию — посетители уходят, не оставив заявку.',
  },
]

export function PainPoints() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Узнаёте себя?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 mb-4">
            Почему бизнес теряет деньги <br className="hidden sm:block"/>
            <span className="text-brand-primary">прямо сейчас</span>
          </h2>
          <p className="text-lg text-gray-600">
            Большинство наших клиентов приходят с одними и теми же проблемами.
            Мы знаем, как их решить быстро и системно.
          </p>
        </div>

        {/* Карточки болей */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAINS.map((pain, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-200
                         hover:border-red-300 hover:shadow-lg hover:shadow-red-50
                         transition-all duration-500 cursor-default
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Иконка */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {pain.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pain.desc}</p>

              {/* Декоративная линия */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-400 to-red-600 rounded-b-2xl group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 mb-4">
            Если хотя бы 2 пункта про вас — <strong>пора это исправить</strong>
          </p>
          <Button href="#lead-form" variant="primary" size="lg">
            Получить бесплатный разбор
          </Button>
        </div>
      </div>
    </section>
  )
}

// Импорт Button для файла
import { Button } from '@/components/ui/Button'