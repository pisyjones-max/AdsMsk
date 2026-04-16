export const SITE_URL   = 'https://ads.msk.ru'
export const SITE_NAME  = 'AdsMsk'
export const PHONE      = '+7-915-468-39-25'
export const PHONE_HREF = 'tel:+79154683925'
export const TG_BOT     = 'https://t.me/UR16_bot?start'
export const TG_CHANNEL = 'https://t.me/adsmsk'
export const WA_HREF    = 'https://wa.me/79154683925'
export const VK_HREF    = 'https://vk.com/adsmsk'

export const METRIKA_ID = 103922217

// Используется в нескольких местах
export const SERVICES_LIST = [
  { slug: 'context-ads',    label: 'Яндекс.Директ'        },
  { slug: 'target-ads',     label: 'Реклама ВКонтакте'    },
  { slug: 'marketplaces',   label: 'Wildberries / Ozon'   },
  { slug: 'telegram-bots',  label: 'Telegram-боты'        },
  { slug: 'autoposting',    label: 'Автопостинг'          },
  { slug: 'websites',       label: 'Сайты и лендинги'     },
  { slug: 'crm',            label: 'CRM и автоматизация'  },
] as const

export type ServiceSlug = typeof SERVICES_LIST[number]['slug']