import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Figma component: Sparkline — Northbound design file
// Variants: brand | positive | negative
// Direction: left (rising) | right (falling — horizontal mirror)
// Size: md (275×79px)

// SVG path data extracted from Figma asset server
const LINE_PATH =
  "M1.0002 51.5002L25.5002 46.5002L52.0002 54.0002L76.0002 39.5002L102 44.0002L126.5 31.5002L152.5 36.0002L177.5 21.5002L203.5 27.0002L228.5 11.0002L274 1.00021"

const AREA_PATH =
  "M24.6795 45.7898L0 50.8217V79H275V0L229.167 10.0637L203.984 26.1656L177.793 20.6306L152.61 35.2229L126.419 30.6943L101.74 43.2739L75.5495 38.7452L51.3736 53.3376L24.6795 45.7898Z"

const COLORS = {
  brand: {
    stroke: "var(--color-gold-700, #BA8508)",
    fill:   "var(--color-gold-500, #FCD435)",
  },
  positive: {
    stroke: "var(--color-green-500, #59A136)",
    fill:   "var(--color-green-500, #59A136)",
  },
  negative: {
    stroke: "var(--color-red-500, #C34959)",
    fill:   "var(--color-red-500, #C34959)",
  },
} as const

const sparklineVariants = cva("block shrink-0 overflow-visible", {
  variants: {
    variant: {
      brand:    "",
      positive: "",
      negative: "",
    },
    direction: {
      left:  "",
      right: "",
    },
    size: {
      md: "",
    },
  },
  defaultVariants: {
    variant:   "brand",
    direction: "left",
    size:      "md",
  },
})

type SparklineProps = Omit<React.ComponentProps<"svg">, "width" | "height"> &
  VariantProps<typeof sparklineVariants> & {
    width?:  number
    height?: number
  }

function Sparkline({
  className,
  variant   = "brand",
  direction = "left",
  size      = "md",
  width     = 275,
  height    = 79,
  ...props
}: SparklineProps) {
  const uid   = React.useId().replace(/:/g, "")
  const { stroke, fill } = COLORS[variant ?? "brand"]
  const flipped = direction === "right"

  return (
    <svg
      data-slot="sparkline"
      data-variant={variant}
      data-direction={direction}
      data-size={size}
      viewBox="0 0 275 79"
      width={width}
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(sparklineVariants({ variant, direction, size }), className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`sf-${uid}`}
          x1="137.5" y1="0"
          x2="137.5" y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fill} stopOpacity="0.7" />
          <stop offset="1" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform={flipped ? "scale(-1,1) translate(-275,0)" : undefined}>
        <path d={AREA_PATH} fill={`url(#sf-${uid})`} />
        <path
          d={LINE_PATH}
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export { Sparkline, sparklineVariants }
