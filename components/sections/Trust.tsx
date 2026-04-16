'use client'

import { useRef } from 'react'
import { useInView } from '@/lib/useInView'

const REVIEWS = [
  {
    name: 'Алексей Петров',
    role: 'Владелец стройматериалов',
    avatar: 'АП',
    rating: 5,
    text: 'Запустили Яндекс.Директ за 3 дня. Стоимость заявки упала с 2800 до 940 рублей. Каждый месяц отчёт с цифрами — видно, что работают честно.',
    service: 'Яндекс.Директ',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Марина Козлова',
    role: 'Владелица студии красоты',
    avatar: 'МК',
    rating: 5,
    text: 'Telegram-бот заменил двух администраторов. Конверсия в запись выросла на 67%. Окупился за первый месяц. Рекомендую всем, у кого много входящих обращений.',
    service: 'Telegram-бот',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Сергей Волков',
    role: 'Продавец на Wildberries',
    avatar: 'СВ',
    rating: 5,
    text: 'Вышли на Ozon с нуля — через 2 месяца уже 187 продаж в месяц. Сделали карточки, SEO, запустили рекламу. Результат превзошёл ожидания.',
    service: 'Wildberries / Ozon',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Ирина Тарасова',
    role: 'Интернет-магазин одежды',
    avatar: 'ИТ',
    rating: 5,
    text: 'Таргет ВКонтакте дал 890 заявок за первый месяц по 180 рублей каждая. До этого мы платили 1200-1500 за заявку у другого агентства.',
    service: 'Реклама ВКонтакте',
    color: 'from-blue-400 to-indigo-500',
  },
]

const GUARANTEES = [
  { icon: '📈', title: 'Гарантия результата', desc: 'Прописываем KPI в договоре. Не выполнили — компенсируем.' },
  { icon: '📊', title: 'Прозрачная аналитика', desc: 'Еженедельные отчёты с реальными цифрами. Вы видите всё.' },
  { icon: '⚡', title: 'Запуск за 3 дня', desc: 'Первые заявки уже через 72 часа после старта. Не 2 недели.' },
  { icon: '🔒', title: 'Без скрытых платежей', desc: 'Фиксированная стоимость. Никаких сюрпризов в конце месяца.' },
]

export function Trust() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Почему нам доверяют
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            120 клиентов. Реальные отзывы.
          </h2>
        </div>

        {/* Отзывы */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col p-6 rounded-2xl bg-gray-50 border border-gray-200
                         hover:shadow-lg transition-all duration-300
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Аватар + имя */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.role}</p>
                </div>
              </div>

              {/* Звёзды */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">«{r.text}»</p>

              <span className={`inline-block text-xs font-bold px-2 py-1 rounded-lg bg-gradient-to-r ${r.color} text-white w-fit`}>
                {r.service}
              </span>
            </div>
          ))}
        </div>

        {/* Гарантии */}
        <div className={`bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-3xl p-8 lg:p-12
                        transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-extrabold text-white text-center mb-10 font-display">
            Наши гарантии
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h4 className="text-white font-bold mb-2">{g.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}