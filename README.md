# Tieku (帖库)

A minimalist Chinese Calligraphy Database for personal study.

## Features

- 📚 Browse calligraphy works by calligraphers, dynasties, and script styles
- 🔍 Full-text search across all works
- ⭐ Save favorite works
- 👁️ View history tracking
- 🖼️ High-resolution image viewer with OpenSeadragon
- 🌙 Dark mode by default
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 and TypeScript

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, TailwindCSS, shadcn/ui
- **Database**: SQLite with Prisma ORM
- **Image Viewer**: OpenSeadragon for high-resolution images
- **Icons**: Lucide Icons
- **State Management**: Zustand

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tieku
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Initialize the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
└── styles/          # Global styles

prisma/
└── schema.prisma    # Database schema
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linter
- `npm run db:push` - Push Prisma schema changes to database
- `npm run db:studio` - Open Prisma Studio

## Database Schema

The application uses the following main models:

- **Calligrapher**: Information about individual calligraphers
- **Work**: Calligraphy works with metadata and images
- **ScriptStyle**: Different calligraphy script styles
- **Dynasty**: Historical dynasties for classification
- **ViewHistory**: Track viewed works for recent viewing list

## Pages

- `/` - Home page with search, recent views, and favorites
- `/calligraphers` - Browse all calligraphers
- `/calligraphers/[id]` - Individual calligrapher details
- `/works` - Browse all works
- `/works/[id]` - Detailed work view with high-resolution image viewer

## Design

- Minimalist black-and-white aesthetic
- Clean typography with light font weights
- Smooth transitions and hover effects
- Fully responsive mobile-first design
- Accessibility-focused components

## License

MIT
