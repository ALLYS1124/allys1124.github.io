# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ally Santana, an artist based in LA. The site is built with Next.js 14 and TypeScript, and is hosted on GitHub Pages (allys1124.github.io).

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
This project uses Next.js 14 with the App Router (not Pages Router). All routes are defined in `src/app/`:
- `src/app/layout.tsx` - Root layout with metadata and Inter font
- `src/app/page.tsx` - Home page displaying artwork grid
- `src/app/globals.css` - Global styles

### Components
- `src/app/artwork.tsx` - Reusable component for displaying individual artwork pieces
  - Takes props: `flamingo` (title), `paragraph` (description), `artwork` (imported image)
  - Uses Next.js `Image` component with blur placeholder

### Image Management
- All artwork images are stored in `src/artImages/`
- Images are imported as static imports in `page.tsx` and passed to the `Artwork` component
- Next.js automatically optimizes images at build time

### Styling
- CSS Modules are used for component-specific styles (e.g., `page.module.css`, `artwork.module.css`)
- Global styles in `globals.css`

### TypeScript Configuration
- Path alias `@/*` maps to `./src/*`
- Strict mode enabled
- Module resolution set to "bundler"
