'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getCarBookingUrl } from '@/lib/whatsapp';
import { trackWhatsAppConversion } from '@/lib/analytics';

type Car = {
  slug: string;
  name: string;
  type: string;
  pricePerDay: number;
  originalPrice?: number;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  ac: boolean;
};

export default function CarCard({ car }: { car: Car }) {
  const waUrl = getCarBookingUrl(car.name, car.pricePerDay);

  return (
    <article className="card-lift group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={car.image}
          alt={`${car.name} self drive rental in Goa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Type badge */}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
          {car.type}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 className="font-bold text-slate-900 text-base leading-tight">{car.name}</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-extrabold text-teal-600">₹{car.pricePerDay.toLocaleString('en-IN')}</span>
            {car.originalPrice && (
              <span className="text-sm text-slate-400 line-through font-medium">
                ₹{car.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-sm text-slate-400">/day</span>
          </div>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
            <svg className="w-3.5 h-3.5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            {car.seats} Seats
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
            <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            {car.transmission}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
            <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {car.fuelType}
          </span>
          {car.ac && (
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
              <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AC
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-1">
          <Link
            href={`/cars/${car.slug}`}
            className="flex-1 text-center rounded-xl border border-teal-200 py-2.5 text-sm font-medium text-teal-700 hover:bg-teal-50 transition-colors"
          >
            View Details
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-xl bg-orange-500 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            onClick={() => trackWhatsAppConversion()}
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
