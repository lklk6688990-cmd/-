import { WorksGrid } from '@/components/works-grid';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works - Tieku',
  description: 'Browse all calligraphy works',
};

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">Works</h1>
          <p className="text-gray-400">All calligraphy works in our collection</p>
        </div>

        {/* Grid */}
        <WorksGrid />
      </div>
    </div>
  );
}
