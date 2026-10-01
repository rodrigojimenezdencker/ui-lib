import './tokens.css'
import './ui.css'
import { useId, type InputHTMLAttributes } from 'react'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  error?: string
  hint?: string
}

export function TextField({ label, error, hint, ...rest }: TextFieldProps) {
  const id = useId()
  const desc = error ? `${id}-e` : hint ? `${id}-h` : undefined
  return (
    <div className="ui-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={desc} {...rest} />
      {error ? <small id={`${id}-e`} role="alert" className="ui-err">{error}</small>
        : hint ? <small id={`${id}-h`}>{hint}</small> : null}
    </div>
  )
}
