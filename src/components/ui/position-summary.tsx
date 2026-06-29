import * as React from "react"
import { Card } from "./card"
import { AmountCluster } from "./amount-cluster"
import { DataRow } from "./data-row"
import { Divider } from "./divider"
import type { DataRowAppearance } from "./data-row"

// Figma component: PositionSummary
// Composition: Card (no header) + AmountCluster + share count + DataRows (no icon tiles)
// Props: market value cluster, share count, return rows, average cost

export interface PositionSummaryProps extends React.ComponentProps<"div"> {
  // Market value block
  marketValueLabel?: string
  marketValue?: string
  marketValueHelper?: string
  shareCount?: string
  shareLabel?: string
  // Return / cost rows
  todayReturnTitle?: string
  todayReturn?: string
  todayReturnAppearance?: DataRowAppearance
  totalReturnTitle?: string
  totalReturn?: string
  totalReturnAppearance?: DataRowAppearance
  averageCostTitle?: string
  averageCost?: string
}

function PositionSummary({
  className,
  marketValueLabel = "Market value",
  marketValue = "$6,240.18",
  marketValueHelper = "= $107,330.83 MXN",
  shareCount = "11.51",
  shareLabel = "shares",
  todayReturnTitle = "Today's return",
  todayReturn = "+$55.20 • +0.9%",
  todayReturnAppearance = "positive",
  totalReturnTitle = "Total return",
  totalReturn = "+$632.40 • +11.3%",
  totalReturnAppearance = "positive",
  averageCostTitle = "Average cost",
  averageCost = "$487.30",
  ...props
}: PositionSummaryProps) {
  return (
    <Card
      data-slot="position-summary"
      className={className}
      showHeader={false}
      {...props}
    >
      <div className="flex flex-col gap-1">
        {/* Market value + share count row */}
        <div className="flex items-end gap-4">
          <AmountCluster
            className="flex-1 min-w-0"
            size="md"
            label={marketValueLabel}
            helperText={marketValueHelper}
            showPrefix={false}
            showSuffix={false}
            defaultValue={marketValue}
            readOnly
          />
          <div className="flex shrink-0 flex-col items-end">
            <span className="text-base font-medium leading-base text-text-neutral-bold not-italic">
              {shareCount}
            </span>
            <span className="text-sm font-regular leading-sm text-text-neutral-subtlest not-italic">
              {shareLabel}
            </span>
          </div>
        </div>

        {/* Data rows */}
        <div className="flex flex-col gap-1">
          <Divider />
          <DataRow
            appearance={todayReturnAppearance}
            title={todayReturnTitle}
            value={todayReturn}
            showIconTile={false}
          />
          <Divider />
          <DataRow
            appearance={totalReturnAppearance}
            title={totalReturnTitle}
            value={totalReturn}
            showIconTile={false}
          />
          <Divider />
          <DataRow
            appearance="neutral"
            title={averageCostTitle}
            value={averageCost}
            showIconTile={false}
          />
        </div>
      </div>
    </Card>
  )
}

export { PositionSummary }
