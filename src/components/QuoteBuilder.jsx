import QuoteSummary from './QuoteSummary.jsx'
import QuoteForm from './QuoteForm.jsx'
import './QuoteBuilder.css'

export default function QuoteBuilder() {
  return (
    <section className="section quote-builder">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Free Design Preview</p>
          <h2 className="display-lg">Want to See Your Design Preview?</h2>
          <p className="body-lg">
            Confirm your plan, tell us a bit about your business, and we&rsquo;ll put together a free preview of
            your website — no cost, no obligation.
          </p>
        </div>

        <div className="quote-builder__grid">
          <QuoteSummary />
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
