import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Figma nodes: 116:891 (initials/md), 116:893 (image/md),
//              116:1029 (initials/sm), 116:1031 (image/sm)

const avatarVariants = cva(
  "relative shrink-0 overflow-hidden",
  {
    variants: {
      variant: {
        initials: "bg-bg-neutral-subtle flex items-center justify-center",
        image: "",
      },
      size: {
        // md → 40×40 px, --borderradius-base = 8 px (mapped via --radius-lg)
        md: "size-10 rounded-lg",
        // sm → 20×20 px, --borderradius-sm = 4 px
        sm: "size-5 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "initials",
      size: "md",
    },
  }
)

const avatarLabelVariants = cva(
  // Figma: text-black → --color-text-neutral-bold-default (#0e121b)
  "font-normal text-text-neutral-bold whitespace-nowrap select-none",
  {
    variants: {
      size: {
        md: "text-sm leading-sm",  // 14 px / 20 px
        sm: "text-[7px] leading-[10px]",                                               //  7 px / 10 px
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export type AvatarVariant = "initials" | "image"
export type AvatarSize = "md" | "sm"

export interface AvatarProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  variant?: AvatarVariant
  size?: AvatarSize
  /** Initials to display when variant="initials" (e.g. "AB") */
  label?: string
  /** Image URL when variant="image" */
  src?: string
  /** Alt text for the image */
  alt?: string
}

function Avatar({
  className,
  variant = "initials",
  size = "md",
  label,
  src,
  alt = "",
  ...props
}: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      data-variant={variant}
      data-size={size}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    >
      {variant === "image" && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      )}
      {variant === "initials" && label && (
        <span className={cn(avatarLabelVariants({ size }))}>
          {label}
        </span>
      )}
    </div>
  )
}

export { Avatar, avatarVariants, avatarLabelVariants }
