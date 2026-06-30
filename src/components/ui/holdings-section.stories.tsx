import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoldingsSection } from "./holdings-section"

const meta = {
  component: HoldingsSection,
  title: "UI/HoldingsSection",
  tags: ["autodocs"],
  args: {
    title: "Your holdings",
    subtitle: "3 investments",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Bold section title on the left.",
    },
    subtitle: {
      control: "text",
      description: "Muted count label on the right (e.g. \"3 investments\").",
    },
    showCardHeader: {
      control: "boolean",
      description: "Whether to render the card-level SectionHeader inside PersonalHoldings.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A layout section combining a SectionHeader row (title + count) with a PersonalHoldings card below it. Matches Figma node 119:3203.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[398px] bg-bg-neutral-subtlest p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HoldingsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const DefaultItems: Story = {
  name: "Default — 3 holdings",
  args: { title: "Your holdings", subtitle: "3 investments" },
}

export const CustomItems: Story = {
  name: "Custom items",
  args: {
    title: "Top picks",
    subtitle: "2 investments",
    items: [
      {
        title: "NVDA",
        label: "Nvidia",
        avatarLabel: "NVDA",
        sparklineVariant: "positive",
        sparklineDirection: "left",
        value: "$8,420.00",
        change: "+3.2%",
        changeVariant: "success",
      },
      {
        title: "TSLA",
        label: "Tesla",
        avatarLabel: "TSLA",
        sparklineVariant: "negative",
        sparklineDirection: "right",
        value: "$2,100.50",
        change: "-1.8%",
        changeVariant: "danger",
      },
    ],
  },
}
