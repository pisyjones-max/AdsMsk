'use client'

import { useState, useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { reachGoal } from '@/lib/analytics'

const LEAD_MAGNETS = [
  { icon: '📋', title: 'Чек-лист 15 ошибок в рекламе',    desc: 'PDF, 5 страниц' },
  { icon: '📊', title: 'Шаблон юнит-экономики',            desc: 'Google Sheets' },
  { icon: '🤖', title: 'Гайд по Telegram-ботам для продаж', desc: 'PDF, 12 страниц' },
]

export function Subscribe() {
  const [email,  setEmail]  = useState('')
  const [chosen, setChosen] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: LEAD_MAGNETS[chosen].title }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reachGoal('subscribe_email')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto bg-gradient-to-br from-brand-dark to-brand-dark-3
                      rounded-3xl p-8 lg:p-14 transition-all duration-700
                      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть */}
            <div>
              <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
                Бесплатные материалы
              </span>
              <h2 className="text-3xl font-extrabold text-white font-display mb-4">
                Получите полезный материал прямо сейчас
              </h2>
              <p className="text-gray-300 mb-8">
                Выберите то, что актуально для вашего бизнеса —
                пришлём на email бесплатно, без спама.
              </p>

              {/* Выбор лид-магнита */}
              <div className="flex flex-col gap-3">
                {LEAD_MAGNETS.map((lm, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setChosen(i)}
                    className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200
                      ${chosen === i
                        ? 'border-brand-primary bg-brand-primary/20 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'}`}
                  >
                    <span className="text-2xl flex-shrink-0">{lm.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{lm.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{lm.desc}</p>
                    </div>
                    {chosen === i && (
                      <svg className="w-5 h-5 text-brand-primary ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Правая часть — форма */}
            <div>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Отправили!</h3>
                  <p className="text-gray-300">
                    Проверьте почту — материал уже там. <br/>
                    Если не видите — проверьте папку «Спам».
                  </p>
                  <a
                    href="https://t.me/adsmsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-brand-accent text-white
                               font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Подписаться на Telegram-канал
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Ваш email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ivan@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3
                                 text-white placeholder-gray-500
                                 focus:outline-none focus:border-brand-primary focus:bg-white/15
                                 transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">
                      Что-то пошло не так. Попробуйте ещё раз или напишите нам в Telegram.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary
                               text-white font-bold py-4 rounded-xl
                               hover:opacity-90 transition-opacity
                               disabled:opacity-50 disabled:cursor-not-allowed
                               shadow-lg shadow-brand-primary/30"
                  >
                    {status === 'loading'
                      ? 'Отправляем...'
                      : `Получить: ${LEAD_MAGNETS[chosen].icon} ${LEAD_MAGNETS[chosen].title}`}
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    Отправляя форму, вы соглашаетесь с{' '}
                    <a href="/personal" className="underline hover:text-gray-300 transition-colors">
                      политикой конфиденциальности
                    </a>
                    . Никакого спама.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}