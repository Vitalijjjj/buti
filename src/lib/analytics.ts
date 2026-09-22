/**
 * Google Analytics 4 utility functions
 * Safe client-side analytics wrapper that handles missing gtag gracefully
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Send a custom event to Google Analytics 4
 * @param eventName - The name of the event (e.g., 'cta_click', 'faq_expand')
 * @param params - Optional parameters to send with the event
 */
export function gaEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') {
    // Server-side - do nothing
    return;
  }

  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
      console.log(`[GA4] Event: ${eventName}`, params);
    } catch (error) {
      console.warn('[GA4] Failed to send event:', error);
    }
  } else {
    // gtag not loaded - log for debugging in dev
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4] Event (gtag not loaded): ${eventName}`, params);
    }
  }
}

/**
 * Track page views
 * @param url - The page URL
 */
export function gaPageView(url: string): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    try {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
        page_path: url,
      });
    } catch (error) {
      console.warn('[GA4] Failed to track page view:', error);
    }
  }
}
