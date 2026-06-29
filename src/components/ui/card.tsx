import * as React from "react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "./section-header"
import type { SectionHeaderVariant } from "./section-header"
import type { BadgeVariant } from "./badge"
import type { IconComponent } from "./icon-tile"

// Figma component: Card
// Composition: SectionHeader (full 4-variant) + children slot
// Props: showHeader + all SectionHeader props forwarded

export interface CardProps extends React.ComponentProps<"div"> {
  /** Whether to render the SectionHeader at the top */
  showHeader?: boolean

  // ── SectionHeader forwarded props ─────────────────────────────────────────
  headerVariant?: SectionHeaderVariant
  title?: string
  subtitle?: string
  buttonLabel?: string
  buttonIcon?: IconComponent
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  badgeVariant?: BadgeVariant
  badgeValue?: string
  badgeCaption?: string
  showBadgeIcon?: boolean
  showBadgeValue?: boolean
  showBadgeCaption?: boolean
}

function Card({
  className,
  showHeader = true,
  headerVariant = "text",
  title = "title",
  subtitle = "subtitle",
  buttonLabel,
  buttonIcon,
  onButtonClick,
  badgeVariant,
  badgeValue,
  badgeCaption,
  showBadgeIcon,
  showBadgeValue,
  showBadgeCaption,
  children,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 overflow-hidden rounded-3xl p-4",
        "bg-bg-neutral-subtlest border border-border-neutral-subtle",
        className,
      )}
      {...props}
    >
      {showHeader && (
        <SectionHeader
          variant={headerVariant}
          title={title}
          subtitle={subtitle}
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          onButtonClick={onButtonClick}
          badgeVariant={badgeVariant}
          badgeValue={badgeValue}
          badgeCaption={badgeCaption}
          showBadgeIcon={showBadgeIcon}
          showBadgeValue={showBadgeValue}
          showBadgeCaption={showBadgeCaption}
        />
      )}
      {children && (
        <div data-slot="card-content" className="w-full">
          {children}
        </div>
      )}
    </div>
  )
}

export { Card, SectionHeader }
