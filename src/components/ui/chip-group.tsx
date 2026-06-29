import * as React from "react"
import { cn } from "@/lib/utils"
import { Chip } from "./chip"
import type { ChipAppearance } from "./chip"

// Figma component: ChipGroup
// Layout: horizontal flex row, gap-3 (12px)
// Selection: single-select; controlled via `value` or uncontrolled via `defaultValue`
// Slots: up to N chips; visibility controlled by which items are in the `items` array
//        (mirrors Figma's showChip1–showChip6 pattern)

export interface ChipGroupItem {
  /** Display label — Figma default: "Label" */
  label?: string
  /** Unique key used for selection tracking */
  value: string
  /** Whether this chip is non-interactive */
  disabled?: boolean
  /** Override the chip's visual state */
  appearance?: ChipAppearance
}

export interface ChipGroupProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  /** Chips to render. Omitting an item is equivalent to Figma's showChipN=false. */
  items?: ChipGroupItem[]
  /** Controlled: value of the currently selected chip */
  value?: string
  /** Uncontrolled: value selected on first render */
  defaultValue?: string
  /** Called with the newly selected item's value */
  onChange?: (value: string) => void
}

function ChipGroup({
  className,
  items = [],
  value,
  defaultValue,
  onChange,
  ...props
}: ChipGroupProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue,
  )

  const selected = isControlled ? value : internalValue

  function handleSelect(itemValue: string) {
    if (!isControlled) setInternalValue(itemValue)
    onChange?.(itemValue)
  }

  return (
    <div
      data-slot="chip-group"
      role="group"
      className={cn("flex flex-wrap items-center gap-3", className)}
      {...props}
    >
      {items.map((item) => (
        <Chip
          key={item.value}
          appearance={item.appearance ?? "default"}
          selected={selected === item.value}
          disabled={item.disabled}
          onClick={() => !item.disabled && handleSelect(item.value)}
        >
          {item.label ?? "Label"}
        </Chip>
      ))}
    </div>
  )
}

export { ChipGroup }
