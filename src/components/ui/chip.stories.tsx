import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Chip } from "./chip"

const meta = {
  component: Chip,
  title: "UI/Chip",
  tags: ["autodocs"],
  args: {
    children: "Label",
    appearance: "default",
    selected: false,
    disabled: false,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["default", "pressed", "focus", "disabled"],
      description:
        "Visual state of the chip. Use `default` in production — `pressed`, `focus`, and `disabled` are design-system reference states.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    selected: {
      control: "boolean",
      description: "Toggles the chip into its selected (brand-gold) state.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Makes the chip non-interactive and renders it in the disabled visual style.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Label text displayed inside the chip.",
      table: {
        defaultValue: { summary: "Label" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact, pill-shaped toggle element used for filtering, tagging, or multi-select inputs. Follows the Northbound design token system — appearance states map directly to Figma component variants.",
      },
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {}

// ─── Individual states (match Figma variants 1:1) ────────────────────────────

export const Default: Story = {
  name: "Default",
  args: { appearance: "default", selected: false },
}

export const Selected: Story = {
  name: "Selected",
  args: { appearance: "default", selected: true },
}

export const Pressed: Story = {
  name: "Pressed",
  args: { appearance: "pressed" },
}

export const Focus: Story = {
  name: "Focus",
  args: { appearance: "focus" },
}

export const Disabled: Story = {
  name: "Disabled",
  args: { appearance: "disabled", disabled: true },
}

// ─── All states side-by-side ──────────────────────────────────────────────────

export const AllStates: Story = {
  name: "All States",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip {...args} appearance="default" selected={false}>
        Default
      </Chip>
      <Chip {...args} appearance="default" selected>
        Selected
      </Chip>
      <Chip {...args} appearance="pressed">
        Pressed
      </Chip>
      <Chip {...args} appearance="focus">
        Focus
      </Chip>
      <Chip {...args} appearance="disabled" disabled>
        Disabled
      </Chip>
    </div>
  ),
  parameters: {
    controls: { exclude: ["appearance", "selected", "disabled", "children"] },
    docs: {
      description: {
        story:
          "Side-by-side reference of all five Figma chip variants. Matches node 115:604.",
      },
    },
  },
}

// ─── Group toggle (single-select) ────────────────────────────────────────────

export const GroupToggle: Story = {
  name: "Group Toggle",
  render: () => {
    const [active, setActive] = useState<string>("All")
    const options = ["All", "Design", "Engineering", "Product"]
    return (
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <Chip
            key={opt}
            selected={active === opt}
            onClick={() => setActive(opt)}
          >
            {opt}
          </Chip>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing chips used as a single-select filter group.",
      },
    },
  },
}

// ─── Multi-select ─────────────────────────────────────────────────────────────

export const MultiSelect: Story = {
  name: "Multi-select",
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set())
    const tags = ["React", "TypeScript", "CSS", "Figma", "Storybook"]

    const toggle = (tag: string) =>
      setSelected((prev) => {
        const next = new Set(prev)
        next.has(tag) ? next.delete(tag) : next.add(tag)
        return next
      })

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip
              key={tag}
              selected={selected.has(tag)}
              onClick={() => toggle(tag)}
            >
              {tag}
            </Chip>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-neutral-subtle-default)]">
          {selected.size === 0
            ? "No tags selected"
            : `Selected: ${[...selected].join(", ")}`}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multi-select pattern — tap any chip to toggle it on or off.",
      },
    },
  },
}
