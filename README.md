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

Tokens are authored in Token Studio and exported as CSS. The CSS files are versioned in this repo as the single source of truth.

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

Tokens keep their semantic-to-primitive references intact, so the chain is inspectable end to end. Open `semantics.light.json` and you see `{color.gold.500}`, not a baked hex value. The reference chain is the architecture, and it survives into the generated CSS as a `var()` chain.

### Accessibility

WCAG pairings are designed into the token decisions, not checked afterward. The brand anchor, `gold.500` on `gray.900`, lands at 13:1 contrast (AAA).

## Status

- [x] Primitive tokens
- [x] Semantic layer, light and dark
- [x] Tokens wired to code (CSS variables mapped to Tailwind v4 via `@theme {}`)
- [ ] Core components (shadcn/ui restyled through the token layer) — Button, Card, Input installed and wired to tokens; more to come
- [ ] 3 screens: Portfolio Dashboard, Asset Detail, Deposit & FX Conversion
- [ ] Storybook
- [ ] Deployed app

## Stack

Figma · Token Studio · Claude Code · Cursor · React 19 · Vite · Tailwind CSS v4 · shadcn/ui · Storybook

## Author

**Maty Sandoval**, Product Designer
[matysandoval.com](https://www.matysandoval.com) · [Contra](https://contra.com/matysandoval)