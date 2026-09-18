import CTAButton from './CTAButton.jsx'
import HeroGraphic from './HeroGraphic.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="pricing-hero section">
      <div className="shell pricing-hero__row">
        <div className="pricing-hero__inner">
          <p className="eyebrow">Website Solutions</p>
          <h1 className="display-xl pricing-hero__title">Ready to Take Your Business Online?</h1>
          <p className="body-lg pricing-hero__lead">
            Choose the website package that fits your business and add the services you need.
          </p>
          <p className="body-md pricing-hero__sub">
            Tell us what you need. We&rsquo;ll help you pick the right plan and take care of the technical work.
          </p>
          <div className="pricing-hero__actions">
            <CTAButton href="#plans" variant="primary">
              Explore Plans
            </CTAButton>
            <CTAButton href="#quote-builder" variant="secondary">
              Get a Quote
            </CTAButton>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  )
}
