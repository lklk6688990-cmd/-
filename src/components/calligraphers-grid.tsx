'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users } from 'lucide-react';

interface Calligrapher {
  id: number;
  name: string;
  enName?: string;
  dynasty: string;
  biography?: string;
}

export function CalligraphersGrid() {
  const [calligraphers, setCalligraphers] = useState<Calligrapher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCalligraphers = async () => {
      try {
        const response = await fetch('/api/calligraphers');
        if (response.ok) {
          const data = await response.json();
          setCalligraphers(data);
        }
      } catch (error) {
        console.error('Failed to load calligraphers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCalligraphers();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-900 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (calligraphers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Users className="w-12 h-12 text-gray-600 mb-4" />
        <p className="text-gray-400">No calligraphers found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {calligraphers.map((calligrapher) => (
        <Link
          key={calligrapher.id}
          href={`/calligraphers/${calligrapher.id}`}
          className="group p-6 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-950/50 transition-all duration-300"
        >
          <h3 className="text-xl font-light mb-1 group-hover:text-gray-300 transition-colors">
            {calligrapher.name}
          </h3>
          {calligrapher.enName && (
            <p className="text-sm text-gray-500 mb-3">{calligrapher.enName}</p>
          )}
          <p className="text-sm text-gray-600 mb-3">{calligrapher.dynasty}</p>
          {calligrapher.biography && (
            <p className="text-sm text-gray-400 line-clamp-2">{calligrapher.biography}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
