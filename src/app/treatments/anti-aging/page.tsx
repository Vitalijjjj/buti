"use client";

import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { CTA } from "@/components/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Sparkles } from "lucide-react";

export default function AntiAgingPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />

      {/* Hero Section - Split Screen Design */}
      <section className="relative min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Content Section */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-cream to-neutral-100 px-4 sm:px-6 lg:px-12 py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Anti-Ageing Treatments in Dublin<br />
                <span className="text-primary-600">Turn Back Time</span>
              </h1>

              <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
                Advanced Anti-Ageing Solutions
              </p>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Professional anti-aging treatments at Facecult Dublin. Medical-grade solutions for youthful, radiant skin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <CTA
                  href="/book"
                  label="Book Consultation"
                  variant="default"
                  data-analytics="cta-book-anti-aging-hero"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                />
                <CTA
                  href="/contact"
                  label="Contact Us"
                  variant="outline"
                  data-analytics="cta-contact-anti-aging-hero"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Medical Grade</h3>
                  <p className="text-sm text-neutral-600">Professional treatments</p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Expert Care</h3>
                  <p className="text-sm text-neutral-600">Certified specialists</p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Youthful Skin</h3>
                  <p className="text-sm text-neutral-600">Lasting results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-full min-h-[400px] lg:min-h-screen">
            <Image
              src="/assets/Hero.png"
              alt="Anti-Ageing Treatment at Facecult Dublin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative -mt-24 pb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-12 lg:p-16 text-center">
              <Sparkles className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
                We&apos;re preparing comprehensive information about our anti-aging services. Contact us today to learn more.
              </p>
              <CTA
                href="/book"
                label="Book Consultation"
                variant="default"
                data-analytics="cta-book-anti-aging-coming-soon"
                className="bg-primary-600 hover:bg-primary-700 text-white"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
