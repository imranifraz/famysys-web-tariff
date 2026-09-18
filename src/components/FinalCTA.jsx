import CTAButton from './CTAButton.jsx'
import './FinalCTA.css'

export default function FinalCTA({
  heading = 'Ready to Build Your Online Presence?',
  sub = "Tell us what you're looking to build. We'll help you choose the right website solution for your business.",
  primaryLabel = 'Get Your Quote',
  primaryHref = '#quote-builder',
  secondaryLabel = 'Talk to Us',
  secondaryHref = 'https://famysys.com/contact/',
}) {
  return (
    <section className="section final-cta on-dark">
      <div className="shell">
        <div className="final-cta__inner">
          <h2 className="display-lg">{heading}</h2>
          <p className="body-lg">{sub}</p>
          <div className="final-cta__actions">
            <CTAButton href={primaryHref} variant="primary">
              {primaryLabel}
            </CTAButton>
            <CTAButton href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
