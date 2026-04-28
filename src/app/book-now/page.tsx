import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { getAdsLandingUrl } from '@/lib/whatsapp';
import { featuredCars } from '@/data/cars';

export const metadata: Metadata = {
  title: 'Rent a Car in Goa Today | Instant Booking',
  description: 'Self drive car rental in Goa. Affordable, AC cars with airport pickup. Book instantly on WhatsApp. No hidden charges.',
  alternates: { canonical: `${siteConfig.url}/book-now` },
  robots: {
    // We don't necessarily want this competing with the homepage for organic SEO, 
    // it's for paid ads. We allow indexing but it's optional.
    index: true, 
    follow: true,
  }
};

export default function BookNowLandingPage() {
  const waUrl = getAdsLandingUrl();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 
        NOTE: For a true landing page, we might hide the main navbar and footer,
        but for Next.js app router we're using the root layout. We can override 
        the layout if needed, but for simplicity we'll just design this page to be highly focused.
      */}

      {/* Hero */}
      <div className="bg-teal-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b-[6px] border-orange-500">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Need a Car in Goa?
        </h1>
        <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
          Skip the hassle. Book a self-drive car instantly on WhatsApp. <br className="hidden md:block"/>
          Airport pickup available. Zero hidden charges.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-xl font-black text-white shadow-xl hover:bg-green-600 transition-all hover:scale-105 wa-pulse"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
          </svg>
          Message Us on WhatsApp
        </a>
        <div className="mt-4 text-sm text-teal-200">Usually replies in 5 minutes</div>
      </div>

      {/* Trust */}
      <div className="bg-white py-6 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-center text-sm font-bold text-slate-700">
          <div className="flex items-center gap-2">⭐ 4.9/5 Google Rating</div>
          <div className="flex items-center gap-2">✓ No Hidden Fees</div>
          <div className="flex items-center gap-2">✓ Well Maintained Cars</div>
          <div className="flex items-center gap-2">✓ Free Airport Delivery*</div>
        </div>
      </div>

      {/* Simple Car List */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Cars Available Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.slice(0, 6).map((car) => (
            <div key={car.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="relative h-40">
                <Image src={car.image} alt={car.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{car.name}</h3>
                <div className="text-teal-600 font-black text-xl my-1">₹{car.pricePerDay}/day</div>
                <div className="text-xs text-slate-500 mb-4">{car.transmission} · AC · {car.seats} Seats</div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I'm coming from your ad. I want to book the ${car.name} at ₹${car.pricePerDay}/day. Please let me know availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
