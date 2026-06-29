import type { Meta, StoryObj } from "@storybook/react-vite"
import { AssetHeader } from "./asset-header"
import type { AssetHeaderSize } from "./asset-header"

const ALL_SIZES: AssetHeaderSize[] = ["md", "sm"]

const meta = {
  component: AssetHeader,
  title: "UI/AssetHeader",
  tags: ["autodocs"],
  args: {
    size: "md",
    showAvatar: true,
    title: "title",
    label: "label",
    avatarLabel: "AAPL",
  },
  argTypes: {
    size: {
      control: "select",
      options: ALL_SIZES,
      description: "`md` → 40px Avatar. `sm` → 20px Avatar.",
      table: { defaultValue: { summary: "md" } },
    },
    showAvatar: {
      control: "boolean",
      description: "Whether to render the Avatar on the left.",
    },
    title: {
      control: "text",
      description: "Primary bold text — rendered as text-base/medium.",
    },
    label: {
      control: "text",
      description: "Secondary muted text below the title — rendered as text-sm/regular.",
    },
    avatarLabel: {
      control: "text",
      description: "Initials or ticker shown inside the Avatar (e.g. \"AAPL\", \"BTC\").",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact asset identifier that pairs an Avatar (initials or ticker) with a title and label. Available in md (40px Avatar) and sm (20px Avatar) sizes. Matches the Figma AssetHeader component.",
      },
    },
  },
} satisfies Meta<typeof AssetHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Md: Story = {
  name: "Size / md",
  args: { size: "md", title: "Apple Inc.", label: "AAPL", avatarLabel: "AAPL" },
}

export const Sm: Story = {
  name: "Size / sm",
  args: { size: "sm", title: "Apple Inc.", label: "AAPL", avatarLabel: "AAPL" },
}

export const AllSizes: Story = {
  name: "All Sizes",
  render: (args) => (
    <div className="flex flex-col gap-6">
      {ALL_SIZES.map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <span className="text-xs text-text-neutral-subtlest">{size}</span>
          <AssetHeader {...args} size={size} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { exclude: ["size"] } },
}

export const NoAvatar: Story = {
  name: "No Avatar",
  args: { showAvatar: false, title: "Bitcoin", label: "BTC" },
}

export const RealWorldAssets: Story = {
  name: "Real-world Assets",
  render: () => (
    <div className="flex flex-col gap-4 w-[200px]">
      <AssetHeader size="md" title="Apple Inc."   label="AAPL" avatarLabel="AAPL" />
      <AssetHeader size="md" title="Bitcoin"      label="BTC"  avatarLabel="BTC"  />
      <AssetHeader size="md" title="Tesla"        label="TSLA" avatarLabel="TSLA" />
      <AssetHeader size="md" title="US Dollar"    label="USD"  avatarLabel="USD"  />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "AssetHeader used with real ticker symbols as avatarLabel.",
      },
    },
  },
}

export const SmInContext: Story = {
  name: "sm — In Context",
  render: () => (
    <div className="flex flex-col gap-2 w-[160px]">
      <AssetHeader size="sm" title="Apple Inc."  label="AAPL" avatarLabel="AAPL" />
      <AssetHeader size="sm" title="Bitcoin"     label="BTC"  avatarLabel="BTC"  />
      <AssetHeader size="sm" title="Tesla"       label="TSLA" avatarLabel="TSLA" />
    </div>
  ),
  parameters: { controls: { disable: true } },
}
