import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar } from "./avatar"

// Placeholder image — the same asset Figma uses for its image variant preview
const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face"

const meta = {
  component: Avatar,
  title: "UI/Avatar",
  tags: ["autodocs"],
  args: {
    variant: "initials",
    size: "md",
    label: "AB",
    src: PLACEHOLDER_IMAGE,
    alt: "User avatar",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["initials", "image"],
      description:
        "Display mode — `initials` renders a text label; `image` renders a photo.",
      table: { defaultValue: { summary: "initials" } },
    },
    size: {
      control: "select",
      options: ["md", "sm"],
      description:
        "`md` → 40×40 px with 8 px radius. `sm` → 20×20 px with 4 px radius.",
      table: { defaultValue: { summary: "md" } },
    },
    label: {
      control: "text",
      description:
        "Initials to render inside the avatar (e.g. `\"AB\"`). Only visible when `variant=\"initials\"`.",
    },
    src: {
      control: "text",
      description:
        "Image URL. Only used when `variant=\"image\"`.",
    },
    alt: {
      control: "text",
      description: "Alt text for the image (accessibility).",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact avatar element available in two variants (initials or image) and two sizes (md/sm). Tokens map directly to the Northbound primitive layer — `bg-bg-neutral-subtle` for the initials background, `rounded-lg` / `rounded-[4px]` for the corner radius.",
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {}

// ─── Individual Figma variants (1:1 match) ────────────────────────────────────

export const InitialsMd: Story = {
  name: "Initials / md",
  args: { variant: "initials", size: "md", label: "AB" },
}

export const InitialsSm: Story = {
  name: "Initials / sm",
  args: { variant: "initials", size: "sm", label: "AB" },
}

export const ImageMd: Story = {
  name: "Image / md",
  args: { variant: "image", size: "md", src: PLACEHOLDER_IMAGE },
}

export const ImageSm: Story = {
  name: "Image / sm",
  args: { variant: "image", size: "sm", src: PLACEHOLDER_IMAGE },
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar {...args} variant="initials" size="md" label="AB" />
        <span className="text-xs text-[var(--color-text-neutral-subtle-default)]">initials / md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar {...args} variant="initials" size="sm" label="AB" />
        <span className="text-xs text-[var(--color-text-neutral-subtle-default)]">initials / sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar {...args} variant="image" size="md" src={PLACEHOLDER_IMAGE} alt="User" />
        <span className="text-xs text-[var(--color-text-neutral-subtle-default)]">image / md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar {...args} variant="image" size="sm" src={PLACEHOLDER_IMAGE} alt="User" />
        <span className="text-xs text-[var(--color-text-neutral-subtle-default)]">image / sm</span>
      </div>
    </div>
  ),
  parameters: {
    controls: { exclude: ["variant", "size", "label", "src", "alt"] },
    docs: {
      description: {
        story:
          "Side-by-side reference of all four Figma avatar variants (nodes 116:891, 116:1029, 116:893, 116:1031).",
      },
    },
  },
}

// ─── Avatar group ─────────────────────────────────────────────────────────────

export const AvatarGroup: Story = {
  name: "Avatar Group",
  render: () => {
    const users = [
      { label: "AK", src: PLACEHOLDER_IMAGE },
      { label: "JD", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" },
      { label: "MS", src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop&crop=face" },
      { label: "RP", src: undefined },
    ]

    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-xs text-[var(--color-text-neutral-subtle-default)]">md — image + initials mix</p>
          <div className="flex -space-x-2">
            {users.map((u, i) => (
              <Avatar
                key={i}
                variant={u.src ? "image" : "initials"}
                size="md"
                label={u.label}
                src={u.src}
                alt={u.label}
                className="ring-2 ring-white"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs text-[var(--color-text-neutral-subtle-default)]">sm — initials only</p>
          <div className="flex -space-x-1">
            {users.map((u, i) => (
              <Avatar
                key={i}
                variant="initials"
                size="sm"
                label={u.label}
                className="ring-1 ring-white"
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Overlapping avatar group pattern — both sizes, mixing image and initials variants.",
      },
    },
  },
}
