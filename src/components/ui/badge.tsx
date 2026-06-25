import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowLongRightIcon } from "./icon"

// Figma component: Badge
// Variants: success | danger | info
// Props: value, caption, showIcon, showValue, showCaption

const badgeVariants = cva(
  "inline-flex shrink-0 items-center gap-3 px-2 py-1 rounded-lg",
  {
    variants: {
      variant: {
        success: "bg-bg-success-subtle text-text-success-bold",
        danger: "bg-bg-danger-subtle text-text-danger-bold",
        info: "bg-bg-info-subtle text-text-info-bold",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
)

const VARIANT_ICONS = {
  success: ArrowTrendingUpIcon,
  danger: ArrowTrendingDownIcon,
  info: ArrowLongRightIcon,
} as const

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

export interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: BadgeVariant
  value?: string
  caption?: string
  showIcon?: boolean
  showValue?: boolean
  showCaption?: boolean
}

function Badge({
  className,
  variant = "success",
  value = "+$--.--",
  caption = "+1.5% today",
  showIcon = true,
  showValue = true,
  showCaption = true,
  ...props
}: BadgeProps) {
  const Icon = VARIANT_ICONS[variant]

  return (
    <div
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showIcon && <Icon aria-hidden className="size-5 shrink-0" />}
      {showValue && (
        <span className="text-sm font-bold leading-5 whitespace-nowrap">{value}</span>
      )}
      {showCaption && (
        <span className="text-sm font-regular leading-5 whitespace-nowrap">{caption}</span>
      )}
    </div>
  )
}

export { Badge, badgeVariants }
