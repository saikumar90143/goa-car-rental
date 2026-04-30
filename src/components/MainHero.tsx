'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getGeneralBookingUrl, getCarBookingUrl } from '@/lib/whatsapp';
import { trackWhatsAppConversion } from '@/lib/analytics';

export default function MainHero() {
  const tharPrice = 2999;
  const generalWaUrl = getGeneralBookingUrl();
  const tharWaUrl = getCarBookingUrl('Mahindra Thar 4x4', tharPrice);

  return (
    <section className="relative bg-slate-900 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 skew-x-12 translate-x-24 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Content Left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                Premium Self Drive Cars in Goa
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Adventure Awaits <br />
              <span className="text-teal-400">Explore Goa</span> <br className="hidden lg:block" />
              Like Never Before
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Affordable, well-maintained cars with instant WhatsApp booking.
              Get your <span className="text-white font-semibold">Mahindra Thar 4x4</span> or any
              other car delivered to the Airport, Station, Bus Stand, or Hotel.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1"
                onClick={() => trackWhatsAppConversion()}
              >
                Book on WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.4-.3-8.3 2.4-11.1 2.4-2.5 5.5-6.4 8.3-9.7 2.8-3.3 3.7-5.7 5.5-9.4 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <Link
                href="/cars"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                View 15+ Cars
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400">
              {['✈️ Airport Delivery', '🚌 Bus Stand Delivery', '✅ 24/7 Support'].map((pill) => (
                <div key={pill} className="flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {pill}
                </div>
              ))}
            </div>
          </div>

          {/* Image/Thar Spotlight Right */}
          <div className="flex-1 relative w-full group max-w-2xl mx-auto">
            {/* Spotlight decoration */}
            <div className="absolute -inset-4 bg-teal-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />

            <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[500px] xl:h-[600px] w-full bg-slate-800 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/cars/mahindra-thar.png"
                alt="Mahindra Thar 4x4 Rental Goa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Thar specific overlay info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="inline-block bg-teal-500 px-3 py-1 rounded-lg text-xs font-black text-white uppercase tracking-tighter mb-2">
                    Thar Special
                  </span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter">GO ANYWHERE.</h3>
                </div>
                <div className="text-right">
                  <span className="block text-white/60 text-xs font-bold uppercase mb-1">Starting from</span>
                  <span className="text-3xl font-black text-teal-400 italic">₹3,200<span className="text-sm font-bold text-white/50 not-italic">/day</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip integrated at bottom */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Premium Cars' },
              { value: '500+', label: 'Happy Tourists' },
              { value: '10+', label: 'Years in Goa' },
              { value: '24/7', label: 'WhatsApp Help' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
