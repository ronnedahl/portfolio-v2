# DevProfile Pro

A developer portfolio website for career changers, built with React and TypeScript.

## Live Demo

[View Portfolio](https://portfolio.peterbot.dev)

## Features

- **Profile Tones**: Three different text styles (Professional, Tech-focused, Story-driven)
- **Project Showcase**: Display live projects with links to demos and GitHub repos
- **AI Chatbot Integration**: Link to AI-powered CV chatbot
- **Responsive Design**: Optimized for mobile and desktop
- **Copy to Clipboard**: Easy copying of profile descriptions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Font Awesome

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ronnedahl/portfolio-v2.git

# Navigate to project directory
cd portfolio-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx                  # Main component
├── main.tsx                 # Entry point
├── index.css                # Tailwind imports
├── types.ts                 # TypeScript interfaces
├── data/
│   ├── profile.ts           # Profile data and projects
│   └── profileTexts.ts      # Tone-based profile texts
├── components/
│   └── SkillsCloud.tsx      # Skills display component
└── assets/                  # Images and icons
```

## Customization

### Update Profile Content

Edit `src/data/profile.ts` to update:
- Skills
- Projects
- Education
- Experience

### Update Profile Texts

Edit `src/data/profileTexts.ts` to modify the three tone variations.

## Security

- Tailwind CSS built locally (no CDN)
- SRI hash on Font Awesome CDN
- No external script execution
- 0 npm vulnerabilities

## License

MIT
