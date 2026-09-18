import { ADD_ONS } from '../data/addons.js'
import { useQuote } from '../context/QuoteContext.jsx'
import CTAButton from './CTAButton.jsx'
import './AddOnSelector.css'

export default function AddOnSelector() {
  const { selectedPlan, selectedAddonIds, toggleAddon, clearAddons } = useQuote()
  const planChosen = Boolean(selectedPlan)

  return (
    <section id="addons" className="section addon-section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Optional Add-ons</p>
          <h2 className="display-lg">Need Something More?</h2>
          {planChosen ? (
            <p className="body-lg">
              Great choice on the <strong>{selectedPlan.name}</strong> plan. Would you like any additional
              services? Every add-on is priced for your business — you&rsquo;ll get a quote for whatever you pick,
              nothing is charged automatically. Skip this step if you don&rsquo;t need anything extra.
            </p>
          ) : (
            <p className="body-lg">
              Choose a website plan above first — we&rsquo;ll show you optional add-ons here once you have.
            </p>
          )}
        </div>

        {!planChosen ? (
          <div className="addon-section__locked">
            <p className="body-md">Select a plan to unlock optional add-ons.</p>
            <CTAButton href="#plans" variant="secondary">
              Choose Your Plan
            </CTAButton>
          </div>
        ) : (
          <>
            <div className="addon-section__grid">
              {ADD_ONS.map((addon) => {
                const checked = selectedAddonIds.includes(addon.id)
                return (
                  <label key={addon.id} className={`addon-card${checked ? ' is-checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAddon(addon.id)}
                      aria-describedby={`${addon.id}-desc`}
                    />
                    <span className="addon-card__box" aria-hidden="true">
                      {checked && '✓'}
                    </span>
                    <span className="addon-card__body">
                      <span className="addon-card__top">
                        <span className="addon-card__name">{addon.name}</span>
                        <span className="addon-card__quote-tag">Get Quote</span>
                      </span>
                      <span className="addon-card__desc" id={`${addon.id}-desc`}>
                        {addon.description}
                      </span>
                    </span>
                  </label>
                )
              })}
            </div>

            <div className="addon-section__footer">
              {selectedAddonIds.length > 0 && (
                <button type="button" className="addon-section__clear" onClick={clearAddons}>
                  Clear selected services
                </button>
              )}
              <CTAButton href="#quote-builder" variant="secondary" onClick={clearAddons}>
                Skip Add-ons
              </CTAButton>
              <CTAButton href="#quote-builder" variant="primary">
                Continue to Quote
              </CTAButton>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
