# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevProfile Pro is a Swedish-language developer portfolio builder for career changers. It displays profile descriptions in three different tones (Professional, Tech-heavy, Story-driven) that can be easily customized.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

**Frontend**: React 19 + TypeScript + Vite, styled with Tailwind CSS (via CDN) and Font Awesome icons.

**Data Flow**:
1. `src/App.tsx` holds profile data (`DEFAULT_PROFILE`) and predefined texts (`PROFILE_TEXTS`)
2. User selects a tone to view different profile descriptions
3. User can copy text to clipboard

**Project Structure**:
```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Main component with UI, state, and profile texts
├── types.ts                 # TypeScript interfaces (ProfileData, Project, Tone)
├── vite-env.d.ts           # Vite type declarations
└── components/
    └── SkillsCloud.tsx     # Skills tag display component
```

## Customizing Content

To update the profile texts, edit the `PROFILE_TEXTS` constant in `src/App.tsx`:

```typescript
const PROFILE_TEXTS: Record<string, string> = {
  [Tone.PROFESSIONAL]: "Din professionella text här...",
  [Tone.TECH_HEAVY]: "Din tekniska text här...",
  [Tone.STORY_DRIVEN]: "Din berättande text här..."
};
```

To update profile data (skills, projects, etc.), edit `DEFAULT_PROFILE` in the same file.

## Important Notes

- Tailwind is loaded via CDN in `index.html`, not as a build dependency
- All UI text is in Swedish
- The `@` alias points to `src/` for imports
