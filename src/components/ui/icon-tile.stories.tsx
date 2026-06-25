import type { Meta, StoryObj } from "@storybook/react-vite"
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
import { IconTile } from "./icon-tile"
import type { IconTileVariant } from "./icon-tile"

// Maps control label → icon component (mirrors icon.tsx exports 1:1)
const iconMap = {
  ArrowUpRight,
  ArrowDownUp,
  Percent,
  BanknoteArrowDown,
  ChevronLeft:     ChevronLeftIcon,
  Moon:            MoonIcon,
  Clock:           ClockIcon,
  Plus:            PlusIcon,
  ArrowUp:         ArrowUpIcon,
  Check:           CheckIcon,
  Information:     InformationCircleIcon,
  ArrowTrendingUp: ArrowTrendingUpIcon,
  ArrowTrendingDown: ArrowTrendingDownIcon,
  ArrowLongRight:  ArrowLongRightIcon,
}

type IconKey = keyof typeof iconMap

// Replace the live component type with the string key so Storybook's
// mapping can drive the select control and default value correctly.
type StoryArgs = Omit<React.ComponentProps<typeof IconTile>, "icon"> & {
  icon: IconKey
}

const meta = {
  component: IconTile,
  title: "UI/IconTile",
  tags: ["autodocs"],
  args: {
    variant: "neutral",
    icon: "ArrowUpRight",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "info", "brand", "warning", "success", "negative"] as IconTileVariant[],
      description: "Controls background color and icon color contrast.",
      table: { defaultValue: { summary: "neutral" } },
    },
    icon: {
      control: "select",
      options: Object.keys(iconMap) as IconKey[],
      mapping: iconMap,
      description: "Icon rendered inside the tile — all icons from icon.tsx are available.",
      table: { defaultValue: { summary: "ArrowUpRight" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact square tile that pairs a semantic background color with an icon. Used to represent status, category, or action type at a glance. Matches the Figma IconTile component — each variant maps 1:1 to a Figma node.",
      },
    },
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {}

// ─── All variants side-by-side ────────────────────────────────────────────────

const ALL_VARIANTS: IconTileVariant[] = [
  "neutral",
  "info",
  "brand",
  "warning",
  "success",
  "negative",
]

export const AllVariants: Story = {
  name: "All Variants",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {ALL_VARIANTS.map((variant) => (
        <IconTile key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ["variant"] },
    docs: {
      description: {
        story:
          "All six semantic variants side-by-side. Switch the icon control above to swap the icon across every tile at once. Matches Figma nodes 115:653 – 116:925.",
      },
    },
  },
}

// ─── Individual variants ──────────────────────────────────────────────────────

export const Neutral: Story = {
  name: "Neutral",
  args: { variant: "neutral" },
}

export const Info: Story = {
  name: "Info",
  args: { variant: "info", icon: "Information" },
}

export const Brand: Story = {
  name: "Brand",
  args: { variant: "brand", icon: "ArrowTrendingUp" },
}

export const Warning: Story = {
  name: "Warning",
  args: { variant: "warning" },
}

export const Success: Story = {
  name: "Success",
  args: { variant: "success", icon: "Check" },
}

export const Negative: Story = {
  name: "Negative",
  args: { variant: "negative" },
}
