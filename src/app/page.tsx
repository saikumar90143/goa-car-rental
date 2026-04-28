import type { Metadata } from 'next';
import MainHero from '@/components/MainHero';
import FeaturedCars from '@/components/FeaturedCars';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { siteConfig } from '@/lib/config';
import { getGeneralBookingUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Self Drive Car Rental in Goa | Book Before You Arrive',
  description:
    'Best self drive car rental in Goa. Affordable cars, airport pickup, no hidden charges. Instant WhatsApp booking. Serving tourists since 2015.',
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <MainHero />
      <FeaturedCars />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />

      {/* Google Maps Section */}
      <section className="py-16 md:py-20 bg-white" id="location">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
              Find Us
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              We're Based in Panaji, Goa
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-base">
              We deliver to Goa Airport (GOI), Madgaon Station, or your hotel — anywhere in Goa.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Drive in Goa location on Google Maps"
              className="w-full h-full"
            />
          </div>
          {/* Quick contact strip */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-teal-200 px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={getGeneralBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
