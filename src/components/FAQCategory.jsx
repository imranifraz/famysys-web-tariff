import FAQAccordion from './FAQAccordion.jsx'
import './FAQCategory.css'

export default function FAQCategory({ category }) {
  return (
    <div className="faq-category" id={category.id}>
      <h2 className="display-md faq-category__title">{category.name}</h2>
      <div className="faq-category__list">
        {category.questions.map((item) => (
          <FAQAccordion key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  )
}
