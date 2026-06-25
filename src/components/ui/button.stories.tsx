import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  PlusIcon,
  ChevronLeftIcon,
  MoonIcon,
  ClockIcon,
  ArrowUpIcon,
  CheckIcon,
  InformationCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowLongRightIcon,
  ArrowDownUp,
  ArrowUpRight,
  Percent,
  BanknoteArrowDown,
} from './icon'
import { Button } from './button'

// Maps control label → actual icon component (or undefined for "none")
const iconMap = {
  '—': undefined,
  Plus: PlusIcon,
  ChevronLeft: ChevronLeftIcon,
  Moon: MoonIcon,
  Clock: ClockIcon,
  ArrowUp: ArrowUpIcon,
  Check: CheckIcon,
  Information: InformationCircleIcon,
  ArrowTrendingUp: ArrowTrendingUpIcon,
  ArrowTrendingDown: ArrowTrendingDownIcon,
  ArrowLongRight: ArrowLongRightIcon,
  ArrowDownUp,
  ArrowUpRight,
  Percent,
  BanknoteArrowDown,
}

type IconKey = keyof typeof iconMap

// Storybook arg type for icon slot controls
const iconArgType = {
  control: 'select' as const,
  options: Object.keys(iconMap) as IconKey[],
  mapping: iconMap,
}

// Replace icon prop types with string keys so Storybook mapping applies correctly
type StoryArgs = Omit<React.ComponentProps<typeof Button>, 'iconStart' | 'iconEnd'> & {
  iconStart?: IconKey
  iconEnd?: IconKey
}

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    disabled: false,
    iconStart: '—',
    iconEnd: '—',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['md', 'sm'],
      description: 'Size of the button — md (default) or sm',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Renders icon only — hides label and iconEnd, applies fixed width',
    },
    disabled: {
      control: 'boolean',
    },
    iconStart: {
      ...iconArgType,
      description: 'Leading icon — any icon from icon.tsx',
    },
    iconEnd: {
      ...iconArgType,
      description: 'Trailing icon — hidden in iconOnly mode',
    },
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {}

// ─── Variants ────────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const SizeMd: Story = {
  name: 'Size — md',
  args: { size: 'md', children: 'Medium' },
}

export const SizeSm: Story = {
  name: 'Size — sm',
  args: { size: 'sm', children: 'Small' },
}

// ─── Disabled states ─────────────────────────────────────────────────────────

export const PrimaryDisabled: Story = {
  name: 'Primary — disabled',
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
}

export const SecondaryDisabled: Story = {
  name: 'Secondary — disabled',
  args: { variant: 'secondary', disabled: true, children: 'Disabled' },
}

export const DestructiveDisabled: Story = {
  name: 'Destructive — disabled',
  args: { variant: 'destructive', disabled: true, children: 'Disabled' },
}

// ─── With icons ──────────────────────────────────────────────────────────────

export const WithIconStart: Story = {
  name: 'With icon start',
  args: {
    children: 'Add item',
    iconStart: 'Plus',
  },
}

export const WithIconEnd: Story = {
  name: 'With icon end',
  args: {
    children: 'Add item',
    iconEnd: 'Plus',
  },
}

export const WithBothIcons: Story = {
  name: 'With both icons',
  args: {
    children: 'Add item',
    iconStart: 'Plus',
    iconEnd: 'ArrowLongRight',
  },
}

// ─── Icon only ───────────────────────────────────────────────────────────────

export const IconOnlyPrimaryMd: Story = {
  name: 'Icon only — primary md',
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    iconStart: 'Plus',
    children: 'Add',
  },
}

export const IconOnlyPrimarySm: Story = {
  name: 'Icon only — primary sm',
  args: {
    variant: 'primary',
    size: 'sm',
    iconOnly: true,
    iconStart: 'Plus',
    children: 'Add',
  },
}

export const IconOnlySecondaryMd: Story = {
  name: 'Icon only — secondary md',
  args: {
    variant: 'secondary',
    size: 'md',
    iconOnly: true,
    iconStart: 'Plus',
    children: 'Add',
  },
}

export const IconOnlyDestructiveMd: Story = {
  name: 'Icon only — destructive md',
  args: {
    variant: 'destructive',
    size: 'md',
    iconOnly: true,
    iconStart: 'Plus',
    children: 'Add',
  },
}

// ─── Full variant × size matrix ──────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All variants — md',
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

export const AllVariantsSm: Story = {
  name: 'All variants — sm',
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="sm">Primary</Button>
      <Button variant="secondary" size="sm">Secondary</Button>
      <Button variant="destructive" size="sm">Destructive</Button>
    </div>
  ),
}

export const AllDisabled: Story = {
  name: 'All variants — disabled',
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
}

export const AllIconOnly: Story = {
  name: 'All variants — icon only',
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" iconOnly iconStart={PlusIcon}>Add</Button>
      <Button variant="secondary" iconOnly iconStart={PlusIcon}>Add</Button>
      <Button variant="destructive" iconOnly iconStart={PlusIcon}>Add</Button>
      <Button variant="primary" size="sm" iconOnly iconStart={PlusIcon}>Add</Button>
      <Button variant="secondary" size="sm" iconOnly iconStart={PlusIcon}>Add</Button>
      <Button variant="destructive" size="sm" iconOnly iconStart={PlusIcon}>Add</Button>
    </div>
  ),
}
