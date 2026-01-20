# Design Guidelines: Digital Products MRR Platform

## Design Approach
**System**: Modern SaaS-inspired design combining Stripe's restraint, Linear's typography clarity, and Gumroad's product focus. Premium, conversion-optimized with bold hierarchy and generous spacing.

## Brand Color Integration
Primary Brand: `#0791ff` (vibrant blue)
- Use for CTAs, accents, hover states, and key highlights
- Pair with neutral grays/blacks for sophistication
- Create depth with lighter/darker variations for backgrounds and borders

## Typography System
**Headline Hierarchy:**
- H1 (Hero): Bold, 3.5-4rem desktop / 2.5rem mobile, tight leading (-0.02em)
- H2 (Sections): Semi-bold, 2.5-3rem desktop / 2rem mobile
- H3 (Cards): Semi-bold, 1.5-1.75rem
- Body: Regular, 1.125rem with relaxed leading (1.7)
- Small: 0.875-1rem for supporting text

**Font Selection:** Use inter or similar modern sans-serif via Google Fonts

## Layout & Spacing System
**Tailwind Units:** Consistently use 4, 8, 12, 16, 20, 24, 32 for spacing
**Section Padding:** py-20 desktop / py-12 mobile
**Container:** max-w-7xl with px-6
**Content Blocks:** max-w-4xl for text-heavy areas

## Page Structure (In Order)

### 1. Hero Section
- Full-width with gradient or subtle pattern background
- Centered content: max-w-4xl
- Headline: "Get Resell-Ready Digital Products for 100% Profit"
- Subheadline below with muted color
- Primary CTA: Large button with brand color, 16px padding, rounded-lg
- Secondary CTA: Ghost/outline button below or beside primary
- Spacing: py-24 desktop / py-16 mobile

### 2. Trust/Credibility Strip
- Horizontal flex layout with 4-5 trust badges/statements
- Icons + short text (e.g., "Lifetime Access", "30-Day Guarantee")
- Subtle background or border to distinguish from hero
- py-12 spacing

### 3. What You Get (Value Cards)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Cards with: Icon top, bold title, 1-line description
- Highlight: "1,000+ Products", "Master Resell Rights", "100% Profit", "Lifetime Access", "Brand-Ready"
- Card styling: Rounded borders, subtle shadow/border, p-8
- gap-8 between cards

### 4. Product Categories
- Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-3
- Each category: Icon/visual + Category name + One-line benefit
- Categories: Templates & Systems, AI & Business Tools, Marketing Assets, SaaS & Software, Planners/Journals, Website Kits
- Interactive hover state with subtle scale/shadow
- py-20 section padding

### 5. How It Works
- 4-column grid desktop / 2-column tablet / 1-column mobile
- Step cards with: Number badge, Step title, Brief description
- Steps: "Join" → "Download" → "Customize" → "Sell & Keep 100%"
- Visual flow indicators (arrows or lines) between steps on desktop
- py-20 section padding

### 6. Pricing/Offer Section
- Centered pricing card with emphasis
- Large pricing display with "One-Time Payment" badge
- Bullet points of what's included
- Highlight "Lifetime Access" prominently
- Strong CTA button (same style as hero)
- max-w-2xl centered
- Contrasting background (light/dark depending on theme)

### 7. Final CTA Section
- Bold closing statement centered
- Repeat primary CTA button
- Optional: Small trust reminder below
- py-24 spacing
- Contrasting background treatment

## Component Specifications

### Buttons
- Primary: bg-brand-color, white text, px-8 py-4, rounded-lg, font-semibold
- Secondary: border-2 border-brand-color, brand-color text, same padding
- Hover: Subtle scale (1.02) + brightness increase

### Cards
- Border: 1px solid with subtle gray or brand-tinted border
- Padding: p-6 to p-8
- Border-radius: rounded-xl
- Shadow: subtle on hover (shadow-lg)
- Background: white/dark depending on theme

### Icons
- Use Heroicons or Lucide via CDN
- Size: 24-32px for cards, 48px for feature highlights
- Color: Brand color or muted gray

### Animations
- Subtle fade-in on scroll for sections
- Micro-interactions: Button scale on hover, card lift on hover
- NO distracting animations, keep it professional

## Images
**Hero Background:** Abstract gradient or geometric pattern (not photo) - subtle, doesn't compete with text
**Category Icons:** Use icon library, no custom illustrations needed
**No large photography** - keep focus on clean, modern UI elements

## Mobile Responsiveness
- All grids collapse to single column on mobile
- Hero text scales down appropriately (2.5rem headline)
- CTA buttons full-width on mobile (w-full sm:w-auto)
- Reduce section padding: py-12 mobile vs py-20 desktop
- Stack trust badges vertically on small screens

## Quality Standards
- Pixel-perfect alignment throughout
- Consistent spacing rhythm
- Clear visual hierarchy at every breakpoint
- Fast-loading, performance-optimized
- Premium feel with restrained elegance—no clutter