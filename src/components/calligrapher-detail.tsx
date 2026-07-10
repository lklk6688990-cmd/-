'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface Calligrapher {
  id: number;
  name: string;
  enName?: string;
  dynasty: string;
  biography?: string;
}

interface CalligrapherDetailProps {
  calligrapherId: number;
}

export function CalligrapherDetail({ calligrapherId }: CalligrapherDetailProps) {
  const [calligrapher, setCalligrapher] = useState<Calligrapher | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCalligrapher = async () => {
      try {
        const response = await fetch(`/api/calligraphers/${calligrapherId}`);
        if (response.ok) {
          const data = await response.json();
          setCalligrapher(data);
        }
      } catch (error) {
        console.error('Failed to load calligrapher:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCalligrapher();
  }, [calligrapherId]);

  if (loading) {
    return <div className="h-96 bg-gray-900 rounded animate-pulse" />;
  }

  if (!calligrapher) {
    return <div className="text-gray-400">Calligrapher not found</div>;
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-5xl font-light mb-2 tracking-tight">{calligrapher.name}</h1>
        {calligrapher.enName && <p className="text-xl text-gray-400 mb-4">{calligrapher.enName}</p>}
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{calligrapher.dynasty}</span>
        </div>
      </div>

      {calligrapher.biography && (
        <div className="mb-12">
          <h2 className="text-2xl font-light mb-4">Biography</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{calligrapher.biography}</p>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-light mb-4">Works</h2>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
}
