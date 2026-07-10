# Tieku Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── calligraphers/     # Calligraphers pages
│   │   ├── works/             # Works pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── navigation.tsx
│   │   ├── search-box.tsx
│   │   └── ...
│   ├── lib/                   # Utilities
│   ├── types/                 # TypeScript types
│   └── styles/                # Global styles
├── prisma/
│   └── schema.prisma          # Database schema
└── public/                    # Static assets
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Sync Prisma schema with database
- `npm run db:studio` - Open Prisma Studio

## Database Setup (Optional)

The app currently uses mock data. To set up a real database:

1. Ensure `DATABASE_URL` is set in `.env.local` (defaults to `file:./data.db`)
2. Run `npm run db:push` to initialize the database
3. Run `npm run db:studio` to browse and manage data via Prisma Studio

## Features

- ✅ Home page with search, recent views, and favorites
- ✅ Browse calligraphers
- ✅ View calligrapher details
- ✅ Browse all works
- ✅ View detailed work information
- ✅ Favorite management (localStorage)
- ✅ View history tracking (localStorage)
- ✅ Search functionality
- ✅ Dark mode by default
- ✅ Fully responsive design
- ✅ Clean, minimalist UI

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Database:** SQLite with Prisma (optional)
- **State:** localStorage for client-side state

## Development Notes

- All components are "use client" for interactive features
- API routes use mock data and can be replaced with database queries
- Favorites and recent views are stored in localStorage
- The app is fully functional without a database backend
- All features work on mobile and desktop

## Next Steps

1. Add real database support by updating API routes
2. Implement image upload and storage
3. Add high-resolution image viewer with OpenSeadragon
4. Add user authentication (if needed)
5. Deploy to production

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TailwindCSS not applying:**
- Clear `.next` directory: `rm -rf .next`
- Rebuild: `npm run dev`
