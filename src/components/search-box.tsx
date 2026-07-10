'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/works?search=${encodeURIComponent(query)}`);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search calligraphy works, artists, or dynasties..."
          className="w-full pl-12 pr-12 py-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}
