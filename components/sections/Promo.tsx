'use client'

import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'

function getNextDeadline(): Date {
  const now = new Date()
  // Конец ближайшего четверга
  const day = now.getDay()
  const daysUntilThursday = (4 - day + 7) % 7 || 7
  const deadline = new Date(now)
  deadline.setDate(now.getDate() + daysUntilThursday)
  deadline.setHours(23, 59, 59, 999)
  return deadline
}

function pad(n: number) { return String(n).padStart(2, '0') }

export function Promo() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [spotsLeft] = useState(3) // можно брать из API
  const deadlineRef = useRef(getNextDeadline())

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      let diff = deadlineRef.current.getTime() - now
      if (diff <= 0) {
        deadlineRef.current = getNextDeadline()
        diff = deadlineRef.current.getTime() - Date.now()
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand-dark-3 rounded-3xl p-8 lg:p-12">
          {/* Фоновый паттерн */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 50%, #6640ff 0%, transparent 50%), radial-gradient(circle at 75% 50%, #06B6D4 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Левая часть */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <span className="text-red-400 text-sm font-bold uppercase tracking-wide">
                  Осталось {spotsLeft} места
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-display mb-3">
                Скидка 25% на первый месяц
              </h2>
              <p className="text-gray-300 text-lg max-w-lg">
                Новым клиентам — скидка 25% на любую услугу.
                Начните получать заявки уже через 72 часа.
              </p>
            </div>

            {/* Таймер */}
            <div className="text-center flex-shrink-0">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">До конца акции</p>
              <div className="flex items-center gap-3">
                {[
                  { v: timeLeft.d, l: 'дн' },
                  { v: timeLeft.h, l: 'ч' },
                  { v: timeLeft.m, l: 'мин' },
                  { v: timeLeft.s, l: 'сек' },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-extrabold text-white tabular-nums">{pad(t.v)}</span>
                    </div>
                    <span className="text-gray-400 text-xs mt-1">{t.l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button href="#lead-form" variant="accent" size="lg">
                  Забронировать скидку →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}