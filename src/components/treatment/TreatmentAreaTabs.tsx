/**
 * TreatmentAreaTabs Component
 *
 * Horizontal scrollable tab menu showing specific treatment areas.
 * Features:
 * - Scrollable tabs on all devices
 * - Smooth tab switching animations
 * - Active tab indicator
 * - Touch-friendly on mobile
 * - Displays detailed content for selected area
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TreatmentArea } from "@/types/treatment";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface TreatmentAreaTabsProps {
  treatmentAreas: TreatmentArea[];
  onAreaClick?: (area: TreatmentArea) => void;
}

export function TreatmentAreaTabs({
  treatmentAreas,
  onAreaClick,
}: TreatmentAreaTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check URL hash on mount and set active tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = treatmentAreas.findIndex((area) => area.id === hash);
        if (index !== -1) {
          setActiveTab(index);
        }
      }
    }
  }, [treatmentAreas]);

  // Listen for hash changes and update active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = treatmentAreas.findIndex((area) => area.id === hash);
        if (index !== -1) {
          setActiveTab(index);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [treatmentAreas]);

  const handleTabClick = (index: number, area: TreatmentArea) => {
    setActiveTab(index);
    if (onAreaClick) {
      onAreaClick(area);
    }

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

  const activeArea = treatmentAreas[activeTab];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            What Can This Treatment Help With?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Select a concern below to see how this treatment can help you
          </p>
        </div>

        {/* Sticky Scrollable Tabs */}
        <div className="sticky top-20 z-30 bg-white pb-4 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-sm">
          <div className="relative pt-4">
            {/* Fade indicators on edges */}
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
              {treatmentAreas.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => handleTabClick(index, area)}
                  className={cn(
                    "flex-shrink-0 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 snap-center whitespace-nowrap",
                    "border-2 hover:shadow-md",
                    activeTab === index
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  )}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                  {activeArea.title}
                </h3>
                {activeArea.detailedDescription && (
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {activeArea.detailedDescription}
                  </p>
                )}
              </div>

              {/* Benefits */}
              {activeArea.benefits && activeArea.benefits.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900 text-lg">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {activeArea.benefits.map((benefit, index) => (
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

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-200">
                {activeArea.duration && (
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Duration
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {activeArea.duration}
                    </p>
                  </div>
                )}
                {activeArea.pricing && (
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Pricing
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {activeArea.pricing}
                    </p>
                  </div>
                )}
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
            {activeArea.image && (
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={activeArea.image}
                  alt={activeArea.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center pb-16">
          <p className="text-sm text-neutral-500">
            Scroll through the tabs above to explore more treatment areas
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
