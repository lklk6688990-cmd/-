'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Search } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-6 h-6" />
            <span className="text-lg font-light tracking-tight">Tieku</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/calligraphers"
              className={`text-sm transition-colors ${
                isActive('/calligraphers') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Calligraphers
            </Link>
            <Link
              href="/works"
              className={`text-sm transition-colors ${
                isActive('/works') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Works
            </Link>
            <button className="text-gray-400 hover:text-white transition-colors p-2">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
