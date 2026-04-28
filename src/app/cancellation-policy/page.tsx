import { siteConfig } from '@/lib/config';

export default function CancellationPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-extrabold mb-8 text-slate-900">Cancellation and Refund Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Cancellation by Hirer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cancellation made 48 hours before the rental start time: Full refund of advance payment.</li>
            <li>Cancellation made between 24-48 hours before start time: 50% refund.</li>
            <li>Cancellation made less than 24 hours before start time: No refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. No-Show</h2>
          <p>If the hirer does not show up at the scheduled time, it will be treated as a cancellation with no refund.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Early Return</h2>
          <p>No refunds are provided for early return of the vehicle before the scheduled end time.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Refund Process</h2>
          <p>Approved refunds will be processed via UPI or Bank Transfer within 5-7 working days.</p>
        </section>
      </div>
    </div>
  );
}
