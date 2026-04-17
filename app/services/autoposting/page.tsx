'use client';

import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

const FEATURES = [
  { icon: '📲', title: 'Автопостинг Telegram',    desc: 'Планирование и автоматическая публикация в каналы и группы Telegram.' },
  { icon: '📘', title: 'Автопостинг ВКонтакте',   desc: 'Отложенные публикации, репосты, массовое ведение страниц и групп.' },
  { icon: '📋', title: 'Контент-план',             desc: 'Разрабатываем стратегию контента: темы, форматы, частота.' },
  { icon: '✍️', title: 'Написание текстов',        desc: 'Продающие и вовлекающие посты, адаптированные под аудиторию.' },
  { icon: '🖼', title: 'Дизайн постов',            desc: 'Шаблоны в едином стиле бренда для Telegram и ВКонтакте.' },
  { icon: '📊', title: 'Аналитика охватов',        desc: 'Еженедельные отчёты по охвату, вовлечённости, росту аудитории.' },
]

export default function AutopostingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Автопостинг</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 max-w-3xl mx-auto">
            Вы ведёте бизнес — мы ведём контент
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Автопостинг в Telegram и ВКонтакте. Контент-план, тексты, дизайн, аналитика.
            Охват растёт — вы не тратите время.
          </p>
          <a href="#lead-form"
             className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold
                        px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-xl shadow-brand-primary/30">
            Обсудить ведение →
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-display text-gray-900 text-center mb-12">
            Что входит в услугу
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