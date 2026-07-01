import { ScreenScaffold } from "@/components/ui/screen-scaffold"
import { BalanceSection } from "@/components/ui/balance-section"
import { PriceChart } from "@/components/ui/price-chart"
import { HoldingsSection } from "@/components/ui/holdings-section"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@/components/ui/icon"

// Figma screen: Portfolio Dashboard (node 143:1002)
// Composition: ScreenScaffold > BalanceSection + PriceChart + HoldingsSection

function PortfolioDashboardScreen() {
  return (
    <ScreenScaffold
      appBarShowLeading={false}
      appBarSubtitle="Good morning"
      appBarTitle="John Doe"
      appBarShowTrailing={true}
    >
      <div className="flex flex-col gap-8 w-full overflow-hidden">
        <BalanceSection
          label="Your total value"
          value="12,480.50"
          suffix="USD"
          showSuffix
          helperText="= $212,168.50 MXN"
          showHelperText
          badgeValue="+$184.20"
          badgeCaption="+1.5% today"
          showBadgeIcon
          showButton
          swapAction={
            <Button variant="primary" size="md" iconStart={PlusIcon} className="w-full">
              Add money
            </Button>
          }
        />
        <PriceChart
          title="Past 30 days"
          badgeValue="+6.2%"
          defaultSelectedPeriod="1M"
        />
        <HoldingsSection
          title="Your holdings"
          subtitle="3 investments"
        />
      </div>
    </ScreenScaffold>
  )
}

export { PortfolioDashboardScreen }
