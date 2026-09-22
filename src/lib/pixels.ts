/**
 * Pixel Event Tracking Utilities
 *
 * Fire events to Meta Pixel, TikTok Pixel, and Pinterest Tag
 */

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    ttq?: {
      track: (eventName: string, params?: Record<string, unknown>) => void;
    };
    pintrk?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track event across all enabled pixels
 */
export function trackPixelEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  // Meta Pixel (Facebook/Instagram)
  if (window.fbq) {
    window.fbq("track", eventName, params);
  }

  // TikTok Pixel
  if (window.ttq) {
    window.ttq.track(eventName, params);
  }

  // Pinterest Tag
  if (window.pintrk) {
    window.pintrk("track", eventName, params);
  }
}

/**
 * Standard E-commerce Events
 */

export function trackViewContent(params?: {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
}) {
  trackPixelEvent("ViewContent", params);
}

export function trackInitiateCheckout(params?: {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
}) {
  trackPixelEvent("InitiateCheckout", params);
}

export function trackLead(params?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) {
  trackPixelEvent("Lead", params);
}

export function trackContact(params?: {
  content_name?: string;
}) {
  trackPixelEvent("Contact", params);
}

export function trackSearch(params?: {
  search_string?: string;
  content_category?: string;
}) {
  trackPixelEvent("Search", params);
}
