import { CURRENCIES } from '../data/tariff.js'
import { useQuote } from '../context/QuoteContext.jsx'
import './CurrencyToggle.css'

export default function CurrencyToggle() {
  const { currency, setCurrency } = useQuote()

  return (
    <div className="currency-toggle" role="group" aria-label="Choose currency">
      {Object.values(CURRENCIES).map((c) => (
        <button
          key={c.code}
          type="button"
          className={`currency-toggle__btn${currency === c.code ? ' is-active' : ''}`}
          onClick={() => setCurrency(c.code)}
          aria-pressed={currency === c.code}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
