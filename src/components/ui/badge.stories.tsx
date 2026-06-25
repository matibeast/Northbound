import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "./badge"
import type { BadgeVariant } from "./badge"

const ALL_VARIANTS: BadgeVariant[] = ["success", "danger", "info"]

const meta = {
  component: Badge,
  title: "UI/Badge",
  tags: ["autodocs"],
  args: {
    variant: "success",
    value: "+$--.--",
    caption: "+1.5% today",
    showIcon: true,
    showValue: true,
    showCaption: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ALL_VARIANTS,
      description: "Controls background color, icon, and text color.",
      table: { defaultValue: { summary: "success" } },
    },
    value: {
      control: "text",
      description: "Primary bold value displayed in the badge.",
    },
    caption: {
      control: "text",
      description: "Secondary caption text displayed after the value.",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the variant icon.",
    },
    showValue: {
      control: "boolean",
      description: "Whether to show the value text.",
    },
    showCaption: {
      control: "boolean",
      description: "Whether to show the caption text.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact status badge that pairs a semantic color with an icon, value, and caption. Used to surface financial or metric changes at a glance. Matches the Figma Badge component — each variant maps 1:1 to a Figma node.",
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVariants: Story = {
  name: "All Variants",
  render: (args) => (
    <div className="flex flex-col items-start gap-3">
      {ALL_VARIANTS.map((variant) => (
        <Badge key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ["variant"] },
    docs: {
      description: {
        story: "All three semantic variants stacked. Toggle controls above to update all at once.",
      },
    },
  },
}

export const Success: Story = {
  name: "Success",
  args: { variant: "success" },
}

export const Danger: Story = {
  name: "Danger",
  args: { variant: "danger" },
}

export const Info: Story = {
  name: "Info",
  args: { variant: "info" },
}

export const IconOnly: Story = {
  name: "Icon Only",
  args: { showValue: false, showCaption: false },
}

export const ValueOnly: Story = {
  name: "Value Only",
  args: { showIcon: false, showCaption: false },
}
