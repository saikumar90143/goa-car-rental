import Link from 'next/link';
import CarCard from './CarCard';
import { featuredCars } from '@/data/cars';

export default function FeaturedCars() {
  return (
    <section className="py-16 md:py-20 bg-teal-50" id="featured-cars">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Popular Picks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Top Cars for Your Goa Trip
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            From budget hatchbacks to family SUVs — all well-maintained, fuel-efficient, and ready for Goa's roads.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/cars"
            id="featured-view-all-btn"
            className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-teal-700 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            View All 18 Cars
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
