import { useState } from 'react'
import './FAQAccordion.css'

export default function FAQAccordion({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <button type="button" className="faq-item__q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      {open && <p className="faq-item__a body-md">{a}</p>}
    </div>
  )
}
