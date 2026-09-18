// Single source of truth: "Website tariff.xlsx".
//
// Two things in the source file needed a human decision rather than a guess
// (confirmed by the client before this was written):
//   1. Currency: both INR and SAR tables exist in the file — both are shown,
//      with a switcher.
//   2. Support duration for Basic & Standard: the INR table says "2 Years
//      support" (matching the 2-year domain/hosting bundle); the SAR table
//      and an older detail tab said "30/60 days". Confirmed: 2 Years support
//      for both currencies.
//   3. Package names: the tariff's commercial tab uses BASIC / STANDARD /
//      E-COMMERCE (an older detail tab used START/GROW/SELL for the same 3
//      tiers) — confirmed to use BASIC / STANDARD / E-COMMERCE.
//   4. Domain safeguard: the tariff says "free domain" with no cap, which
//      exposes the business to expensive/premium domain requests. Confirmed
//      wording: the included domain covers standard extensions only —
//      anything else (premium names, aftermarket domains, other extensions)
//      is quoted separately. This applies to both the India and Saudi
//      Arabia markets equally.
//
// Everything else below is copied as-is from the sheet, in plain language.

export const DOMAIN_HOSTING_NOTE =
  'Hosting is fully included. Your free domain covers .com, .in, .org, .net or .co — happy to arrange other domains for a small extra cost.'

// Confirmed by the client: no fixed discount amount was given, so this
// stays general rather than naming a number — the actual reduction is
// worked out per quote once they confirm what they already have.
export const BYO_DOMAIN_HOSTING_NOTE =
  'Already have a domain and hosting? Let us know — we’ll reduce your package price accordingly.'

export const CURRENCIES = {
  INR: { code: 'INR', symbol: '₹', label: 'India (₹ INR)' },
  SAR: { code: 'SAR', symbol: 'SAR', label: 'Saudi Arabia (SAR)' },
}

export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    bestFor: 'Simple online presence',
    tagline: 'A clean, professional website to introduce your business online.',
    price: { INR: '₹20,000', SAR: 'SAR 1,000' },
    priceNote: 'First 2 years',
    pages: '5–6 pages',
    domain: '2 years included',
    hosting: '2 years included',
    email: '1 email ID',
    support: '2 years support',
    renewal: { INR: '₹12,000 / year', SAR: 'SAR 500 / year' },
    renewalNote: 'From year 3 onward',
    highlight: false,
    featured: [
      '5–6 page website',
      'Domain & hosting for 2 years*',
      'Website looks great on phone, tablet & desktop screens',
      'WhatsApp, Call & Google Maps buttons',
      'Contact / enquiry form',
      '2 years of support included',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    bestFor: 'Growing businesses',
    tagline: 'A bigger website you can manage yourself, built to grow with you.',
    price: { INR: '₹35,000', SAR: 'SAR 1,500' },
    priceNote: 'First 2 years',
    pages: 'Up to 10 pages',
    domain: '2 years included',
    hosting: '2 years included',
    email: '3 email IDs',
    support: '2 years support',
    renewal: { INR: '₹15,000 / year', SAR: 'SAR 600 / year' },
    renewalNote: 'From year 3 onward',
    highlight: true,
    featured: [
      'Up to 10 page website',
      'Edit your own content, photos & pages',
      'Manage services, blog & testimonials',
      'Built-in SEO settings & Google Analytics',
      'Domain, hosting & 3 email IDs for 2 years*',
      '2 years of support included',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    bestFor: 'Selling online',
    tagline: 'A complete online store, built and priced around what you sell.',
    price: { INR: 'Custom Quote', SAR: 'Custom Quote' },
    priceNote: 'Based on your requirements',
    pages: 'Custom',
    domain: 'As required',
    hosting: 'As required',
    email: 'As required',
    support: 'As required',
    renewal: { INR: 'Get Quote', SAR: 'Get Quote' },
    renewalNote: 'From year 3 onward',
    highlight: false,
    featured: [
      'Everything in Standard',
      'Online store with cart & payments',
      'Manage products, orders & stock',
      'Manage customers & discount codes',
      'Scoped and priced to your business',
    ],
  },
]

// Feature comparison — merged from both tariff tabs. Where the two tabs
// described the same capability differently (e.g. an "Admin Panel" exists
// for every package, but only Standard/E-Commerce can edit content through
// it), both facts are kept as separate rows instead of guessing which one
// to drop.
export const FEATURE_GROUPS = [
  {
    group: 'Your Website',
    rows: [
      { label: 'Custom website design', basic: true, standard: true, ecommerce: true },
      { label: 'Website looks great on every screen size (phone, tablet & desktop)', basic: true, standard: true, ecommerce: true },
      { label: 'Free domain name (2 years)*', basic: true, standard: true, ecommerce: 'As required' },
      { label: 'Web hosting included (2 years)', basic: true, standard: true, ecommerce: 'As required' },
      { label: 'Secure website (SSL certificate)', basic: true, standard: true, ecommerce: true },
      { label: 'Business email addresses', basic: '1 email ID', standard: '3 email IDs', ecommerce: 'As required' },
    ],
  },
  {
    group: 'Getting Found & Contacted',
    rows: [
      { label: 'WhatsApp, Call & Google Maps buttons', basic: true, standard: true, ecommerce: true },
      { label: 'Contact / enquiry form', basic: true, standard: true, ecommerce: true },
      { label: 'Basic Google search setup', basic: true, standard: true, ecommerce: true },
      { label: 'SEO settings you can control', basic: false, standard: true, ecommerce: true },
      { label: 'Google Analytics (visitor stats)', basic: false, standard: true, ecommerce: true },
      { label: 'Google Search Console access', basic: false, standard: true, ecommerce: true },
    ],
  },
  {
    group: 'Managing Your Website',
    rows: [
      { label: 'Admin panel access', basic: true, standard: true, ecommerce: true },
      { label: 'Edit your own text, pages & photos', basic: false, standard: true, ecommerce: true },
      { label: 'Manage your services list', basic: false, standard: true, ecommerce: true },
      { label: 'Manage customer reviews & testimonials', basic: false, standard: true, ecommerce: true },
      { label: 'Manage products', basic: 'Added by us', standard: true, ecommerce: true },
      { label: 'Organize products into categories', basic: false, standard: true, ecommerce: true },
      { label: 'View enquiries from your admin panel', basic: false, standard: true, ecommerce: true },
      { label: 'Blog / news section', basic: false, standard: true, ecommerce: true },
      { label: 'Training on using your website', basic: 'Basic', standard: true, ecommerce: true },
    ],
  },
  {
    group: 'Selling Online',
    rows: [
      { label: 'Online store with shopping cart', basic: false, standard: false, ecommerce: true },
      { label: 'Accept online payments', basic: false, standard: false, ecommerce: true },
      { label: 'Manage orders & customers', basic: false, standard: false, ecommerce: true },
      { label: 'Track & manage stock levels', basic: false, standard: false, ecommerce: true },
      { label: 'Discount & coupon codes', basic: false, standard: false, ecommerce: true },
    ],
  },
  {
    group: 'Support',
    rows: [
      { label: 'Support after your website goes live', basic: '2 years', standard: '2 years', ecommerce: 'As required' },
    ],
  },
]
