# CLAUDE.md - Medical Clinic Website Development

## Project Overview
Next.js application for a medical clinic website with modern design system and comprehensive functionality.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/          # shadcn/ui components
├── lib/             # Utility functions
└── hooks/           # Custom React hooks
```

## Design System
- Base color: Neutral
- Style: New York (shadcn/ui)
- CSS Variables: Enabled for theming
- Dark/Light mode: Supported

## Notes
- Uses Tailwind CSS v4 with modern @import syntax
- shadcn/ui configured with TypeScript and RSC support
- Icon library: Lucide React
- Build verification: ✅ Passed