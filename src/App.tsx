import { useState } from 'react'
import { PortfolioDashboardScreen } from './screens/portfolio-dashboard-screen'
import { AssetDetailScreen } from './screens/asset-detail-screen'
import { DepositScreen } from './screens/deposit-screen'
import { Button } from '@/components/ui/button'

const SCREENS = {
  dashboard: { label: 'Portfolio Dashboard', Component: PortfolioDashboardScreen },
  asset: { label: 'Asset Detail', Component: AssetDetailScreen },
  deposit: { label: 'Deposit', Component: DepositScreen },
} as const

type ScreenKey = keyof typeof SCREENS

function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('dashboard')
  const ActiveComponent = SCREENS[activeScreen].Component

  return (
    <div className="flex flex-col items-center min-h-screen bg-bg-neutral-subtle py-16 gap-8">
      <div className="flex gap-3">
        {(Object.keys(SCREENS) as ScreenKey[]).map((key) => (
          <Button
            key={key}
            variant={activeScreen === key ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveScreen(key)}
          >
            {SCREENS[key].label}
          </Button>
        ))}
      </div>
      <ActiveComponent />
    </div>
  )
}

export default App
