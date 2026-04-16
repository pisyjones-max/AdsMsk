import Link from 'next/link'
import Image from 'next/image'

const LINKS = {
  Услуги: [
    { label: 'Яндекс.Директ',   href: '/services/context-ads' },
    { label: 'Реклама ВК',       href: '/services/target-ads' },
    { label: 'Маркетплейсы',     href: '/services/marketplaces' },
    { label: 'Telegram-боты',    href: '/services/telegram-bots' },
    { label: 'Автопостинг',      href: '/services/autoposting' },
    { label: 'Сайты',            href: '/services/websites' },
    { label: 'CRM',              href: '/services/crm' },
  ],
  Компания: [
    { label: 'Кейсы',            href: '/cases' },
    { label: 'Команда',          href: '/team' },
    { label: 'Блог',             href: '/blog' },
  ],
  Правовое: [
    { label: 'Перс. данные',     href: '/personal' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Бренд */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/img/logo.png" alt="AdsMsk" width={44} height={44} />
              <span className="text-white font-extrabold text-xl font-display">
                Ads<span className="text-brand-accent">Msk</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Приводим клиентов и автоматизируем продажи.
              Яндекс.Директ, ВКонтакте, Telegram-боты, маркетплейсы.
            </p>
            {/* Социальные */}
            <div className="flex gap-3">
              <a href="https://t.me/adsmsk" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-xl flex items-center justify-center transition-colors"
                 aria-label="Telegram-канал">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
                </svg>
              </a>
              <a href="https://vk.com/adsmsk" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
                 aria-label="ВКонтакте">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.07 13.33h-1.55c-.59 0-.77-.47-1.83-1.55-.92-.92-1.32-.92-1.32 0v1.55c0 .47-.15.75-1.38.75-2.03 0-4.28-1.23-5.86-3.52C4.86 10.02 4.5 8.27 4.5 8c0-.32.26-.47.47-.47h1.55c.35 0 .48.17.61.54.67 1.97 1.8 3.7 2.27 3.7.17 0 .25-.08.25-.52V9.2c-.06-.98-.57-1.06-.57-1.41 0-.2.17-.4.44-.4h2.44c.3 0 .4.15.4.48v3.08c0 .3.13.4.22.4.17 0 .32-.1.64-.42 1-1.12 1.71-2.84 1.71-2.84.1-.2.27-.38.64-.38h1.55c.47 0 .57.24.47.54-.21.93-2.28 3.89-2.28 3.89-.18.3-.24.43 0 .73.18.22 1.25 1.22 1.88 1.95.53.6.92 1.12.98 1.43.07.32-.1.5-.43.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Ссылки */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">{title}</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AdsMsk. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+79154683925" className="text-gray-400 hover:text-white text-sm transition-colors">
              +7 (915) 468-39-25
            </a>
            <a href="https://t.me/UR16_bot?start"
               className="bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}