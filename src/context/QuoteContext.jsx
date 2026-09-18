import { createContext, useContext, useMemo, useState } from 'react'
import { PACKAGES } from '../data/tariff.js'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [currency, setCurrency] = useState('INR')
  const [selectedPlanId, setSelectedPlanId] = useState(null)
  const [selectedAddonIds, setSelectedAddonIds] = useState([])

  const toggleAddon = (id) => {
    setSelectedAddonIds((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  const clearAddons = () => setSelectedAddonIds([])

  const selectedPlan = useMemo(() => PACKAGES.find((p) => p.id === selectedPlanId) || null, [selectedPlanId])

  const value = {
    currency,
    setCurrency,
    selectedPlanId,
    setSelectedPlanId,
    selectedPlan,
    selectedAddonIds,
    toggleAddon,
    clearAddons,
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}
