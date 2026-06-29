import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoldingRow } from "./holding-row"
import type { SparklineVariant, SparklineDirection } from "./holding-row"
import type { BadgeVariant } from "./badge"

const ALL_SPARKLINE_VARIANTS: SparklineVariant[] = ["brand", "positive", "negative"]
const ALL_SPARKLINE_DIRECTIONS: SparklineDirection[] = ["left", "right"]
const ALL_CHANGE_VARIANTS: BadgeVariant[] = ["success", "danger", "info"]

const meta = {
  component: HoldingRow,
  title: "UI/HoldingRow",
  tags: ["autodocs"],
  args: {
    title: "title",
    label: "label",
    avatarLabel: "AAAA",
    showAvatar: true,
    sparklineVariant: "brand",
    sparklineDirection: "left",
    value: "$--.--",
    change: "+$--.--",
    changeVariant: "success",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Asset name — forwarded to AssetHeader.",
    },
    label: {
      control: "text",
      description: "Ticker or secondary label — forwarded to AssetHeader.",
    },
    avatarLabel: {
      control: "text",
      description: "Initials or ticker shown inside the Avatar (e.g. \"AAPL\").",
    },
    showAvatar: {
      control: "boolean",
      description: "Whether to render the Avatar inside AssetHeader.",
    },
    sparklineVariant: {
      control: "select",
      options: ALL_SPARKLINE_VARIANTS,
      description: "Sparkline color — brand (gold), positive (green), negative (red).",
      table: { defaultValue: { summary: "brand" } },
    },
    sparklineDirection: {
      control: "select",
      options: ALL_SPARKLINE_DIRECTIONS,
      description: "left = rising trend, right = falling trend (horizontal mirror).",
      table: { defaultValue: { summary: "left" } },
    },
    value: {
      control: "text",
      description: "Primary value displayed top-right (e.g. \"$12,450.00\").",
    },
    change: {
      control: "text",
      description: "Change amount shown in the Badge (e.g. \"+$120.00\" or \"+1.5%\").",
    },
    changeVariant: {
      control: "select",
      options: ALL_CHANGE_VARIANTS,
      description: "Badge colour — should mirror the direction of the change.",
      table: { defaultValue: { summary: "success" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A single portfolio holding row composed of AssetHeader (identity) + Sparkline (trend) + value + Badge (change). Matches the Figma HoldingRow component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[351px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HoldingRow>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Positive: Story = {
  name: "Positive",
  args: {
    title: "Apple Inc.",
    label: "AAPL",
    avatarLabel: "AAPL",
    value: "$12,450.00",
    change: "+$340.00",
    changeVariant: "success",
    sparklineVariant: "positive",
    sparklineDirection: "left",
  },
}

export const Negative: Story = {
  name: "Negative",
  args: {
    title: "Tesla",
    label: "TSLA",
    avatarLabel: "TSLA",
    value: "$3,210.00",
    change: "-$120.00",
    changeVariant: "danger",
    sparklineVariant: "negative",
    sparklineDirection: "right",
  },
}

export const Brand: Story = {
  name: "Brand (neutral)",
  args: {
    title: "Bitcoin",
    label: "BTC",
    avatarLabel: "BTC",
    value: "$28,900.00",
    change: "+$200.00",
    changeVariant: "success",
    sparklineVariant: "brand",
    sparklineDirection: "left",
  },
}

export const NoAvatar: Story = {
  name: "No Avatar",
  args: {
    showAvatar: false,
    title: "Bitcoin",
    label: "BTC",
    value: "$28,900.00",
    change: "+$200.00",
  },
}

export const PortfolioList: Story = {
  name: "Portfolio List",
  render: () => (
    <div className="flex flex-col w-[351px] overflow-hidden rounded-3xl">
      <HoldingRow
        title="Apple Inc."  label="AAPL" avatarLabel="AAPL"
        value="$12,450.00"  change="+$340.00"  changeVariant="success"
        sparklineVariant="positive" sparklineDirection="left"
      />
      <HoldingRow
        title="Bitcoin"     label="BTC"  avatarLabel="BTC"
        value="$28,900.00"  change="+$1,200.00" changeVariant="success"
        sparklineVariant="brand"    sparklineDirection="left"
      />
      <HoldingRow
        title="Tesla"       label="TSLA" avatarLabel="TSLA"
        value="$3,210.00"   change="-$120.00"   changeVariant="danger"
        sparklineVariant="negative" sparklineDirection="right"
      />
      <HoldingRow
        title="Ethereum"    label="ETH"  avatarLabel="ETH"
        value="$1,840.00"   change="+$45.00"    changeVariant="success"
        sparklineVariant="positive" sparklineDirection="left"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Multiple HoldingRows stacked as a portfolio list inside a Card.",
      },
    },
  },
}
