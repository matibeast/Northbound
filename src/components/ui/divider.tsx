import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "shrink-0 bg-bg-neutral-subtle rounded-full",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical: "h-full w-px",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface DividerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical"
}

function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div
      data-slot="divider"
      data-orientation={orientation}
      role="separator"
      aria-orientation={orientation}
      className={cn(dividerVariants({ orientation }), className)}
      {...props}
    />
  )
}

export { Divider, dividerVariants }
