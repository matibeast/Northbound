import type { Meta, StoryObj } from "@storybook/react-vite"
import { AssetDetailScreen } from "./asset-detail-screen"

const meta = {
  component: AssetDetailScreen,
  title: "Screens/AssetDetail",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Asset detail screen for a single holding. Composes ScreenScaffold, BalanceSection, PriceChart, PositionSummary and a Place order Button. Matches Figma node 119:3707.",
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
} satisfies Meta<typeof AssetDetailScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Asset Detail",
}
