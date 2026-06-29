import type { Meta, StoryObj } from '@storybook/react-vite'
import { AmountCluster } from './amount-cluster'

const meta = {
  component: AmountCluster,
  title: 'UI/AmountCluster',
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
      description: 'Visual state of the inner Input',
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
    showHelperText: { control: 'boolean' },
    prefix: { control: 'text', description: 'Symbol shown before the value' },
    showPrefix: { control: 'boolean' },
    suffix: { control: 'text', description: 'Symbol shown after the value' },
    showSuffix: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'lg',
    appearance: 'default',
    label: 'Amount',
    helperText: '= $---.-- MXN',
    showHelperText: true,
    prefix: '$',
    showPrefix: true,
    suffix: '$',
    showSuffix: true,
    disabled: false,
    placeholder: 'value',
  },
  decorators: [
    (Story) => (
      <div className="p-8 w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AmountCluster>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

// ─── lg ──────────────────────────────────────────────────────────────────────

export const LgDefault: Story = {
  name: 'lg / Default',
  args: { size: 'lg', appearance: 'default' },
}

export const LgFocused: Story = {
  name: 'lg / Focused',
  args: { size: 'lg', appearance: 'focused', defaultValue: '1,234.56' },
}

export const LgFilled: Story = {
  name: 'lg / Filled',
  args: { size: 'lg', appearance: 'filled', defaultValue: '1,234.56' },
}

export const LgError: Story = {
  name: 'lg / Error',
  args: { size: 'lg', appearance: 'error', defaultValue: '1,234.56' },
}

export const LgDisabled: Story = {
  name: 'lg / Disabled',
  args: { size: 'lg', disabled: true, defaultValue: '1,234.56' },
}

// ─── md ──────────────────────────────────────────────────────────────────────

export const MdDefault: Story = {
  name: 'md / Default',
  args: { size: 'md', appearance: 'default' },
}

export const MdFocused: Story = {
  name: 'md / Focused',
  args: { size: 'md', appearance: 'focused', defaultValue: '1,234.56' },
}

export const MdFilled: Story = {
  name: 'md / Filled',
  args: { size: 'md', appearance: 'filled', defaultValue: '1,234.56' },
}

export const MdError: Story = {
  name: 'md / Error',
  args: { size: 'md', appearance: 'error', defaultValue: '1,234.56' },
}

export const MdDisabled: Story = {
  name: 'md / Disabled',
  args: { size: 'md', disabled: true, defaultValue: '1,234.56' },
}

// ─── sm ──────────────────────────────────────────────────────────────────────

export const SmDefault: Story = {
  name: 'sm / Default',
  args: { size: 'sm', appearance: 'default' },
}

export const SmFocused: Story = {
  name: 'sm / Focused',
  args: { size: 'sm', appearance: 'focused', defaultValue: '1,234.56' },
}

export const SmFilled: Story = {
  name: 'sm / Filled',
  args: { size: 'sm', appearance: 'filled', defaultValue: '1,234.56' },
}

export const SmError: Story = {
  name: 'sm / Error',
  args: { size: 'sm', appearance: 'error', defaultValue: '1,234.56' },
}

export const SmDisabled: Story = {
  name: 'sm / Disabled',
  args: { size: 'sm', disabled: true, defaultValue: '1,234.56' },
}

// ─── All sizes ────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <AmountCluster size="lg" label="Amount (lg)" helperText="= $---.-- MXN" placeholder="value" />
      <AmountCluster size="md" label="Amount (md)" helperText="= $---.-- MXN" placeholder="value" />
      <AmountCluster size="sm" label="Amount (sm)" helperText="= $---.-- MXN" placeholder="value" />
    </div>
  ),
}

export const NoHelperText: Story = {
  name: 'No Helper Text',
  args: { showHelperText: false },
}

export const NoPrefix: Story = {
  name: 'No Prefix',
  args: { showPrefix: false },
}

export const NoSuffix: Story = {
  name: 'No Suffix',
  args: { showSuffix: false },
}
