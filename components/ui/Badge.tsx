import type { ReactNode } from 'react'

type BadgeVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  dot?: boolean
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  primary: 'bg-brand-primary/15 text-brand-primary border-brand-primary/20',
  accent:  'bg-cyan-500/15 text-cyan-600 border-cyan-500/20',
  success: 'bg-green-500/15 text-green-600 border-green-500/20',
  warning: 'bg-yellow-500/15 text-yellow-600 border-yellow-500/20',
  danger:  'bg-red-500/15 text-red-600 border-red-500/20',
  neutral: 'bg-gray-100 text-gray-600 border-gray-200',
}

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-brand-primary',
  accent:  'bg-cyan-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger:  'bg-red-500',
  neutral: 'bg-gray-400',
}

export function Badge({ children, variant = 'primary', size = 'md', dot, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full font-semibold
        ${variants[variant]}
        ${size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
        ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  )
}