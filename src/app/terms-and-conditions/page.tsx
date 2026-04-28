import { siteConfig } from '@/lib/config';

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-extrabold mb-8 text-slate-900">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Eligibility</h2>
          <p>The hirer must be 21 years of age and hold a valid Indian Driving License for at least 1 year. International tourists must hold a valid International Driving Permit.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Rental Period and Pricing</h2>
          <p>Rental is charged on a 24-hour basis. Prices vary by car model and season. Fuel charges are extra unless specified otherwise.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Security Deposit</h2>
          <p>A security deposit may be required at the time of pickup, which is refundable upon safe return of the vehicle.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Usage Restrictions</h2>
          <p>Vehicles must not be used for racing, off-roading (except for designated 4x4 vehicles), or illegal activities. Smoking and drinking inside the car are strictly prohibited.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Damage and Theft</h2>
          <p>In case of damage or theft, the hirer is responsible for the costs as per the insurance policy and rental agreement.</p>
        </section>
      </div>
    </div>
  );
}
