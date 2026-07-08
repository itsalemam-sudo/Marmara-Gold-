# Marmara Gold Trading LLC — Website

A production React + TypeScript + Vite port of the Marmara Gold marketing
site. Institutional design system, ink/gold palette, live-metals ticker,
data-forward hero, componentised sections.

## Tech

- React 19 + TypeScript
- Vite 6
- Plain CSS Modules + a single `src/styles/tokens.css`
- **No Tailwind, no CSS-in-JS runtime.**

## Design tokens

Do not change without a spec update.

```
--ink        #0A1832    --ink-deep   #060F24
--gold       #C6A15B    --gold-bright #E0C079
--paper      #F6F4EF    --slate      #5C6B82
```

Fonts:

- **Fraunces** — display serif (headlines, brand)
- **Inter** — body sans
- **JetBrains Mono** — data, ticker, eyebrows

## Structure

```
src/
├── App.tsx
├── main.tsx
├── styles/
│   ├── tokens.css      # design tokens only
│   ├── reset.css       # modern reset + focus + reduced-motion
│   └── global.css      # base type, utility primitives
├── data/               # typed content — edit copy here, not JSX
│   ├── nav.ts
│   ├── ticker.ts
│   ├── stats.ts
│   ├── capabilities.ts
│   ├── whyChoose.ts
│   ├── clients.ts
│   ├── careers.ts
│   └── footer.ts
├── components/
│   ├── Ticker/        # live spot marquee (props-driven)
│   ├── Nav/           # logo + primary + barX tab + hamburger
│   ├── Hero/          # headline + about + live-price card
│   ├── Stats/         # 5-stat band (300+, $4T, 180+, 40+, 180+)
│   ├── Capabilities/  # 4-item physical trading + margin banner
│   ├── WhyChoose/     # 4 thin-stroke gold-line icons
│   ├── GlobalReach/   # six-continents + metals data card
│   ├── Clients/       # 10 numbered client types
│   ├── Careers/       # copy + role chips
│   ├── Footer/        # 4 columns + LBMA/DMCC/ISO/AML-CFT badges
│   └── icons/Icons.tsx
└── hooks/
    ├── useReveal.ts   # IntersectionObserver reveal
    └── useLockScroll.ts
```

## Content edits

All copy — nav, ticker prices, stats, capabilities, clients, roles, footer
links, disclaimer — lives in `src/data/*.ts`. Edit these files, not the
component JSX.

## Icon rule

The four `WhyChoose` icons — **globe · shield-lock · sliders · market-pulse**
— are the approved thin-stroke gold line set. Do not revert to the old
multicolor lightning / battery / check / clock icons.

## Nav rule

`barX` is spelled with a lowercase `bar` and capital `X` and rendered as
a highlighted pill (`variant: "tab"` in `src/data/nav.ts`). It is **not**
"xBar".

## Quality floor

- Responsive with a working hamburger overlay
- Visible keyboard focus via `:focus-visible`
- `prefers-reduced-motion` disables all animations
- Scroll reveal via IntersectionObserver only — no scroll listeners
- Skip-to-content link

## Getting started

```
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```
