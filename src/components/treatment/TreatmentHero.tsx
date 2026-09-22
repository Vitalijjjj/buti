/**
 * TreatmentHero Component
 *
 * Hero section for treatment detail pages with:
 * - Full-width hero image with overlay
 * - Treatment category breadcrumb
 * - Main heading and tagline
 * - Two-column layout: description + quick facts card
 */

"use client";

import Image from "next/image";
import { Treatment } from "@/types/treatment";
import { Clock, Calendar, Sparkles, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TreatmentHeroProps {
  treatment: Treatment;
}

export function TreatmentHero({ treatment }: TreatmentHeroProps) {
  return (
    <section className="relative mt-12">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            About {treatment.name}
          </h2>
          <p className="text-neutral-600 text-lg">
            Complete overview of this treatment, how it works, and what to expect
          </p>
        </div>
      </div>

      {/* Hero Image with Overlay */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src={treatment.heroImage}
          alt={treatment.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            {/* Breadcrumb */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-600/90 text-white text-sm font-medium rounded-full">
                {treatment.categoryPath}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {treatment.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
              {treatment.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Two-Column Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Description */}
          <div className="lg:col-span-2 space-y-4">
            {treatment.description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-700 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column: Quick Facts Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-to-br from-primary-50 to-accent-cream border-0 shadow-lg p-6">
              <h3 className="font-semibold text-lg text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                Quick Facts
              </h3>

              <div className="space-y-5">
                {/* Treatment Length */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide mb-1">
                      Treatment Length
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.quickFacts.treatmentLength}
                    </p>
                  </div>
                </div>

                {/* Results Seen */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide mb-1">
                      Results Seen
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.quickFacts.resultsSeen}
                    </p>
                  </div>
                </div>

                {/* Duration of Results */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide mb-1">
                      Duration of Results
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.quickFacts.durationOfResults}
                    </p>
                  </div>
                </div>

                {/* Session Frequency */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide mb-1">
                      Session Frequency
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.quickFacts.sessionFrequency}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <a
                  href="https://partner.pabau.com/online-bookings/facecult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
                >
                  Book Free Consultation
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
