import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "./input"
import type { InputAppearance, InputSize } from "./input"

// Figma component: AmountCluster
// Sizes: lg | md | sm
// Props: label, helperText, showHelperText, size + flat Input pass-through
// Omits "prefix" (HTML RDFa attr, string) and "onChange" (div vs input event) to avoid type conflicts.

export type AmountClusterSize = InputSize

export interface AmountClusterProps
  extends Omit<React.ComponentProps<"div">, "prefix" | "onChange"> {
  // ── Cluster-level ──────────────────────────────────────────────────────────
  size?: AmountClusterSize
  label?: string
  helperText?: string
  showHelperText?: boolean
  // ── Input pass-through ─────────────────────────────────────────────────────
  appearance?: InputAppearance
  prefix?: React.ReactNode
  showPrefix?: boolean
  suffix?: React.ReactNode
  showSuffix?: boolean
  disabled?: boolean
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const labelFont: Record<AmountClusterSize, string> = {
  lg: "text-base font-medium leading-base text-text-neutral-subtle",
  md: "text-base font-medium leading-base text-text-neutral-subtle",
  sm: "text-sm font-regular leading-sm text-text-neutral-subtle",
}

function AmountCluster({
  className,
  size = "lg",
  label = "label",
  helperText = "= $---.-- MXN",
  showHelperText = true,
  appearance = "default",
  prefix = "$",
  showPrefix = true,
  suffix = "$",
  showSuffix = true,
  disabled = false,
  value,
  defaultValue,
  placeholder,
  onChange,
  ...props
}: AmountClusterProps) {
  return (
    <div
      data-slot="amount-cluster"
      data-size={size}
      className={cn(
        "flex flex-col items-start",
        size === "lg" ? "gap-2" : "gap-0",
        className,
      )}
      {...props}
    >
      <span
        data-slot="label"
        className={cn("w-full shrink-0 break-words not-italic", labelFont[size])}
      >
        {label}
      </span>

      <Input
        size={size}
        appearance={appearance}
        disabled={disabled}
        prefix={prefix}
        showPrefix={showPrefix}
        suffix={suffix}
        showSuffix={showSuffix}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />

      {showHelperText && (
        <span
          data-slot="helper-text"
          className="w-full shrink-0 break-words not-italic text-sm font-regular leading-sm text-text-neutral-subtlest"
        >
          {helperText}
        </span>
      )}
    </div>
  )
}

export { AmountCluster }
