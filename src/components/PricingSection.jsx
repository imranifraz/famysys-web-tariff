import { DOMAIN_HOSTING_NOTE, PACKAGES } from '../data/tariff.js'
import PricingCard from './PricingCard.jsx'
import CurrencyToggle from './CurrencyToggle.jsx'
import FeatureComparison from './FeatureComparison.jsx'
import './PricingSection.css'

export default function PricingSection() {
  return (
    <section id="plans" className="section pricing-section">
      <div className="shell">
        <div className="pricing-section__head">
          <div className="section-head">
            <p className="eyebrow">Website Tariff</p>
            <h2 className="display-lg">Choose Your Website Plan</h2>
            <p className="body-lg">Choose the package that matches what your business needs today.</p>
          </div>
          <CurrencyToggle />
        </div>

        <div className="pricing-section__grid">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="pricing-section__compare">
          <FeatureComparison />
        </div>

        <p className="pricing-section__note">* {DOMAIN_HOSTING_NOTE}</p>
      </div>
    </section>
  )
}
