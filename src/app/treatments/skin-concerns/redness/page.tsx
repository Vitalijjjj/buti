/**
 * Redness & Sensitivity Concern Page
 *
 * Route: /treatments/skin-concerns/redness
 *
 * Features:
 * - Scrollable concern tabs (sticky)
 * - Redness & sensitivity concern details
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
import { rednessConcern, allSkinConcerns } from "@/data/skin-concerns";

export const metadata: Metadata = {
  title: "Redness & Sensitive Skin Treatment Dublin | Facecult",
  description:
    "Treat facial redness and sensitive skin in Dublin. LED therapy, laser treatments & barrier repair. Reduce flushing, broken capillaries. Medical-grade care. Book consultation.",
  keywords: [
    "facial redness treatment Dublin",
    "sensitive skin treatment Dublin",
    "broken capillaries Dublin",
    "LED therapy Dublin",
    "redness reduction Dublin",
    "skin barrier repair Dublin",
    "reactive skin Dublin",
  ],
  openGraph: {
    title: "Redness & Sensitive Skin Treatment Dublin | Facecult",
    description:
      "Calm facial redness and strengthen sensitive skin. LED therapy, laser & barrier repair treatments. Book free consultation.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-concerns/redness",
  },
};

export default function RednessConcernPage() {
  // JSON-LD Schema
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Facial Redness and Sensitive Skin",
    associatedAnatomy: {
      "@type": "AnatomicalStructure",
      name: "Facial Skin",
    },
    possibleTreatment: rednessConcern.recommendedTreatments.map((treatment) => ({
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
        name: "Redness & Sensitivity",
        item: "https://facecult.ie/treatments/skin-concerns/redness",
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
            activeConcern={rednessConcern}
          />
        </div>

        {/* Recommended Treatments - Large Image Cards */}
        <RecommendedTreatments
          treatments={rednessConcern.recommendedTreatments}
          concernName={rednessConcern.name}
        />

        {/* Client Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Hear from clients who have successfully calmed their sensitive, red skin with our help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {rednessConcern.reviews.map((review) => (
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
              Ready to Calm Your Sensitive Skin?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised treatment plan for your sensitive skin
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