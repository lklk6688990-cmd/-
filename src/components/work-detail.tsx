'use client';

import { useState, useEffect } from 'react';
import { Heart, Share2, Info } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  script: string;
  words: string;
  width?: number;
  height?: number;
  description?: string;
  museum?: string;
  imageUrls: string[];
}

interface WorkDetailProps {
  workId: number;
}

export function WorkDetail({ workId }: WorkDetailProps) {
  const [work, setWork] = useState<Work | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadWork = async () => {
      try {
        const response = await fetch(`/api/works/${workId}`);
        if (response.ok) {
          const data = await response.json();
          setWork(data);
          
          // Check if favorited
          const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
          setIsFavorite(favorites.some((f: any) => f.id === workId));
          
          // Add to recent viewed
          const recent = JSON.parse(localStorage.getItem('recentViewed') || '[]');
          const filtered = recent.filter((w: any) => w.id !== workId);
          localStorage.setItem('recentViewed', JSON.stringify([data, ...filtered].slice(0, 20)));
        }
      } catch (error) {
        console.error('Failed to load work:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWork();
  }, [workId]);

  const toggleFavorite = () => {
    if (!work) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const filtered = favorites.filter((f: any) => f.id !== work.id);
      localStorage.setItem('favorites', JSON.stringify(filtered));
    } else {
      const newFavorite = {
        id: work.id,
        title: work.title,
        author: work.author,
        dynasty: work.dynasty,
      };
      localStorage.setItem('favorites', JSON.stringify([newFavorite, ...favorites]));
    }
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <div className="h-96 bg-gray-900 rounded animate-pulse" />;
  }

  if (!work) {
    return <div className="text-gray-400">Work not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Image Viewer */}
      <div className="lg:col-span-2">
        <div className="bg-gray-950 border border-gray-800 rounded aspect-square flex items-center justify-center mb-6">
          {work.imageUrls && work.imageUrls.length > 0 ? (
            <img
              src={work.imageUrls[0]}
              alt={work.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-gray-600">No image available</div>
          )}
        </div>
        {work.imageUrls && work.imageUrls.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {work.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${work.title} - ${index + 1}`}
                className="h-20 w-20 object-cover rounded border border-gray-800 hover:border-gray-700 cursor-pointer transition-colors"
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <h1 className="text-4xl font-light mb-4 tracking-tight">{work.title}</h1>
        
        <div className="mb-8 pb-8 border-b border-gray-800">
          <p className="text-gray-400 mb-2">Author</p>
          <p className="text-xl mb-6">{work.author}</p>

          <p className="text-gray-400 mb-2">Dynasty</p>
          <p className="text-xl mb-6">{work.dynasty}</p>

          <p className="text-gray-400 mb-2">Script</p>
          <p className="text-xl mb-6">{work.script}</p>

          {work.width && work.height && (
            <>
              <p className="text-gray-400 mb-2">Dimensions</p>
              <p className="text-xl mb-6">
                {work.width} × {work.height} cm
              </p>
            </>
          )}

          {work.museum && (
            <>
              <p className="text-gray-400 mb-2">Museum</p>
              <p className="text-xl">{work.museum}</p>
            </>
          )}
        </div>

        {work.description && (
          <div className="mb-8 pb-8 border-b border-gray-800">
            <h2 className="text-lg font-light mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Description
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {work.description}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={toggleFavorite}
            className={`flex-1 py-3 px-4 rounded border transition-all flex items-center justify-center gap-2 ${
              isFavorite
                ? 'bg-white text-black border-white'
                : 'border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Favorited' : 'Favorite'}
          </button>
          <button className="py-3 px-4 rounded border border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300 transition-all flex items-center justify-center gap-2">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
