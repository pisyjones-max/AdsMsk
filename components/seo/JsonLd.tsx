export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ads.msk.ru/#organization',
        name: 'AdsMsk',
        url: 'https://ads.msk.ru',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ads.msk.ru/img/logo.png',
          width: 200,
          height: 60,
        },
        description:
          'Digital-агентство полного цикла. Яндекс.Директ, ВКонтакте реклама, Telegram-боты, маркетплейсы Wildberries и Ozon, разработка сайтов, автоматизация продаж.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Москва',
          addressCountry: 'RU',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+7-915-468-39-25',
          contactType: 'Customer Service',
          availableLanguage: 'Russian',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
        sameAs: ['https://vk.com/adsmsk', 'https://t.me/adsmsk'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '120',
          bestRating: '5',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ads.msk.ru/#website',
        url: 'https://ads.msk.ru',
        name: 'AdsMsk',
        publisher: { '@id': 'https://ads.msk.ru/#organization' },
      },
      // Услуги
      ...[
        {
          name: 'Настройка Яндекс.Директ',
          description: 'Настройка и ведение рекламных кампаний в Яндекс.Директ (поиск + РСЯ). Снижаем стоимость заявки.',
          url: 'https://ads.msk.ru/services/context-ads',
        },
        {
          name: 'Продвижение на Wildberries и Ozon',
          description: 'Полное сопровождение на маркетплейсах: выход, SEO карточек, аналитика, юнит-экономика.',
          url: 'https://ads.msk.ru/services/marketplaces',
        },
        {
          name: 'Разработка Telegram-ботов',
          description: 'Боты для продаж, консультаций, интеграция с CRM. Автоматизация обработки заявок 24/7.',
          url: 'https://ads.msk.ru/services/telegram-bots',
        },
        {
          name: 'Таргетированная реклама ВКонтакте',
          description: 'Настройка аудиторий, создание креативов, воронки продаж ВКонтакте.',
          url: 'https://ads.msk.ru/services/target-ads',
        },
        {
          name: 'Автопостинг и ведение соцсетей',
          description: 'Автоматизация публикаций в Telegram и ВКонтакте. Контент-план и массовое ведение.',
          url: 'https://ads.msk.ru/services/autoposting',
        },
        {
          name: 'Разработка сайтов',
          description: 'Лендинги и интернет-магазины с SEO-структурой и высокой скоростью загрузки.',
          url: 'https://ads.msk.ru/services/websites',
        },
      ].map((s) => ({
        '@type': 'Service',
        provider: { '@id': 'https://ads.msk.ru/#organization' },
        ...s,
        areaServed: { '@type': 'Country', name: 'RU' },
      })),
      // Отзывы
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Алексей Петров' },
        datePublished: '2026-02-10',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Запустили Яндекс.Директ за 3 дня. Стоимость заявки снизилась с 2800 до 940 рублей. Реально работают.',
        itemReviewed: { '@id': 'https://ads.msk.ru/#organization' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Марина Козлова' },
        datePublished: '2026-01-22',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Telegram-бот заменил двух менеджеров. Конверсия в заявку выросла на 67%. Окупился за первый месяц.',
        itemReviewed: { '@id': 'https://ads.msk.ru/#organization' },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}