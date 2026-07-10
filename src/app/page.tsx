import { SearchBox } from '@/components/search-box';
import { RecentViewed } from '@/components/recent-viewed';
import { Favorites } from '@/components/favorites';
import { Categories } from '@/components/categories';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            <span className="gradient-text">帖库</span>
          </h1>
          <p className="text-gray-400 text-lg">A minimalist database for Chinese calligraphy study</p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <SearchBox />
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Categories */}
          <Categories />

          {/* Recent Viewed */}
          <RecentViewed />

          {/* Favorites */}
          <Favorites />
        </div>
      </section>
    </div>
  );
}
