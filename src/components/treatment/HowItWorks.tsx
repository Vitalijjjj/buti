/**
 * HowItWorks Component
 *
 * Two-column section explaining how the treatment works:
 * - Left: Image (informational or before/after)
 * - Right: Heading and description
 */

"use client";

import Image from "next/image";
import { HowItWorksSection } from "@/types/treatment";

interface HowItWorksProps {
  howItWorks: HowItWorksSection;
}

export function HowItWorks({ howItWorks }: HowItWorksProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={howItWorks.image}
              alt={howItWorks.heading}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              {howItWorks.heading}
            </h2>

            {howItWorks.description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-700 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Optional: Additional Info Points */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">
                    Doctor-led treatment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">
                    Minimal discomfort
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">
                    No downtime required
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">
                    Natural-looking results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
