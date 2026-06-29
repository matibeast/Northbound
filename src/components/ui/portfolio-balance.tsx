import * as React from "react"
import { cn } from "@/lib/utils"
import { AmountCluster } from "./amount-cluster"
import { Badge } from "./badge"

// Figma component: PortfolioBalance
// Variants: size (md | sm) × variant (positive | negative)
// Composition: AmountCluster + Badge (no Card wrapper — standalone widget)
//
// size=md → AmountCluster size="lg" (40px bold value) + helperText
// size=sm → AmountCluster size="md" (30px regular value) — no helperText
// variant=positive → success Badge
// variant=negative → danger Badge

export type PortfolioBalanceSize = "md" | "sm"
export type PortfolioBalanceVariant = "positive" | "negative"

export interface PortfolioBalanceProps extends React.ComponentProps<"div"> {
  size?: PortfolioBalanceSize
  variant?: PortfolioBalanceVariant
  label?: string
  value?: string
  helperText?: string
  showHelperText?: boolean
  badgeValue?: string
  badgeCaption?: string
  showBadgeIcon?: boolean
  showBadgeValue?: boolean
  showBadgeCaption?: boolean
}

function PortfolioBalance({
  className,
  size = "md",
  variant = "positive",
  label = "label",
  value,
  helperText = "= $---.-- MXN",
  showHelperText,
  badgeValue = "+$--.--",
  badgeCaption = "+1.5% today",
  showBadgeIcon = true,
  showBadgeValue = true,
  showBadgeCaption = true,
  ...props
}: PortfolioBalanceProps) {
  const isSm = size === "sm"
  const isNegative = variant === "negative"

  // sm size hides the helper text by default
  const resolvedShowHelperText = showHelperText ?? !isSm

  return (
    <div
      data-slot="portfolio-balance"
      data-size={size}
      data-variant={variant}
      className={cn("flex flex-col gap-4 items-start w-[204px]", className)}
      {...props}
    >
      <AmountCluster
        className="w-full shrink-0"
        size={isSm ? "md" : "lg"}
        label={label}
        helperText={helperText}
        showHelperText={resolvedShowHelperText}
        showPrefix={false}
        showSuffix={false}
        defaultValue={value}
        readOnly
      />
      <Badge
        variant={isNegative ? "danger" : "success"}
        value={badgeValue}
        caption={badgeCaption}
        showIcon={showBadgeIcon}
        showValue={showBadgeValue}
        showCaption={showBadgeCaption}
      />
    </div>
  )
}

export { PortfolioBalance }
