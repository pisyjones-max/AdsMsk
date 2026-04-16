import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Некорректный email' }, { status: 400 })
    }

    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
    const CHAT_ID        = process.env.TELEGRAM_CHAT_ID!

    // Уведомление в Telegram
    const message = `📧 *Новая подписка*\nEmail: ${email}`

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    // Здесь можно добавить интеграцию с email-сервисом
    // Например: Unisender, SendPulse, GetResponse (популярны в РФ)
    // await addToUnisender(email)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}