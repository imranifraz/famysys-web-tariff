export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share basic details',
    body: 'Tell us about your business — no tech knowledge needed.',
  },
  {
    step: '02',
    title: 'Get your free preview',
    body: "We'll prepare a free design preview for you to review.",
    highlight: true,
  },
  {
    step: '03',
    title: 'Approve',
    body: "Approve the design and we'll start building.",
  },
  {
    step: '04',
    title: 'Go live',
    body: 'We launch your website and hand it over for final testing.',
  },
  {
    step: '05',
    title: 'UAT sign-off',
    body: 'You test everything and give the final sign-off.',
  },
]

// Confirmed by the client: payment moved from a 50/50 split to 60/40 —
// 60% due on design approval (before build starts), 40% due once the
// project is complete (after UAT sign-off).
export const PAYMENT_SPLIT = { onApproval: 60, onCompletion: 40 }

export const PAYMENT_NOTE =
  'You pay 60% when you approve the design, and the remaining 40% once your website is complete.'
