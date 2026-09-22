/**
 * ResultsSection Component
 *
 * Displays results timeline and before/after comparison:
 * - Heading and description about results timeline
 * - Before/after image comparison slider
 * - Follow-up appointment information
 */

"use client";

import { ResultsSection as ResultsSectionType } from "@/types/treatment";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

interface ResultsSectionProps {
  results: ResultsSectionType;
}

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            {results.heading}
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            {results.description}
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage={results.beforeImage}
            afterImage={results.afterImage}
            beforeAlt="Before treatment"
            afterAlt="After treatment"
          />
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Complimentary Follow-Up Appointment
                </h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  We offer a free follow-up appointment two weeks after your
                  treatment to ensure you&apos;re fully satisfied with your results.
                  Touch-ups are provided if needed to help you achieve your
                  desired look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
