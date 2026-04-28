import Image from 'next/image';
import Link from 'next/link';
import { getGeneralBookingUrl, getCarBookingUrl } from '@/lib/whatsapp';

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
              other car delivered to the Airport, Station, or Hotel.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1"
              >
                Book on WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0" />
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
              {['✈️ Airport Delivery', '⛽ Full Tank Provided', '🛡️ Zero Paperwork'].map((pill) => (
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
                sizes="(max-width: 1024px) 100vw, 50vw"
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
