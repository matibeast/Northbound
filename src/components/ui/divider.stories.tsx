import type { Meta, StoryObj } from "@storybook/react-vite"
import { Divider } from "./divider"

const meta = {
  component: Divider,
  title: "UI/Divider",
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Controls whether the divider renders as a horizontal line or a vertical line.",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
  },
  parameters: {
    backgrounds: { default: "white" },
    docs: {
      description: {
        component:
          "A thin separator line used to visually divide content. Supports horizontal and vertical orientations. Follows the Northbound design token system — maps directly to the Figma component variants at node 117:1087.",
      },
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <div className="bg-white p-8 rounded">
      <div className={args.orientation === "vertical" ? "flex h-12 items-center" : "w-48"}>
        <Divider {...args} />
      </div>
    </div>
  ),
}

// ─── Individual orientations (match Figma variants 1:1) ──────────────────────

export const Horizontal: Story = {
  name: "Horizontal",
  render: (args) => (
    <div className="bg-white p-8 rounded">
      <div className="w-48">
        <Divider {...args} orientation="horizontal" />
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  name: "Vertical",
  render: (args) => (
    <div className="bg-white p-8 rounded">
      <div className="flex h-16 items-center">
        <Divider {...args} orientation="vertical" />
      </div>
    </div>
  ),
}

// ─── Both orientations side-by-side ──────────────────────────────────────────

export const AllOrientations: Story = {
  name: "All Orientations",
  render: () => (
    <div className="bg-white p-8 rounded flex items-start gap-12">
      <div className="flex flex-col items-center gap-3">
        <div className="w-32">
          <Divider orientation="horizontal" />
        </div>
        <span className="text-sm text-text-neutral-subtle">Horizontal</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-8 items-center">
          <Divider orientation="vertical" />
        </div>
        <span className="text-sm text-text-neutral-subtle">Vertical</span>
      </div>
    </div>
  ),
  parameters: {
    controls: { exclude: ["orientation"] },
    docs: {
      description: {
        story:
          "Side-by-side reference of both Figma divider variants. Matches node 117:1087.",
      },
    },
  },
}

// ─── Usage in context ─────────────────────────────────────────────────────────

export const InContext: Story = {
  name: "In Context",
  render: () => (
    <div className="bg-white p-8 rounded">
      <div className="flex flex-col gap-4 w-64">
        <p className="text-sm text-text-neutral-bold">Section A</p>
        <Divider orientation="horizontal" />
        <p className="text-sm text-text-neutral-bold">Section B</p>
        <Divider orientation="horizontal" />
        <p className="text-sm text-text-neutral-bold">Section C</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Horizontal dividers used to separate content sections.",
      },
    },
  },
}

export const InlineInContext: Story = {
  name: "Inline In Context",
  render: () => (
    <div className="bg-white p-8 rounded">
      <div className="flex items-center gap-3">
        <span className="text-sm text-text-neutral-bold">Home</span>
        <div className="h-4">
          <Divider orientation="vertical" />
        </div>
        <span className="text-sm text-text-neutral-bold">Products</span>
        <div className="h-4">
          <Divider orientation="vertical" />
        </div>
        <span className="text-sm text-text-neutral-bold">About</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vertical dividers used inline to separate navigation items.",
      },
    },
  },
}
