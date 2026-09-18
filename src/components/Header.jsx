import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import CTAButton from './CTAButton.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Website Pricing', to: '/' },
  { label: 'FAQ', to: '/faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell site-header__row">
        <Link to="/" className="site-header__logo" aria-label="Famysys — home" onClick={() => setMenuOpen(false)}>
          <Logo className="site-header__mark" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <NavLink key={link.label} to={link.to} end={link.to === '/'} className="site-header__link">
                {link.label}
              </NavLink>
            ) : (
              <a key={link.label} href={link.href} className="site-header__link" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="site-header__actions">
          <CTAButton href="https://famysys.com/contact/" variant="primary" className="site-header__cta">
            Get in touch
          </CTAButton>
          <button
            type="button"
            className="site-header__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="site-header__panel">
          <nav className="site-header__panel-nav" aria-label="Mobile">
            {NAV_LINKS.map((link, i) =>
              link.to ? (
                <NavLink key={link.label} to={link.to} end={link.to === '/'} className="site-header__panel-link" onClick={() => setMenuOpen(false)}>
                  <span className="site-header__panel-index">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </NavLink>
              ) : (
                <a key={link.label} href={link.href} className="site-header__panel-link" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  <span className="site-header__panel-index">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              )
            )}
          </nav>
          <CTAButton href="https://famysys.com/contact/" variant="primary" block>
            Get in touch
          </CTAButton>
        </div>
      )}
    </header>
  )
}
