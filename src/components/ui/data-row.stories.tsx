import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataRow } from "./data-row"
import type { DataRowAppearance, DataRowVariant } from "./data-row"
import {
  ArrowDownUp,
  ArrowUpRight,
  Percent,
  BanknoteArrowDown,
  ChevronLeftIcon,
  MoonIcon,
  ClockIcon,
  PlusIcon,
  ArrowUpIcon,
  CheckIcon,
  InformationCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowLongRightIcon,
} from "./icon"

const iconMap = {
  ArrowUpRight,
  ArrowDownUp,
  Percent,
  BanknoteArrowDown,
  ChevronLeft:      ChevronLeftIcon,
  Moon:             MoonIcon,
  Clock:            ClockIcon,
  Plus:             PlusIcon,
  ArrowUp:          ArrowUpIcon,
  Check:            CheckIcon,
  Information:      InformationCircleIcon,
  ArrowTrendingUp:  ArrowTrendingUpIcon,
  ArrowTrendingDown: ArrowTrendingDownIcon,
  ArrowLongRight:   ArrowLongRightIcon,
}

type IconKey = keyof typeof iconMap

type StoryArgs = Omit<React.ComponentProps<typeof DataRow>, "icon"> & {
  icon: IconKey
}

const ALL_APPEARANCES: DataRowAppearance[] = ["neutral", "positive", "negative"]
const ALL_VARIANTS: DataRowVariant[] = ["plain", "emphasized"]

const meta = {
  component: DataRow,
  title: "UI/DataRow",
  tags: ["autodocs"],
  args: {
    appearance: "neutral",
    variant: "plain",
    showIconTile: true,
    title: "title",
    value: "value",
    icon: "ArrowUpRight",
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconMap) as IconKey[],
      mapping: iconMap,
      description: "Icon rendered inside the tile — all icons from icon.tsx are available.",
      table: { defaultValue: { summary: "ArrowUpRight" } },
    },
    appearance: {
      control: "select",
      options: ALL_APPEARANCES,
      description: "Controls the icon tile color and value text color.",
      table: { defaultValue: { summary: "neutral" } },
    },
    variant: {
      control: "select",
      options: ALL_VARIANTS,
      description: "Plain uses base text size; emphasized uses a larger display size.",
      table: { defaultValue: { summary: "plain" } },
    },
    showIconTile: {
      control: "boolean",
      description: "Whether to show the icon tile on the left.",
    },
    title: {
      control: "text",
      description: "Label on the left side of the row.",
    },
    value: {
      control: "text",
      description: "Value displayed on the right side of the row.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A single data row pairing a labelled icon tile with a value. Supports neutral, positive, and negative semantic appearances, and plain vs. emphasized value sizing. Matches the Figma DataRow component.",
      },
    },
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllAppearances: Story = {
  name: "All Appearances",
  render: (args) => (
    <div className="flex flex-col gap-1 w-[270px]">
      {ALL_APPEARANCES.map((appearance) => (
        <DataRow key={appearance} {...args} appearance={appearance} />
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ["appearance"] },
    docs: {
      description: {
        story: "All three appearances stacked. Adjust variant and other controls above to update all rows at once.",
      },
    },
  },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: (args) => (
    <div className="flex flex-col gap-1 w-[270px]">
      {ALL_VARIANTS.map((variant) => (
        <DataRow key={variant} {...args} variant={variant} value={variant === "emphasized" ? "$1,234.56" : "value"} />
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ["variant"] },
  },
}

export const Grid: Story = {
  name: "All Combinations",
  render: () => (
    <div className="flex flex-col gap-1 w-[270px]">
      {ALL_APPEARANCES.flatMap((appearance) =>
        ALL_VARIANTS.map((variant) => (
          <DataRow
            key={`${appearance}-${variant}`}
            appearance={appearance}
            variant={variant}
            title="title"
            value={variant === "emphasized" ? "$1,234.56" : "value"}
          />
        ))
      )}
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const NoIconTile: Story = {
  name: "No Icon Tile",
  args: { showIconTile: false },
}

export const Positive: Story = {
  name: "Positive",
  args: { appearance: "positive", value: "+$120.00" },
}

export const Negative: Story = {
  name: "Negative",
  args: { appearance: "negative", value: "-$45.00" },
}

export const Emphasized: Story = {
  name: "Emphasized",
  args: { variant: "emphasized", value: "$12,345.67" },
}
