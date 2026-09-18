import { useEffect, useRef, useState } from 'react'
import { PAYMENT_NOTE, PROCESS_STEPS } from '../data/process.js'
import { BYO_DOMAIN_HOSTING_NOTE } from '../data/tariff.js'
import './HowItWorks.css'

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsIn(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section how-it-works" ref={sectionRef}>
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2 className="display-lg">How It Works</h2>
          <p className="body-lg">From your first idea to a live website — here&rsquo;s the journey, step by step.</p>
        </div>

        <ol className={`how-it-works__steps${isIn ? ' is-in' : ''}`}>
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.step}
              className={`how-it-works__step${step.highlight ? ' is-highlight' : ''}`}
              style={{ '--i': i }}
            >
              {step.highlight && <span className="how-it-works__badge">Free</span>}
              <span className="how-it-works__num">{step.step}</span>
              <h3 className="display-md">{step.title}</h3>
              <p className="body-md">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="how-it-works__notes">
          <p>
            <strong>Payment.</strong> {PAYMENT_NOTE}
          </p>
          <p>
            <strong>Good to know.</strong> {BYO_DOMAIN_HOSTING_NOTE}
          </p>
        </div>
      </div>
    </section>
  )
}
