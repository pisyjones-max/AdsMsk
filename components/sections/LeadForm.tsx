'use client'

import { useState } from 'react'

const SERVICES_OPTIONS = [
  'Яндекс.Директ',
  'Реклама ВКонтакте',
  'Wildberries / Ozon',
  'Telegram-бот',
  'Автопостинг',
  'Сайт / Лендинг',
  'CRM и автоматизация',
  'Не знаю — нужна консультация',
]

export function LeadForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, services: selected }),
      })
      setStatus('success')
      // Яндекс.Метрика цель
      if (typeof window !== 'undefined' && (window as any).ym) {
        ;(window as any).ym(103922217, 'reachGoal', 'lead_form_submit')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
              Бесплатно
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
              Получите разбор вашего бизнеса
            </h2>
            <p className="text-gray-300 text-lg">
              Покажем, где вы теряете клиентов и что нужно сделать прямо сейчас.
              Ответим в течение 15 минут.
            </p>
          </div>

          {status === 'success' ? (
            /* Успех */
            <div className="text-center bg-green-500/20 border border-green-500/40 rounded-3xl p-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-gray-300">
                Мы свяжемся с вами в течение 15 минут. <br />
                Пока ждёте — вступайте в наш Telegram-канал.
              </p>
              <a
                href="https://t.me/adsmsk"
                className="mt-6 inline-flex items-center gap-2 bg-brand-accent text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Подписаться на Telegram
              </a>
            </div>
          ) : (
            /* Форма */
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              {/* Выбор услуг */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">
                  Что интересует? (можно несколько)
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_OPTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggle(s)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                        ${selected.includes(s)
                          ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                          : 'bg-white/10 text-gray-300 border border-white/20 hover:border-brand-primary/50'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Поля */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500
                               focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Телефон или Telegram *</label>
                  <input
                    type="text"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+7 (999) 123-45-67 или @username"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500
                               focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 text-sm mb-2">Расскажите о вашем бизнесе</label>
                <textarea
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
                  placeholder="Ниша, текущая ситуация, цель..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500
                             focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-all resize-none"
                />
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 bg-gradient-cta text-white font-bold py-4 px-8 rounded-xl
                             hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed
                             shadow-lg shadow-brand-primary/40 text-lg"
                >
                  {status === 'loading' ? 'Отправляем...' : 'Получить бесплатный разбор →'}
                </button>
                <a
                  href="https://t.me/UR16_bot?start"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2
                             bg-white/10 border border-white/20 text-white font-bold py-4 px-6 rounded-xl
                             hover:bg-white/15 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
                  </svg>
                  Telegram
                </a>
              </div>

              <p className="text-gray-500 text-xs text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/personal" className="text-gray-400 hover:text-white underline transition-colors">
                  политикой обработки данных
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}