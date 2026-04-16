'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { label: 'Главная',  href: '/#home' },
  { label: 'Услуги',   href: '/#services' },
  { label: 'Кейсы',    href: '/#cases' },
  { label: 'Команда',  href: '/team' },
  { label: 'Контакты', href: '/#lead-form' },
]

export function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/img/logo.png" alt="AdsMsk" width={44} height={44} priority />
          <span className="text-white font-extrabold text-xl font-display hidden sm:block">
            Ads<span className="text-brand-accent">Msk</span>
          </span>
        </Link>

        {/* Десктоп навигация */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA кнопки десктоп */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/79154683925"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400
                       hover:bg-green-500/30 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/UR16_bot?start"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-primary text-white
                       hover:opacity-90 px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-brand-primary/30"
          >
            Telegram
          </a>
        </div>

        {/* Бургер мобайл */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-4 mb-6">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-white text-lg font-medium py-1 border-b border-white/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href="https://t.me/UR16_bot?start" className="w-full text-center bg-brand-primary text-white font-bold py-3 rounded-xl">
              Написать в Telegram
            </a>
            <a href="https://wa.me/79154683925" className="w-full text-center bg-green-500/20 border border-green-500/30 text-green-400 font-bold py-3 rounded-xl">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}