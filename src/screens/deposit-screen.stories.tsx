import type { Meta, StoryObj } from "@storybook/react-vite"
import { DepositScreen } from "./deposit-screen"

const meta = {
  component: DepositScreen,
  title: "Screens/DepositScreen",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Deposit / Add Money screen. Composes ScreenScaffold, AmountCluster, Badge, ChipGroup, MovementBreakdown and a Button. Matches Figma node 119:3582.",
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
} satisfies Meta<typeof DepositScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Deposit Screen",
}
