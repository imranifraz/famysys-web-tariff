import { FAQ_CATEGORIES } from '../data/faq.js'
import './FAQCategoryNav.css'

export default function FAQCategoryNav() {
  return (
    <nav className="faq-category-nav" aria-label="FAQ categories">
      {FAQ_CATEGORIES.map((cat) => (
        <a key={cat.id} href={`#${cat.id}`} className="faq-category-nav__chip">
          {cat.name}
        </a>
      ))}
    </nav>
  )
}
