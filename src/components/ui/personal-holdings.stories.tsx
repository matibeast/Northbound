import type { Meta, StoryObj } from "@storybook/react-vite"
import { PersonalHoldings } from "./personal-holdings"
import { PlusIcon } from "./icon"

const meta = {
  component: PersonalHoldings,
  title: "UI/PersonalHoldings",
  tags: ["autodocs"],
  args: {
    showHeader: false,
    title: "My Holdings",
  },
  argTypes: {
    showHeader: {
      control: "boolean",
      description: "Whether to render the section header at the top of the card.",
    },
    title: {
      control: "text",
      description: "Section header title (only visible when showHeader=true).",
    },
    buttonLabel: {
      control: "text",
      description: "Button label in header (only visible when showHeader=true).",
    },
    items: {
      control: false,
      description: "Array of holding items. Each row is a HoldingRow with title, label, value, change, etc.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Card listing the user's personal portfolio holdings. Each row is a HoldingRow (AssetHeader + Sparkline + value + Badge) separated by Dividers. Matches the Figma PersonalHoldings component.",
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
} satisfies Meta<typeof PersonalHoldings>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {
  name: "Default (no header)",
  args: {
    showHeader: false,
    items: [
      {
        title: "VOO",
        label: "S&P 500 ETF",
        avatarLabel: "VOO",
        sparklineVariant: "brand",
        sparklineDirection: "left",
        value: "$6,240.18",
        change: "+1.8%",
        changeVariant: "success",
      },
      {
        title: "AAPL",
        label: "Apple",
        avatarLabel: "AAPL",
        sparklineVariant: "positive",
        sparklineDirection: "left",
        value: "$3,180.40",
        change: "+0.9%",
        changeVariant: "success",
      },
      {
        title: "MSFT",
        label: "Microsoft",
        avatarLabel: "MSFT",
        sparklineVariant: "negative",
        sparklineDirection: "right",
        value: "$3,059.92",
        change: "-0.4%",
        changeVariant: "danger",
      },
    ],
  },
}

export const WithHeader: Story = {
  name: "With header + button",
  args: {
    showHeader: true,
    title: "My Holdings",
    buttonLabel: "Add",
    buttonIcon: PlusIcon,
    items: [
      {
        title: "VOO",
        label: "S&P 500 ETF",
        avatarLabel: "VOO",
        sparklineVariant: "brand",
        sparklineDirection: "left",
        value: "$6,240.18",
        change: "+1.8%",
        changeVariant: "success",
      },
      {
        title: "AAPL",
        label: "Apple",
        avatarLabel: "AAPL",
        sparklineVariant: "positive",
        sparklineDirection: "left",
        value: "$3,180.40",
        change: "+0.9%",
        changeVariant: "success",
      },
      {
        title: "MSFT",
        label: "Microsoft",
        avatarLabel: "MSFT",
        sparklineVariant: "negative",
        sparklineDirection: "right",
        value: "$3,059.92",
        change: "-0.4%",
        changeVariant: "danger",
      },
    ],
  },
}

export const SingleHolding: Story = {
  name: "Single holding",
  args: {
    showHeader: true,
    title: "My Holdings",
    items: [
      {
        title: "BTC",
        label: "Bitcoin",
        avatarLabel: "BTC",
        sparklineVariant: "brand",
        sparklineDirection: "left",
        value: "$28,900.00",
        change: "+$1,200.00",
        changeVariant: "success",
      },
    ],
  },
}

export const AllNegative: Story = {
  name: "All negative",
  args: {
    showHeader: false,
    items: [
      {
        title: "TSLA",
        label: "Tesla",
        avatarLabel: "TSLA",
        sparklineVariant: "negative",
        sparklineDirection: "right",
        value: "$3,210.00",
        change: "-$120.00",
        changeVariant: "danger",
      },
      {
        title: "MSFT",
        label: "Microsoft",
        avatarLabel: "MSFT",
        sparklineVariant: "negative",
        sparklineDirection: "right",
        value: "$3,059.92",
        change: "-0.4%",
        changeVariant: "danger",
      },
    ],
  },
}
