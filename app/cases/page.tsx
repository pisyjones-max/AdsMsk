import type { Metadata } from 'next'
import Link from 'next/link'
import { Cases }  from '@/components/sections/Cases'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Кейсы — реальные результаты клиентов AdsMsk',
  description:
    'Кейсы AdsMsk: Яндекс.Директ, Wildberries, Telegram-боты, реклама ВКонтакте. Реальные цифры: CPL, ROI, рост продаж. Смотрите результаты наших клиентов.',
  alternates: { canonical: 'https://ads.msk.ru/cases' },
}

export default function CasesPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white">Кейсы</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-4">
            Реальные результаты наших клиентов
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Не обещания — конкретные цифры. Кейсы по Яндекс.Директ,
            маркетплейсам, Telegram-ботам и рекламе ВКонтакте.
          </p>
        </div>
      </section>

      <Cases />
      <LeadForm />
      <Footer />
    </>
  )
}