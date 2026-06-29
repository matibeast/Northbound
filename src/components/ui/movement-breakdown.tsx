import * as React from "react"
import { Card } from "./card"
import { DataRow } from "./data-row"
import { Divider } from "./divider"
import type { DataRowAppearance, DataRowVariant } from "./data-row"
import type { IconComponent } from "./icon-tile"
import {
  ArrowUpRight,
  ArrowDownUp,
  Percent,
  BanknoteArrowDown,
  ClockIcon,
} from "./icon"

// Figma component: MovementBreakdown
// Composition: Card (variant=none header) + DataRow list separated by Dividers
// Props: title, items (fully customisable rows)

export interface MovementItem {
  title: string
  value: string
  icon?: IconComponent
  appearance?: DataRowAppearance
  variant?: DataRowVariant
}

export interface MovementBreakdownProps extends React.ComponentProps<"div"> {
  title?: string
  items?: MovementItem[]
}

const DEFAULT_ITEMS: MovementItem[] = [
  {
    title: "Amount you send",
    value: "$5,000.00 MXN",
    icon: ArrowUpRight,
    appearance: "neutral",
    variant: "plain",
  },
  {
    title: "Exchange rate",
    value: "1 USD = 17.20 MXN",
    icon: ArrowDownUp,
    appearance: "neutral",
    variant: "plain",
  },
  {
    title: "Fee 1%",
    value: "$2.91 USD",
    icon: Percent,
    appearance: "neutral",
    variant: "plain",
  },
  {
    title: "You receive",
    value: "$287.79 USD",
    icon: BanknoteArrowDown,
    appearance: "positive",
    variant: "emphasized",
  },
  {
    title: "Expected arrival",
    value: "Within 1 business day",
    icon: ClockIcon,
    appearance: "neutral",
    variant: "plain",
  },
]

function MovementBreakdown({
  className,
  title = "The full breakdown",
  items = DEFAULT_ITEMS,
  ...props
}: MovementBreakdownProps) {
  return (
    <Card
      data-slot="movement-breakdown"
      className={className}
      headerVariant="none"
      title={title}
      {...props}
    >
      <div className="flex flex-col gap-1 py-1">
        {items.map((item, i) => (
          <React.Fragment key={`${item.title}-${i}`}>
            {i > 0 && <Divider orientation="horizontal" />}
            <DataRow
              appearance={item.appearance ?? "neutral"}
              variant={item.variant ?? "plain"}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export { MovementBreakdown }
