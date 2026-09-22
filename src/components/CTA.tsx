"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gaEvent } from "@/components/ga";
import { trackInitiateCheckout, trackLead } from "@/lib/pixels";

interface CTAProps {
  href: string;
  label: string;
  variant?: "default" | "ghost" | "outline" | "secondary";
  onClick?: () => void;
  "data-analytics"?: string;
  className?: string;
}

export function CTA({
  href,
  label,
  variant = "default",
  onClick,
  "data-analytics": dataAnalytics,
  className = "",
}: CTAProps) {
  const handleClick = () => {
    // Track in GA4
    if (dataAnalytics) {
      gaEvent("cta_click", {
        cta: dataAnalytics,
        href,
      });
    }

    // Track in Meta/TikTok/Pinterest pixels
    if (href.includes("/book") || href.includes("booking")) {
      // Book consultation = InitiateCheckout
      trackInitiateCheckout({
        content_name: label,
        content_category: "Consultation",
        value: 0, // Free consultation
        currency: "EUR",
      });
    } else if (href.includes("/contact") || dataAnalytics?.includes("contact")) {
      // Contact = Lead
      trackLead({
        content_name: label,
        content_category: "Contact",
      });
    }

    onClick?.();
  };

  return (
    <Button asChild variant={variant} size="lg" className={className}>
      <Link href={href} onClick={handleClick} data-analytics={dataAnalytics}>
        {label}
      </Link>
    </Button>
  );
}