import { Fragment } from 'react'
import { FEATURE_GROUPS, PACKAGES } from '../data/tariff.js'
import './FeatureComparison.css'

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="fc-cell fc-cell--yes" aria-label="Included">
        ✓
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="fc-cell fc-cell--no" aria-label="Not included">
        —
      </span>
    )
  }
  return <span className="fc-cell fc-cell--text">{value}</span>
}

export default function FeatureComparison() {
  return (
    <details className="feature-comparison">
      <summary>
        <span className="feature-comparison__title">Compare What&rsquo;s Included</span>
        <span className="feature-comparison__hint">Full feature breakdown, side by side</span>
        <span className="feature-comparison__icon" aria-hidden="true" />
      </summary>

      <div className="feature-comparison__body">
        <div className="feature-comparison__scroll">
          <table className="feature-comparison__table">
            <thead>
              <tr>
                <th className="fc-th-label"></th>
                {PACKAGES.map((pkg) => (
                  <th key={pkg.id}>{pkg.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_GROUPS.map((group) => (
                <Fragment key={group.group}>
                  <tr className="fc-group-row">
                    <td colSpan={4}>{group.group}</td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="fc-th-label">
                        {row.label}
                      </th>
                      <td>
                        <Cell value={row.basic} />
                      </td>
                      <td>
                        <Cell value={row.standard} />
                      </td>
                      <td>
                        <Cell value={row.ecommerce} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  )
}
