import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar } from "./avatar"
import type { AvatarSize } from "./avatar"

// Figma component: AssetHeader
// Sizes: md | sm
// Props: size, showAvatar, title, label, avatarLabel
// Composition: Avatar (initials) + title/label text column

export type AssetHeaderSize = AvatarSize

export interface AssetHeaderProps extends React.ComponentProps<"div"> {
  /** Controls Avatar and layout size — md: 40px avatar | sm: 20px avatar */
  size?: AssetHeaderSize
  /** Whether to render the Avatar on the left */
  showAvatar?: boolean
  /** Primary text — Figma: text-base/medium/neutral-bold */
  title?: string
  /** Secondary text — Figma: text-sm/regular/neutral-subtlest */
  label?: string
  /** Initials or ticker shown inside the Avatar (e.g. "AAPL") */
  avatarLabel?: string
}

function AssetHeader({
  className,
  size = "md",
  showAvatar = true,
  title = "title",
  label = "label",
  avatarLabel,
  ...props
}: AssetHeaderProps) {
  return (
    <div
      data-slot="asset-header"
      data-size={size}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {showAvatar && (
        <Avatar
          variant="initials"
          size={size}
          label={avatarLabel}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="w-full truncate text-base font-medium leading-base text-text-neutral-bold not-italic">
          {title}
        </p>
        <p className="w-full truncate text-sm font-regular leading-sm text-text-neutral-subtlest not-italic">
          {label}
        </p>
      </div>
    </div>
  )
}

export { AssetHeader }
