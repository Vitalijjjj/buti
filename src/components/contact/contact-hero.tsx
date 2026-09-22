"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function ContactHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Hero.png"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Indicators */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Open 7 Days a Week
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Same-Day Appointments
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Free Consultations
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Get In Touch
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Have questions? We&apos;re here to help. Reach out to schedule your free consultation or learn more about our treatments.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}