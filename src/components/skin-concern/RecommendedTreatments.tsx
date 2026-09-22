/**
 * RecommendedTreatments Component
 *
 * Large image cards showcasing recommended treatments for a concern
 * Features:
 * - Large treatment images
 * - Treatment name and tagline below image
 * - "Explore" button linking to treatment detail page
 */

"use client";

import Image from "next/image";
import { RecommendedTreatment } from "@/types/skin-concern";
import { ArrowRight } from "lucide-react";

interface RecommendedTreatmentsProps {
  treatments: RecommendedTreatment[];
  concernName: string;
}

export function RecommendedTreatments({
  treatments,
  concernName,
}: RecommendedTreatmentsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Recommended Treatments
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our most effective treatments for {concernName.toLowerCase()}, chosen by our medical experts
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment) => (
            <a
              key={treatment.id}
              href={treatment.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Large Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-neutral-100">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Below Image */}
              <div className="p-6">
                <h3 className="font-semibold text-xl text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {treatment.tagline}
                </p>

                {/* Explore Button */}
                <div className="flex items-center space-x-2 text-primary-600 font-medium text-sm group-hover:space-x-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Not sure which treatment is right for you?
          </p>
          <a
            href="https://partner.pabau.com/online-bookings/facecult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
