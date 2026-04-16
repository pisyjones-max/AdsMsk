'use client';
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Команда AdsMsk — специалисты по рекламе, маркетплейсам и разработке',
  description:
    'Познакомьтесь с командой AdsMsk: специалисты по Яндекс.Директ, ВКонтакте, Telegram-ботам, маркетплейсам и веб-разработке. Москва.',
  alternates: { canonical: 'https://ads.msk.ru/team' },
}

const TEAM = [
  {
    name: 'Руководитель проектов',
    role: 'Project Manager',
    avatar: 'РП',
    desc: 'Координирует все проекты, контролирует сроки и качество. 5+ лет в digital.',
    gradient: 'from-brand-primary to-brand-secondary',
  },
  {
    name: 'Специалист Яндекс.Директ',
    role: 'PPC Expert',
    avatar: 'ЯД',
    desc: 'Сертифицированный специалист. 50+ кампаний. Снижает CPL на 60–70%.',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    name: 'Маркетплейс-менеджер',
    role: 'Marketplace Manager',
    avatar: 'ММ',
    desc: 'Ведёт 30+ магазинов на WB и Ozon. Эксперт по SEO карточек и аналитике.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Разработчик Telegram-ботов',
    role: 'Bot Developer',
    avatar: 'ТБ',
    desc: 'Python, aiogram, интеграции с CRM. 20+ ботов в продакшене.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Таргетолог ВКонтакте',
    role: 'Targeting Specialist',
    avatar: 'ТВ',
    desc: 'Настройка ВКонтакте Ads, Look-alike аудитории, воронки продаж.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Веб-разработчик',
    role: 'Frontend Developer',
    avatar: 'ВР',
    desc: 'Next.js, TypeScript, Tailwind. Lighthouse 90+ на каждом проекте.',
    gradient: 'from-violet-400 to-purple-500',
  },
]

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Команда</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-4">
            Команда AdsMsk
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Специалисты-практики с реальными кейсами и измеримыми результатами.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-brand-primary/30 transition-all">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient}
                                flex items-center justify-center text-white font-extrabold text-xl mb-4`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-primary text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg mb-6">Хотите работать с нами?</p>
            <Link
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary
                         text-white font-bold px-10 py-4 rounded-2xl text-lg
                         hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30"
            >
              Обсудить проект →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}