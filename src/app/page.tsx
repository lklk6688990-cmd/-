import { SearchBox } from '@/components/search-box';
import { RecentViewed } from '@/components/recent-viewed';
import { Favorites } from '@/components/favorites';
import { Categories } from '@/components/categories';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-white/5 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="text-xs tracking-widest uppercase text-gray-400 px-3 py-1 border border-white/10 rounded-full bg-white/5">
              Tieku · 帖库
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            <span className="block mb-2">Explore</span>
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Chinese Calligraphy
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            A minimalist database for serious study and appreciation of classical Chinese calligraphy. Discover masterworks from legendary artists across dynasties.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <SearchBox />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl md:text-3xl font-light mb-1">3</div>
              <p className="text-sm text-gray-500">Master Artists</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light mb-1">2</div>
              <p className="text-sm text-gray-500">Historical Eras</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light mb-1">6+</div>
              <p className="text-sm text-gray-500">Masterworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Categories />
        </div>
      </section>

      {/* Recent Viewed Section */}
      <section className="px-4 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <RecentViewed />
        </div>
      </section>

      {/* Favorites Section */}
      <section className="px-4 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Favorites />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Ready to explore?</h2>
          <p className="text-gray-400 mb-8 text-lg">Start your journey through the rich history and artistry of Chinese calligraphy</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/calligraphers"
              className="px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
            >
              Browse Calligraphers
            </a>
            <a
              href="/works"
              className="px-8 py-3 border border-white/20 text-white rounded-lg font-light hover:border-white/40 hover:bg-white/5 transition-all"
            >
              View All Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
