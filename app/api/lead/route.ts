import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, comment, services } = body

    // Отправка в Telegram-бот (замените CHAT_ID и TOKEN)
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
    const CHAT_ID        = process.env.TELEGRAM_CHAT_ID!

    const message = [
      '🔥 *Новая заявка с сайта AdsMsk*',
      `👤 Имя: ${name}`,
      `📱 Контакт: ${phone}`,
      `🛠 Услуги: ${services?.join(', ') || 'не указано'}`,
      `💬 Комментарий: ${comment || 'не указан'}`,
    ].join('\n')

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}