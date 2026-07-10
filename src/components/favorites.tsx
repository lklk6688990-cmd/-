'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';

interface FavoriteWork {
  id: number;
  title: string;
  author: string;
  dynasty: string;
}

export function Favorites() {
  const [works, setWorks] = useState<FavoriteWork[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setWorks(JSON.parse(stored).slice(0, 6));
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading || works.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20">
            <Star className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Your Favorites</h2>
            <p className="text-sm text-gray-400 mt-1">Curated collection of your most loved works</p>
          </div>
        </div>
        <Link
          href="/works"
          className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          View all
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="group relative overflow-hidden rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
          >
            {/* Hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-light group-hover:text-gray-200 transition-colors line-clamp-2 tracking-tight flex-1">
                  {work.title}
                </h3>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0 ml-2" />
              </div>
              <p className="text-sm text-gray-500 mb-3">{work.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 px-2 py-1 rounded bg-white/5">
                  {work.dynasty}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
