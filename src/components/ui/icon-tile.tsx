import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Figma component: IconTile
// Variants: neutral | info | brand | warning | success | negative
// Icon color: icon-neutral-bold on neutral/brand (light bg), white on bold-color variants

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

const iconTileVariants = cva(
  "inline-flex shrink-0 items-center justify-center p-2 rounded-lg",
  {
    variants: {
      variant: {
        neutral:  "bg-bg-neutral-subtle  text-icon-neutral-bold",
        info:     "bg-bg-info-bold       text-white",
        brand:    "bg-bg-brand-bold      text-icon-neutral-bold",
        warning:  "bg-bg-warning-bold    text-white",
        success:  "bg-bg-success-bold    text-white",
        negative: "bg-bg-danger-bold     text-white",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export type IconTileVariant = NonNullable<VariantProps<typeof iconTileVariants>["variant"]>

export interface IconTileProps extends React.ComponentProps<"div"> {
  variant?: IconTileVariant
  icon: IconComponent
}

function IconTile({
  className,
  variant = "neutral",
  icon: Icon,
  ...props
}: IconTileProps) {
  return (
    <div
      data-slot="icon-tile"
      data-variant={variant}
      className={cn(iconTileVariants({ variant }), className)}
      {...props}
    >
      <Icon aria-hidden className="size-6 shrink-0" />
    </div>
  )
}

export { IconTile, iconTileVariants }
