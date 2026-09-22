/**
 * Rosacea Concern Page
 *
 * Route: /treatments/skin-concerns/rosacea
 *
 * Features:
 * - Scrollable concern tabs (sticky)
 * - Rosacea concern details
 * - Recommended treatments with large image cards
 * - Before/After sliders
 * - Client reviews
 * - SEO optimized
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { SkinConcernTabs } from "@/components/skin-concern/SkinConcernTabs";
import { RecommendedTreatments } from "@/components/skin-concern/RecommendedTreatments";
import { ReviewCard } from "@/components/ui/review-card";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { rosaceaConcern, allSkinConcerns } from "@/data/skin-concerns";

export const metadata: Metadata = {
  title: "Rosacea Treatment Dublin | Medical-Grade Care | Facecult",
  description:
    "Professional rosacea treatment in Dublin. LED therapy, laser treatments & medical skincare. Control redness, reduce flare-ups. Expert medical care. Book consultation.",
  keywords: [
    "rosacea treatment Dublin",
    "rosacea management Dublin",
    "LED therapy for rosacea Dublin",
    "laser rosacea treatment Dublin",
    "rosacea skin care Dublin",
    "reduce rosacea flare-ups Dublin",
    "medical rosacea treatment",
  ],
  openGraph: {
    title: "Rosacea Treatment Dublin | Facecult",
    description:
      "Control rosacea symptoms with medical-grade treatments. LED therapy, laser & barrier repair for calm, healthy skin. Book free consultation.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-concerns/rosacea",
  },
};

export default function RosaceaConcernPage() {
  // JSON-LD Schema
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Rosacea",
    associatedAnatomy: {
      "@type": "AnatomicalStructure",
      name: "Facial Skin",
    },
    possibleTreatment: rosaceaConcern.recommendedTreatments.map((treatment) => ({
      "@type": "MedicalTherapy",
      name: treatment.name,
    })),
  };

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
        name: "Skin Concerns",
        item: "https://facecult.ie/treatments/skin-concerns",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Rosacea",
        item: "https://facecult.ie/treatments/skin-concerns/rosacea",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalConditionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-white">
        <FloatingNav />

        {/* Skin Concern Tabs - Scrollable (FIRST - TOP PRIORITY) */}
        <div className="pt-24">
          <SkinConcernTabs
            concerns={allSkinConcerns}
            activeConcern={rosaceaConcern}
          />
        </div>

        {/* Recommended Treatments - Large Image Cards */}
        <RecommendedTreatments
          treatments={rosaceaConcern.recommendedTreatments}
          concernName={rosaceaConcern.name}
        />

        {/* Client Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Hear from clients who have successfully managed their rosacea with our help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {rosaceaConcern.reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  rating={review.rating}
                  date={review.date}
                  treatment={review.treatment}
                  review={review.review}
                  image={review.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Control Your Rosacea?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised rosacea management plan for you
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