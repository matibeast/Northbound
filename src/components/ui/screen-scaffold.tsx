import * as React from "react"
import { cn } from "@/lib/utils"
import { AppBar } from "./app-bar"
import type { AppBarProps } from "./app-bar"

// Figma component: ScreenScaffold
// Composition: AppBar (top) + scrollable content area
//
// Provides the outer shell for a full-screen view: background,
// horizontal padding, top/bottom padding, and an AppBar pinned at the top.
// Pass children to fill the content area below the bar.

export interface ScreenScaffoldProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode
  // AppBar props — prefixed with "appBar" to avoid collisions
  appBarCentered?: AppBarProps["centered"]
  appBarContent?: AppBarProps["content"]
  appBarShowLeading?: AppBarProps["showLeading"]
  appBarShowSubtitle?: AppBarProps["showSubtitle"]
  appBarShowTrailing?: AppBarProps["showTrailing"]
  appBarSubtitle?: AppBarProps["subtitle"]
  appBarTitle?: AppBarProps["title"]
  appBarAssetTitle?: AppBarProps["assetTitle"]
  appBarAssetLabel?: AppBarProps["assetLabel"]
  appBarAssetAvatarLabel?: AppBarProps["assetAvatarLabel"]
  appBarShowAvatar?: AppBarProps["showAvatar"]
  onLeadingClick?: AppBarProps["onLeadingClick"]
  onTrailingClick?: AppBarProps["onTrailingClick"]
}

function ScreenScaffold({
  className,
  children,
  appBarCentered,
  appBarContent,
  appBarShowLeading,
  appBarShowSubtitle,
  appBarShowTrailing,
  appBarSubtitle,
  appBarTitle,
  appBarAssetTitle,
  appBarAssetLabel,
  appBarAssetAvatarLabel,
  appBarShowAvatar,
  onLeadingClick,
  onTrailingClick,
  ...props
}: ScreenScaffoldProps) {
  return (
    <div
      data-slot="screen-scaffold"
      className={cn(
        "relative flex flex-col gap-6 items-start",
        "bg-bg-neutral-subtlest overflow-clip",
        "px-4 py-16 min-h-[932px] w-[430px]",
        className
      )}
      {...props}
    >
      <AppBar
        className="w-full shrink-0"
        centered={appBarCentered}
        content={appBarContent}
        showLeading={appBarShowLeading}
        showSubtitle={appBarShowSubtitle}
        showTrailing={appBarShowTrailing}
        subtitle={appBarSubtitle}
        title={appBarTitle}
        assetTitle={appBarAssetTitle}
        assetLabel={appBarAssetLabel}
        assetAvatarLabel={appBarAssetAvatarLabel}
        showAvatar={appBarShowAvatar}
        onLeadingClick={onLeadingClick}
        onTrailingClick={onTrailingClick}
      />
      <div className="relative flex-1 w-full">
        {children}
      </div>
    </div>
  )
}

export { ScreenScaffold }
