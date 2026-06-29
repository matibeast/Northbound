import * as React from "react"
import { Card } from "./card"
import { Sparkline } from "./sparkline"
import { ChipGroup } from "./chip-group"
import type { ChipGroupItem } from "./chip-group"
import type { BadgeVariant } from "./badge"

// Figma component: PriceChart
// Composition: Card (badge header) + Sparkline + date labels + ChipGroup
// Props: title, badgeValue, sparkline config, period chips, date labels

type SparklineVariant = "brand" | "positive" | "negative"
type SparklineDirection = "left" | "right"

export const DEFAULT_PERIODS: ChipGroupItem[] = [
  { label: "1W", value: "1W" },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "1Y", value: "1Y" },
  { label: "YTD", value: "YTD" },
  { label: "5Y", value: "5Y" },
]

export interface PriceChartProps extends React.ComponentProps<"div"> {
  title?: string
  badgeValue?: string
  badgeVariant?: BadgeVariant
  startDateLabel?: string
  endDateLabel?: string
  sparklineVariant?: SparklineVariant
  sparklineDirection?: SparklineDirection
  periods?: ChipGroupItem[]
  /** Controlled: currently selected period value */
  selectedPeriod?: string
  /** Uncontrolled: initially selected period value */
  defaultSelectedPeriod?: string
  onPeriodChange?: (period: string) => void
}

function PriceChart({
  className,
  title = "Past 30 days",
  badgeValue = "+6.2%",
  badgeVariant = "success",
  startDateLabel = "May 23",
  endDateLabel = "Today",
  sparklineVariant = "positive",
  sparklineDirection = "left",
  periods = DEFAULT_PERIODS,
  selectedPeriod,
  defaultSelectedPeriod = "1M",
  onPeriodChange,
  ...props
}: PriceChartProps) {
  return (
    <Card
      data-slot="price-chart"
      className={className}
      headerVariant="badge"
      title={title}
      badgeVariant={badgeVariant}
      badgeValue={badgeValue}
      showBadgeIcon={false}
      showBadgeCaption={false}
      {...props}
    >
      <div className="flex flex-col gap-4 py-1 overflow-hidden">
        <div className="flex flex-col gap-0">
          <Sparkline
            variant={sparklineVariant}
            direction={sparklineDirection}
            className="h-[130px] w-full"
          />
          <div className="flex items-center justify-between text-sm font-regular leading-sm text-text-neutral-subtlest whitespace-nowrap">
            <span>{startDateLabel}</span>
            <span>{endDateLabel}</span>
          </div>
        </div>
        <ChipGroup
          items={periods}
          value={selectedPeriod}
          defaultValue={defaultSelectedPeriod}
          onChange={onPeriodChange}
        />
      </div>
    </Card>
  )
}

export { PriceChart }
