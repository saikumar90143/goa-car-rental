/**
 * Centralize conversion tracking to avoid duplication and improve performance.
 */

export const GA_TRACKING_ID = 'AW-18126044926';
export const CONVERSION_ID = 'bnZCCP-1r6QcEP79lcND';

/**
 * Tracks a WhatsApp booking conversion
 */
export const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GA_TRACKING_ID}/${CONVERSION_ID}`,
      'value': 1.0,
      'currency': 'INR'
    });
  }
};

/**
 * Global function for conversion tracking (if needed by external links)
 */
export const setupGlobalTracking = () => {
  if (typeof window !== 'undefined') {
    (window as any).gtag_report_conversion = (url?: string) => {
      trackWhatsAppConversion();
      if (url) {
        window.location.href = url;
      }
      return false;
    };
  }
};
