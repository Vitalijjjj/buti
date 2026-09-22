/**
 * Pricing Page
 *
 * Displays treatment packages from Pabau booking system
 * Proof of concept integration
 */

"use client";

import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import Script from "next/script";

export default function PricingPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        <FloatingNav />

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Transparent Pricing for{" "}
              <span className="text-primary-600">Exceptional Care</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Browse our comprehensive treatment packages and find the perfect
              solution for your aesthetic goals. All prices are clearly listed
              with no hidden fees.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-neutral-600 text-sm">
                  No hidden costs. What you see is what you pay.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  Expert Consultation
                </h3>
                <p className="text-neutral-600 text-sm">
                  Free consultation to discuss your goals and budget.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  Package Deals
                </h3>
                <p className="text-neutral-600 text-sm">
                  Save more with our exclusive treatment packages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pabau Packages Widget */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="font-primary text-3xl font-bold text-neutral-900 mb-4">
                  Browse Our Treatment Packages
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Explore our curated treatment packages designed to help you
                  achieve your aesthetic goals. Each package is crafted by our
                  medical experts for optimal results.
                </p>
              </div>

              {/* Pabau Widget Container */}
              <div className="pabauPackages" style={{ width: "100%" }}></div>
            </div>
          </div>
        </section>

        {/* Hide Pabau Branding */}
        <style jsx global>{`
          /* Hide "Powered by Pabau" branding */
          .pabauPackages a[href*="pabau.com"]:not([href*="facecult"]) {
            display: none !important;
          }
          .pabauPackages [class*="powered"],
          .pabauPackages [class*="branding"],
          .pabauPackages [class*="footer"] a[href*="pabau"] {
            display: none !important;
          }
        `}</style>

        {/* Why Choose Us */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl font-bold text-neutral-900 mb-4">
                Why Choose Facecult?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  5000+
                </div>
                <p className="text-neutral-700 font-medium">
                  Satisfied Clients
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <p className="text-neutral-700 font-medium">
                  Medical-Grade Treatments
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  10+
                </div>
                <p className="text-neutral-700 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  5<span className="text-[#FBBC04]">★</span>
                </div>
                <p className="text-neutral-700 font-medium">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12 text-white shadow-xl">
              <h2 className="font-primary text-3xl font-bold mb-4">
                Have Questions About Pricing?
              </h2>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Our expert team is here to help you find the perfect treatment
                within your budget. Book a free consultation to discuss your
                goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://partner.pabau.com/online-bookings/facecult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors shadow-lg"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Load Pabau Packages Widget Script */}
      <Script
        src="https://pabau.com/widgets/pabau-packages.js?slug=facecult"
        strategy="afterInteractive"
      />
    </>
  );
}
