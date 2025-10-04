# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Testing & Debugging
```bash
# Check TypeScript types only
npx tsc --noEmit

# Run Next.js build analysis
npm run build -- --debug
```

## Architecture Overview

### Technology Stack
- Framework: Next.js 15.5.2 (App Router) with Turbopack
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4 with PostCSS
- Globe Visualization: COBE (WebGL canvas)
- Fonts: Geist (Sans & Mono) via Next.js/Google Fonts

### Project Structure
```
src/
├── app/
│   ├── layout.tsx        # Root layout and fonts
│   ├── page.tsx          # Renders the hero
│   └── globals.css       # Global styles with Tailwind
└── components/
    ├── GlobeHero.tsx     # Layered hero: COBE globe + DOM header overlay
    └── GlobeDots.tsx     # COBE WebGL globe with animated rotation
```

### UI Architecture
- Background globe: `GlobeDots.tsx` renders a spinning globe using COBE on a canvas. It resizes via `ResizeObserver` and clamps devicePixelRatio to 2 for performance. Props `scale` and `speed` control appearance.
- Header overlay: A DOM `<h1>` is absolutely centered over the globe within `GlobeHero.tsx` using flex centering and a higher z-index. `pointer-events-none` ensures interactions pass through if needed.
- Composition: `GlobeHero.tsx` places the globe and header inside a relative container of fixed height (`h-[520px]`). `src/app/page.tsx` centers this hero within the viewport via `min-h-screen` + flex.

Customization quick refs
- Change title text/color: edit the `<h1>` in `GlobeHero.tsx` (the red "2" is the `<span className="text-[#e10600]">2</span>`).
- Adjust globe speed/size: update `speed` and `scale` props passed to `<GlobeDots />` in `GlobeHero.tsx`.

### Configuration Notes
### Configuration Notes

#### TypeScript
- Target: ES2017 for broad browser compatibility
- Path Mapping: `@/*` maps to `./src/*`
- Strict Mode: Enabled for type safety

#### ESLint
- Extends: Next.js core-web-vitals and TypeScript configurations
- Ignores: Standard Next.js build artifacts and TypeScript definitions

#### Tailwind CSS
- Version: v4
- Integration: PostCSS plugin approach
- Theme: Inline theme configuration in `src/app/globals.css`
- Colors: CSS custom properties for light/dark mode support

## Windows Development Notes

- Shell: PowerShell (pwsh) compatible commands
- Paths: Uses Windows-style backslashes in file structure
- Line Endings: Mixed CRLF/LF (consider normalizing with .gitattributes)
