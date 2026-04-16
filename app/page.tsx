import { Hero }       from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Services }   from '@/components/sections/Services'
import { Process }    from '@/components/sections/Process'
import { Cases }      from '@/components/sections/Cases'
import { Trust }      from '@/components/sections/Trust'
import { Promo }      from '@/components/sections/Promo'
import { LeadForm }   from '@/components/sections/LeadForm'
import { Subscribe }  from '@/components/sections/Subscribe'
import { Footer }     from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AdsMsk — Приводим клиентов и автоматизируем продажи | Москва',
  description:
    'Digital-агентство AdsMsk: Яндекс.Директ, реклама ВКонтакте, Telegram-боты, Wildberries/Ozon, сайты. 120+ проектов. Бесплатный разбор вашего бизнеса.',
  alternates: { canonical: 'https://ads.msk.ru' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <Cases />
      <Trust />
      <Promo />
      <LeadForm />
      <Subscribe />
      <Footer />
    </>
  )
}