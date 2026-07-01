import * as React from "react"
import { cn } from "@/lib/utils"
import { AssetHeader } from "./asset-header"
import { Sparkline } from "./sparkline"
import { Badge } from "./badge"
import type { BadgeVariant } from "./badge"

// Figma component: HoldingRow
// Composition: AssetHeader + Sparkline (brand/left, flex-1) + value text + Badge (value-only)
// Props: title, label, avatarLabel, showAvatar, sparklineVariant, sparklineDirection,
//        value, change, changeVariant

export type SparklineVariant = "brand" | "positive" | "negative"
export type SparklineDirection = "left" | "right"

export interface HoldingRowProps extends React.ComponentProps<"div"> {
  // ── AssetHeader ────────────────────────────────────────────────────────────
  title?: string
  label?: string
  avatarLabel?: string
  showAvatar?: boolean
  // ── Sparkline ──────────────────────────────────────────────────────────────
  sparklineVariant?: SparklineVariant
  sparklineDirection?: SparklineDirection
  // ── Value section ──────────────────────────────────────────────────────────
  /** Primary value displayed top-right (e.g. "$12,450.00") */
  value?: string
  /** Change amount shown in the Badge below the value (e.g. "+$120.00") */
  change?: string
  /** Badge colour — mirrors the direction of the change */
  changeVariant?: BadgeVariant
}

function HoldingRow({
  className,
  title = "title",
  label = "label",
  avatarLabel,
  showAvatar = true,
  sparklineVariant = "brand",
  sparklineDirection = "left",
  value = "$--.--",
  change = "+$--.--",
  changeVariant = "success",
  ...props
}: HoldingRowProps) {
  return (
    <div
      data-slot="holding-row"
      className={cn(
        "flex items-center gap-6 p-2",
        "bg-bg-neutral-subtlest",
        className,
      )}
      {...props}
    >
      {/* Left: asset identity */}
      <AssetHeader
        size="md"
        showAvatar={showAvatar}
        title={title}
        label={label}
        avatarLabel={avatarLabel}
        className="shrink-0 min-w-[135px]"
      />

      {/* Middle: sparkline — takes remaining space */}
      <Sparkline
        variant={sparklineVariant}
        direction={sparklineDirection}
        className="h-[34px] min-w-0 flex-1"
      />

      {/* Right: value + change badge */}
      <div className="flex shrink-0 flex-col items-end gap-1">
        <p className="whitespace-nowrap text-right text-base font-medium leading-base text-text-neutral-bold not-italic">
          {value}
        </p>
        <Badge
          variant={changeVariant}
          value={change}
          showIcon={false}
          showCaption={false}
        />
      </div>
    </div>
  )
}

export { HoldingRow }
