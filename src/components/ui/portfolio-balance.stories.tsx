import type { Meta, StoryObj } from "@storybook/react-vite"
import { PortfolioBalance } from "./portfolio-balance"

const ALL_SIZES = ["md", "sm"] as const
const ALL_VARIANTS = ["positive", "negative"] as const

const meta = {
  component: PortfolioBalance,
  title: "UI/PortfolioBalance",
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "positive",
    label: "Total balance",
    value: "100,000.00",
    helperText: "= $1,720,000.00 MXN",
    badgeValue: "+$3,200.00",
    badgeCaption: "+3.2% today",
    showBadgeIcon: true,
    showBadgeValue: true,
    showBadgeCaption: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ALL_SIZES,
      description: "md = large amount (40px bold) with helper text. sm = medium amount (30px) without helper text.",
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ALL_VARIANTS,
      description: "positive = success Badge. negative = danger Badge.",
      table: { defaultValue: { summary: "positive" } },
    },
    label: {
      control: "text",
      description: "Label shown above the amount (e.g. \"Total balance\").",
    },
    value: {
      control: "text",
      description: "The balance amount to display (e.g. \"100,000.00\").",
    },
    helperText: {
      control: "text",
      description: "Conversion text shown below the amount (only visible in size=md by default).",
    },
    badgeValue: {
      control: "text",
      description: "Primary badge value (e.g. \"+$3,200.00\").",
    },
    badgeCaption: {
      control: "text",
      description: "Badge caption text (e.g. \"+3.2% today\").",
    },
    showBadgeIcon: {
      control: "boolean",
      description: "Whether to show the trend icon inside the badge.",
    },
    showBadgeValue: {
      control: "boolean",
      description: "Whether to show the value text inside the badge.",
    },
    showBadgeCaption: {
      control: "boolean",
      description: "Whether to show the caption text inside the badge.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A standalone portfolio balance widget — AmountCluster showing the total value + Badge showing today's performance. Not wrapped in a Card. Has four variants driven by size × variant. Matches the Figma PortfolioBalance component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-6 bg-bg-neutral-subtlest rounded-3xl border border-border-neutral-subtle w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PortfolioBalance>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const PositiveMd: Story = {
  name: "Positive / md",
  args: {
    size: "md",
    variant: "positive",
    label: "Total balance",
    value: "100,000.00",
    helperText: "= $1,720,000.00 MXN",
    badgeValue: "+$3,200.00",
    badgeCaption: "+3.2% today",
  },
}

export const NegativeMd: Story = {
  name: "Negative / md",
  args: {
    size: "md",
    variant: "negative",
    label: "Total balance",
    value: "96,800.00",
    helperText: "= $1,664,960.00 MXN",
    badgeValue: "-$3,200.00",
    badgeCaption: "-3.2% today",
  },
}

export const PositiveSm: Story = {
  name: "Positive / sm",
  args: {
    size: "sm",
    variant: "positive",
    label: "Total balance",
    value: "100,000.00",
    badgeValue: "+$3,200.00",
    badgeCaption: "+3.2% today",
  },
}

export const NegativeSm: Story = {
  name: "Negative / sm",
  args: {
    size: "sm",
    variant: "negative",
    label: "Total balance",
    value: "96,800.00",
    badgeValue: "-$3,200.00",
    badgeCaption: "-3.2% today",
  },
}

export const AllVariants: Story = {
  name: "All 4 variants",
  render: () => (
    <div className="flex flex-wrap gap-8 p-6 bg-bg-neutral-subtlest rounded-3xl border border-border-neutral-subtle">
      <PortfolioBalance
        size="md" variant="positive"
        label="Total balance"
        value="100,000.00"
        helperText="= $1,720,000.00 MXN"
        badgeValue="+$3,200.00"
        badgeCaption="+3.2% today"
      />
      <PortfolioBalance
        size="md" variant="negative"
        label="Total balance"
        value="96,800.00"
        helperText="= $1,664,960.00 MXN"
        badgeValue="-$3,200.00"
        badgeCaption="-3.2% today"
      />
      <PortfolioBalance
        size="sm" variant="positive"
        label="Total balance"
        value="100,000.00"
        badgeValue="+$3,200.00"
        badgeCaption="+3.2% today"
      />
      <PortfolioBalance
        size="sm" variant="negative"
        label="Total balance"
        value="96,800.00"
        badgeValue="-$3,200.00"
        badgeCaption="-3.2% today"
      />
    </div>
  ),
  decorators: [],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "All four size × variant combinations side by side.",
      },
    },
  },
}
