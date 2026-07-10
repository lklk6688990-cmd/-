'use client';

import Link from 'next/link';
import { Users, Calendar, Palette } from 'lucide-react';

const categories = [
  {
    name: 'Calligraphers',
    description: 'Browse by artist',
    icon: Users,
    href: '/calligraphers',
  },
  {
    name: 'Dynasty',
    description: 'Explore historical periods',
    icon: Calendar,
    href: '/works?filter=dynasty',
  },
  {
    name: 'Script Style',
    description: 'Discover script variations',
    icon: Palette,
    href: '/works?filter=script',
  },
];

export function Categories() {
  return (
    <section>
      <h2 className="text-2xl font-light mb-8 tracking-tight">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.name}
              href={category.href}
              className="group p-6 border border-gray-800 rounded hover:border-gray-700 hover:bg-gray-950/50 transition-all duration-300"
            >
              <div className="mb-4 text-gray-400 group-hover:text-white transition-colors">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-light mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {category.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
