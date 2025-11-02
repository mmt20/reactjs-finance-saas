<!--
  Finance SaaS Landing — Beetleware Task
  Author: Mostafa Mohamed
  Last updated: November 2, 2025
-->

# Finance SaaS Landing — Beetleware Task

A polished, production-minded finance SaaS landing page built with React 19, Vite, and TypeScript. It showcases a modular UI, accessible patterns, client-side data fetching with TanStack Query, Supabase-backed content (pricing, testimonials), charts, and a dark/light theme.

> Last updated: November 2, 2025

## 🔗 Quick Links

- Live demo: [Live Demo](https://reactjs-finance-saas.vercel.app)
- Design source: — [Figma File](https://www.figma.com/design/SKLhZXkR26pi9VzR8R8hKC/SaaS-Landing-Page---Bento-UI--Community---Copy-?node-id=0-1&p=f&t=gSFFUiYg6hD5O8nA-0)

## 📑 Table of Contents

- [What you’ll find](#what-youll-find)
- [Architecture & Design](#architecture--design)
- [Key Features](#key-features)
- [Developer Setup](#developer-setup)
- [Configuration](#configuration)
- [Code Walkthrough (where to look)](#code-walkthrough-where-to-look)
- [Libraries](#libraries)
- [Contact](#contact)

## 🎯 What you'll find

A responsive marketing page for a finance SaaS product:

- Sticky header with theme toggle and mobile navigation
- Hero section with announcement badge, email capture, and social proof avatars
- Dashboard teaser with cards and a responsive Recharts area chart
- Gradient nav chip bar for quick anchors
- Feature sections (analytics, accounting/invoices, collaboration)
- Testimonials carousel with keyboard-friendly controls
- Pricing section powered by Supabase + TanStack Query
- CTA and a multi-column footer

## 🛠️ Architecture & Design

Design goals:

- Composability: UI is split into small, focused components under `src/components/*`.
- Performance: Heavy sections are lazy-loaded via `React.lazy` and wrapped in `Suspense` with skeleton fallbacks.
- Data: Client-side fetching via TanStack Query with a Supabase backend.

Quick file tour

```
src
├── App.tsx                        # main composition (ThemeProvider, ErrorBoundary, lazy sections)
├── main.tsx                       # React entry + QueryClientProvider
├── components
│   ├── Header/Header.tsx          # sticky nav, theme toggle, mobile menu
│   ├── Hero/Hero.tsx              # announcement, email form, avatars
│   ├── GradientNav/GradientNav.tsx# blurred gradient chip nav
│   ├── Dashboard/                 # dashboard preview (cards, charts)
│   ├── Features/                  # analytics, accounting, collaboration
│   ├── Pricing/                   # pricing w/ skeleton + plan cards
│   ├── Testimonials/              # testimonials list + carousel controls
│   ├── CTA/CTA.tsx                # call-to-action section
│   ├── Footer/                    # footer columns/links/social
│   └── common/ui/*                # shadcn-style primitives (button, card, input…)
├── hooks
│   ├── queries/
│   │   ├── usePricing.ts                # fetch plans via TanStack Query
│   │   └── useTestimonials.ts           # fetch testimonials via TanStack Query
│   └── ui/
│       └── useTestimonialsScroll.ts     # left/right scroll controls for testimonials
├── lib
│   ├── react-query.ts             # QueryClient configuration
│   ├── supabase/client.ts         # Supabase client (env-driven)
│   └── charts/                    # recharts config (colors/gradients)
├── services
│   ├── pricingServices.ts         # pricing API (Supabase: pricing_plans)
│   └── testimonialServices.ts     # testimonials API (Supabase: testimonials)
└── types                          # shared types (pricing, testimonials)
```

Recommended quick read order:

1. `src/App.tsx`
2. `src/main.tsx`
3. `src/components/Pricing/Pricing.tsx` and `src/hooks/queries/usePricing.ts`
4. `src/components/Testimonials/Testimonials.tsx` and `src/hooks/queries/useTestimonials.ts`
5. `src/lib/react-query.ts` and `src/lib/supabase/client.ts`

Core concepts:

- App composition lives in `App.tsx` with `React.Suspense` and a shared `SectionFallback`.
- Theme toggling is handled by a small `ThemeProvider` with `localStorage` persistence and `prefers-color-scheme` support.
- Data fetching uses TanStack Query with sane defaults (staleTime, retry, disabled refocus refetch).
- Supabase is the only backend integration; environment variables are required to start the app if pricing/testimonials render on load.
- Charts are built with Recharts and centralized color/gradient config under `src/lib/charts`.

## ✨ Key Features

- ✅ Responsive, accessible layout with sticky header and mobile menu
- ✅ Dark/light theme with persisted preference
- ✅ Lazy-loaded sections + Suspense fallbacks (skeletons for Pricing/Testimonials)
- ✅ Data fetching via TanStack Query v5 (configurable caching/retry)
- ✅ Supabase-backed pricing plans and testimonials
- ✅ Recharts-based area charts with gradient fills
- ✅ TypeScript-first with clear types for pricing/testimonials

## 🚀 Developer Setup

Local dev commands:

```bash
pnpm install
pnpm dev      # start Vite dev server
```

Open:

```
http://localhost:5173
```

Linting:

```bash
pnpm lint
```

## 🔧 Configuration

This project reads Supabase credentials at runtime. Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Notes:

- Missing variables will throw an error at startup (see `src/lib/supabase/client.ts`).
- Ensure the following tables exist in your Supabase project (or adjust services):
  - `pricing_plans` with fields: `id, name, price, description, features[], cta, popular, variant, display_order`
  - `testimonials` with fields: `id, name, rating, avatar, text`

## 🔍 Code Walkthrough (where to look)

- Entry: `src/main.tsx` — mounts `App` inside `QueryClientProvider`
- Composition: `src/App.tsx` — layout, theme provider, error boundary, lazy sections
- Data layer: `src/lib/react-query.ts` and `src/hooks/queries/*`
- Backend client: `src/lib/supabase/client.ts` — creates Supabase client from env vars
- Pricing: `src/components/Pricing/Pricing.tsx` — skeletons, plan mapping, error surfacing
- Testimonials: `src/components/Testimonials/Testimonials.tsx` — carousel + controls
- Charts: `src/lib/charts/*` and `src/components/Dashboard/chart/SpendChart.tsx`
- UI primitives: `src/components/common/ui/*` — Button, Card, Input, etc.

## 📦 Libraries

- React 19, Vite 7, TypeScript 5
- Tailwind CSS v4, tailwind-merge, clsx
- shadcn-style primitives
- TanStack Query v5
- Supabase JS v2
- Recharts, lucide-react

## 📬 Contact

This project is prepared as a task for Beetleware.

📧 Email: [mostafa.mohamed.se@gmail.com](mostafa.mohamed.se@gmail.com)  
🔗 LinkedIn: [LinkedIn](https://linkedin.com/in/mostafa22/)
