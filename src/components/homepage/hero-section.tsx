"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Microscope, TrendingUp } from "lucide-react";
import { gaEvent } from "@/components/ga";

export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home_hero_new.png"
            alt="Facecult Clinic Dublin"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 flex items-center justify-center gap-3 flex-wrap">
            <span>It&apos;s All About</span>
            <Image
              src="/assets/about_u.png"
              alt="You"
              width={120}
              height={60}
              className="inline-block mix-blend-screen"
              style={{ filter: 'brightness(1.2)' }}
            />
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Transform your skin with advanced treatments delivered by certified professionals in a luxury clinical setting.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <BookConsultationButton
              size="lg"
              className="px-10 py-4 text-xl font-medium rounded-full min-w-[240px]"
              asChild
            >
              <a
                href="https://partner.pabau.com/online-bookings/facecult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                onClick={() => gaEvent("cta_click", { cta: "hero_book_consultation", page: "home" })}
                data-analytics="hero-book-consultation"
              >
                Book Free Consultation
              </a>
            </BookConsultationButton>
          </div>

          {/* Trust Statement */}
          <p className="text-sm text-white/80 mt-8">
            ✓ Medical-Grade Treatments &nbsp;&nbsp; ✓ Advanced Technology &nbsp;&nbsp; ✓ Personalised Care Plans
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

      {/* Overlapping White Container */}
      <section className="relative z-20 -mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-xl text-primary-600 font-semibold mb-6">
                  Personalised, Safe, and Effective Aesthetic Solutions
                </p>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    We create customised anti-ageing and skincare programs based on your unique skin type, concerns, and lifestyle. Every treatment is <span className="font-bold text-primary-600">scientifically proven</span>, <span className="font-bold text-primary-600">minimally invasive</span>, and monitored for <span className="font-bold text-primary-600">optimal results</span>, from <span className="font-bold text-primary-600">acne treatment</span> and <span className="font-bold text-primary-600">scar reduction</span> to <span className="font-bold text-primary-600">skin lifting</span> and <span className="font-bold text-primary-600">pigmentation correction</span>.
                  </p>
                  <p className="text-lg text-neutral-900 font-medium italic">
                    No risky procedures. No compromises. Just precision, elegance, and natural beauty that endures.
                  </p>
                </div>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Scientific Personalised Approach */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                    Scientific, Personalised Approach
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Every skin journey begins with data-driven analysis and a dedicated Skin Coach. We design each plan specifically for your unique skin type, needs, and goals combining science and expertise for truly personalised care.
                  </p>
                </div>

                {/* World-Class Technologies */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                    World-Class Technologies
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We use the latest global innovations in aesthetic medicine from advanced 3D skin scanning to injectables, facials, and cutting-edge device treatments all seamlessly integrated into your personalised plan.
                  </p>
                </div>

                {/* Visible Lasting Results */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                    Visible, Lasting Results
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Our approach isn&apos;t about temporary fixes. With consistent guidance, advanced technology, and personalised care, we deliver measurable, long-term improvements you can see and feel.
                  </p>
                </div>
              </div>

              {/* Statistics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Successful Transformations
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    5<span className="text-[#FBBC04]">★</span>
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Google Reviews
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
                  <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Advanced Treatments
                  </div>
                </div>
              </div>

              {/* Bottom Statement & CTA */}
              <div className="text-center pt-8 border-t border-neutral-100">
                <div className="max-w-3xl mx-auto mb-8">
                  <p className="text-2xl text-neutral-900 font-semibold mb-4">
                    Facecult is where science, technology, and personalised care meet to transform your skin.
                  </p>
                  <p className="text-lg text-neutral-600">
                    Experience the difference of truly personalised aesthetic care backed by cutting-edge technology and genuine expertise.
                  </p>
                </div>

                <div className="flex justify-center">
                  <BookConsultationButton
                    size="lg"
                    className="px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                    showIcon
                    asChild
                  >
                    <a
                      href="https://partner.pabau.com/online-bookings/facecult"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => gaEvent("cta_click", { cta: "hero_card_schedule", page: "home" })}
                      data-analytics="hero-card-book-consultation"
                    >
                      Book Your Consultation
                    </a>
                  </BookConsultationButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}