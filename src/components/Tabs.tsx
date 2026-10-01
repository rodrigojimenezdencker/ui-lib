import './tokens.css'
import './ui.css'
import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

export interface Tab { id: string; label: string; content: ReactNode }

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const n = (active + d + tabs.length) % tabs.length
    setActive(n); refs.current[n]?.focus()
  }
  return (
    <div className="ui-tabs">
      <div role="tablist" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button key={t.id} ref={(el) => { refs.current[i] = el }} role="tab" id={`tab-${t.id}`}
            aria-selected={i === active} aria-controls={`panel-${t.id}`} tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}>{t.label}</button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={i !== active}>{t.content}</div>
      ))}
    </div>
  )
}
