import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Design tokens used (sourced from styles/tokens/semantics.css → primitives.css)
//
// State          BG token                                    Border token                              Text token
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// default        --color-background-neutral-subtlest-default  --color-border-neutral-subtle-default     --color-text-neutral-bold-default
// selected       --color-background-brand-bold-default        --color-border-brand-bold-default         --color-text-neutral-bold-default
// pressed        --color-background-neutral-subtlest-pressed  --color-border-neutral-subtle-pressed     --color-text-neutral-bold-pressed
// focus          --color-background-neutral-subtlest-default  --color-border-info-bold-default (4px)    --color-text-neutral-bold-default
// disabled       --color-background-neutral-subtlest-disabled --color-border-neutral-subtle-disabled    --color-text-neutral-bold-disabled

const chipVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer items-center justify-center",
    "rounded-full border px-3 py-2 min-w-[50px]",
    "text-sm font-regular leading-sm whitespace-nowrap",
    "select-none transition-colors outline-none",
  ].join(" "),
  {
    variants: {
      appearance: {
        default: [
          "bg-bg-neutral-subtlest border-border-neutral-subtle text-text-neutral-bold",
          "hover:bg-bg-neutral-subtlest-hovered hover:border-border-neutral-subtle-hovered",
          "active:bg-bg-neutral-subtlest-pressed active:border-border-neutral-subtle-pressed active:text-text-neutral-bold-pressed",
          "focus-visible:border-4 focus-visible:border-border-info-bold",
          "disabled:bg-bg-neutral-subtlest-disabled disabled:border-border-neutral-subtle-disabled disabled:text-text-neutral-bold-disabled disabled:pointer-events-none disabled:cursor-default",
        ].join(" "),
        pressed: "bg-bg-neutral-subtlest-pressed border-border-neutral-subtle-pressed text-text-neutral-bold-pressed",
        focus: "bg-bg-neutral-subtlest border-4 border-border-info-bold text-text-neutral-bold",
        disabled: "bg-bg-neutral-subtlest-disabled border-border-neutral-subtle-disabled text-text-neutral-bold-disabled pointer-events-none cursor-default",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        appearance: "default",
        selected: true,
        className: [
          "bg-bg-brand-bold border-border-brand-bold",
          "hover:bg-bg-brand-bold-hovered hover:border-border-brand-bold-hovered",
          "active:bg-bg-brand-bold-pressed active:border-border-brand-bold-pressed",
          "disabled:bg-bg-brand-bold-disabled disabled:border-border-brand-bold-disabled",
        ].join(" "),
      },
    ],
    defaultVariants: {
      appearance: "default",
      selected: false,
    },
  }
)

export type ChipAppearance = "default" | "pressed" | "focus" | "disabled"

export interface ChipProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  children?: React.ReactNode
  appearance?: ChipAppearance
  selected?: boolean
}

function Chip({
  className,
  appearance = "default",
  selected = false,
  disabled,
  children = "Label",
  ...props
}: ChipProps) {
  const isDisabled = disabled || appearance === "disabled"

  return (
    <button
      type="button"
      data-slot="chip"
      data-appearance={appearance}
      aria-pressed={selected}
      disabled={isDisabled}
      className={cn(chipVariants({ appearance, selected }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

export { Chip, chipVariants }
