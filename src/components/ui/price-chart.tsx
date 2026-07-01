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

type PeriodData = {
  linePath: string
  areaPath: string
  startDateLabel: string
}

const PERIOD_DATA: Record<string, PeriodData> = {
  "1W": {
    linePath: "M1 58 L40 45 L80 60 L120 42 L160 54 L200 38 L240 30 L274 22",
    areaPath: "M1 58 L40 45 L80 60 L120 42 L160 54 L200 38 L240 30 L274 22 L274 79 L1 79 Z",
    startDateLabel: "Jun 24",
  },
  "1M": {
    linePath: "M1.0002 51.5002L25.5002 46.5002L52.0002 54.0002L76.0002 39.5002L102 44.0002L126.5 31.5002L152.5 36.0002L177.5 21.5002L203.5 27.0002L228.5 11.0002L274 1.00021",
    areaPath: "M24.6795 45.7898L0 50.8217V79H275V0L229.167 10.0637L203.984 26.1656L177.793 20.6306L152.61 35.2229L126.419 30.6943L101.74 43.2739L75.5495 38.7452L51.3736 53.3376L24.6795 45.7898Z",
    startDateLabel: "May 23",
  },
  "3M": {
    linePath: "M1 65 L55 58 L110 64 L165 50 L220 36 L274 18",
    areaPath: "M1 65 L55 58 L110 64 L165 50 L220 36 L274 18 L274 79 L1 79 Z",
    startDateLabel: "Apr 1",
  },
  "1Y": {
    linePath: "M1 45 L50 55 L100 70 L150 62 L200 42 L250 20 L274 10",
    areaPath: "M1 45 L50 55 L100 70 L150 62 L200 42 L250 20 L274 10 L274 79 L1 79 Z",
    startDateLabel: "Jul 2025",
  },
  "YTD": {
    linePath: "M1 70 L46 62 L92 66 L138 52 L184 40 L230 28 L274 15",
    areaPath: "M1 70 L46 62 L92 66 L138 52 L184 40 L230 28 L274 15 L274 79 L1 79 Z",
    startDateLabel: "Jan 1",
  },
  "5Y": {
    linePath: "M1 75 L55 68 L110 58 L165 38 L220 18 L274 5",
    areaPath: "M1 75 L55 68 L110 58 L165 38 L220 18 L274 5 L274 79 L1 79 Z",
    startDateLabel: "Jul 2021",
  },
}

export interface PriceChartProps extends React.ComponentProps<"div"> {
  title?: string
  badgeValue?: string
  badgeVariant?: BadgeVariant
  /** Overrides the auto start-date label derived from the selected period */
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
  startDateLabel,
  endDateLabel = "Today",
  sparklineVariant = "positive",
  sparklineDirection = "left",
  periods = DEFAULT_PERIODS,
  selectedPeriod,
  defaultSelectedPeriod = "1M",
  onPeriodChange,
  ...props
}: PriceChartProps) {
  const [internalPeriod, setInternalPeriod] = React.useState(defaultSelectedPeriod)
  const activePeriod = selectedPeriod ?? internalPeriod

  function handlePeriodChange(period: string) {
    if (selectedPeriod === undefined) setInternalPeriod(period)
    onPeriodChange?.(period)
  }

  const periodData = PERIOD_DATA[activePeriod] ?? PERIOD_DATA["1M"]
  const resolvedStartDate = startDateLabel ?? periodData.startDateLabel

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
            linePath={periodData.linePath}
            areaPath={periodData.areaPath}
            className="h-[130px] w-full"
          />
          <div className="flex items-center justify-between text-sm font-regular leading-sm text-text-neutral-subtlest whitespace-nowrap">
            <span>{resolvedStartDate}</span>
            <span>{endDateLabel}</span>
          </div>
        </div>
        <ChipGroup
          items={periods}
          value={activePeriod}
          onChange={handlePeriodChange}
        />
      </div>
    </Card>
  )
}

export { PriceChart }
