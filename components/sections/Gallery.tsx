'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useInView } from '@/lib/useInView'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

const ITEMS: GalleryItem[] = [
  { id: 1, src: '/img/gallery/project-1.jpg', alt: 'Лендинг для строительной компании', category: 'Сайты',          title: 'Лендинг для стройкомпании' },
  { id: 2, src: '/img/gallery/project-2.jpg', alt: 'Карточки товаров на Wildberries',    category: 'Маркетплейсы',   title: 'Карточки на Wildberries' },
  { id: 3, src: '/img/gallery/project-3.jpg', alt: 'Telegram-бот для записи',            category: 'Telegram-боты', title: 'Бот для записи клиентов' },
  { id: 4, src: '/img/gallery/project-4.jpg', alt: 'Рекламный кабинет Яндекс.Директ',   category: 'Реклама',        title: 'Кабинет Яндекс.Директ' },
  { id: 5, src: '/img/gallery/project-5.jpg', alt: 'Интернет-магазин одежды',            category: 'Сайты',          title: 'Интернет-магазин одежды' },
  { id: 6, src: '/img/gallery/project-6.jpg', alt: 'Реклама ВКонтакте — креативы',      category: 'Реклама',        title: 'Креативы для ВКонтакте' },
]

const CATS = ['Все', 'Сайты', 'Маркетплейсы', 'Реклама', 'Telegram-боты']

export function Gallery() {
  const [filter,   setFilter]   = useState('Все')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const filtered = filter === 'Все' ? ITEMS : ITEMS.filter((i) => i.category === filter)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Галерея проектов
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            Наши работы
          </h2>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${filter === cat
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className={`group relative aspect-video rounded-2xl overflow-hidden cursor-pointer
                         transition-all duration-500
                         ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`Открыть: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              {/* Оверлей */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/70
                              transition-all duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wide block mb-1">
                    {item.category}
                  </span>
                  <p className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </p>
                </div>
              </div>
              {/* Иконка увеличения */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/20
                              rounded-full flex items-center justify-center
                              transition-all duration-300 backdrop-blur-sm">
                <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-6">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wide">{lightbox.category}</span>
              <p className="text-white font-bold text-lg">{lightbox.title}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80
                         rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Закрыть"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}