import type { Meta, StoryObj } from "@storybook/react-vite"
import { PositionSummary } from "./position-summary"

const meta = {
  component: PositionSummary,
  title: "UI/PositionSummary",
  tags: ["autodocs"],
  args: {
    marketValueLabel: "Market value",
    marketValue: "$6,240.18",
    marketValueHelper: "= $107,330.83 MXN",
    shareCount: "11.51",
    shareLabel: "shares",
    todayReturnTitle: "Today's return",
    todayReturn: "+$55.20 • +0.9%",
    todayReturnAppearance: "positive",
    totalReturnTitle: "Total return",
    totalReturn: "+$632.40 • +11.3%",
    totalReturnAppearance: "positive",
    averageCostTitle: "Average cost",
    averageCost: "$487.30",
  },
  argTypes: {
    marketValueLabel: {
      control: "text",
      description: "Label above the market value amount.",
    },
    marketValue: {
      control: "text",
      description: "Primary market value displayed (e.g. \"$6,240.18\").",
    },
    marketValueHelper: {
      control: "text",
      description: "Helper text below the market value (e.g. exchange conversion).",
    },
    shareCount: {
      control: "text",
      description: "Number of shares held, shown on the right.",
    },
    shareLabel: {
      control: "text",
      description: "Label below the share count (default: \"shares\").",
    },
    todayReturn: {
      control: "text",
      description: "Today's return value string (e.g. \"+$55.20 • +0.9%\").",
    },
    todayReturnAppearance: {
      control: "select",
      options: ["neutral", "positive", "negative"],
      description: "DataRow colour for today's return.",
      table: { defaultValue: { summary: "positive" } },
    },
    totalReturn: {
      control: "text",
      description: "Total return value string.",
    },
    totalReturnAppearance: {
      control: "select",
      options: ["neutral", "positive", "negative"],
      description: "DataRow colour for total return.",
      table: { defaultValue: { summary: "positive" } },
    },
    averageCost: {
      control: "text",
      description: "Average cost basis per share.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Card summarising a single position — market value, share count, today's return, total return, and average cost. Composes Card (no header), AmountCluster, DataRow, and Divider. Matches the Figma PositionSummary component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[398px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PositionSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Positive: Story = {
  name: "Positive returns",
  args: {
    marketValue: "$6,240.18",
    marketValueHelper: "= $107,330.83 MXN",
    shareCount: "11.51",
    todayReturn: "+$55.20 • +0.9%",
    todayReturnAppearance: "positive",
    totalReturn: "+$632.40 • +11.3%",
    totalReturnAppearance: "positive",
    averageCost: "$487.30",
  },
}

export const Negative: Story = {
  name: "Negative returns",
  args: {
    marketValue: "$3,059.92",
    marketValueHelper: "= $52,630.38 MXN",
    shareCount: "6.50",
    todayReturn: "-$12.40 • -0.4%",
    todayReturnAppearance: "negative",
    totalReturn: "-$88.00 • -2.8%",
    totalReturnAppearance: "negative",
    averageCost: "$483.52",
  },
}

export const Breakeven: Story = {
  name: "Break-even",
  args: {
    marketValue: "$4,800.00",
    marketValueHelper: "= $82,560.00 MXN",
    shareCount: "10.00",
    todayReturn: "$0.00 • 0.0%",
    todayReturnAppearance: "neutral",
    totalReturn: "$0.00 • 0.0%",
    totalReturnAppearance: "neutral",
    averageCost: "$480.00",
  },
}
