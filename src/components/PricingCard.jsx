import CTAButton from './CTAButton.jsx'
import { useQuote } from '../context/QuoteContext.jsx'
import './PricingCard.css'

export default function PricingCard({ pkg }) {
  const { currency, selectedPlanId, setSelectedPlanId } = useQuote()
  const isSelected = selectedPlanId === pkg.id

  return (
    <div className={`pricing-card${pkg.highlight ? ' is-highlight' : ''}${isSelected ? ' is-selected' : ''}`}>
      {pkg.highlight && <p className="pricing-card__badge">Most Popular</p>}

      <p className="pricing-card__best-for">{pkg.bestFor}</p>
      <h3 className="pricing-card__name">{pkg.name}</h3>
      <p className="pricing-card__tagline">{pkg.tagline}</p>

      <div className="pricing-card__price-row">
        <span className="pricing-card__price">{pkg.price[currency]}</span>
      </div>
      <p className="pricing-card__price-note">{pkg.priceNote}</p>

      <ul className="pricing-card__features">
        {pkg.featured.map((f) => (
          <li key={f}>
            <span className="pricing-card__tick" aria-hidden="true">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <CTAButton
        variant={pkg.highlight ? 'primary' : 'secondary'}
        block
        href="#quote-builder"
        onClick={() => setSelectedPlanId(pkg.id)}
      >
        {isSelected ? 'Selected — Continue Below' : 'Select Plan'}
      </CTAButton>
    </div>
  )
}
