import { ScreenScaffold } from "@/components/ui/screen-scaffold"
import { BalanceSection } from "@/components/ui/balance-section"
import { PriceChart } from "@/components/ui/price-chart"
import { PositionSummary } from "@/components/ui/position-summary"
import { Button } from "@/components/ui/button"

// Figma screen: Asset Detail (node 119:3707)
// Composition: ScreenScaffold > BalanceSection + PriceChart + PositionSummary × 2 + Button

function AssetDetailScreen() {
  return (
    <ScreenScaffold
      appBarContent="assetHeader"
      appBarCentered={true}
      appBarShowLeading={true}
      appBarShowTrailing={true}
      appBarAssetTitle="VOO"
      appBarAssetLabel="Vanguard S&P 500 ETF"
      appBarAssetAvatarLabel="VOO"
    >
      <div className="flex flex-col gap-8 w-full overflow-hidden">
        <BalanceSection
          label="Price per share"
          value="542.18"
          showPrefix={true}
          suffix="USD"
          showSuffix={true}
          badgeValue="+$4.85"
          badgeCaption="+0.9% today"
          showBadgeIcon={true}
          showButton={false}
        />
        <PriceChart
          title="Past 30 days"
          badgeValue="+6.2%"
          defaultSelectedPeriod="1M"
        />
        <PositionSummary className="w-full" />
        <PositionSummary className="w-full" />
        <Button variant="primary" size="md" className="w-full">
          Place order
        </Button>
      </div>
    </ScreenScaffold>
  )
}

export { AssetDetailScreen }
