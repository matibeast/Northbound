import * as React from "react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "./section-header"
import { PersonalHoldings } from "./personal-holdings"
import type { HoldingItem } from "./personal-holdings"
import type { IconComponent } from "./icon-tile"

// Figma component: HoldingsSection
// Composition: SectionHeader (variant="text") + PersonalHoldings
//
// The section header shows a title ("Your holdings") on the left
// and a subtitle count ("3 investments") on the right.

export interface HoldingsSectionProps extends React.ComponentProps<"div"> {
  title?: string
  subtitle?: string
  items?: HoldingItem[]
  showCardHeader?: boolean
  cardButtonLabel?: string
  cardButtonIcon?: IconComponent
  onCardButtonClick?: React.MouseEventHandler<HTMLButtonElement>
}

function HoldingsSection({
  className,
  title = "Your holdings",
  subtitle = "3 investments",
  items,
  showCardHeader,
  cardButtonLabel,
  cardButtonIcon,
  onCardButtonClick,
  ...props
}: HoldingsSectionProps) {
  return (
    <div
      data-slot="holdings-section"
      className={cn("flex flex-col gap-3 items-start w-full", className)}
      {...props}
    >
      <SectionHeader
        className="w-full shrink-0"
        variant="text"
        title={title}
        subtitle={subtitle}
      />
      <PersonalHoldings
        className="w-full shrink-0"
        showHeader={showCardHeader}
        title={title}
        buttonLabel={cardButtonLabel}
        buttonIcon={cardButtonIcon}
        onButtonClick={onCardButtonClick}
        items={items}
      />
    </div>
  )
}

export { HoldingsSection }
