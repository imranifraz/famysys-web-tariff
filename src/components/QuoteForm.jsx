import { useState } from 'react'
import { useQuote } from '../context/QuoteContext.jsx'
import CTAButton from './CTAButton.jsx'
import './QuoteForm.css'

const COUNTRIES = ['India', 'Saudi Arabia', 'Other']

function FileField({ id, label, file, onChange, accept }) {
  return (
    <div className="quote-form__field quote-form__field--full">
      <span>{label}</span>
      <div className="quote-form__file">
        <input id={id} type="file" className="quote-form__file-input" accept={accept} onChange={onChange} />
        <label htmlFor={id} className="quote-form__file-btn">
          Choose File
        </label>
        <span className="quote-form__file-name">{file ? file.name : 'No file chosen'}</span>
      </div>
    </div>
  )
}

const initialFields = {
  businessName: '',
  contactName: '',
  phone: '',
  email: '',
  address: '',
  country: '',
  city: '',
  pincode: '',
  description: '',
  referenceWebsite: '',
}

export default function QuoteForm() {
  const { selectedPlan } = useQuote()
  const [fields, setFields] = useState(initialFields)
  const [attachment, setAttachment] = useState(null)
  const [logo, setLogo] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedPlan) {
      setError('Please choose a website plan above before sending your details.')
      return
    }
    const required = ['businessName', 'contactName', 'phone', 'email', 'address', 'country', 'city', 'pincode']
    if (required.some((key) => !fields[key])) {
      setError('Please fill in all required fields — business, contact and address details help us prepare your preview.')
      return
    }
    setError('')
    // No backend is wired up yet — this simply confirms the request was captured.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="quote-form quote-form--done">
        <h3 className="display-md">Thanks, {fields.contactName.split(' ')[0]}!</h3>
        <p className="body-md">
          We&rsquo;ve received your details for the {selectedPlan?.name} plan. Our team will review everything and
          get back to you with your free design preview.
        </p>
      </div>
    )
  }

  return (
    <form className="quote-form" id="quote-builder" onSubmit={handleSubmit}>
      <h3 className="display-md">Tell Us About Your Business</h3>
      <p className="body-md quote-form__intro">
        A few details is all it takes — we&rsquo;ll turn this into your free design preview.
      </p>

      <div className="quote-form__carry">
        <div>
          <p className="quote-form__carry-label">Selected Website Plan</p>
          <p className="quote-form__carry-value">{selectedPlan ? selectedPlan.name : 'None selected yet'}</p>
        </div>
      </div>

      <div className="quote-form__grid">
        <label className="quote-form__field quote-form__field--full">
          <span>Business Name</span>
          <input
            type="text"
            required
            value={fields.businessName}
            onChange={update('businessName')}
            autoComplete="organization"
            placeholder="Your business or shop name"
          />
        </label>

        <label className="quote-form__field">
          <span>Contact Person Name</span>
          <input type="text" required value={fields.contactName} onChange={update('contactName')} autoComplete="name" />
        </label>
        <label className="quote-form__field">
          <span>Phone / WhatsApp Number</span>
          <input type="tel" required value={fields.phone} onChange={update('phone')} autoComplete="tel" />
        </label>

        <label className="quote-form__field quote-form__field--full">
          <span>Email Address</span>
          <input type="email" required value={fields.email} onChange={update('email')} autoComplete="email" />
        </label>

        <label className="quote-form__field quote-form__field--full">
          <span>Business Address</span>
          <textarea
            rows={2}
            required
            value={fields.address}
            onChange={update('address')}
            placeholder="Street, area, building — full address"
          />
        </label>

        <label className="quote-form__field">
          <span>Country</span>
          <select required value={fields.country} onChange={update('country')}>
            <option value="" disabled>
              Select country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="quote-form__field">
          <span>City</span>
          <input type="text" required value={fields.city} onChange={update('city')} autoComplete="address-level2" />
        </label>
        <label className="quote-form__field quote-form__field--full">
          <span>PIN / ZIP Code</span>
          <input
            type="text"
            required
            value={fields.pincode}
            onChange={update('pincode')}
            autoComplete="postal-code"
            inputMode="numeric"
          />
        </label>

        <label className="quote-form__field quote-form__field--full">
          <span>Business Description (optional)</span>
          <textarea
            rows={4}
            value={fields.description}
            onChange={update('description')}
            placeholder="What do you do, what should your website say — anything that helps us understand your business"
          />
        </label>
        <FileField
          id="quote-attachment"
          label="Attach a File (optional)"
          file={attachment}
          onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
        />
      </div>

      <details className="quote-form__preview">
        <summary>
          <span className="quote-form__preview-title">Want a free preview of your website?</span>
          <span className="quote-form__preview-hint">Share a couple more details — optional</span>
          <span className="quote-form__preview-icon" aria-hidden="true" />
        </summary>

        <div className="quote-form__preview-body">
          <label className="quote-form__field quote-form__field--full">
            <span>A Website You Like (for inspiration)</span>
            <input
              type="url"
              value={fields.referenceWebsite}
              onChange={update('referenceWebsite')}
              placeholder="https://"
            />
          </label>
          <FileField
            id="quote-logo"
            label="Upload Your Logo (if you have one)"
            file={logo}
            accept="image/*"
            onChange={(e) => setLogo(e.target.files?.[0] ?? null)}
          />
        </div>
      </details>

      {error && <p className="quote-form__error">{error}</p>}

      <CTAButton type="submit" variant="primary" block>
        Get My Free Design Preview
      </CTAButton>
    </form>
  )
}
