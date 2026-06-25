import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Input } from './input'

const meta = {
  component: Input,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="p-8 max-w-xs">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text…' },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox')
    await expect(input).toBeVisible()
    await expect(input).not.toBeDisabled()
  },
}

export const WithValue: Story = { args: { defaultValue: 'Hello world', placeholder: 'Enter text…' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } }
export const Invalid: Story = { args: { placeholder: 'Invalid field', 'aria-invalid': true } }
export const Email: Story = { args: { type: 'email', placeholder: 'email@example.com' } }
export const Password: Story = { args: { type: 'password', placeholder: 'Password' } }
