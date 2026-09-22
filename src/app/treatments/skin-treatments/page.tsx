/**
 * Skin Treatments Overview Page
 *
 * Route: /treatments/skin-treatments
 *
 * Features:
 * - Scrollable treatment tabs (HydraFacial, Laser Facial, Chemical Peels, LED Therapy)
 * - Each tab shows treatment overview with benefits
 * - "Explore" button links to individual treatment detail page
 * - SEO optimized
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { SkinTreatmentTabs } from "@/components/skin-treatment/SkinTreatmentTabs";
import { allSkinTreatments } from "@/data/skin-treatments";

export const metadata: Metadata = {
  title: "Advanced Skin Treatments Dublin | Medical-Grade Facials | Facecult",
  description:
    "Discover our range of medical-grade skin treatments in Dublin. HydraFacial, Laser Facials, Chemical Peels & LED Therapy. Doctor-led care for all skin concerns. Book consultation.",
  keywords: [
    "skin treatments Dublin",
    "medical facials Dublin",
    "HydraFacial Dublin",
    "laser facial Dublin",
    "chemical peels Dublin",
    "LED therapy Dublin",
    "advanced skincare Dublin",
  ],
  openGraph: {
    title: "Advanced Skin Treatments Dublin | Facecult",
    description:
      "Medical-grade skin treatments for all concerns. From deep cleansing HydraFacials to advanced laser therapy. Book your free consultation today.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-treatments",
  },
};

export default function SkinTreatmentsPage() {
  // JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://facecult.ie",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatments",
        item: "https://facecult.ie/treatments",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skin Treatments",
        item: "https://facecult.ie/treatments/skin-treatments",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-white">
        <FloatingNav />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-primary text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Advanced Skin Treatments
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Medical-grade treatments designed to address your unique skin concerns.
              From deep cleansing facials to advanced laser therapy, discover the perfect treatment for your skin.
            </p>
          </div>
        </section>

        {/* Treatment Tabs Section */}
        <SkinTreatmentTabs treatments={allSkinTreatments} />

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation with our medical experts who will assess your skin and recommend the perfect treatment plan
            </p>
            <a
              href="https://partner.pabau.com/online-bookings/facecult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
