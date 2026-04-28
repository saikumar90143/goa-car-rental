import { siteConfig } from '@/lib/config';

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-extrabold mb-8 text-slate-900">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Information We Collect</h2>
          <p>We collect personal information that you provide to us when you book a car, including your name, contact information, driving license details, and identity proof.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. How We Use Your Information</h2>
          <p>We use your information to process your car rental bookings, communicate with you via WhatsApp or phone, and comply with local laws in Goa regarding vehicle rentals.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Data Security</h2>
          <p>We take appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at {siteConfig.email} or {siteConfig.phone}.</p>
        </section>
      </div>
    </div>
  );
}
