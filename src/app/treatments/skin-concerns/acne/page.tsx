/**
 * Acne & Oily Skin Concern Page
 *
 * Route: /treatments/skin-concerns/acne
 *
 * Features:
 * - Scrollable concern tabs (sticky)
 * - Acne concern details
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
import { acneConcern, allSkinConcerns } from "@/data/skin-concerns";

export const metadata: Metadata = {
  title: "Acne & Oily Skin Treatment Dublin | Medical-Grade Solutions | Facecult",
  description:
    "Effective acne and oily skin treatments in Dublin. HydraFacial, laser therapy, chemical peels & LED light. Clear breakouts, control oil, prevent scarring. Doctor-led care. Book consultation.",
  keywords: [
    "acne treatment Dublin",
    "oily skin treatment Dublin",
    "acne facial Dublin",
    "clear skin Dublin",
    "HydraFacial for acne",
    "laser acne treatment",
    "medical-grade acne treatment Dublin",
  ],
  openGraph: {
    title: "Acne & Oily Skin Treatment Dublin | Facecult",
    description:
      "Medical-grade acne treatments that work. Clear breakouts, control oil, and prevent future blemishes. Book free consultation.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-concerns/acne",
  },
};

export default function AcneConcernPage() {
  // JSON-LD Schema
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Acne and Oily Skin",
    associatedAnatomy: {
      "@type": "AnatomicalStructure",
      name: "Facial Skin",
    },
    possibleTreatment: acneConcern.recommendedTreatments.map((treatment) => ({
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
        name: "Acne & Oily Skin",
        item: "https://facecult.ie/treatments/skin-concerns/acne",
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
            activeConcern={acneConcern}
          />
        </div>

        {/* Recommended Treatments - Large Image Cards */}
        <RecommendedTreatments
          treatments={acneConcern.recommendedTreatments}
          concernName={acneConcern.name}
        />

        {/* Client Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Hear from clients who have successfully treated their acne with our help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {acneConcern.reviews.map((review) => (
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
              Ready to Clear Your Skin?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised acne treatment plan for you
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
