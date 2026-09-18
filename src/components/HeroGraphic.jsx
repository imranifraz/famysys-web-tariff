import { useEffect, useState } from 'react'
import './HeroGraphic.css'

export default function HeroGraphic() {
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsIn(true)
      return
    }
    const t = setTimeout(() => setIsIn(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`hero-graphic${isIn ? ' is-in' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 320 320" className="hero-graphic__svg">
        <ellipse cx="160" cy="160" rx="150" ry="150" className="hero-graphic__ring" />

        <circle cx="160" cy="160" r="108" className="hero-graphic__globe" />
        <ellipse cx="160" cy="160" rx="108" ry="42" className="hero-graphic__meridian" />
        <ellipse cx="160" cy="160" rx="48" ry="108" className="hero-graphic__meridian" />
        <line x1="52" y1="160" x2="268" y2="160" className="hero-graphic__meridian" />

        <g className="hero-graphic__badge">
          <circle cx="246" cy="88" r="34" className="hero-graphic__badgebg" />
          <path d="M232 88l10 10 20-22" className="hero-graphic__check" />
        </g>
      </svg>
    </div>
  )
}
