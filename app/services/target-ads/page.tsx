import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Таргетированная реклама ВКонтакте — настройка и ведение | AdsMsk',
  description:
    'Настройка таргетированной рекламы ВКонтакте: аудитории, креативы, воронки. CPL от 180 ₽. Работаем без Facebook и Instagram. AdsMsk Москва.',
  alternates: { canonical: 'https://ads.msk.ru/services/target-ads' },
}

const FEATURES = [
  { icon: '🎯', title: 'Настройка аудиторий',    desc: 'Таргетинг по интересам, Look-alike, ретаргетинг, базы клиентов.' },
  { icon: '🎨', title: 'Создание креативов',      desc: 'Дизайн баннеров, тексты объявлений, видео-креативы под формат ВКонтакте.' },
  { icon: '🔄', title: 'A/B-тестирование',        desc: 'Тестируем аудитории, заголовки, изображения — масштабируем лучшее.' },
  { icon: '💬', title: 'Воронки в сообществе',    desc: 'Лид-формы, сообщения группы, чат-бот ВКонтакте, лендинги.' },
  { icon: '📊', title: 'Аналитика',               desc: 'VK Pixel, Яндекс.Метрика, детальные отчёты по каждой кампании.' },
  { icon: '📉', title: 'Оптимизация CPL',          desc: 'Регулярная оптимизация ставок, исключение неэффективных аудиторий.' },
]

export default function TargetAdsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Реклама ВКонтакте</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Реклама ВКонтакте — целевые клиенты без Google и Facebook
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Настраиваем таргет ВКонтакте: точные аудитории, конвертирующие креативы,
            воронки продаж. CPL от 180 ₽.
          </p>
          <a href="#lead-form"
             className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                        px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
            Получить бесплатный аудит →
          </a>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: '180 ₽', l: 'минимальный CPL'    },
              { v: '3.5%',  l: 'средний CTR'        },
              { v: '20+',   l: 'кампаний в работе'  },
              { v: '100%',  l: 'актуальные каналы РФ' },
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
            Что входит в настройку
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