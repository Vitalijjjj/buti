/**
 * BodyTreatmentTabs Component
 *
 * Scrollable horizontal tabs for body treatment page
 * Shows: HIFU Body, Emsculpt, Pelvic Chair
 *
 * Features:
 * - Sticky tabs that stay at top
 * - Active treatment highlighted
 * - Shows treatment details with benefits and pricing
 * - Smooth scrolling
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BodyTreatmentOverview } from "@/types/body-treatment";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface BodyTreatmentTabsProps {
  treatments: BodyTreatmentOverview[];
  activeTreatmentId?: string; // For pre-selecting a tab
}

export function BodyTreatmentTabs({
  treatments,
  activeTreatmentId,
}: BodyTreatmentTabsProps) {
  const defaultActiveIndex = activeTreatmentId
    ? treatments.findIndex((t) => t.id === activeTreatmentId)
    : 0;
  const [activeTab, setActiveTab] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : 0
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check URL hash on mount and set active tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = treatments.findIndex((t) => t.id === hash);
        if (index !== -1) {
          setActiveTab(index);
        }
      }
    }
  }, [treatments]);

  // Listen for hash changes and update active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = treatments.findIndex((t) => t.id === hash);
        if (index !== -1) {
          setActiveTab(index);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [treatments]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    // Scroll the clicked tab into view
    if (scrollContainerRef.current) {
      const tabElement = scrollContainerRef.current.children[
        index
      ] as HTMLElement;
      if (tabElement) {
        tabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const activeTreatment = treatments[activeTab];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Our Body Treatments
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Choose from our advanced non-surgical body contouring and sculpting treatments
          </p>
        </div>

        {/* Sticky Scrollable Tabs */}
        <div className="sticky top-20 z-30 bg-white pb-4 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-sm">
          <div className="relative pt-4">
            {/* Fade indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-8 -mx-8 snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {treatments.map((treatment, index) => (
                <button
                  key={treatment.id}
                  onClick={() => handleTabClick(index)}
                  className={cn(
                    "flex-shrink-0 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 snap-center whitespace-nowrap",
                    "border-2 hover:shadow-md",
                    activeTab === index
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  )}
                >
                  {treatment.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Treatment Content */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
                  {activeTreatment.name}
                </h3>
                <p className="text-primary-600 text-lg font-medium mb-4">
                  {activeTreatment.tagline}
                </p>
                <p className="text-neutral-700 text-lg leading-relaxed">
                  {activeTreatment.detailedDescription}
                </p>
              </div>

              {/* Benefits */}
              {activeTreatment.benefits && activeTreatment.benefits.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900 text-lg">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {activeTreatment.benefits.slice(0, 8).map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatment Areas */}
              {activeTreatment.treatmentAreas && activeTreatment.treatmentAreas.length > 0 && (
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Treatment Areas:
                  </h4>
                  <p className="text-neutral-700">
                    {activeTreatment.treatmentAreas.join(", ")}
                  </p>
                </div>
              )}

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Duration
                  </p>
                  <p className="text-neutral-900 font-semibold">
                    {activeTreatment.duration}
                  </p>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Sessions
                  </p>
                  <p className="text-neutral-900 font-semibold">
                    {activeTreatment.sessionsRequired}
                  </p>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Results
                  </p>
                  <p className="text-neutral-900 font-semibold text-sm">
                    {activeTreatment.resultsTimeline}
                  </p>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Pricing
                  </p>
                  <p className="text-neutral-900 font-semibold text-sm">
                    {activeTreatment.pricing.perSession || activeTreatment.pricing.perArea || "From €100"}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="https://partner.pabau.com/online-bookings/facecult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
                >
                  Book This Treatment
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src={activeTreatment.image}
                alt={activeTreatment.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center pb-16">
          <p className="text-sm text-neutral-500">
            Switch between tabs above to explore all our body treatment options
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
