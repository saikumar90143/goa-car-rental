import { siteConfig } from './config';

/**
 * Build a WhatsApp deep-link URL with a pre-filled message.
 * @param {string} message - The pre-filled message text
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  const number = siteConfig.whatsapp.replace(/\D/g, ''); // strip non-digits
  return `https://wa.me/${number}?text=${encoded}`;
}

// ── Pre-built message generators ─────────────────────────────────────────────

export function getGeneralBookingUrl() {
  return buildWhatsAppUrl(
    'Hi, I want to book a self drive car in Goa. Could you please share available cars, pricing, and details?'
  );
}

export function getCarBookingUrl(carName, pricePerDay) {
  return buildWhatsAppUrl(
    `Hi, I'm interested in booking the ${carName} at ₹${pricePerDay}/day for my Goa trip. Please share availability and next steps.`
  );
}

export function getCarDetailBookingUrl(carName) {
  return buildWhatsAppUrl(
    `Hi, I want to book the ${carName} for my trip to Goa. Could you please confirm availability and share the booking details?`
  );
}

export function getAdsLandingUrl() {
  return buildWhatsAppUrl(
    'Hi, I saw your ad for car rentals in Goa. I want to book a car. Please share available options and pricing.'
  );
}
