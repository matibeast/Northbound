import * as React from "react"
import { cn } from "@/lib/utils"
import { PortfolioBalance } from "./portfolio-balance"
import { Button } from "./button"
import { ArrowDownUp } from "./icon"
import type { PortfolioBalanceProps } from "./portfolio-balance"

// Figma component: BalanceSection
// Composition: PortfolioBalance + primary CTA Button (swap action)
//
// showButton=true → renders a primary Button below the balance display
// swapAction      → custom ReactNode to replace the default Button

export interface BalanceSectionProps extends Omit<React.ComponentProps<"div">, "prefix"> {
  // PortfolioBalance props forwarded
  size?: PortfolioBalanceProps["size"]
  variant?: PortfolioBalanceProps["variant"]
  label?: string
  value?: string
  prefix?: PortfolioBalanceProps["prefix"]
  showPrefix?: boolean
  suffix?: PortfolioBalanceProps["suffix"]
  showSuffix?: boolean
  helperText?: string
  showHelperText?: boolean
  badgeValue?: string
  badgeCaption?: string
  showBadgeIcon?: boolean
  showBadgeValue?: boolean
  showBadgeCaption?: boolean
  // CTA button
  showButton?: boolean
  buttonLabel?: string
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  swapAction?: React.ReactNode
}

function BalanceSection({
  className,
  size = "md",
  variant = "positive",
  label = "label",
  value,
  prefix,
  showPrefix,
  suffix,
  showSuffix,
  helperText,
  showHelperText,
  badgeValue = "+$--.--",
  badgeCaption = "+1.5% today",
  showBadgeIcon = true,
  showBadgeValue = true,
  showBadgeCaption = true,
  showButton = true,
  buttonLabel = "Swap",
  onButtonClick,
  swapAction,
  ...props
}: BalanceSectionProps) {
  return (
    <div
      data-slot="balance-section"
      className={cn("flex flex-col gap-6 items-start w-full", className)}
      {...props}
    >
      <PortfolioBalance
        className="w-full shrink-0"
        size={size}
        variant={variant}
        label={label}
        value={value}
        prefix={prefix}
        showPrefix={showPrefix}
        suffix={suffix}
        showSuffix={showSuffix}
        helperText={helperText}
        showHelperText={showHelperText}
        badgeValue={badgeValue}
        badgeCaption={badgeCaption}
        showBadgeIcon={showBadgeIcon}
        showBadgeValue={showBadgeValue}
        showBadgeCaption={showBadgeCaption}
      />
      {showButton &&
        (swapAction ?? (
          <Button
            variant="primary"
            size="md"
            iconStart={ArrowDownUp}
            iconEnd={ArrowDownUp}
            onClick={onButtonClick}
            className="w-full"
          >
            {buttonLabel}
          </Button>
        ))}
    </div>
  )
}

export { BalanceSection }
