const testimonials = [
  {
    name: 'Rahul Sharma',
    city: 'Mumbai',
    rating: 5,
    text: "Booked the Swift via WhatsApp 2 days before flying to Goa. Car was waiting at the airport. Absolutely smooth experience, no surprises. Will book again next year!",
    avatar: 'RS',
    trip: 'Family Trip, Dec 2024',
  },
  {
    name: 'Priya Menon',
    city: 'Bangalore',
    rating: 5,
    text: "We took the Creta for 6 days and explored all of North and South Goa. Price was exactly as discussed on WhatsApp — no hidden charges. Highly recommend Drive in Goa!",
    avatar: 'PM',
    trip: 'Friends Trip, Jan 2025',
  },
  {
    name: 'Ankit Gupta',
    city: 'Delhi',
    rating: 5,
    text: "Very professional service. The Innova was spotlessly clean and comfortable for our group of 6. Customer support was available on WhatsApp throughout our trip.",
    avatar: 'AG',
    trip: 'Group Trip, Feb 2025',
  },
  {
    name: 'Sneha Joshi',
    city: 'Pune',
    rating: 5,
    text: "As a solo traveller, I was a bit nervous but the team made everything so easy. Got the Baleno in mint condition. Drove to Dudhsagar waterfall with zero issues!",
    avatar: 'SJ',
    trip: 'Solo Trip, Nov 2024',
  },
  {
    name: 'Mohammed Faiz',
    city: 'Hyderabad',
    rating: 5,
    text: "Third time using Drive in Goa. They're consistent — always on time, cars are well-serviced, prices are fair. Best self-drive rental in Goa, period.",
    avatar: 'MF',
    trip: 'Couple Trip, Mar 2025',
  },
  {
    name: 'Kavita Reddy',
    city: 'Chennai',
    rating: 5,
    text: "Booked the Brezza for our Goa holiday. Pickup from Madgaon station was seamless. The team was friendly and the car was brand new. 10/10 experience!",
    avatar: 'KR',
    trip: 'Honeymoon Trip, Apr 2025',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-teal-50" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            What Tourists Say About Us
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Over 500 happy tourists from across India have trusted Drive in Goa for their Goa road trips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card p-6 flex flex-col gap-4">
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.city} · {t.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 shadow-sm border border-slate-100">
            <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-2xl font-extrabold text-slate-900">4.9</span>
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-700">Google Rating</div>
              <div className="text-xs text-slate-400">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
