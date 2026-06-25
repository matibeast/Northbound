import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  component: Input,
  title: 'UI/Input',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: 'Scale — lg: 40px bold · md: 30px regular · sm: 16px medium',
    },
    appearance: {
      control: 'select',
      options: ['default', 'focused', 'filled', 'error'],
      description: 'Visual state',
    },
    disabled: { control: 'boolean' },
    prefix:      { control: 'text', description: 'Content shown before the value' },
    showPrefix:  { control: 'boolean' },
    suffix:      { control: 'text', description: 'Content shown after the value' },
    showSuffix:  { control: 'boolean' },
  },
  args: {
    size: 'sm',
    appearance: 'default',
    disabled: false,
    prefix: '$',
    showPrefix: true,
    suffix: '$',
    showSuffix: true,
    placeholder: 'value',
  },
  decorators: [
    (Story) => (
      <div className="p-8 w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// ─── sm ──────────────────────────────────────────────────────────────────────

export const SmDefault: Story = {
  name: 'sm / Default',
  args: { size: 'sm', appearance: 'default' },
}

export const SmFocused: Story = {
  name: 'sm / Focused',
  args: { size: 'sm', appearance: 'focused', defaultValue: 'value' },
}

export const SmFilled: Story = {
  name: 'sm / Filled',
  args: { size: 'sm', appearance: 'filled', defaultValue: 'value' },
}

export const SmError: Story = {
  name: 'sm / Error',
  args: { size: 'sm', appearance: 'error', defaultValue: 'value' },
}

export const SmDisabled: Story = {
  name: 'sm / Disabled',
  args: { size: 'sm', appearance: 'default', disabled: true, defaultValue: 'value' },
}

// ─── md ──────────────────────────────────────────────────────────────────────

export const MdDefault: Story = {
  name: 'md / Default',
  args: { size: 'md', appearance: 'default' },
  decorators: [(Story) => <div className="p-8 w-72"><Story /></div>],
}

export const MdFocused: Story = {
  name: 'md / Focused',
  args: { size: 'md', appearance: 'focused', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-72"><Story /></div>],
}

export const MdFilled: Story = {
  name: 'md / Filled',
  args: { size: 'md', appearance: 'filled', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-72"><Story /></div>],
}

export const MdError: Story = {
  name: 'md / Error',
  args: { size: 'md', appearance: 'error', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-72"><Story /></div>],
}

export const MdDisabled: Story = {
  name: 'md / Disabled',
  args: { size: 'md', appearance: 'default', disabled: true, defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-72"><Story /></div>],
}

// ─── lg ──────────────────────────────────────────────────────────────────────

export const LgDefault: Story = {
  name: 'lg / Default',
  args: { size: 'lg', appearance: 'default' },
  decorators: [(Story) => <div className="p-8 w-96"><Story /></div>],
}

export const LgFocused: Story = {
  name: 'lg / Focused',
  args: { size: 'lg', appearance: 'focused', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-96"><Story /></div>],
}

export const LgFilled: Story = {
  name: 'lg / Filled',
  args: { size: 'lg', appearance: 'filled', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-96"><Story /></div>],
}

export const LgError: Story = {
  name: 'lg / Error',
  args: { size: 'lg', appearance: 'error', defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-96"><Story /></div>],
}

export const LgDisabled: Story = {
  name: 'lg / Disabled',
  args: { size: 'lg', appearance: 'default', disabled: true, defaultValue: 'value' },
  decorators: [(Story) => <div className="p-8 w-96"><Story /></div>],
}

// ─── All-states matrix (one story per size) ────────────────────────────────

export const AllSmStates: Story = {
  name: 'sm / All States',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-64">
      <Input size="sm" appearance="default" prefix="$" suffix="$" defaultValue="value" />
      <Input size="sm" appearance="focused" prefix="$" suffix="$" defaultValue="value" />
      <Input size="sm" appearance="filled"  prefix="$" suffix="$" defaultValue="value" />
      <Input size="sm" appearance="error"   prefix="$" suffix="$" defaultValue="value" />
      <Input size="sm" appearance="default" prefix="$" suffix="$" defaultValue="value" disabled />
    </div>
  ),
}

export const AllMdStates: Story = {
  name: 'md / All States',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-72">
      <Input size="md" appearance="default" prefix="$" suffix="$" defaultValue="value" />
      <Input size="md" appearance="focused" prefix="$" suffix="$" defaultValue="value" />
      <Input size="md" appearance="filled"  prefix="$" suffix="$" defaultValue="value" />
      <Input size="md" appearance="error"   prefix="$" suffix="$" defaultValue="value" />
      <Input size="md" appearance="default" prefix="$" suffix="$" defaultValue="value" disabled />
    </div>
  ),
}

export const AllLgStates: Story = {
  name: 'lg / All States',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-96">
      <Input size="lg" appearance="default" prefix="$" suffix="$" defaultValue="value" />
      <Input size="lg" appearance="focused" prefix="$" suffix="$" defaultValue="value" />
      <Input size="lg" appearance="filled"  prefix="$" suffix="$" defaultValue="value" />
      <Input size="lg" appearance="error"   prefix="$" suffix="$" defaultValue="value" />
      <Input size="lg" appearance="default" prefix="$" suffix="$" defaultValue="value" disabled />
    </div>
  ),
}

// ─── Show/hide prefix & suffix ────────────────────────────────────────────

export const PrefixOnly: Story = {
  name: 'Prefix only',
  args: { size: 'sm', appearance: 'filled', prefix: '$', showPrefix: true, showSuffix: false, defaultValue: 'value' },
}

export const SuffixOnly: Story = {
  name: 'Suffix only',
  args: { size: 'sm', appearance: 'filled', suffix: '$', showPrefix: false, showSuffix: true, defaultValue: 'value' },
}

export const NoPrefixNoSuffix: Story = {
  name: 'No prefix / suffix',
  args: { size: 'sm', appearance: 'default', showPrefix: false, showSuffix: false, placeholder: 'value' },
}
