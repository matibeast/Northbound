import type { Meta, StoryObj } from "@storybook/react-vite"
import { SectionHeader } from "./section-header"
import type { SectionHeaderVariant } from "./section-header"
import * as Icons from "./icon"

const iconMap = Object.fromEntries(
  Object.entries(Icons).filter(([, v]) => typeof v === "function"),
) as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>

type IconKey = keyof typeof iconMap

type StoryArgs = Omit<React.ComponentProps<typeof SectionHeader>, "buttonIcon"> & {
  buttonIcon: IconKey
}

const ALL_VARIANTS: SectionHeaderVariant[] = ["text", "button", "badge", "none"]

const meta = {
  component: SectionHeader,
  title: "UI/SectionHeader",
  tags: ["autodocs"],
  args: {
    variant: "text",
    title: "title",
    subtitle: "subtitle",
    buttonLabel: "label",
    buttonIcon: "PlusIcon",
    badgeVariant: "success",
    badgeValue: "+$--.--",
    badgeCaption: "+1.5% today",
    showBadgeIcon: true,
    showBadgeValue: true,
    showBadgeCaption: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ALL_VARIANTS,
      description: "Controls what appears on the right: subtitle text, Button, Badge, or nothing.",
      table: { defaultValue: { summary: "text" } },
    },
    title: {
      control: "text",
      description: "Bold title always shown on the left.",
    },
    subtitle: {
      control: "text",
      description: "Muted caption on the right (variant=\"text\" only).",
    },
    buttonLabel: {
      control: "text",
      description: "Label inside the Button (variant=\"button\" only).",
    },
    buttonIcon: {
      control: "select",
      options: Object.keys(iconMap) as IconKey[],
      mapping: iconMap,
      description: "Icon rendered on both sides of the Button label (variant=\"button\" only).",
      table: { defaultValue: { summary: "PlusIcon" } },
    },
    badgeVariant: {
      control: "select",
      options: ["success", "danger", "info"],
      description: "Badge colour (variant=\"badge\" only).",
    },
    badgeValue: {
      control: "text",
      description: "Badge primary value (variant=\"badge\" only).",
    },
    badgeCaption: {
      control: "text",
      description: "Badge caption text (variant=\"badge\" only).",
    },
    showBadgeIcon: {
      control: "boolean",
      description: "Whether to show the Badge icon (variant=\"badge\" only).",
    },
    showBadgeValue: {
      control: "boolean",
      description: "Whether to show the Badge value (variant=\"badge\" only).",
    },
    showBadgeCaption: {
      control: "boolean",
      description: "Whether to show the Badge caption (variant=\"badge\" only).",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A section header row with a bold title on the left and a configurable right slot. Four variants: text (subtitle), button (primary action), badge (status badge), none (title only). Used as the header inside Card and standalone. Matches the Figma SectionHeader component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[418px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Text: Story = {
  name: "text — title + subtitle",
  args: { variant: "text", title: "Portfolio", subtitle: "Today" },
}

export const ButtonVariant: Story = {
  name: "button — title + Button",
  args: { variant: "button", title: "Holdings", buttonLabel: "Add" },
}

export const BadgeVariant: Story = {
  name: "badge — title + Badge",
  args: {
    variant: "badge",
    title: "Performance",
    badgeVariant: "success",
    badgeValue: "+$340.00",
    badgeCaption: "+2.8% today",
  },
}

export const NoneVariant: Story = {
  name: "none — title only",
  args: { variant: "none", title: "Transactions" },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: (args) => (
    <div className="flex flex-col gap-4 w-[418px]">
      {ALL_VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-1">
          <span className="text-xs text-text-neutral-subtlest">{variant}</span>
          <SectionHeader
            {...args}
            variant={variant}
            title="title"
            subtitle="subtitle"
            badgeValue="+$--.--"
            badgeCaption="+1.5% today"
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { exclude: ["variant"] },
    docs: {
      description: {
        story: "All four Figma variants stacked — matches nodes 119:3209, 119:3211, 119:3214, 119:3250.",
      },
    },
  },
}

export const DangerBadge: Story = {
  name: "badge — Danger",
  args: {
    variant: "badge",
    title: "Losses",
    badgeVariant: "danger",
    badgeValue: "-$120.00",
    badgeCaption: "-1.1% today",
  },
}
