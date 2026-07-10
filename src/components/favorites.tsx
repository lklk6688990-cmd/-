'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface FavoriteWork {
  id: number;
  title: string;
  author: string;
  dynasty: string;
}

export function Favorites() {
  const [works, setWorks] = useState<FavoriteWork[]>([]);

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
  }, []);

  if (works.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-5 h-5 text-gray-400" />
        <h2 className="text-2xl font-light tracking-tight">Favorites</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="group p-4 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-950/50 transition-all duration-300"
          >
            <h3 className="text-lg font-light mb-2 group-hover:text-gray-300 transition-colors">
              {work.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{work.author}</p>
            <p className="text-xs text-gray-600">{work.dynasty}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
