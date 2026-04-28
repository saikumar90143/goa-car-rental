import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { getGeneralBookingUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} for self drive car rentals in Goa. Call ${siteConfig.phone} or chat on WhatsApp.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            We're Here to Help
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Have questions about booking? Need a specific car? Reach out to us directly—no bots, just real humans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a
              href={getGeneralBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">WhatsApp Us</h3>
              <p className="text-slate-500 text-sm mb-4">Fastest response for bookings & inquiries.</p>
              <span className="text-green-600 font-semibold">{siteConfig.whatsapp}</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
              <p className="text-slate-500 text-sm mb-4">Available daily from 7 AM to 9 PM.</p>
              <span className="text-teal-600 font-semibold">{siteConfig.phone}</span>
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-2 border border-slate-100 shadow-sm h-[500px]">
             <iframe
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Drive in Goa location on Google Maps"
              />
          </div>

        </div>

      </div>
    </div>
  );
}
