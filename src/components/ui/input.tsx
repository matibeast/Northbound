import * as React from "react"
import { cn } from "@/lib/utils"

// Figma component: Input
// Sizes:      lg (text-4xl bold) | md (text-3xl regular) | sm (text-base medium)
// Appearance: default | focused | filled | error
// States:     enabled | disabled
// Slots:      prefix (left, inside inner flex) | suffix (right, outside inner flex)

export type InputAppearance = "default" | "focused" | "filled" | "error"
export type InputSize = "lg" | "md" | "sm"

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size" | "prefix" | "type"> {
  size?: InputSize
  appearance?: InputAppearance
  /** Text or node shown to the left of the input value */
  prefix?: React.ReactNode
  /** Show/hide the prefix slot */
  showPrefix?: boolean
  /** Text or node shown to the right of the input value */
  suffix?: React.ReactNode
  /** Show/hide the suffix slot */
  showSuffix?: boolean
}

// ─── Container ─────────────────────────────────────────────────────────────
// sm always carries a border (transparent when disabled so size never jumps).
// md/lg are borderless except when focused.
// Container sets text-danger-bold for error — prefix, value, and suffix all inherit it.

const containerPadding: Record<InputSize, string> = {
  lg: "px-2 py-3",  // 8px · 12px
  md: "px-1 py-2",  // 4px · 8px
  sm: "px-4 py-2",  // 16px · 8px
}

function containerClasses(size: InputSize, appearance: InputAppearance, disabled: boolean) {
  const base = "inline-flex w-full items-end gap-2 rounded-lg transition-colors"
  const pad  = containerPadding[size]

  if (disabled) {
    return cn(
      base, pad,
      "bg-bg-neutral-subtle-disabled",
      // Preserve sm box size — disabled has no visible border, but we keep 1px transparent
      size === "sm" && "border border-transparent",
    )
  }

  if (size === "sm") {
    const style: Record<InputAppearance, string> = {
      default: "bg-bg-neutral-subtlest border   border-text-neutral-subtlest",
      focused: "bg-bg-neutral-subtlest border-4 border-border-info-bold",
      filled:  "bg-bg-neutral-subtlest border   border-text-neutral-bold",
      error:   "bg-bg-danger-subtle    border   border-border-danger-bold text-text-danger-bold",
    }
    return cn(base, pad, style[appearance])
  }

  // lg / md — border only on focused; error color set on container so it cascades down
  const style: Record<InputAppearance, string> = {
    default: "bg-bg-neutral-subtlest",
    focused: "bg-bg-neutral-subtlest border-4 border-border-info-bold",
    filled:  "bg-bg-neutral-subtlest",
    error:   "bg-bg-neutral-subtlest text-text-danger-bold",
  }
  return cn(base, pad, style[appearance])
}

// ─── Value (input element) typography + color ───────────────────────────────
// default  → neutral-subtle  (lighter, placeholder-like weight)
// focused / filled → neutral-bold  (near-black, user has interacted)
// error    → danger-bold     (explicit; also inherited via container for error)
// disabled → neutral-bold-disabled

const valueFontClass: Record<InputSize, string> = {
  lg: "text-4xl font-bold   leading-3xl",  // 40px / 700 / 34px
  md: "text-3xl font-normal leading-xl",   // 30px / 400 / 28px
  sm: "text-base font-medium leading-base", // 16px / 500 / 22px
}

function valueColorClass(appearance: InputAppearance, disabled: boolean): string {
  if (disabled) return "text-text-neutral-bold-disabled"
  return {
    default: "text-text-neutral-subtle",
    focused: "text-text-neutral-bold",
    filled:  "text-text-neutral-bold",
    error:   "text-text-danger-bold",
  }[appearance]
}

// ─── Adornment (prefix / suffix) typography + color ─────────────────────────
// Prefix/suffix are always medium weight at a smaller size than the value in lg/md.
// For error they inherit container's danger color (no explicit class).
// For disabled they use the subtlest-disabled token.

const adornmentFontClass: Record<InputSize, string> = {
  lg: "text-xl   font-medium leading-2xl",  // 22px / 500 / 32px
  md: "text-base font-medium leading-base", // 16px / 500 / 22px
  sm: "text-base font-medium leading-base", // 16px / 500 / 22px
}

function adornmentColorClass(appearance: InputAppearance, disabled: boolean): string {
  if (disabled) return "text-text-neutral-subtlest-disabled"
  // For error, no explicit color — inherits text-danger-bold from container
  if (appearance === "error") return ""
  return "text-text-neutral-subtlest"
}

// ─── Component ──────────────────────────────────────────────────────────────

function Input({
  className,
  size       = "sm",
  appearance = "default",
  disabled   = false,
  prefix,
  showPrefix = true,
  suffix,
  showSuffix = true,
  ...props
}: InputProps) {
  const adornFont  = adornmentFontClass[size]
  const adornColor = adornmentColorClass(appearance, disabled)
  const valueFont  = valueFontClass[size]
  const valueColor = valueColorClass(appearance, disabled)

  return (
    <div
      data-slot="input-root"
      data-size={size}
      data-appearance={appearance}
      className={containerClasses(size, appearance, disabled)}
    >
      {/* ── Inner flex: prefix + input (takes all available width) ─────── */}
      <div className="flex flex-1 items-end gap-2 min-w-0">
        {showPrefix && prefix !== undefined && (
          <span
            data-slot="prefix"
            className={cn("shrink-0 select-none whitespace-nowrap", adornFont, adornColor)}
          >
            {prefix}
          </span>
        )}
        <input
          data-slot="input"
          disabled={disabled}
          className={cn(
            "flex-1 min-w-0 bg-transparent outline-none",
            valueFont,
            valueColor,
            "placeholder:text-text-neutral-subtlest",
            "disabled:pointer-events-none disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
      </div>

      {/* ── Suffix: sits outside inner flex, aligned at end ─────────────── */}
      {showSuffix && suffix !== undefined && (
        <span
          data-slot="suffix"
          className={cn("shrink-0 select-none whitespace-nowrap", adornFont, adornColor)}
        >
          {suffix}
        </span>
      )}
    </div>
  )
}

export { Input }
