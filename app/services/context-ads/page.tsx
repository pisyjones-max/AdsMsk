import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Trust }    from '@/components/sections/Trust'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Настройка Яндекс.Директ в Москве — поиск и РСЯ | AdsMsk',
  description:
    'Настройка и ведение Яндекс.Директ: поиск, РСЯ, сбор семантики, написание объявлений. Снижаем стоимость заявки. Первые заявки через 72 часа. Москва и вся РФ.',
  alternates: { canonical: 'https://ads.msk.ru/services/context-ads' },
}

const FEATURES = [
  { icon: '🔍', title: 'Сбор семантики',        desc: 'Собираем все ключевые запросы, минус-слова. Ни один целевой клиент не пройдёт мимо.' },
  { icon: '✍️', title: 'Написание объявлений',   desc: 'Конкурентные объявления с УТП, расширениями, быстрыми ссылками.' },
  { icon: '📡', title: 'Настройка РСЯ',          desc: 'Ретаргетинг и Look-alike аудитории в Рекламной Сети Яндекса.' },
  { icon: '📊', title: 'Аналитика и отчёты',     desc: 'Подключаем Яндекс.Метрику, настраиваем цели, еженедельные отчёты.' },
  { icon: '⚙️', title: 'Оптимизация',            desc: 'A/B-тесты объявлений, оптимизация ставок, масштабирование.' },
  { icon: '💰', title: 'Снижение CPL',            desc: 'Средний результат наших клиентов — снижение стоимости заявки на 60–70%.' },
]

export default function ContextAdsPage() {
  return (
    <>
      {/* Hero страницы */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-white">Яндекс.Директ</span>
          </nav>
          <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            Контекстная реклама
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Яндекс.Директ — горячие заявки из поиска
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Настраиваем поиск и РСЯ. Приводим клиентов, которые уже ищут ваши услуги.
            Первые заявки через 72 часа. Работаем без Google.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#lead-form"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                         px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30"
            >
              Получить бесплатный аудит →
            </a>
            <a
              href="https://t.me/UR16_bot?start"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl text-lg
                         hover:bg-white/10 transition-all"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Метрики */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: '−65%',  l: 'средний CPL'        },
              { v: '72ч',   l: 'до первых заявок'   },
              { v: '50+',   l: 'кампаний запущено'   },
              { v: '4.9★',  l: 'оценка клиентов'     },
            ].map((m, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-brand-primary font-display">{m.v}</p>
                <p className="text-gray-500 text-sm mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 text-center mb-12">
            Что входит в настройку Яндекс.Директ
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

      <Trust />
      <LeadForm />
      <Footer />
    </>
  )
}