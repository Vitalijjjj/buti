"use client";

import { useEffect } from "react";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MembershipCTA } from "@/components/membership/MembershipCTA";
import { Check, CreditCard, Lock, Shield } from "lucide-react";
import { gaEvent } from "@/lib/analytics";

/**
 * Membership Join/Checkout Placeholder Page
 *
 * TODO: Integrate with payment processor (Stripe recommended)
 *
 * Stripe Integration Steps:
 * 1. Install Stripe: npm install @stripe/stripe-js @stripe/react-stripe-js
 * 2. Set up Stripe account and get API keys
 * 3. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to .env.local
 * 4. Create Stripe checkout session in /api/membership/checkout route
 * 5. Replace this placeholder with Stripe Elements or Checkout redirect
 *
 * Alternative: Use third-party membership platform (MemberStack, MemberSpace, etc.)
 */

export default function MembershipJoinPage() {
  useEffect(() => {
    // Track checkout page view
    gaEvent("start_checkout", {
      product: "membership",
      price: 120,
      currency: "EUR",
    });
  }, []);

  return (
    <>
      <FloatingNav />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-primary text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Join Facecult Membership
            </h1>
            <p className="text-xl text-neutral-600">
              Start your skin transformation journey today
            </p>
          </div>

          {/* Main Card */}
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden mb-8">
            <CardContent className="p-8 lg:p-12">
              {/* Membership Summary */}
              <div className="border-b border-neutral-200 pb-8 mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Membership Details
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-neutral-700">Facecult Monthly Membership</span>
                    <span className="text-2xl font-bold text-primary-600">€120/month</span>
                  </div>

                  <div className="bg-gradient-to-br from-accent-cream to-primary-50 p-6 rounded-2xl">
                    <p className="font-semibold text-neutral-900 mb-3">
                      Welcome Package Included (€350 value):
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>3D Skin Scan & Analysis (€200)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>Skin Coach Consultation (€100)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>Home Care Prescription (€50)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>Monthly treatment worth up to €150</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Checkout Placeholder */}
              <div className="bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-2xl p-12 text-center">
                <CreditCard className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                  Payment Integration Placeholder
                </h3>
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                  This is a placeholder page. Integrate with Stripe, PayPal, or your preferred payment processor to enable membership checkout.
                </p>
                <p className="text-sm text-neutral-500 font-mono bg-white px-4 py-2 rounded inline-block">
                  See implementation notes in page.tsx
                </p>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <Lock className="w-6 h-6 text-green-600" />
                  <span className="text-sm text-neutral-700">Secure Payment Processing</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-neutral-700">Cancel Anytime (30 days notice)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Actions */}
          <div className="text-center space-y-4">
            <p className="text-neutral-600">
              Have questions before joining?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MembershipCTA
                href="/book"
                label="Book a Consultation"
                variant="primary"
                data-analytics="book_consultation_join_page"
              />
              <MembershipCTA
                href="/membership"
                label="Back to Membership"
                variant="outline"
                data-analytics="back_to_membership"
              />
            </div>
          </div>

          {/* Fine Print */}
          <p className="text-sm text-neutral-500 text-center mt-12">
            By joining, you agree to our Terms & Conditions. Membership terms subject to clinic approval.
            Full T&Cs available on request.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
