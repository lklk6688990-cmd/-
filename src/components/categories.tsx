'use client';

import Link from 'next/link';
import { Users, Calendar, Palette, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'calligraphers',
    name: 'Calligraphers',
    description: 'Explore masterworks by legendary artists',
    icon: Users,
    href: '/calligraphers',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
  },
  {
    id: 'dynasty',
    name: 'Dynasties',
    description: 'Journey through historical periods and eras',
    icon: Calendar,
    href: '/works?filter=dynasty',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
  },
  {
    id: 'script',
    name: 'Script Styles',
    description: 'Discover different calligraphic traditions',
    icon: Palette,
    href: '/works?filter=script',
    color: 'from-amber-500/20 to-amber-600/20',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
  },
];

export function Categories() {
  return (
    <section className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Explore</h2>
        <p className="text-gray-400">Discover Chinese calligraphy through different perspectives</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative overflow-hidden rounded-xl border ${
                category.borderColor
              } bg-gradient-to-br ${category.color} backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 md:hover:scale-105`}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-light mb-2 tracking-tight">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                  {category.description}
                </p>
                
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors text-sm">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
