import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Drive in Goa, the most trusted self drive car rental agency in Goa. Serving tourists with transparent pricing and great cars since 2015.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Making Goa Explorations <span className="text-teal-600">Hassle-Free</span>
          </h1>
        </div>

        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            At {siteConfig.name}, we believe that a vacation in Goa should be about beaches, sunsets, and great food—not about haggling with taxi drivers or worrying about hidden rental charges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 my-12">
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Our Mission</h3>
              <p className="text-teal-800">
                To provide tourists with reliable, clean, and affordable self-drive cars, backed by transparent pricing and exceptional 24/7 support.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Why Trust Us?</h3>
              <p className="text-orange-800">
                We've been operating in Goa for over 10 years. Our fleet is regularly serviced, our prices are upfront, and our reviews speak for themselves.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The {siteConfig.shortName} Difference</h2>
          <p className="text-slate-600 mb-6">
            When you book with us, you're not just renting a car; you're getting a local partner for your trip. We deliver vehicles directly to the airport (GOI), Madgaon railway station, or your hotel, so you can start your holiday the moment you arrive.
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li><strong>No Hidden Costs:</strong> We clearly communicate all charges before you book.</li>
            <li><strong>Well-Maintained Fleet:</strong> All cars are regularly serviced and cleaned before delivery.</li>
            <li><strong>Instant WhatsApp Booking:</strong> Forget lengthy forms. We handle everything efficiently over WhatsApp.</li>
            <li><strong>Local Assistance:</strong> Need recommendations or roadside help? We're always just a call away.</li>
          </ul>

        </div>

      </div>
    </div>
  );
}
