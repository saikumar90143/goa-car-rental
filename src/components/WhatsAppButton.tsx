'use client';

import { getGeneralBookingUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={getGeneralBookingUrl()}
      id="floating-whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-xl hover:bg-green-600 transition-all hover:scale-105 wa-pulse"
    >
      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.82.487 3.522 1.34 5L2 22l5.148-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.638 0-3.167-.446-4.48-1.22l-3.23.874.874-3.23A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
      </svg>
      <span className="text-sm font-semibold hidden sm:inline whitespace-nowrap">
        Book on WhatsApp
      </span>
    </a>
  );
}
