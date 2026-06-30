import type { Meta, StoryObj } from "@storybook/react-vite"
import { AppBar } from "./app-bar"
import type { AppBarContent } from "./app-bar"

const ALL_CONTENT: AppBarContent[] = ["header", "assetHeader"]

const meta = {
  component: AppBar,
  title: "UI/AppBar",
  tags: ["autodocs"],
  args: {
    centered: false,
    content: "header",
    showLeading: true,
    showSubtitle: true,
    showTrailing: true,
    subtitle: "subtitle",
    title: "title",
    assetTitle: "AAPL",
    assetLabel: "Apple",
    assetAvatarLabel: "AAPL",
    showAvatar: true,
  },
  argTypes: {
    centered: {
      control: "boolean",
      description: "Center the title / AssetHeader between the leading and trailing buttons.",
      table: { defaultValue: { summary: "false" } },
    },
    content: {
      control: "select",
      options: ALL_CONTENT,
      description: "Controls what appears in the middle: a text title or an AssetHeader.",
      table: { defaultValue: { summary: "header" } },
    },
    showLeading: {
      control: "boolean",
      description: "Show the back (ChevronLeft) button on the left.",
      table: { defaultValue: { summary: "true" } },
    },
    showSubtitle: {
      control: "boolean",
      description: "Show the muted subtitle above the title (content=\"header\" only).",
      table: { defaultValue: { summary: "true" } },
    },
    showTrailing: {
      control: "boolean",
      description: "Show the action (EllipsisHorizontal) button on the right.",
      table: { defaultValue: { summary: "true" } },
    },
    subtitle: {
      control: "text",
      description: "Muted caption above the title (content=\"header\" only).",
    },
    title: {
      control: "text",
      description: "Bold title text (content=\"header\" only).",
    },
    assetTitle: {
      control: "text",
      description: "Ticker / name shown as the AssetHeader title (content=\"assetHeader\" only).",
    },
    assetLabel: {
      control: "text",
      description: "Subtitle line inside AssetHeader (content=\"assetHeader\" only).",
    },
    assetAvatarLabel: {
      control: "text",
      description: "Initials shown in the Avatar (content=\"assetHeader\" only).",
    },
    showAvatar: {
      control: "boolean",
      description: "Whether the Avatar is visible (content=\"assetHeader\" only).",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Top navigation bar with a leading back button, a centered or left-aligned title area, and a trailing action button. Supports two content modes: a plain text header (subtitle + title) and an asset header (Avatar + title/label). Matches Figma nodes 119:2974, 119:2979, 119:3719, 119:3725.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[460px] bg-bg-neutral-subtlest p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Header: Story = {
  name: "header — left-aligned",
  args: { content: "header", centered: false, subtitle: "My Portfolio", title: "Dashboard" },
}

export const HeaderCentered: Story = {
  name: "header — centered",
  args: { content: "header", centered: true, subtitle: "My Portfolio", title: "Dashboard" },
}

export const AssetHeaderLeft: Story = {
  name: "assetHeader — left-aligned",
  args: {
    content: "assetHeader",
    centered: false,
    assetTitle: "VOO",
    assetLabel: "S&P 500 ETF",
    assetAvatarLabel: "VOO",
  },
}

export const AssetHeaderCentered: Story = {
  name: "assetHeader — centered",
  args: {
    content: "assetHeader",
    centered: true,
    assetTitle: "VOO",
    assetLabel: "S&P 500 ETF",
    assetAvatarLabel: "VOO",
  },
}

export const NoLeading: Story = {
  name: "header — no leading button",
  args: { content: "header", showLeading: false, title: "Holdings" },
}

export const NoTrailing: Story = {
  name: "header — no trailing button",
  args: { content: "header", showTrailing: false, title: "Holdings" },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 w-[460px] bg-bg-neutral-subtlest p-4">
      {[
        { label: "header / left", props: { content: "header" as AppBarContent, centered: false } },
        { label: "header / centered", props: { content: "header" as AppBarContent, centered: true } },
        { label: "assetHeader / left", props: { content: "assetHeader" as AppBarContent, centered: false, assetTitle: "VOO", assetLabel: "S&P 500 ETF", assetAvatarLabel: "VOO" } },
        { label: "assetHeader / centered", props: { content: "assetHeader" as AppBarContent, centered: true, assetTitle: "VOO", assetLabel: "S&P 500 ETF", assetAvatarLabel: "VOO" } },
      ].map(({ label, props }) => (
        <div key={label} className="flex flex-col gap-1">
          <span className="text-xs text-text-neutral-subtlest">{label}</span>
          <AppBar title="Portfolio" subtitle="My Account" {...props} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
}
