import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /button/i })
    await expect(btn).toBeVisible()
    await expect(btn).not.toBeDisabled()
  },
}

// CssCheck — asserts bg-primary (gold-500 = #FCD435 = rgb(252, 212, 53)) loaded from global CSS
export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /button/i })
    await expect(getComputedStyle(btn).backgroundColor).toBe('rgb(252, 212, 53)')
  },
}

export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Link: Story = { args: { variant: 'link' } }
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const Disabled: Story = { args: { disabled: true } }
