import type { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  href?: string
  hover?: boolean
  glass?: boolean
  dark?: boolean
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

export function Card({ children, href, hover = true, glass, dark, className = '', padding = 'md' }: CardProps) {
  const base = [
    'rounded-2xl border transition-all duration-300',
    paddings[padding],
    dark  ? 'bg-brand-dark-2 border-white/10 text-white'   : 'bg-white border-gray-200 text-gray-900',
    glass ? 'backdrop-blur-sm bg-white/10 border-white/20'  : '',
    hover ? 'hover:shadow-xl hover:border-brand-primary/30 hover:-translate-y-1' : '',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return <Link href={href} className={base}>{children}</Link>
  }

  return <div className={base}>{children}</div>
}