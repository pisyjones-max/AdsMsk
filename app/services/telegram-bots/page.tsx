import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Разработка Telegram-ботов для бизнеса — продажи 24/7 | AdsMsk',
  description:
    'Разрабатываем Telegram-ботов: для продаж, консультаций, записи, обработки заявок 24/7. Интеграция с CRM. Конверсия +67%. AdsMsk Москва.',
  alternates: { canonical: 'https://ads.msk.ru/services/telegram-bots' },
}

const BOT_TYPES = [
  { icon: '🛒', title: 'Бот для продаж',          desc: 'Каталог товаров, корзина, оплата прямо в Telegram. Работает без менеджера.' },
  { icon: '📅', title: 'Бот для записи',           desc: 'Онлайн-запись клиентов, напоминания, отмена. Для студий, клиник, услуг.' },
  { icon: '🤖', title: 'Бот-консультант',          desc: 'FAQ-бот отвечает на 80% типовых вопросов. Передаёт нестандартные менеджеру.' },
  { icon: '📋', title: 'Бот приёма заявок',        desc: 'Структурированный приём заявок, автоматическая передача в CRM.' },
  { icon: '🔗', title: 'Интеграция с CRM',         desc: 'Подключаем к amoCRM, Битрикс24, Google Sheets, Notion.' },
  { icon: '📣', title: 'Автоворонки',              desc: 'Серии сообщений, прогрев аудитории, автоматические напоминания.' },
]

export default function TelegramBotsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Telegram-боты</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Telegram-бот заменит менеджера и увеличит конверсию
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Бот работает 24/7 без выходных. Принимает заявки, консультирует, записывает,
            передаёт данные в CRM. Автоматизируем до 80% рутины.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#lead-form"
               className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                          px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
              Обсудить бота →
            </a>
            <a href="https://t.me/UR16_bot?start" target="_blank" rel="noopener noreferrer"
               className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-all">
              Посмотреть живой пример
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: '+67%',  l: 'конверсия в заявку' },
              { v: '24/7',  l: 'работает без выходных' },
              { v: '80%',   l: 'рутины автоматизируем' },
              { v: '1 мес', l: 'срок окупаемости' },
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
            Какие боты мы разрабатываем
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOT_TYPES.map((b, i) => (
              <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-brand-primary/40 hover:shadow-md transition-all">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
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