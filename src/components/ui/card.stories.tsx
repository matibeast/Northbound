import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card } from "./card"
import { SectionHeader } from "./section-header"
import { Badge } from "./badge"
import { DataRow } from "./data-row"
import { AmountCluster } from "./amount-cluster"

const meta = {
  component: Card,
  title: "UI/Card",
  tags: ["autodocs"],
  args: {
    showHeader: true,
    title: "title",
    subtitle: "subtitle",
  },
  argTypes: {
    showHeader: {
      control: "boolean",
      description: "Whether to show the SectionHeader at the top of the card.",
    },
    title: {
      control: "text",
      description: "Bold title rendered on the left of the SectionHeader.",
    },
    subtitle: {
      control: "text",
      description: "Muted caption rendered on the right of the SectionHeader.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A rounded surface card that pairs a SectionHeader (title + subtitle) with a flexible children slot. Compose DataRow, Badge, AmountCluster, or any other components inside it. Matches the Figma Card component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[435px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithDataRows: Story = {
  name: "With Data Rows",
  args: {
    title: "Portfolio",
    subtitle: "Today",
  },
  render: (args) => (
    <Card {...args}>
      <div className="flex flex-col">
        <DataRow appearance="neutral"  title="Balance"  value="$12,450.00" />
        <DataRow appearance="positive" title="Gains"    value="+$340.00" />
        <DataRow appearance="negative" title="Losses"   value="-$120.00" />
      </div>
    </Card>
  ),
}

export const WithEmphasizedRows: Story = {
  name: "With Emphasized Rows",
  args: {
    title: "Summary",
    subtitle: "This month",
  },
  render: (args) => (
    <Card {...args}>
      <div className="flex flex-col">
        <DataRow appearance="neutral"  variant="emphasized" title="Total"  value="$8,200.00" />
        <DataRow appearance="positive" variant="emphasized" title="Profit" value="+$1,200.00" />
      </div>
    </Card>
  ),
}

export const WithAmountCluster: Story = {
  name: "With Amount Cluster",
  args: {
    title: "Send",
    subtitle: "MXN",
  },
  render: (args) => (
    <Card {...args}>
      <AmountCluster label="Amount" helperText="= $1,250.00 MXN" size="lg" />
    </Card>
  ),
}

export const WithBadge: Story = {
  name: "With Badge",
  args: {
    title: "Performance",
    subtitle: "vs last week",
  },
  render: (args) => (
    <Card {...args}>
      <div className="flex gap-3">
        <Badge variant="success" value="+$120.00" caption="+3.2% today" />
        <Badge variant="danger"  value="-$45.00"  caption="-1.1% today" />
      </div>
    </Card>
  ),
}

export const NoHeader: Story = {
  name: "No Header",
  args: { showHeader: false },
  render: (args) => (
    <Card {...args}>
      <div className="flex flex-col">
        <DataRow appearance="neutral" title="Balance" value="$12,450.00" />
        <DataRow appearance="positive" title="Gains"  value="+$340.00" />
      </div>
    </Card>
  ),
}

export const SectionHeaderOnly: Story = {
  name: "Section Header (standalone)",
  render: () => (
    <div className="w-full p-4 bg-bg-neutral-subtlest rounded-3xl border border-border-neutral-subtle">
      <SectionHeader title="Balances" subtitle="Last updated: now" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "SectionHeader can also be used standalone outside of Card.",
      },
    },
  },
}
