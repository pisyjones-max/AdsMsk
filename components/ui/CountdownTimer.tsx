'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: Date
  onExpire?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

function pad(n: number) { return String(n).padStart(2, '0') }

const sizes = {
  sm: { box: 'w-10 h-10 text-lg',   label: 'text-xs' },
  md: { box: 'w-14 h-14 text-2xl',  label: 'text-xs' },
  lg: { box: 'w-20 h-20 text-4xl',  label: 'text-sm' },
}

export function CountdownTimer({ targetDate, onExpire, className = '', size = 'md' }: CountdownTimerProps) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false })

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now()
      if (diff <= 0) {
        setT({ d: 0, h: 0, m: 0, s: 0, expired: true })
        onExpire?.()
        return
      }
      setT({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000)  / 60_000),
        s: Math.floor((diff % 60_000)     / 1_000),
        expired: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate, onExpire])

  const { box, label } = sizes[size]
  const segments = [
    { v: t.d, l: 'дн'  },
    { v: t.h, l: 'ч'   },
    { v: t.m, l: 'мин' },
    { v: t.s, l: 'сек' },
  ]

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-live="polite" aria-label="Таймер обратного отсчёта">
      {segments.map((seg, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className={`${box} bg-white/10 border border-white/20 rounded-xl
                         flex items-center justify-center text-white font-extrabold
                         tabular-nums backdrop-blur-sm`}
          >
            {pad(seg.v)}
          </div>
          <span className={`${label} text-gray-400`}>{seg.l}</span>
        </div>
      ))}
    </div>
  )
}