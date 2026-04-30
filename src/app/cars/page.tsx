import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { getGeneralBookingUrl } from '@/lib/whatsapp';
import WhatsAppBookingLink from '@/components/WhatsAppBookingLink';
import CarsClient from './CarsClient';

export const metadata: Metadata = {
  title: 'Rent a Car in Goa | 18 Cars Available',
  description:
    'Browse 18 self drive cars for rent in Goa. Hatchbacks, sedans, SUVs, and 7-seaters. All AC, well-maintained. Book instantly on WhatsApp.',
  alternates: { canonical: `${siteConfig.url}/cars` },
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page hero */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Fleet of Cars in Goa
          </h1>
          <p className="text-teal-200 text-base sm:text-lg max-w-xl mx-auto mb-8">
            18 well-maintained cars ready for your Goa adventure. All AC, insured, and serviced.
            Book any car instantly via WhatsApp.
          </p>
          <WhatsAppBookingLink
            href={getGeneralBookingUrl()}
            id="cars-page-whatsapp-btn"
            className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-600 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
            </svg>
            Not sure? Ask us on WhatsApp
          </WhatsAppBookingLink>
        </div>
      </div>

      {/* Cars grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <CarsClient />
      </div>
    </div>
  );
}
