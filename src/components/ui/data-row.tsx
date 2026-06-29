import * as React from "react"
import { cn } from "@/lib/utils"
import { IconTile } from "./icon-tile"
import type { IconComponent, IconTileVariant } from "./icon-tile"
import { ArrowUpRight } from "./icon"

// Figma component: DataRow
// Appearance: neutral | positive | negative
// Variant: plain | emphasized (controls value text size)
// Props: showIconTile, title, value, icon

export type DataRowAppearance = "neutral" | "positive" | "negative"
export type DataRowVariant = "plain" | "emphasized"

const ICON_TILE_VARIANT: Record<DataRowAppearance, IconTileVariant> = {
  neutral: "neutral",
  positive: "success",
  negative: "negative",
}

const VALUE_COLOR: Record<DataRowAppearance, string> = {
  neutral: "text-text-neutral-bold",
  positive: "text-text-success-bold",
  negative: "text-text-danger-bold",
}

export interface DataRowProps extends React.ComponentProps<"div"> {
  appearance?: DataRowAppearance
  variant?: DataRowVariant
  showIconTile?: boolean
  title?: string
  value?: string
  icon?: IconComponent
}

function DataRow({
  className,
  appearance = "neutral",
  variant = "plain",
  showIconTile = true,
  title = "title",
  value = "value",
  icon: Icon = ArrowUpRight,
  ...props
}: DataRowProps) {
  return (
    <div
      data-slot="data-row"
      data-appearance={appearance}
      data-variant={variant}
      className={cn("flex items-center gap-3 p-2", className)}
      {...props}
    >
      <div className="flex flex-1 items-center gap-3 min-w-0">
        {showIconTile && (
          <IconTile variant={ICON_TILE_VARIANT[appearance]} icon={Icon} />
        )}
        <p className="flex-1 min-w-0 break-words not-italic text-base font-medium leading-base text-text-neutral-subtlest">
          {title}
        </p>
      </div>

      <p
        className={cn(
          "shrink-0 text-right whitespace-nowrap not-italic",
          VALUE_COLOR[appearance],
          variant === "emphasized"
            ? "text-2xl font-regular leading-xl"
            : "text-base font-medium leading-base",
        )}
      >
        {value}
      </p>
    </div>
  )
}

export { DataRow }
