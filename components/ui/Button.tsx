import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'accent' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-cta text-white shadow-lg shadow-brand-primary/30 hover:opacity-90',
  outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  accent:  'bg-brand-accent text-white shadow-lg shadow-brand-accent/30 hover:opacity-90',
  ghost:   'text-brand-primary hover:bg-brand-primary/10',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children, href, variant = 'primary', size = 'md',
  className = '', external, onClick, type = 'button', disabled,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} disabled:opacity-50 disabled:cursor-not-allowed`}>
      {children}
    </button>
  )
}