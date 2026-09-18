import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

const EXPLORE_LINKS = [
  { label: 'Services', href: 'https://famysys.com/services/' },
  { label: 'About', href: 'https://famysys.com/about/' },
  { label: 'Contact', href: 'https://famysys.com/contact/' },
  { label: 'FAQ', to: '/faq' },
]

const CONNECT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/famysys/' },
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'YouTube', href: '#' },
]

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: 'https://famysys.com/legal/terms-and-conditions/' },
  { label: 'Privacy Policy', href: 'https://famysys.com/legal/privacy-policy/' },
  { label: 'Cookie Policy', href: 'https://famysys.com/legal/cookie-policy/' },
  { label: 'Accessibility', href: 'https://famysys.com/legal/accessibility/' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div className="site-footer__brand">
          <Logo className="site-footer__mark" />
          <address className="site-footer__address">
            10193 W Grand Parkway S., Ste. 103-229
            <br />
            Houston, TX 77407
            <br />
            United States
          </address>
          <a href="mailto:hello@famysys.com" className="site-footer__email">
            hello@famysys.com
          </a>
          <a
            href="https://famysys.com/corporate/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__deck"
          >
            Corporate Capability Deck
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="site-footer__columns">
          <div className="site-footer__col">
            <p className="site-footer__col-title">Explore</p>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to}>{link.label}</Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__col-title">Connect</p>
            <ul>
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__col-title">Legal</p>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hairline" />

      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} FAMYSYS. ALL RIGHTS RESERVED.</p>
        <p>AI-NATIVE DIGITAL ENGINEERING PARTNER</p>
      </div>
    </footer>
  )
}
