/**
 * ExpertTestimonial Component
 *
 * Displays expert doctor quote/testimonial with:
 * - Professional headshot
 * - Quote text
 * - Name and title
 * - Elegant design with accent background
 */

"use client";

import Image from "next/image";
import { ExpertQuote } from "@/types/treatment";
import { Quote } from "lucide-react";

interface ExpertTestimonialProps {
  expertQuote: ExpertQuote;
}

export function ExpertTestimonial({ expertQuote }: ExpertTestimonialProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Left: Image */}
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="relative">
                {/* Quote Icon Background */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Doctor Image */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={expertQuote.image}
                    alt={expertQuote.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote Content */}
            <div className="md:col-span-2 flex flex-col justify-center space-y-6">
              {/* Quote Text */}
              <blockquote className="text-white text-lg md:text-xl leading-relaxed italic">
                &quot;{expertQuote.quote}&quot;
              </blockquote>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/30">
                <p className="text-white font-bold text-xl">
                  {expertQuote.name}
                </p>
                <p className="text-white/90 text-sm mt-1">
                  {expertQuote.title}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
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
                    className="text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-white text-sm font-medium">
                    Medical Expert
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
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
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="text-white text-sm font-medium">
                    5000+ Clients
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
