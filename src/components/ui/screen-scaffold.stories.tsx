import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScreenScaffold } from "./screen-scaffold"
import { BalanceSection } from "./balance-section"
import { HoldingsSection } from "./holdings-section"

const meta = {
  component: ScreenScaffold,
  title: "UI/ScreenScaffold",
  tags: ["autodocs"],
  args: {
    appBarCentered: false,
    appBarContent: "header",
    appBarShowLeading: true,
    appBarShowSubtitle: true,
    appBarShowTrailing: true,
    appBarSubtitle: "My Portfolio",
    appBarTitle: "Dashboard",
  },
  argTypes: {
    appBarCentered: {
      control: "boolean",
      description: "Center the AppBar title/AssetHeader.",
      table: { defaultValue: { summary: "false" } },
    },
    appBarContent: {
      control: "select",
      options: ["header", "assetHeader"],
      description: "AppBar content mode.",
      table: { defaultValue: { summary: "header" } },
    },
    appBarShowLeading: {
      control: "boolean",
      description: "Show the back button in AppBar.",
      table: { defaultValue: { summary: "true" } },
    },
    appBarShowSubtitle: {
      control: "boolean",
      description: "Show the muted subtitle in AppBar (header mode).",
      table: { defaultValue: { summary: "true" } },
    },
    appBarShowTrailing: {
      control: "boolean",
      description: "Show the action button in AppBar.",
      table: { defaultValue: { summary: "true" } },
    },
    appBarSubtitle: {
      control: "text",
      description: "Muted subtitle text above the AppBar title.",
    },
    appBarTitle: {
      control: "text",
      description: "Bold title in the AppBar.",
    },
    appBarAssetTitle: {
      control: "text",
      description: "AssetHeader title (assetHeader mode).",
    },
    appBarAssetLabel: {
      control: "text",
      description: "AssetHeader label (assetHeader mode).",
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-screen layout shell: AppBar pinned at the top, scrollable content area below. Provides consistent background, padding and screen dimensions (430×932). Matches Figma node 119:3412.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-screen justify-center bg-bg-neutral-subtle"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScreenScaffold>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Empty: Story = {
  name: "Empty shell",
  args: { appBarTitle: "Portfolio", appBarSubtitle: "My Account" },
}

export const WithContent: Story = {
  name: "With Balance + Holdings",
  args: {
    appBarTitle: "Portfolio",
    appBarSubtitle: "My Account",
    appBarShowLeading: false,
  },
  render: (args) => (
    <ScreenScaffold {...args}>
      <div className="flex flex-col gap-6 w-full">
        <BalanceSection
          label="Portfolio value"
          value="12,480.50"
          badgeValue="+$340.00"
          badgeCaption="+2.8% today"
          buttonLabel="Swap"
        />
        <HoldingsSection title="Your holdings" subtitle="3 investments" />
      </div>
    </ScreenScaffold>
  ),
  parameters: {
    docs: {
      description: {
        story: "Full portfolio home screen composing ScreenScaffold, BalanceSection and HoldingsSection.",
      },
    },
  },
}

export const AssetHeaderBar: Story = {
  name: "AppBar — assetHeader mode",
  args: {
    appBarContent: "assetHeader",
    appBarCentered: true,
    appBarAssetTitle: "VOO",
    appBarAssetLabel: "S&P 500 ETF",
    appBarAssetAvatarLabel: "VOO",
  },
}
