'use client'

import { useEffect, useState } from 'react'

export function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        // Показываем только раз за сессию
        const shown = sessionStorage.getItem('exit_popup_shown')
        if (!shown) {
          setShow(true)
          sessionStorage.setItem('exit_popup_shown', '1')
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [dismissed])

  if (!show) return null

  const close = () => { setShow(false); setDismissed(true) }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    // Тут отправить email на сервер
    setTimeout(close, 3000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fade-up">
        {/* Закрыть */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {!sent ? (
          <>
            <div className="text-4xl mb-4 text-center">🎁</div>
            <h3 className="text-2xl font-extrabold font-display text-gray-900 text-center mb-2">
              Подождите! Вам подарок
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Получите <strong className="text-brand-primary">чек-лист из 15 ошибок</strong>,
              из-за которых вы теряете клиентов прямо сейчас. Бесплатно.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4
                           focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-cta text-white font-bold py-3 rounded-xl
                           hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/30"
              >
                Получить чек-лист бесплатно
              </button>
            </form>
            <button
              onClick={close}
              className="w-full text-center text-gray-400 text-sm mt-3 hover:text-gray-600 transition-colors"
            >
              Нет, я не хочу больше клиентов
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Готово! Проверьте почту</h3>
            <p className="text-gray-500">Чек-лист уже летит к вам. Закрываем окно...</p>
          </div>
        )}
      </div>
    </div>
  )
}