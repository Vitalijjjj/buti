/**
 * CTASection Component
 *
 * Final call-to-action section with:
 * - Prominent booking button
 * - Consultation process information
 * - Trust signals
 */

"use client";

import { CTASection as CTASectionType } from "@/types/treatment";
import { Calendar, Shield, Users, Award } from "lucide-react";

interface CTASectionProps {
  cta: CTASectionType;
}

export function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-100 via-accent-cream to-primary-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
              {cta.heading}
            </h2>
            <p className="text-neutral-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={cta.buttonLink}
              className="inline-flex items-center justify-center px-10 py-4 bg-primary-600 text-white text-lg font-semibold rounded-full hover:bg-primary-700 transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {cta.buttonText}
            </a>
          </div>

          {/* Trust Signals */}
          <div className="pt-12 mt-12 border-t border-neutral-300">
            <p className="text-sm text-neutral-600 font-medium uppercase tracking-wider mb-6">
              Why Choose Facecult
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">
                  Doctor-Led
                </h4>
                <p className="text-sm text-neutral-600 text-center">
                  All treatments performed by qualified medical professionals
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">
                  Personalised
                </h4>
                <p className="text-sm text-neutral-600 text-center">
                  Tailored treatment plans for your unique needs
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">
                  5000+ Clients
                </h4>
                <p className="text-sm text-neutral-600 text-center">
                  Trusted by thousands of satisfied clients
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">
                  Free Follow-Up
                </h4>
                <p className="text-sm text-neutral-600 text-center">
                  Complimentary appointment to ensure satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-8">
            <p className="text-neutral-600 text-sm">
              Have questions? Call us at{" "}
              <a
                href="tel:+353123456789"
                className="text-primary-600 font-semibold hover:underline"
              >
                +353 1 234 5678
              </a>{" "}
              or{" "}
              <a
                href="/contact"
                className="text-primary-600 font-semibold hover:underline"
              >
                contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
