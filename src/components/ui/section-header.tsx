import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { PlusIcon } from "./icon"
import type { BadgeVariant } from "./badge"
import type { IconComponent } from "./icon-tile"

// Figma component: SectionHeader
// Variants: text | button | badge | none
//
// text   → title (left) + subtitle (right, muted caption)
// button → title (left) + primary Button with icon + label + icon (right)
// badge  → title (left) + Badge (right)
// none   → title only

export type SectionHeaderVariant = "text" | "button" | "badge" | "none"

export interface SectionHeaderProps extends React.ComponentProps<"div"> {
  /** Controls what appears on the right side */
  variant?: SectionHeaderVariant
  /** Bold title on the left — Figma: text-xl/medium/neutral-bold */
  title?: string

  // ── text variant ──────────────────────────────────────────────────────────
  /** Muted caption on the right (variant="text") */
  subtitle?: string

  // ── button variant ────────────────────────────────────────────────────────
  /** Label text inside the Button (variant="button") */
  buttonLabel?: string
  /** Icon rendered on both sides of the Button label */
  buttonIcon?: IconComponent
  /** Click handler forwarded to the Button */
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>

  // ── badge variant ─────────────────────────────────────────────────────────
  /** Badge colour (variant="badge") */
  badgeVariant?: BadgeVariant
  /** Badge primary value (variant="badge") */
  badgeValue?: string
  /** Badge caption text (variant="badge") */
  badgeCaption?: string
  /** Whether to show the Badge icon (variant="badge") */
  showBadgeIcon?: boolean
  /** Whether to show the Badge value (variant="badge") */
  showBadgeValue?: boolean
  /** Whether to show the Badge caption (variant="badge") */
  showBadgeCaption?: boolean
}

function SectionHeader({
  className,
  variant = "text",
  title = "title",
  // text
  subtitle = "subtitle",
  // button
  buttonLabel = "label",
  buttonIcon: ButtonIcon = PlusIcon,
  onButtonClick,
  // badge
  badgeVariant = "success",
  badgeValue = "+$--.--",
  badgeCaption = "+1.5% today",
  showBadgeIcon = true,
  showBadgeValue = true,
  showBadgeCaption = true,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      data-variant={variant}
      className={cn(
        "flex w-full items-center justify-between",
        variant === "button" ? "h-[38px]" : "h-8",
        className,
      )}
      {...props}
    >
      {/* Title — always present */}
      <p className="shrink-0 not-italic text-xl font-medium leading-2xl text-text-neutral-bold whitespace-nowrap">
        {title}
      </p>

      {/* Right slot — depends on variant */}
      {variant === "text" && (
        <p className="shrink-0 not-italic text-sm font-regular leading-sm text-text-neutral-subtlest">
          {subtitle}
        </p>
      )}

      {variant === "button" && (
        <Button
          variant="primary"
          size="sm"
          iconStart={ButtonIcon}
          iconEnd={ButtonIcon}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      )}

      {variant === "badge" && (
        <Badge
          variant={badgeVariant}
          value={badgeValue}
          caption={badgeCaption}
          showIcon={showBadgeIcon}
          showValue={showBadgeValue}
          showCaption={showBadgeCaption}
        />
      )}

      {/* variant="none" → no right slot */}
    </div>
  )
}

export { SectionHeader }
