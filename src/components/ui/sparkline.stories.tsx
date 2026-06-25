import type { Meta, StoryObj } from "@storybook/react"
import { Sparkline } from "./sparkline"

const meta: Meta<typeof Sparkline> = {
  title: "Components/Sparkline",
  component: Sparkline,
  parameters: {
    layout: "centered",
  },
  args: {
    variant:   "brand",
    direction: "left",
    size:      "md",
    width:     275,
    height:    79,
  },
  argTypes: {
    variant:   { control: "select", options: ["brand", "positive", "negative"] },
    direction: { control: "select", options: ["left", "right"] },
    size:      { control: "select", options: ["md"] },
  },
}

export default meta
type Story = StoryObj<typeof Sparkline>

export const BrandLeft: Story = {
  name: "Brand / Left (rising)",
  args: { variant: "brand", direction: "left" },
}

export const BrandRight: Story = {
  name: "Brand / Right (falling)",
  args: { variant: "brand", direction: "right" },
}

export const PositiveLeft: Story = {
  name: "Positive / Left (rising)",
  args: { variant: "positive", direction: "left" },
}

export const NegativeRight: Story = {
  name: "Negative / Right (falling)",
  args: { variant: "negative", direction: "right" },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {(["brand", "positive", "negative"] as const).flatMap((variant) =>
        (["left", "right"] as const).map((direction) => (
          <div key={`${variant}-${direction}`} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, color: "#6F7B9B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {variant} · {direction}
            </span>
            <Sparkline variant={variant} direction={direction} />
          </div>
        ))
      )}
    </div>
  ),
}

export const InContext: Story = {
  name: "In a Metric Card",
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      {[
        { label: "Enrolled Members", value: "12,480", delta: "+8.2%", variant: "positive" as const, direction: "left" as const },
        { label: "Claims Filed",     value: "3,204",  delta: "−3.1%", variant: "negative" as const, direction: "right" as const },
        { label: "Plan Cost",        value: "$941",   delta: "+0.4%", variant: "brand"    as const, direction: "left" as const },
      ].map(({ label, value, delta, variant, direction }) => (
        <div
          key={label}
          style={{
            border: "1px solid var(--color-gray-100, #CFD5E2)",
            borderRadius: 12,
            overflow: "hidden",
            width: 200,
            background: "white",
          }}
        >
          <div style={{ padding: "14px 16px 0" }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-gray-500, #566280)" }}>
              {label}
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 26, fontWeight: 700, color: "var(--color-gray-900, #0E121B)", lineHeight: 1.2, marginTop: 6, fontVariantNumeric: "tabular-nums" }}>
              {value}
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, marginTop: 2, color: variant === "positive" ? "var(--color-green-700, #386A1B)" : variant === "negative" ? "var(--color-red-700, #922A38)" : "var(--color-gold-700, #BA8508)" }}>
              {delta} vs last month
            </div>
          </div>
          <Sparkline variant={variant} direction={direction} width={200} height={60} style={{ marginTop: 8 }} />
        </div>
      ))}
    </div>
  ),
}
