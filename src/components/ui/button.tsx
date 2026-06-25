import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Figma component: Button
// Variants: primary | secondary | destructive
// Sizes: md | sm
// States: default / hover / active (pressed) / focus-visible / disabled
// Extras: iconStart, iconEnd, iconOnly

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

const buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer items-center justify-center",
    "rounded-full border",
    "font-semibold text-base leading-base whitespace-nowrap",
    "select-none transition-colors outline-none",
    "disabled:pointer-events-none",
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[22px]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "border-transparent bg-bg-brand-bold text-text-neutral-bold",
          "hover:bg-bg-brand-bold-hovered",
          "active:bg-bg-brand-bold-pressed",
          "focus-visible:border-4 focus-visible:border-border-info-bold",
          "disabled:bg-bg-brand-bold-disabled disabled:text-text-neutral-bold-disabled",
        ].join(" "),
        secondary: [
          "border-border-neutral-bold bg-bg-neutral-subtlest text-text-neutral-bold",
          "hover:bg-bg-neutral-subtlest-hovered hover:border-border-neutral-bold-hovered",
          "active:bg-bg-neutral-subtlest-pressed active:border-border-neutral-bold-pressed active:text-text-neutral-bold-pressed",
          "focus-visible:border-4 focus-visible:border-border-info-bold",
          "disabled:bg-bg-neutral-subtlest-disabled disabled:border-border-neutral-bold-disabled disabled:text-text-neutral-bold-disabled",
        ].join(" "),
        destructive: [
          "border-border-danger-subtle bg-bg-danger-subtle text-text-neutral-bold",
          "hover:bg-bg-danger-subtle-hovered hover:border-border-danger-subtle-hovered",
          "active:bg-bg-danger-subtle-pressed active:border-border-danger-subtle-pressed active:text-text-neutral-bold-pressed",
          "focus-visible:border-4 focus-visible:border-border-danger-bold",
          "disabled:bg-bg-danger-subtle-disabled disabled:border-border-danger-subtle-disabled disabled:text-text-danger-bold-disabled",
        ].join(" "),
      },
      size: {
        md: "px-6 py-3",
        sm: "px-4 py-2",
      },
      iconOnly: {
        true: "gap-0",
        false: "gap-2",
      },
    },
    compoundVariants: [
      { size: "md", iconOnly: true, className: "w-[46px]" },
      { size: "sm", iconOnly: true, className: "w-[38px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    iconStart?: IconComponent
    iconEnd?: IconComponent
    iconOnly?: boolean
  }

function Button({
  className,
  variant = "primary",
  size = "md",
  iconOnly = false,
  asChild = false,
  iconStart: IconStart,
  iconEnd: IconEnd,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, iconOnly }), className)}
      {...props}
    >
      {IconStart && <IconStart aria-hidden className="size-[22px] shrink-0" />}
      {!iconOnly && children}
      {!iconOnly && IconEnd && <IconEnd aria-hidden className="size-[22px] shrink-0" />}
    </Comp>
  )
}

export { Button, buttonVariants }
