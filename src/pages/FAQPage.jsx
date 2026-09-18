import { FAQ_CATEGORIES } from '../data/faq.js'
import FAQCategory from '../components/FAQCategory.jsx'
import FAQCategoryNav from '../components/FAQCategoryNav.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import CTAButton from '../components/CTAButton.jsx'
import './FAQPage.css'

export default function FAQPage() {
  return (
    <>
      <section className="section faq-hero">
        <div className="shell">
          <div className="faq-hero__inner">
            <p className="eyebrow">Support</p>
            <h1 className="display-xl">Frequently Asked Questions</h1>
            <p className="body-lg">
              Have questions before getting started? Find simple answers about our website packages, process,
              payments, support and more.
            </p>
            <FAQCategoryNav />
          </div>
        </div>
      </section>

      <section className="section faq-list">
        <div className="shell">
          <div className="faq-list__inner">
            {FAQ_CATEGORIES.map((cat) => (
              <FAQCategory key={cat.id} category={cat} />
            ))}

            <div className="faq-list__more">
              <h3 className="display-md">Still have a question?</h3>
              <p className="body-md">Ask it directly and our team will get back to you.</p>
              <CTAButton href="https://famysys.com/contact/" variant="secondary">
                Get in touch
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
