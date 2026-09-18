import { QuoteProvider } from '../context/QuoteContext.jsx'
import Hero from '../components/Hero.jsx'
import PricingSection from '../components/PricingSection.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import QuoteBuilder from '../components/QuoteBuilder.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

// AddOnSelector is temporarily removed from the flow — see AddOnSelector.jsx,
// still intact and ready to re-add. FeatureComparison now lives inside
// PricingSection, directly below the plan cards.
export default function PricingPage() {
  return (
    <QuoteProvider>
      <Hero />
      <PricingSection />
      <HowItWorks />
      <QuoteBuilder />
      <FinalCTA />
    </QuoteProvider>
  )
}
