import { Link } from 'react-router-dom'

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

export default function CTAButton({
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  block = false,
  disabled = false,
  children,
  className = '',
}) {
  const classes = ['btn', VARIANT_CLASS[variant], block ? 'btn-block' : '', className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
