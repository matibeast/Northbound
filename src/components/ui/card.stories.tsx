import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card'
import { Button } from './button'

const meta = {
  component: Card,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="p-8 max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Card Title')).toBeVisible()
  },
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>With Footer</CardTitle>
        <CardDescription>A card with a footer action.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content here.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>With Header Action</CardTitle>
        <CardDescription>Card with a header-level action button.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">+</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Content area.</p>
      </CardContent>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Compact layout.</p>
      </CardContent>
    </Card>
  ),
}
