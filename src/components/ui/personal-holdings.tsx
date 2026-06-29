import * as React from "react"
import { Card } from "./card"
import { HoldingRow } from "./holding-row"
import { Divider } from "./divider"
import type { SparklineVariant, SparklineDirection } from "./holding-row"
import type { BadgeVariant } from "./badge"
import type { IconComponent } from "./icon-tile"

// Figma component: PersonalHoldings
// Composition: Card (optional header) + HoldingRow list separated by Dividers
// Props: showHeader, title, buttonLabel, items array

export interface HoldingItem {
  title: string
  label: string
  avatarLabel?: string
  showAvatar?: boolean
  sparklineVariant?: SparklineVariant
  sparklineDirection?: SparklineDirection
  value: string
  change: string
  changeVariant?: BadgeVariant
}

export interface PersonalHoldingsProps extends React.ComponentProps<"div"> {
  /** Whether to render the card section header */
  showHeader?: boolean
  title?: string
  buttonLabel?: string
  buttonIcon?: IconComponent
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  items?: HoldingItem[]
}

const DEFAULT_ITEMS: HoldingItem[] = [
  {
    title: "VOO",
    label: "S&P 500 ETF",
    avatarLabel: "VOO",
    sparklineVariant: "brand",
    sparklineDirection: "left",
    value: "$6,240.18",
    change: "+1.8%",
    changeVariant: "success",
  },
  {
    title: "AAPL",
    label: "Apple",
    avatarLabel: "AAPL",
    sparklineVariant: "positive",
    sparklineDirection: "left",
    value: "$3,180.40",
    change: "+0.9%",
    changeVariant: "success",
  },
  {
    title: "MSFT",
    label: "Microsoft",
    avatarLabel: "MSFT",
    sparklineVariant: "negative",
    sparklineDirection: "right",
    value: "$3,059.92",
    change: "-0.4%",
    changeVariant: "danger",
  },
]

function PersonalHoldings({
  className,
  showHeader = false,
  title = "My Holdings",
  buttonLabel,
  buttonIcon,
  onButtonClick,
  items = DEFAULT_ITEMS,
  ...props
}: PersonalHoldingsProps) {
  return (
    <Card
      data-slot="personal-holdings"
      className={className}
      showHeader={showHeader}
      headerVariant={buttonLabel ? "button" : "none"}
      title={title}
      buttonLabel={buttonLabel}
      buttonIcon={buttonIcon}
      onButtonClick={onButtonClick}
      {...props}
    >
      <div className="flex flex-col gap-1 py-1">
        {items.map((item, i) => (
          <React.Fragment key={`${item.title}-${i}`}>
            {i > 0 && <Divider orientation="horizontal" />}
            <HoldingRow
              title={item.title}
              label={item.label}
              avatarLabel={item.avatarLabel}
              showAvatar={item.showAvatar ?? true}
              sparklineVariant={item.sparklineVariant ?? "brand"}
              sparklineDirection={item.sparklineDirection ?? "left"}
              value={item.value}
              change={item.change}
              changeVariant={item.changeVariant ?? "success"}
            />
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export { PersonalHoldings }
