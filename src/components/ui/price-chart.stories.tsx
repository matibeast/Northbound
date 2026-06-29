import type { Meta, StoryObj } from "@storybook/react-vite"
import { PriceChart, DEFAULT_PERIODS } from "./price-chart"
import type { BadgeVariant } from "./badge"

const ALL_BADGE_VARIANTS: BadgeVariant[] = ["success", "danger", "info"]
const ALL_SPARKLINE_VARIANTS = ["brand", "positive", "negative"] as const
const ALL_SPARKLINE_DIRECTIONS = ["left", "right"] as const

const meta = {
  component: PriceChart,
  title: "UI/PriceChart",
  tags: ["autodocs"],
  args: {
    title: "Past 30 days",
    badgeValue: "+6.2%",
    badgeVariant: "success",
    startDateLabel: "May 23",
    endDateLabel: "Today",
    sparklineVariant: "positive",
    sparklineDirection: "left",
    defaultSelectedPeriod: "1M",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Label shown on the left of the section header.",
    },
    badgeValue: {
      control: "text",
      description: "Performance value shown in the badge (e.g. \"+6.2%\").",
    },
    badgeVariant: {
      control: "select",
      options: ALL_BADGE_VARIANTS,
      description: "Badge colour — should match the price direction.",
      table: { defaultValue: { summary: "success" } },
    },
    startDateLabel: {
      control: "text",
      description: "Left date label shown below the sparkline.",
    },
    endDateLabel: {
      control: "text",
      description: "Right date label shown below the sparkline.",
    },
    sparklineVariant: {
      control: "select",
      options: ALL_SPARKLINE_VARIANTS,
      description: "Sparkline colour — brand (gold), positive (green), negative (red).",
      table: { defaultValue: { summary: "positive" } },
    },
    sparklineDirection: {
      control: "select",
      options: ALL_SPARKLINE_DIRECTIONS,
      description: "left = rising trend, right = falling trend (horizontal mirror).",
      table: { defaultValue: { summary: "left" } },
    },
    defaultSelectedPeriod: {
      control: "select",
      options: DEFAULT_PERIODS.map((p) => p.value),
      description: "Uncontrolled: period selected on first render.",
      table: { defaultValue: { summary: "1M" } },
    },
    periods: {
      control: false,
      description: "Time period chips rendered in the ChipGroup.",
    },
    selectedPeriod: {
      control: false,
      description: "Controlled: currently selected period value.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Card showing an asset price chart over a selectable time period. Composes Card (badge header), Sparkline, date labels, and ChipGroup. Matches the Figma PriceChart component.",
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
} satisfies Meta<typeof PriceChart>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Positive: Story = {
  name: "Positive (rising)",
  args: {
    title: "Past 30 days",
    badgeValue: "+6.2%",
    badgeVariant: "success",
    sparklineVariant: "positive",
    sparklineDirection: "left",
    startDateLabel: "May 23",
    endDateLabel: "Today",
    defaultSelectedPeriod: "1M",
  },
}

export const Negative: Story = {
  name: "Negative (falling)",
  args: {
    title: "Past 30 days",
    badgeValue: "-3.1%",
    badgeVariant: "danger",
    sparklineVariant: "negative",
    sparklineDirection: "right",
    startDateLabel: "May 23",
    endDateLabel: "Today",
    defaultSelectedPeriod: "1M",
  },
}

export const Brand: Story = {
  name: "Brand (neutral trend)",
  args: {
    title: "Past 7 days",
    badgeValue: "+1.5%",
    badgeVariant: "success",
    sparklineVariant: "brand",
    sparklineDirection: "left",
    startDateLabel: "Jun 22",
    endDateLabel: "Today",
    defaultSelectedPeriod: "1W",
  },
}

export const YearView: Story = {
  name: "Year view",
  args: {
    title: "Past 12 months",
    badgeValue: "+24.8%",
    badgeVariant: "success",
    sparklineVariant: "positive",
    sparklineDirection: "left",
    startDateLabel: "Jun 2024",
    endDateLabel: "Today",
    defaultSelectedPeriod: "1Y",
  },
}
