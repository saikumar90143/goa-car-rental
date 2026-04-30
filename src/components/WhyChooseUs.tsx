const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
      </svg>
    ),
    title: 'Airport, Station & Bus Stand Delivery',
    description:
      'We deliver the car directly to Goa Airport, Madgaon Railway Station, or any Bus Stand in Goa. No taxi needed, start your trip the moment you arrive.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: 'No Hidden Charges',
    description:
      'The price you see is the price you pay. Fuel, tolls, and any extras are clearly communicated upfront on WhatsApp.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 WhatsApp Support',
    description:
      'Got a question at midnight or a flat tyre at noon? We\'re always just a WhatsApp message away for our customers.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-1M8 21a2 2 0 01-2-2v-1m12 1v-1m-12 0H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-4" />
      </svg>
    ),
    title: 'Instant WhatsApp Booking',
    description:
      'No lengthy forms, no waiting. Just send a WhatsApp message, confirm the car & dates, and you\'re all set for Goa.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold text-orange-700 uppercase tracking-wider mb-3">
            Why Drive in Goa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Why Tourists Choose Us
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            We're not just a car rental. We're your Goa road trip partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group flex flex-col items-start gap-4 rounded-2xl p-6 bg-teal-50 hover:bg-teal-600 transition-all duration-300 cursor-default"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 group-hover:bg-white/20 group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-white text-base mb-2 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-teal-100 leading-relaxed transition-colors">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
