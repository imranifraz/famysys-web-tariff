import { useQuote } from '../context/QuoteContext.jsx'
import './QuoteSummary.css'

// Add-ons are temporarily out of the flow — see PricingPage.jsx. This only
// summarizes the selected plan for now; the add-on rows can come back
// alongside AddOnSelector.
export default function QuoteSummary() {
  const { currency, selectedPlan } = useQuote()

  const planPrice = selectedPlan?.price[currency]
  const planHasFixedPrice = Boolean(selectedPlan) && planPrice !== 'Custom Quote'
  const total = selectedPlan ? (planHasFixedPrice ? planPrice : 'Custom Quote') : '—'

  return (
    <div className="quote-summary">
      <h3 className="display-md">Here&rsquo;s What You&rsquo;ve Chosen</h3>

      <div className="quote-summary__row">
        <p className="quote-summary__label">Website Plan</p>
        {selectedPlan ? (
          <p className="quote-summary__value">
            {selectedPlan.name} — {selectedPlan.price[currency]}
          </p>
        ) : (
          <p className="quote-summary__empty">No plan selected yet — choose one above.</p>
        )}
      </div>

      <div className="hairline" />

      <div className="quote-summary__row quote-summary__total quote-summary__grand">
        <p className="quote-summary__label">Total</p>
        <p className="quote-summary__value">{total}</p>
      </div>
      <p className="quote-summary__note">
        This gets you a free design preview and a real quote — not an online purchase. Our team will follow up
        with exact pricing.
      </p>
    </div>
  )
}
