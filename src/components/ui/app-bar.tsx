import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { AssetHeader } from "./asset-header"
import { ChevronLeftIcon, EllipsisHorizontalIcon } from "./icon"

// Figma component: AppBar
// Variants: content (header | assetHeader) × centered (true | false)
//
// header     → subtitle (muted, above) + title (bold, below) — left or centered
// assetHeader → AssetHeader (avatar + title/label) — left or centered
//
// showLeading: back Button (ChevronLeft) on the left
// showTrailing: more Button (EllipsisHorizontal) on the right

export type AppBarContent = "header" | "assetHeader"

export interface AppBarProps extends React.ComponentProps<"div"> {
  centered?: boolean
  content?: AppBarContent
  showLeading?: boolean
  showSubtitle?: boolean
  showTrailing?: boolean
  subtitle?: string
  title?: string
  // assetHeader variant
  assetTitle?: string
  assetLabel?: string
  assetAvatarLabel?: string
  showAvatar?: boolean
  onLeadingClick?: React.MouseEventHandler<HTMLButtonElement>
  onTrailingClick?: React.MouseEventHandler<HTMLButtonElement>
}

function AppBar({
  className,
  centered = false,
  content = "header",
  showLeading = true,
  showSubtitle = true,
  showTrailing = true,
  subtitle = "subtitle",
  title = "title",
  assetTitle = "title",
  assetLabel = "label",
  assetAvatarLabel,
  showAvatar = true,
  onLeadingClick,
  onTrailingClick,
  ...props
}: AppBarProps) {
  const isHeader = content === "header"
  const isAssetHeader = content === "assetHeader"

  return (
    <div
      data-slot="app-bar"
      data-centered={centered}
      data-content={content}
      className={cn("relative flex items-center gap-3 w-full", className)}
      {...props}
    >
      {showLeading && (
        <Button
          variant="secondary"
          size="sm"
          iconOnly
          iconStart={ChevronLeftIcon}
          onClick={onLeadingClick}
          className="relative z-10 shrink-0"
        />
      )}

      {/* Non-centered: content takes flex-1 space between buttons */}
      {isHeader && !centered && (
        <div className="flex flex-1 min-w-0 flex-col gap-1 not-italic">
          {showSubtitle && (
            <p className="w-full text-sm font-regular leading-sm text-text-neutral-subtlest">
              {subtitle}
            </p>
          )}
          <p className="w-full text-xl font-medium leading-2xl text-text-neutral-bold">
            {title}
          </p>
        </div>
      )}

      {isAssetHeader && !centered && (
        <AssetHeader
          className="flex-1 min-w-0"
          size="md"
          title={assetTitle}
          label={assetLabel}
          avatarLabel={assetAvatarLabel}
          showAvatar={showAvatar}
        />
      )}

      {/* Spacer: pushes trailing button to the right edge when centered */}
      {centered && <div className="flex-1" />}

      {showTrailing && (
        <Button
          variant="secondary"
          size="sm"
          iconOnly
          iconStart={EllipsisHorizontalIcon}
          onClick={onTrailingClick}
          className="relative z-10 shrink-0"
        />
      )}

      {/* Centered overlay: absolutely centered across the full bar width */}
      {isHeader && centered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          {showSubtitle && (
            <p className="text-sm font-regular leading-sm text-text-neutral-subtlest whitespace-nowrap">
              {subtitle}
            </p>
          )}
          <p className="text-xl font-medium leading-2xl text-text-neutral-bold whitespace-nowrap">
            {title}
          </p>
        </div>
      )}

      {isAssetHeader && centered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AssetHeader
            size="md"
            title={assetTitle}
            label={assetLabel}
            avatarLabel={assetAvatarLabel}
            showAvatar={showAvatar}
          />
        </div>
      )}
    </div>
  )
}

export { AppBar }
