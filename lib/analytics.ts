// Типизированная обёртка над Яндекс.Метрикой
declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const YM_ID = 103922217

/**
 * Отправить цель в Яндекс.Метрику
 */
export function reachGoal(target: GoalName, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.ym?.(YM_ID, 'reachGoal', target, params)
}

/**
 * Отправить параметр визита
 */
export function sendParams(params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.ym?.(YM_ID, 'params', params)
}

// Все цели Метрики — централизованно
export type GoalName =
  | 'lead_form_submit'       // Отправка основной формы
  | 'exit_popup_email'       // Email в exit popup
  | 'subscribe_email'        // Подписка на рассылку
  | 'click_telegram'         // Клик на Telegram
  | 'click_whatsapp'         // Клик на WhatsApp
  | 'click_phone'            // Клик на телефон
  | 'service_card_click'     // Клик на карточку услуги
  | 'case_card_click'        // Клик на кейс
  | 'promo_cta_click'        // Клик на акцию
  | 'hero_cta_primary'       // Главный CTA Hero
  | 'hero_cta_telegram'      // Telegram CTA Hero