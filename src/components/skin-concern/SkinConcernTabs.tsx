/**
 * SkinConcernTabs Component
 *
 * Scrollable horizontal tabs for skin concern pages
 * Similar to TreatmentAreaTabs but for concern selection
 *
 * Features:
 * - Sticky tabs that stay at top
 * - Active concern highlighted
 * - Shows concern details when selected
 * - Smooth scrolling
 */

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { SkinConcern } from "@/types/skin-concern";
import { cn } from "@/lib/utils";
import { Clock, Sparkles, Calendar, TrendingUp } from "lucide-react";

interface SkinConcernTabsProps {
  concerns: { id: string; name: string; href: string }[];
  activeConcern: SkinConcern;
}

export function SkinConcernTabs({
  concerns,
  activeConcern,
}: SkinConcernTabsProps) {
  const [activeTab] = useState(activeConcern.id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Skin Concerns We Treat
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Select a concern to see personalised treatment recommendations and results
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
              {concerns.map((concern) => (
                <a
                  key={concern.id}
                  href={concern.href}
                  className={cn(
                    "flex-shrink-0 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 snap-center whitespace-nowrap",
                    "border-2 hover:shadow-md",
                    activeTab === concern.id
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  )}
                >
                  {concern.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Active Concern Content */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="max-w-6xl mx-auto">
            {/* Two-Column Layout: Image + Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
              {/* Left: Image */}
              <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={activeConcern.heroImage}
                  alt={activeConcern.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right: Text Content */}
              <div>
                {/* Concern Name */}
                <h3 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  {activeConcern.name}
                </h3>

                {/* Description */}
                <div className="space-y-4">
                  {activeConcern.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-neutral-700 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Common Age
                  </p>
                </div>
                <p className="text-neutral-900 font-semibold">
                  {activeConcern.quickFacts.commonAge}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Treatment Time
                  </p>
                </div>
                <p className="text-neutral-900 font-semibold">
                  {activeConcern.quickFacts.treatmentTime}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Results Timeline
                  </p>
                </div>
                <p className="text-neutral-900 font-semibold">
                  {activeConcern.quickFacts.resultsTimeline}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                    Maintenance
                  </p>
                </div>
                <p className="text-neutral-900 font-semibold">
                  {activeConcern.quickFacts.maintenanceFrequency}
                </p>
              </div>
            </div>

            {/* Causes & How We Treat */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">
                  What Causes It?
                </h4>
                <p className="text-neutral-700 leading-relaxed">
                  {activeConcern.causes}
                </p>
              </div>

              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">
                  How We Treat It
                </h4>
                <p className="text-neutral-700 leading-relaxed">
                  {activeConcern.howWeTreat}
                </p>
              </div>
            </div>
          </div>
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
