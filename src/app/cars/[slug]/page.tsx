import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getCarBySlug, getAllCarSlugs } from '@/data/cars';
import { getCarDetailBookingUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCarSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return { title: 'Car Not Found' };
  }

  const title = `${car.name} on Rent in Goa | ₹${car.pricePerDay}/day`;
  const description = `Rent the ${car.name} (${car.type}) in Goa. ${car.seats}-seater, ${car.transmission}, AC. Instant WhatsApp booking. Pickup at Goa Airport available.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [car.image],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const waUrl = getCarDetailBookingUrl(car.name);

  // Product schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${car.name} Rental`,
    image: `${siteConfig.url}${car.image}`,
    description: car.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/cars/${car.slug}`,
      priceCurrency: 'INR',
      price: car.pricePerDay,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Header Breadcrumb area */}
      <div className="bg-teal-50 border-b border-teal-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center text-sm text-slate-500">
          <a href="/" className="hover:text-teal-700">Home</a>
          <span className="mx-2">/</span>
          <a href="/cars" className="hover:text-teal-700">Cars</a>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{car.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Gallery */}
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 aspect-[4/3] relative">
            <Image
              src={car.image}
              alt={`${car.name} rental in Goa`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 tracking-wide uppercase">
                {car.type}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{car.name}</h1>
            
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-black text-teal-600">₹{car.pricePerDay.toLocaleString('en-IN')}</span>
              <span className="text-lg text-slate-500 mb-1">/ day</span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {car.description}
            </p>

            {/* Specs Grid */}
            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Key Specifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-400 mb-1">Seats</div>
                <div className="font-semibold text-slate-800">{car.seats} Adults</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-400 mb-1">Transmission</div>
                <div className="font-semibold text-slate-800">{car.transmission}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-400 mb-1">Fuel Type</div>
                <div className="font-semibold text-slate-800">{car.fuelType}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-400 mb-1">Mileage</div>
                <div className="font-semibold text-slate-800">{car.mileage}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-400 mb-1">A/C</div>
                <div className="font-semibold text-slate-800">{car.ac ? 'Yes' : 'No'}</div>
              </div>
            </div>

            {/* Features list */}
            {car.features && car.features.length > 0 && (
              <>
                <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {car.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-600">
                      <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Strong CTA */}
            <div className="mt-auto bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-bold text-slate-900 text-lg mb-1">Ready to book this car?</div>
                <div className="text-sm text-slate-600">No advance payment required. Chat with us to block your dates.</div>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-all shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.115.547 4.103 1.506 5.832L.057 23.7a.5.5 0 00.611.625l5.99-1.573A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
                </svg>
                Book on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
