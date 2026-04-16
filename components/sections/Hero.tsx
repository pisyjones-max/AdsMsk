'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const STATS = [
  { value: '120+', label: 'проектов' },
  { value: '4.9',  label: 'рейтинг' },
  { value: '80%',  label: 'рутины автоматизируем' },
  { value: '3×',   label: 'рост заявок в среднем' },
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el || window.innerWidth < 1024) return
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #282868 100%)',
      }}
    >
      {/* Декоративные блобы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
             style={{ background: '#4F46E5' }} />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full blur-3xl opacity-15"
             style={{ background: '#7C3AED', animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-10"
             style={{ background: '#06B6D4', animationDelay: '2s' }} />
        {/* Сетка */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            {/* Статус-бейдж */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
                 style={{
                   background: 'rgba(79,70,229,0.2)',
                   borderColor: 'rgba(79,70,229,0.3)',
                 }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Работаем с 2020 · Москва и вся РФ
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif' }}
            >
              Приводим{' '}
              <span
                className="relative"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                горячих клиентов
              </span>{' '}
              и автоматизируем продажи
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Яндекс.Директ, реклама ВКонтакте, Telegram-боты, Wildberries/Ozon —
              делаем <strong className="text-white">систему</strong>, а не просто рекламу.
              Без Google. Только актуальные каналы РФ.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="#lead-form"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg
                           hover:opacity-90 transition-opacity shadow-xl group"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                  boxShadow: '0 10px 40px rgba(79,70,229,0.3)',
                }}
              >
                <span>Получить бесплатный разбор</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>

              <a
                href="https://t.me/UR16_bot?start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg
                           border-2 hover:bg-white/10 transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
                </svg>
                Написать в Telegram
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">4.9</span>
                <span className="text-gray-400 text-sm">/ 120 отзывов</span>
              </div>

              <div className="w-px h-6 bg-gray-600 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['АП', 'МК', 'СВ', 'ИТ'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2"
                      style={{
                        background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                        borderColor: '#0F0F1A',
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-gray-300 text-sm">120+ клиентов доверяют нам</span>
              </div>
            </div>
          </div>

          {/* RIGHT — floating cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Главный блок (заглушка если нет img) */}
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-full h-80 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1A1A2E, #282868)' }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <p className="text-white font-bold text-xl">Рост продаж</p>
                    <p className="text-gray-400">для бизнеса в РФ</p>
                  </div>
                </div>
              </div>

              {/* Floating — CPL */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Рост заявок</p>
                    <p className="text-xl font-bold text-gray-900">+340%</p>
                  </div>
                </div>
              </div>

              {/* Floating — стоимость заявки */}
              <div
                className="absolute -top-6 -right-6 rounded-2xl shadow-2xl p-4 border"
                style={{
                  background: '#0F0F1A',
                  borderColor: 'rgba(79,70,229,0.3)',
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: '2s',
                }}
              >
                <p className="text-xs text-gray-400 mb-1">Стоимость заявки</p>
                <div className="flex items-end gap-2">
                  <span className="text-gray-500 line-through text-sm">2 800 ₽</span>
                  <span className="text-green-400 font-bold text-xl">940 ₽</span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#06B6D4' }}>Яндекс.Директ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl border backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <p
                className="text-3xl font-extrabold"
                style={{
                  fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                  background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Листать</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}