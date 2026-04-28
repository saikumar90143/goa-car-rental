'use client';

import { useState } from 'react';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';

const types = ['All', 'Hatchback', 'Sedan', 'SUV', 'MUV'];
const seatsOptions = ['All', '5 Seater', '7 Seater'];
const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low'];

export default function CarsClient() {
  const [activeType, setActiveType] = useState('All');
  const [activeSeats, setActiveSeats] = useState('All');
  const [sortOrder, setSortOrder] = useState('Recommended');

  // Filter logic
  let filtered = cars.filter((car) => {
    const matchType = activeType === 'All' || car.type === activeType;
    const matchSeats =
      activeSeats === 'All' ||
      (activeSeats === '5 Seater' && car.seats === 5) ||
      (activeSeats === '7 Seater' && car.seats === 7);
    return matchType && matchSeats;
  });

  // Sort logic
  filtered = [...filtered].sort((a, b) => {
    if (sortOrder === 'Price: Low to High') return a.pricePerDay - b.pricePerDay;
    if (sortOrder === 'Price: High to Low') return b.pricePerDay - a.pricePerDay;
    return 0; // Default: 'Recommended' (original array order)
  });

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8 flex flex-col gap-6">
        {/* Top Filters (Type & Seats) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
          
          {/* Car Type Filter */}
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Car Type</h3>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter cars by type">
              {types.map((type) => (
                <button
                  key={type}
                  role="tab"
                  aria-selected={activeType === type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all border ${
                    activeType === type
                      ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Seating Capacity Filter */}
          <div>
            <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Seating</h3>
            <div className="flex flex-wrap gap-2">
              {seatsOptions.map((seats) => (
                <button
                  key={seats}
                  onClick={() => setActiveSeats(seats)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all border ${
                    activeSeats === seats
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  {seats}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Results Count & Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-slate-500 text-sm font-medium">
            Showing <span className="font-bold text-slate-900">{filtered.length}</span> cars
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm font-bold text-slate-700">Sort by:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer hover:border-teal-300 transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No cars found</h3>
          <p className="text-slate-500">Try adjusting your filters to see more options.</p>
          <button 
            onClick={() => { setActiveType('All'); setActiveSeats('All'); }}
            className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700 underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
}
