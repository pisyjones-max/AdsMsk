import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Внедрение CRM и автоматизация продаж — amoCRM, Битрикс24 | AdsMsk',
  description:
    'Внедряем CRM-системы, автоматизируем обработку заявок, интегрируем с Telegram-ботами и рекламой. До 80% рутины автоматически. AdsMsk Москва.',
  alternates: { canonical: 'https://ads.msk.ru/services/crm' },
}

const FEATURES = [
  { icon: '🗂', title: 'Внедрение CRM',           desc: 'amoCRM, Битрикс24 — настройка воронки, стадий, полей, прав доступа.' },
  { icon: '🤖', title: 'Автоматизация заявок',    desc: 'Автоматическое создание сделок при обращении из любого канала.' },
  { icon: '🔗', title: 'Интеграции',              desc: 'Telegram, ВКонтакте, сайт, Wildberries — все заявки в одном месте.' },
  { icon: '📧', title: 'Email и SMS-цепочки',     desc: 'Автоматические письма и сообщения на каждом этапе воронки.' },
  { icon: '📊', title: 'Отчётность',              desc: 'Дашборды по продажам, конверсии, эффективности менеджеров.' },
  { icon: '🎓', title: 'Обучение команды',        desc: 'Обучаем сотрудников работе с CRM, записываем видео-инструкции.' },
]

export default function CrmPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">CRM и автоматизация</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            CRM и автоматизация — система вместо хаоса
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Внедряем CRM, автоматизируем обработку заявок и интегрируем всё в единую систему.
            До 80% рутины выполняется автоматически.
          </p>
          <a href="#lead-form"
             className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                        px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
            Обсудить автоматизацию →
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 text-center mb-12">
            Что мы автоматизируем
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