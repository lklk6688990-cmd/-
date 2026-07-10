import { CalligrapherDetail } from '@/components/calligrapher-detail';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Calligrapher - Tieku',
  description: 'View calligrapher details and works',
};

export default function CalligrapherPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          href="/calligraphers"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <CalligrapherDetail calligrapherId={parseInt(params.id)} />
      </div>
    </div>
  );
}
