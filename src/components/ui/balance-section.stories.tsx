import type { Meta, StoryObj } from "@storybook/react-vite"
import { BalanceSection } from "./balance-section"

const meta = {
  component: BalanceSection,
  title: "UI/BalanceSection",
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "positive",
    label: "Portfolio value",
    value: "12,480.50",
    helperText: "= $--.-- MXN",
    showHelperText: true,
    badgeValue: "+$340.00",
    badgeCaption: "+2.8% today",
    showBadgeIcon: true,
    showBadgeValue: true,
    showBadgeCaption: true,
    showButton: true,
    buttonLabel: "Swap",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["md", "sm"],
      description: "Size passed to PortfolioBalance — md shows a larger value, sm is compact.",
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ["positive", "negative"],
      description: "Determines the Badge colour: success (positive) or danger (negative).",
      table: { defaultValue: { summary: "positive" } },
    },
    label: { control: "text", description: "Caption above the portfolio value." },
    value: { control: "text", description: "Portfolio value string (e.g. \"12,480.50\")." },
    helperText: { control: "text", description: "Converted currency helper text below the value." },
    showHelperText: { control: "boolean", description: "Whether to show the helper text." },
    badgeValue: { control: "text", description: "Change value inside the Badge." },
    badgeCaption: { control: "text", description: "Change caption inside the Badge." },
    showBadgeIcon: { control: "boolean", description: "Show the trend arrow icon in the Badge." },
    showBadgeValue: { control: "boolean", description: "Show the change value in the Badge." },
    showBadgeCaption: { control: "boolean", description: "Show the change caption in the Badge." },
    showButton: {
      control: "boolean",
      description: "Whether to render the CTA (Swap) button below the balance.",
      table: { defaultValue: { summary: "true" } },
    },
    buttonLabel: {
      control: "text",
      description: "Label for the CTA button.",
      table: { defaultValue: { summary: "Swap" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A portfolio balance section combining PortfolioBalance (AmountCluster + Badge) with a primary CTA button. The button can be replaced with a custom node via swapAction. Matches Figma node 119:3435.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-bg-neutral-subtlest p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BalanceSection>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Positive: Story = {
  name: "positive — gains",
  args: {
    variant: "positive",
    label: "Portfolio value",
    value: "12,480.50",
    badgeValue: "+$340.00",
    badgeCaption: "+2.8% today",
  },
}

export const Negative: Story = {
  name: "negative — losses",
  args: {
    variant: "negative",
    label: "Portfolio value",
    value: "11,800.00",
    badgeValue: "-$120.00",
    badgeCaption: "-1.1% today",
  },
}

export const NoButton: Story = {
  name: "no CTA button",
  args: { showButton: false },
}

export const SmallSize: Story = {
  name: "size=sm — compact balance",
  args: { size: "sm", showHelperText: false },
}
