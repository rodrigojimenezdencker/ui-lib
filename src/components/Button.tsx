import './tokens.css'
import './ui.css'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md'
  loading?: boolean
}

export function Button({ variant = 'primary', size = 'md', loading, disabled, children, ...rest }: ButtonProps) {
  return (
    <button className={`ui-btn ui-btn--${variant} ui-btn--${size}`} disabled={disabled || loading}
      aria-busy={loading || undefined} {...rest}>
      {loading && <span className="ui-spinner" aria-hidden />}
      {children}
    </button>
  )
}
