import type { Meta, StoryObj } from "@storybook/react-vite"
import { PortfolioDashboardScreen } from "./portfolio-dashboard-screen"

const meta = {
  component: PortfolioDashboardScreen,
  title: "Screens/PortfolioDashboard",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full portfolio home screen. Composes ScreenScaffold, BalanceSection, PriceChart and HoldingsSection. Matches Figma node 143:1002.",
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
} satisfies Meta<typeof PortfolioDashboardScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Portfolio Dashboard",
}
