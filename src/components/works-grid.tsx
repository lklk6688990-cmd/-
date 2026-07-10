'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpen } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  script: string;
}

export function WorksGrid() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const filter = searchParams.get('filter');
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorks = async () => {
      try {
        let url = '/api/works';
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (filter) params.append('filter', filter);
        if (params.toString()) {
          url += '?' + params.toString();
        }

        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setWorks(data);
        }
      } catch (error) {
        console.error('Failed to load works:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, [search, filter]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-900 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (works.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <BookOpen className="w-12 h-12 text-gray-600 mb-4" />
        <p className="text-gray-400">
          {search ? `No works found for "${search}"` : 'No works found'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <Link
          key={work.id}
          href={`/works/${work.id}`}
          className="group p-6 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-950/50 transition-all duration-300"
        >
          <h3 className="text-lg font-light mb-2 group-hover:text-gray-300 transition-colors line-clamp-2">
            {work.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{work.author}</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">
              {work.dynasty}
            </span>
            <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">
              {work.script}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
