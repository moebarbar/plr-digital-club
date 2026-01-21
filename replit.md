# Digital Products MRR Platform

## Overview

A high-end, conversion-focused marketing landing page for selling resell-ready digital products with Master Resell Rights (MRR). Users purchase one-time lifetime access to 1,000+ curated digital products that they can resell anywhere and keep 100% of the profit. The platform emphasizes premium SaaS-style design with bold typography, generous spacing, and a modern aesthetic inspired by Stripe, Linear, and Gumroad.

## Recent Changes (January 2026)

- Enhanced landing page with premium graphics and product images
- Added sections: Hero with product bundle image, Trust strip, How It Works (3 steps), Products showcase, Value breakdown with pricing, Testimonials, FAQ (expandable), Final CTA
- Generated 6 custom product mockup images for visual appeal
- Configured Inter font and brand color #0791ff
- Implemented responsive design with proper mobile/desktop spacing
- Added comprehensive data-testid attributes for testing
- SEO meta tags optimized with keywords, Open Graph, and Twitter cards
- Styled for PLR Digital Club branding
- **Blog Section Added**: Full blog with 6 SEO-optimized articles
  - Blog listing page at /blog with category filters
  - Individual post pages at /blog/:slug with full article content
  - Topics: PLR basics, MRR explained, passive income, digital niches, starting online business, marketing tips
  - Each article 250-300 words with custom generated images
  - Full OG meta tags for social sharing
  - Related posts, tags, and CTAs on each article page

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express 5 with HTTP server
- **API Pattern**: RESTful routes prefixed with `/api`
- **Development**: Vite middleware for HMR in development, static file serving in production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **Storage Pattern**: Interface-based storage abstraction (IStorage) with in-memory implementation, designed for easy swap to database-backed storage
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and query client
│       └── pages/          # Route components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev middleware
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations
```

### Design System
- **Primary Brand Color**: `#0791ff` (vibrant blue)
- **Typography**: Inter font family via Google Fonts
- **Spacing**: Tailwind units (4, 8, 12, 16, 20, 24, 32)
- **Theme**: CSS custom properties for light/dark mode support
- **Components**: Premium SaaS-inspired with subtle shadows, rounded borders, and hover effects

### Build & Deployment
- **Development**: `npm run dev` runs tsx with Vite middleware
- **Production Build**: Custom build script using esbuild for server, Vite for client
- **Output**: Server bundle at `dist/index.cjs`, client assets at `dist/public`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)

### UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **Recharts**: Charting library
- **React Day Picker**: Calendar component
- **Vaul**: Drawer component
- **CMDK**: Command menu component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form

### Potential Future Integrations
The build script bundles support for:
- **Stripe**: Payment processing
- **Passport/Passport-Local**: Authentication
- **Nodemailer**: Email sending
- **OpenAI / Google Generative AI**: AI features
- **Multer**: File uploads