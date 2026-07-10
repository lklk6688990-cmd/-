'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';

interface RecentWork {
  id: number;
  title: string;
  author: string;
  dynasty: string;
}

export function RecentViewed() {
  const [works, setWorks] = useState<RecentWork[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem('recentViewed');
    if (stored) {
      try {
        setWorks(JSON.parse(stored).slice(0, 6));
      } catch (e) {
        console.error('Failed to parse recent works', e);
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
          <div className="p-2 rounded-lg bg-white/10">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Recently Viewed</h2>
            <p className="text-sm text-gray-400 mt-1">Continue exploring your recent discoveries</p>
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
            className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
          >
            {/* Hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h3 className="text-lg font-light mb-2 group-hover:text-gray-200 transition-colors line-clamp-2 tracking-tight">
                {work.title}
              </h3>
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
