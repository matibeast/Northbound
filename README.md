# Northbound

A concept investing app for people in Latin America who want to invest in US stocks and ETFs. Built as a public case study: a token-driven, AI-ready design system taken from Figma primitives to a deployed product.

> **Concept project.** No real money flows, all data is sample data, and nothing here is financial advice. Designed and built independently by [Maty Sandoval](https://www.matysandoval.com) alongside Memorisely's AI Design Systems and AI Coding bootcamps.

## The idea

AI design and code tools are only as good as the system they consume. This repo is the proof of that pipeline: one token source feeding both Figma and production code, with components generated and scaled using Claude Code via Figma MCP.

## Token architecture

```
tokens/
  primitives.json        Raw scales: color, type, space, radius. No theme logic.
  semantics.light.json   Role-based tokens (surface, text, border, interactive, feedback). Light values.
  semantics.dark.json    Same roles, dark values. The theme switch lives entirely in this layer.
```

Tokens follow the W3C DTCG format and sync between this repo and Figma through Token Studio, so design and code consume the same source of truth.

## Status

- [x] Primitive tokens
- [x] Semantic layer, light and dark
- [ ] Tokens wired to code (CSS variables + Tailwind config)
- [ ] Core components (shadcn/ui restyled through the token layer)
- [ ] 3 screens: Portfolio Dashboard, Asset Detail, Deposit & FX Conversion
- [ ] Storybook
- [ ] Deployed app

## Stack

Figma · Token Studio · Claude Code · Cursor · React · Next.js · Tailwind CSS · shadcn/ui · Storybook

## Author

**Maty Sandoval**, Product Designer
[matysandoval.com](https://www.matysandoval.com) · [Contra](https://contra.com/matysandoval)