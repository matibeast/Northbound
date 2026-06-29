import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChipGroup } from "./chip-group"
import type { ChipGroupItem } from "./chip-group"

const defaultItems: ChipGroupItem[] = [
  { value: "1", label: "Label" },
  { value: "2", label: "Label" },
  { value: "3", label: "Label" },
  { value: "4", label: "Label" },
  { value: "5", label: "Label" },
  { value: "6", label: "Label" },
]

const meta = {
  component: ChipGroup,
  title: "UI/ChipGroup",
  tags: ["autodocs"],
  args: {
    items: defaultItems,
    defaultValue: "1",
  },
  argTypes: {
    value: {
      control: "text",
      description: "Controlled: value of the currently selected chip",
    },
    defaultValue: {
      control: "text",
      description: "Uncontrolled: value selected on first render",
      table: { defaultValue: { summary: "undefined" } },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A single-select group of Chip pills laid out in a horizontal row. Mirrors Figma's ChipGroup component — chip visibility is controlled by which items are included in the `items` array (equivalent to Figma's showChip1–showChip6 props).",
      },
    },
  },
} satisfies Meta<typeof ChipGroup>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {}

// ─── Figma selections 1–6 ────────────────────────────────────────────────────

export const Selected1: Story = {
  name: "Selected / Chip 1",
  args: { defaultValue: "1" },
}

export const Selected2: Story = {
  name: "Selected / Chip 2",
  args: { defaultValue: "2" },
}

export const Selected3: Story = {
  name: "Selected / Chip 3",
  args: { defaultValue: "3" },
}

export const Selected4: Story = {
  name: "Selected / Chip 4",
  args: { defaultValue: "4" },
}

export const Selected5: Story = {
  name: "Selected / Chip 5",
  args: { defaultValue: "5" },
}

export const Selected6: Story = {
  name: "Selected / Chip 6",
  args: { defaultValue: "6" },
}

// ─── showChipN equivalents ───────────────────────────────────────────────────

export const FourItems: Story = {
  name: "4 chips (showChip5=false, showChip6=false)",
  args: {
    items: defaultItems.slice(0, 4),
    defaultValue: "1",
  },
}

export const TwoItems: Story = {
  name: "2 chips (showChip3–6=false)",
  args: {
    items: defaultItems.slice(0, 2),
    defaultValue: "1",
  },
}

// ─── With labels ─────────────────────────────────────────────────────────────

export const WithLabels: Story = {
  name: "With real labels",
  args: {
    items: [
      { value: "all", label: "All" },
      { value: "design", label: "Design" },
      { value: "engineering", label: "Engineering" },
      { value: "product", label: "Product" },
    ],
    defaultValue: "all",
  },
}

// ─── With disabled chip ───────────────────────────────────────────────────────

export const WithDisabled: Story = {
  name: "With disabled chip",
  args: {
    items: [
      { value: "1", label: "Label" },
      { value: "2", label: "Label" },
      { value: "3", label: "Label", disabled: true },
      { value: "4", label: "Label" },
    ],
    defaultValue: "1",
  },
}

// ─── Controlled ──────────────────────────────────────────────────────────────

export const Controlled: Story = {
  name: "Controlled",
  render: () => {
    const [selected, setSelected] = useState("1")
    return (
      <div className="flex flex-col gap-4">
        <ChipGroup
          items={defaultItems}
          value={selected}
          onChange={setSelected}
        />
        <p className="text-sm text-text-neutral-subtle">
          Selected: chip {selected}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled mode — parent owns the selected state via `value` + `onChange`.",
      },
    },
  },
}
