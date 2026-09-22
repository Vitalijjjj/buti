/**
 * CTAColumn Component
 *
 * Right column of the mega menu with conversion-focused CTAs.
 * Displays action-oriented links designed to drive user engagement.
 *
 * Features:
 * - Prominent call-to-action styling
 * - Multiple CTA variants (primary, secondary, outline)
 * - Conversion-optimized design
 * - Visual emphasis on primary actions
 */

"use client";

import Link from "next/link";
import { CTALink } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface CTAColumnProps {
  ctas: CTALink[];
  className?: string;
}

export function CTAColumn({ ctas, className }: CTAColumnProps) {
  return (
    <div
      className={cn(
        "min-w-[240px] pl-6 border-l border-neutral-200 space-y-4",
        className
      )}
    >
      {/* Header */}
      <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-200 pb-2">
        Learn More
      </h3>

      {/* CTA Links */}
      <div className="space-y-3">
        {ctas.map((cta, index) => {
          const isPrimary = cta.variant === "primary";
          const isSecondary = cta.variant === "secondary";
          const isOutline = cta.variant === "outline" || !cta.variant;
          const isExternal = cta.href.startsWith("http");

          const linkClasses = cn(
            "block w-full text-center px-4 py-3 rounded-lg transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            "font-medium text-sm",
            // Primary CTA - most prominent
            isPrimary &&
              "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg focus:ring-primary-500 transform hover:-translate-y-0.5",
            // Secondary CTA - medium prominence
            isSecondary &&
              "bg-accent-rose text-primary-700 hover:bg-accent-rose/90 focus:ring-accent-rose",
            // Outline CTA - subtle
            isOutline &&
              "bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
          );

          return isExternal ? (
            <a
              key={index}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              {cta.label}
            </a>
          ) : (
            <Link
              key={index}
              href={cta.href}
              className={linkClasses}
            >
              {cta.label}
            </Link>
          );
        })}
      </div>

      {/* Additional promotional section (optional) */}
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <div className="bg-gradient-to-br from-primary-50 to-accent-cream p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                Free Consultation
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Not sure which treatment is right for you? Book a free consultation
                with our experts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center space-x-2 text-xs text-neutral-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-600"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Professional Grade Treatments</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-neutral-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-600"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Experienced Practitioners</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-neutral-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-600"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>5000+ Satisfied Clients</span>
        </div>
      </div>
    </div>
  );
}
