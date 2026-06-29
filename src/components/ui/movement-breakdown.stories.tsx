import type { Meta, StoryObj } from "@storybook/react-vite"
import { MovementBreakdown } from "./movement-breakdown"
import {
  ArrowUpRight,
  ArrowDownUp,
  Percent,
  BanknoteArrowDown,
  ClockIcon,
} from "./icon"

const meta = {
  component: MovementBreakdown,
  title: "UI/MovementBreakdown",
  tags: ["autodocs"],
  args: {
    title: "The full breakdown",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Section header title shown at the top of the card.",
    },
    items: {
      control: false,
      description: "Array of breakdown rows. Each row has title, value, icon, appearance, and variant.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Card listing the breakdown of a money movement — amount sent, exchange rate, fees, amount received, and expected arrival. Composes Card, DataRow, and Divider. Matches the Figma MovementBreakdown component.",
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
} satisfies Meta<typeof MovementBreakdown>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {
  name: "Full breakdown (default)",
  args: {
    title: "The full breakdown",
    items: [
      {
        title: "Amount you send",
        value: "$5,000.00 MXN",
        icon: ArrowUpRight,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "Exchange rate",
        value: "1 USD = 17.20 MXN",
        icon: ArrowDownUp,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "Fee 1%",
        value: "$2.91 USD",
        icon: Percent,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "You receive",
        value: "$287.79 USD",
        icon: BanknoteArrowDown,
        appearance: "positive",
        variant: "emphasized",
      },
      {
        title: "Expected arrival",
        value: "Within 1 business day",
        icon: ClockIcon,
        appearance: "neutral",
        variant: "plain",
      },
    ],
  },
}

export const NegativeReceive: Story = {
  name: "Negative receive",
  args: {
    title: "The full breakdown",
    items: [
      {
        title: "Amount you send",
        value: "$500.00 MXN",
        icon: ArrowUpRight,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "Exchange rate",
        value: "1 USD = 17.20 MXN",
        icon: ArrowDownUp,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "Fee 1%",
        value: "$0.29 USD",
        icon: Percent,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "You receive",
        value: "$28.78 USD",
        icon: BanknoteArrowDown,
        appearance: "negative",
        variant: "emphasized",
      },
      {
        title: "Expected arrival",
        value: "Within 3 business days",
        icon: ClockIcon,
        appearance: "neutral",
        variant: "plain",
      },
    ],
  },
}

export const MinimalRows: Story = {
  name: "Minimal (2 rows)",
  args: {
    title: "Summary",
    items: [
      {
        title: "You send",
        value: "$1,000.00 USD",
        icon: ArrowUpRight,
        appearance: "neutral",
        variant: "plain",
      },
      {
        title: "You receive",
        value: "$17,200.00 MXN",
        icon: BanknoteArrowDown,
        appearance: "positive",
        variant: "emphasized",
      },
    ],
  },
}
