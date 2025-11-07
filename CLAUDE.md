# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14+ landing page for **Estiga Total Academia** (Santa Rita/PB) focused on lead generation through WhatsApp conversion. The project uses the App Router architecture with TypeScript and Tailwind CSS, deployed on Netlify.

**Primary Goal**: Convert visitors to WhatsApp leads for free trial class sign-ups.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Optimize images (converts to WebP)
npm run optimize-images
```

## Architecture and Code Structure

### Next.js App Router Layout
- **Root Layout** (`app/layout.tsx`): Wraps all pages with `<Header>` and `<Footer>`, uses Inter font from Google Fonts
- **Home Page** (`app/page.tsx`): Imports and composes all section components in sequence
- All components use TypeScript with strict mode enabled

### Component Organization
```
/components
  /sections     # Full-width landing page sections (Hero, SocialProof, Benefits, etc.)
  /ui           # Reusable UI components (Button, Card, Header, Footer)
```

**Section Components** (`/components/sections/`):
- Each section is a self-contained React component
- Rendered in order on home page: Hero → SocialProof → Benefits → Modalities → Pricing → Structure
- Most sections use `'use client'` directive for interactivity

**UI Components** (`/components/ui/`):
- `Button.tsx`: Polymorphic component that renders as `<a>` when `href` prop is provided, `<button>` otherwise. Supports WhatsApp icon via `showWhatsAppIcon` prop
- `Header.tsx`: Fixed navigation bar
- `Footer.tsx`: Bottom section with links and social media
- `Card.tsx`: Reusable card layout

### WhatsApp Integration

**Central utility** (`lib/whatsapp.ts`):
```typescript
getWhatsAppLink(customMessage?: string): string
```
- Formats WhatsApp deep link with pre-filled message
- Default number: `5583991907740`
- Used in all CTA buttons throughout the landing page

**Usage pattern**:
```tsx
import { getWhatsAppLink } from '@/lib/whatsapp';

<Button
  href={getWhatsAppLink('Custom message here')}
  showWhatsAppIcon
/>
```

### Image Optimization

**Configuration** (`next.config.mjs`):
- Supports WebP and AVIF formats
- Multiple device sizes defined for responsive images
- Remote patterns configured for `images.unsplash.com`

**Folder structure**:
```
/public/images
  /hero          # Hero section backgrounds
  /testimonials  # Before/after transformation photos
  /structure     # Gym facility photos
  /modalities    # Activity/class photos
```

**Optimization script** (`lib/optimize-images.ts`):
- Run via `npm run optimize-images`
- Converts JPG/PNG to WebP (85% quality)
- Processes all image folders automatically
- Uses Sharp library

### Styling System

**Tailwind Config** (`tailwind.config.ts`):
- **Brand Colors**:
  - `primary`: `#000000` (black)
  - `secondary.orange`: `#FF6B00` (primary CTA color)
  - `neutral`: `#FFFFFF` (white)
- **Custom Utility**: `.scrollbar-hide` for hiding scrollbars
- Container centered with responsive padding

**Global Styles** (`app/globals.css`):
- Custom animations: `.animate-fade-in`, `.animate-slide-up`
- Utility classes: `.btn-primary`, `.card`
- Smooth scrolling enabled globally

### Path Aliases
TypeScript configured with `@/*` alias pointing to root directory:
```tsx
import Hero from '@/components/sections/Hero';
import { getWhatsAppLink } from '@/lib/whatsapp';
```

## Key Implementation Details

### Responsive Images
Always use Next.js `<Image>` component with:
- `priority` prop for above-the-fold images (Hero)
- `fill` prop for background images with `object-cover`
- Appropriate `sizes` prop for responsive loading
- `quality={90}` for hero images, lower for thumbnails

### Button Component Pattern
The Button component is polymorphic:
- Renders `<a>` tag when `href` is provided (for WhatsApp links)
- Renders `<button>` tag otherwise
- Always opens external links with `target="_blank"` and `rel="noopener noreferrer"`

### Client vs Server Components
- Section components with interactivity use `'use client'` directive
- UI components are client components when using event handlers
- Layout and page components are server components by default

## Project-Specific Guidelines

### Landing Page Conversion Focus
- All CTA buttons should use the `getWhatsAppLink()` utility
- Maintain consistent orange (`#FF6B00`) color for all primary CTAs
- Keep WhatsApp number centralized in `lib/whatsapp.ts`

### PRD Reference
The complete product requirements are in `docs/prd.md`, including:
- All section content and copy
- Target metrics and success criteria
- Complete brand guidelines
- WhatsApp message templates

### Deployment
- Hosted on Netlify
- Uses `@netlify/plugin-nextjs` for optimized Next.js builds
- Build command: `npm run build`
- Publish directory: `.next`

### Testing Changes Locally
1. Run `npm run dev`
2. Visit `http://localhost:3000`
3. Test WhatsApp links (they open WhatsApp Web/app with pre-filled message)
4. Check responsive behavior on mobile viewports
