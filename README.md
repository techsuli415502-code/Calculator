# Camel Calculator

A fun, friendly, and production-ready online camel calculator. Answer a few simple questions about your appearance and get a playful camel score you can share with friends.

> This tool is for fun and entertainment. Its result is not a real measure of human value.

## Live site

The site is a Next.js 16 single-page app with seven views (Home, About, How It Works, FAQ, Contact, Privacy, Terms) plus a working multi-step calculator.

## Features

- Multi-step calculator with progress bar
- Transparent scoring engine (visible in `src/lib/calculatorScoring.ts`)
- Five friendly result tiers from "Few camels" to "Legend of the dunes"
- Share and Copy buttons for your camel score
- Warm desert theme with original SVG camel artwork
- Fully mobile responsive with working mobile menu
- Contact form with validation
- Per-view SEO titles and meta descriptions
- Open Graph + Twitter card tags
- Canonical URL
- JSON-LD structured data: WebSite, WebApplication, Person, FAQPage
- `robots.txt` and `sitemap.xml` in `/public`
- No em dashes, no emojis in content

## Tech stack

- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui (New York style) with Radix primitives
- Zustand for client state
- Lucide icons

## Local development

```bash
bun install
bun run dev
```

Open `http://localhost:3000` in your browser.

## Project structure

```
src/
  app/
    layout.tsx          # Metadata, JSON-LD, fonts
    page.tsx            # Main view router
    globals.css         # Desert theme variables
  components/
    site/
      CamelCalculator.tsx   # Multi-step form + result
      CamelSvg.tsx          # Original SVG illustrations
      Header.tsx, Footer.tsx, Hero.tsx, PageShell.tsx
      views/
        HomeView.tsx
        AboutView.tsx
        HowItWorksView.tsx
        FaqView.tsx
        ContactView.tsx
        PrivacyView.tsx
        TermsView.tsx
  lib/
    calculatorScoring.ts    # Scoring engine + field definitions
    siteStore.ts            # Zustand view router
public/
  favicon.svg
  og-image.svg
  robots.txt
  sitemap.xml
```

## Scoring system

Each answer option in the calculator has a fixed point value set ahead of time. After the last question, the tool adds up your points and turns the total into a camel count between 1 and 99 using this formula:

```
camelCount = round(rawScore / maxPossible * 90) + 5
```

The full list of options and point values is visible in `src/lib/calculatorScoring.ts`. There is no hidden math and no random roll.

## Author

Jacob Moses, Content Specialist.

## License

Personal project. All rights reserved.
