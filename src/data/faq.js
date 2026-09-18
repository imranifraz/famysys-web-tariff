// FAQ content — every answer is grounded in tariff.js / process.js. Nothing
// here promises a term the tariff doesn't state.

import { BYO_DOMAIN_HOSTING_NOTE } from './tariff.js'

export const FAQ_CATEGORIES = [
  {
    id: 'packages',
    name: 'Website Packages',
    questions: [
      {
        q: 'What is included in the website packages?',
        a: 'Each package includes a website, a domain name, hosting, an SSL certificate (for a secure site), email addresses, and a set period of support. Standard and E-Commerce also include an admin panel you can use to manage your own content. See the plan comparison above for the exact details of each package.',
      },
      {
        q: 'Which package should I choose?',
        a: 'Basic suits a simple online presence with a handful of pages. Standard suits a growing business that wants to manage its own content, blog and services. E-Commerce suits a business that wants to sell products online. If you\'re unsure, talk to us and we\'ll help you choose.',
      },
      {
        q: 'What is the difference between the packages?',
        a: 'The main differences are the number of pages, whether you can edit content yourself, and whether you can sell products online. Basic is a fixed, professionally built site. Standard adds self-editing, a blog and SEO tools. E-Commerce adds a full online store with orders, payments and stock management.',
      },
      {
        q: 'Can I add additional services?',
        a: 'Yes. After choosing your plan, you can optionally add services like SEO, social media support, content writing or additional languages. You can also skip this step entirely if you don\'t need anything extra.',
      },
      {
        q: 'Can I upgrade my website later?',
        a: "Yes, you can move up to a higher package later — for example from Basic to Standard, or Standard to E-Commerce. Get in touch with us when you're ready and we'll guide you through it.",
      },
    ],
  },
  {
    id: 'getting-started',
    name: 'Getting Started',
    questions: [
      {
        q: 'What information do you need from me?',
        a: 'Just your business details — what you do, your services or products, your images, and what you\'d like your website to achieve. You don\'t need to prepare anything technical.',
      },
      {
        q: 'Do I need technical knowledge?',
        a: "No. You just tell us what your business needs in everyday language, and we handle all the technical work.",
      },
      {
        q: 'Can I share examples of websites I like?',
        a: "Yes — if you've seen a website style or layout you like, share it with us and we'll take it into account when preparing your design.",
      },
      {
        q: "What if I don't have all my content ready?",
        a: "That's fine. Share what you have, and we'll guide you on what's still needed as we prepare your design.",
      },
    ],
  },
  {
    id: 'design-approval',
    name: 'Design & Approval',
    questions: [
      {
        q: 'Will I see the website design before it is built?',
        a: "Yes. We prepare a website design preview based on your requirements before any development work begins.",
      },
      {
        q: 'Can I request changes to the design?',
        a: 'Yes. You can review the design preview and tell us what you\'d like changed. We move forward with building the website only after you approve the design.',
      },
      {
        q: 'When does website development begin?',
        a: 'Development begins once you\'ve approved the design and paid the first 60% of the project amount.',
      },
    ],
  },
  {
    id: 'payment',
    name: 'Payment',
    questions: [
      {
        q: 'How does the payment work?',
        a: 'Payment is split into two parts: 60% after you approve the design, and the remaining 40% once your website is complete.',
      },
      {
        q: 'When do I pay the first 60%?',
        a: 'The first 60% is due after you approve the website design, and before we begin building your website.',
      },
      {
        q: 'When is the remaining 40% due?',
        a: 'The remaining 40% is due once your website is complete and you\'ve given your final sign-off.',
      },
    ],
  },
  {
    id: 'domain-hosting',
    name: 'Domain & Hosting',
    questions: [
      {
        q: 'Is the domain included?',
        a: 'Yes. Basic and Standard both include a domain name for the first 2 years, covering .com, .in, .org, .net or .co — happy to arrange other domains for a small extra cost. For E-Commerce, the domain is arranged as required for your project.',
      },
      {
        q: 'Is hosting included?',
        a: 'Yes. Basic and Standard both include web hosting for the first 2 years. For E-Commerce, hosting is arranged as required for your project.',
      },
      {
        q: 'How long are they included?',
        a: 'Domain and hosting are included for the first 2 years on Basic and Standard, matching the price shown for those packages.',
      },
      {
        q: 'What happens after the included period?',
        a: 'From year 3 onward, Basic renews at the renewal price shown for that package, and Standard renews at its own renewal price. For E-Commerce, renewal is quoted based on your setup — see the plan comparison above for exact figures.',
      },
      {
        q: 'Can I use my own domain and hosting?',
        a: BYO_DOMAIN_HOSTING_NOTE,
      },
    ],
  },
  {
    id: 'support',
    name: 'Support',
    questions: [
      {
        q: 'Do you provide support after the website goes live?',
        a: 'Yes. Basic and Standard both include 2 years of support after launch. E-Commerce support is arranged as required for your project.',
      },
      {
        q: 'Can I request changes later?',
        a: 'Yes, you can reach out to us for changes during your included support period.',
      },
      {
        q: 'What happens after the included support period?',
        a: 'You can add ongoing Website Maintenance as an additional service to continue receiving updates and monitoring after your included support period ends.',
      },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    questions: [
      {
        q: 'Can I sell products online?',
        a: 'Yes — the E-Commerce package includes a full online store with a shopping cart and online payments.',
      },
      {
        q: 'Can customers pay online?',
        a: 'Yes, the E-Commerce package includes the ability to accept online payments.',
      },
      {
        q: 'Can I manage products?',
        a: 'Yes. The E-Commerce package lets you add, edit and organize your products from your admin panel. A basic version of product management is also available on Basic.',
      },
      {
        q: 'Can I manage orders?',
        a: 'Yes, the E-Commerce package includes order and customer management from your admin panel.',
      },
      {
        q: 'Can I manage stock?',
        a: 'Yes, the E-Commerce package includes stock management so you can track what you have available.',
      },
    ],
  },
  {
    id: 'additional-services',
    name: 'Additional Services',
    questions: [
      {
        q: 'Can I add additional services?',
        a: 'Yes. Once you\'ve chosen a plan, you can select any additional services you need, such as SEO, social media support or content writing.',
      },
      {
        q: 'Can I skip the add-ons?',
        a: "Yes. Additional services are entirely optional — you can skip this step and request a quote for your website package alone.",
      },
      {
        q: "Can I request something that isn't listed?",
        a: 'Yes. Choose "Other Digital Requirements" and describe what you need in the quote form, and our team will follow up.',
      },
      {
        q: 'How will additional services be priced?',
        a: 'Additional services are priced based on your specific requirements. Once you submit your quote request, our team will review it and get back to you with pricing.',
      },
    ],
  },
]
