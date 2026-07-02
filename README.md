# Northbound

A concept investing app for people in Latin America who want to invest in US stocks and ETFs. Built as a public case study: a token-driven, AI-ready design system taken from Figma primitives to a deployed product.

> **Concept project.** No real money flows, all data is sample data, and nothing here is financial advice. Designed and built independently by [Maty Sandoval](https://www.matysandoval.com) alongside Memorisely's AI Design Systems and AI Coding bootcamps.

## The idea

AI design and code tools are only as good as the system they consume. This repo is the proof of that pipeline: one token source feeding both Figma and production code, with components generated and scaled using Claude Code via Figma MCP.

## Token architecture

```
styles/tokens/
  primitives.css     Raw scales: color, type, space, radius. No theme logic.
  semantics.css      Role-based tokens (background, text, border, icon). Light values in :root, dark values under .dark.
```

Tokens are authored in Token Studio and exported as CSS. The CSS files are versioned in this repo as the single source of truth — `semantics.css` references primitives as `var()` chains, so the full design decision is inspectable end to end.

### The naming grammar

The naming is the actual system, not the colors. Every semantic token follows one predictable pattern:

```
--color-{category}-{purpose}-{emphasis}-{state}
```

- **category** (4): background, text, border, icon
- **purpose** (6): neutral, brand, info, danger, warning, success
- **emphasis** (3): subtlest, subtle, bold
- **state** (4): default, hovered, pressed, disabled

This is what scales the system from 3 screens to a full product without renaming anything.

### Traceability

Tokens keep their semantic-to-primitive references intact, so the chain is inspectable end to end. Open `styles/tokens/semantics.css` and you see `var(--color-gold-500)`, not a baked hex value. The reference chain is the architecture — a `var()` chain from semantic intent all the way down to a primitive hex.

### Accessibility

WCAG pairings are designed into the token decisions, not checked afterward. The brand anchor, `gold.500` on `gray.900`, lands at 13:1 contrast (AAA).

## Components

Components are organized into four layers. Each layer can only depend on layers below it.

### Foundation

Atomic, single-responsibility primitives. No dependencies on other design system components.

- [x] Icon — Central barrel export for Heroicons and Lucide icons
- [x] Avatar — User avatar — initials or image variant, two sizes
- [x] Button — Primary interaction component — primary, secondary, destructive variants
- [x] Input — Form input — lg/md/sm sizes, prefix/suffix slots, error state
- [x] Divider — Horizontal or vertical separator
- [x] Chip — Filter/selection chip with selected and disabled states
- [x] Badge — Status/change indicator — pairs an icon with a numeric value and caption
- [x] Icon Tile — Semantic container wrapping an arbitrary icon — neutral, brand, info, warning, success, negative variants
- [x] Sparkline — Financial chart visualization — brand, positive, and negative variants with left/right direction

### Composite

Assembled from one or more Foundation components.

- [x] Chip Group — Single-select group of Chip components with controlled/uncontrolled selection
- [x] Amount Cluster — Input with label and helper-text slot, three sizes
- [x] Data Row — Icon Tile + label + value with neutral, positive, and negative appearances
- [x] Asset Header — Avatar + title/label identity block, md and sm sizes
- [x] Section Header — Title row with four right-slot variants: text, button, badge, none
- [x] Card — Rounded surface pairing a Section Header with a flexible children slot
- [x] Holding Row — Asset Header + Sparkline + value/change Badge; the core row of the portfolio holdings list

### Feature

Domain-specific components assembled from Composite components. Tied to the investing product screens.

- [x] Movement Breakdown — Card listing the full breakdown of a money movement: amount sent, exchange rate, fee, amount received, and expected arrival
- [x] Price Chart — Card with a Sparkline, selectable time-period ChipGroup, and a performance Badge in the header
- [x] Position Summary — Card showing a single position: market value, share count, today's return, total return, and average cost
- [x] Personal Holdings — Card listing portfolio holdings as a scrollable HoldingRow list with optional section header
- [x] Portfolio Balance — Standalone widget (no card) combining an AmountCluster with a performance Badge; four variants: size (md/sm) × direction (positive/negative)

### Layout

Full-screen shells and section-level layout components assembled from Feature components. One component per major screen region.

- [x] AppBar — Top navigation bar with a leading back button, centered or left-aligned title area (plain text or AssetHeader), and a trailing action button
- [x] BalanceSection — Portfolio balance widget: PortfolioBalance (AmountCluster + Badge) stacked above a primary CTA button
- [x] HoldingsSection — Section header row (title + count) above a PersonalHoldings card
- [x] ScreenScaffold — Full-screen shell (430 × 932) with AppBar pinned at the top and a content area below; provides background, padding, and overflow clipping

---

## Status

- [x] Primitive tokens
- [x] Semantic layer, light and dark
- [x] Tokens wired to code (CSS variables mapped to Tailwind v4 via `@theme {}`)
- [x] Foundation components — Icon, Avatar, Button, Input, Divider, Chip, Badge, Icon Tile, Sparkline
- [x] Composite components — Chip Group, Amount Cluster, Data Row, Asset Header, Section Header, Card, Holding Row
- [x] Feature components — Movement Breakdown, Price Chart, Position Summary, Personal Holdings, Portfolio Balance
- [x] Layout components — AppBar, BalanceSection, HoldingsSection, ScreenScaffold
- [x] Storybook wired up with stories for all components
- [x] 3 screens: Portfolio Dashboard, Asset Detail, Deposit & FX Conversion


## Stack

Figma · Token Studio · Claude Code · Cursor · React 19 · Vite · Tailwind CSS v4 · shadcn/ui · Storybook

## Author

**Maty Sandoval**, Product Designer
[matysandoval.com](https://www.matysandoval.com) · [Contra](https://contra.com/matysandoval)