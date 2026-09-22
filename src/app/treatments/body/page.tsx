/**
 * Body Treatments Page
 *
 * Route: /treatments/body
 *
 * Features:
 * - Scrollable treatment tabs (HIFU Body, Emsculpt, Pelvic Chair)
 * - Complete treatment details for each
 * - How it works section
 * - Before/After results
 * - Expert testimonial
 * - FAQs
 * - SEO optimized for "body contouring Dublin" and "body sculpting Dublin"
 */

import { Metadata } from "next";
import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { bodyTreatmentsData } from "@/data/body-treatments";
import { BodyTreatmentTabs } from "@/components/body-treatment/BodyTreatmentTabs";

export const metadata: Metadata = {
  title: "Body Contouring & Sculpting Dublin | HIFU, Emsculpt, Pelvic Chair | Facecult",
  description:
    "Advanced non-surgical body treatments in Dublin. HIFU Body for fat reduction, Emsculpt for muscle building, Pelvic Chair for pelvic floor. Medical-grade technology. Book consultation.",
  keywords: [
    "body contouring Dublin",
    "body sculpting Dublin",
    "HIFU body Dublin",
    "Emsculpt Dublin",
    "pelvic chair Dublin",
    "non-surgical fat reduction Dublin",
    "muscle building treatment Dublin",
    "EMSELLA Dublin",
  ],
  openGraph: {
    title: "Body Contouring & Sculpting Dublin | Facecult",
    description:
      "Transform your body without surgery. HIFU Body, Emsculpt & Pelvic Chair treatments. Build muscle, burn fat, strengthen core. Book free consultation.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/body",
  },
};

export default function BodyTreatmentsPage() {
  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Body Contouring & Sculpting",
    description: bodyTreatmentsData.description,
    procedureType: "Non-Surgical Body Contouring",
    bodyLocation: {
      "@type": "AnatomicalStructure",
      name: "Full Body",
    },
    preparation: "Consult with medical professional. Hydrate well before treatment.",
    followup: "Maintain healthy lifestyle. Maintenance sessions recommended.",
    howPerformed: bodyTreatmentsData.howItWorks.description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bodyTreatmentsData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
        name: "Body Treatments",
        item: "https://facecult.ie/treatments/body",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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

        {/* Treatment Tabs (FIRST) */}
        <div className="pt-24">
          <BodyTreatmentTabs treatments={bodyTreatmentsData.treatments} />
        </div>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {bodyTreatmentsData.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {bodyTreatmentsData.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {bodyTreatmentsData.howItWorks.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Results */}
        {bodyTreatmentsData.beforeAfterImages && bodyTreatmentsData.beforeAfterImages.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Real Results from Real Clients
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  See the transformation our body treatments have achieved
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {bodyTreatmentsData.beforeAfterImages.map((result, index) => (
                  <div key={index} className="space-y-4">
                    <BeforeAfterSlider
                      beforeImage={result.before}
                      afterImage={result.after}
                      beforeAlt={`Before body treatment ${index + 1}`}
                      afterAlt={`After body treatment ${index + 1}`}
                    />
                    {result.description && (
                      <p className="text-center text-sm text-neutral-600">
                        {result.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expert Testimonial */}
        {bodyTreatmentsData.expertQuote && (
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-6">&quot;</div>
                <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  {bodyTreatmentsData.expertQuote.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {bodyTreatmentsData.expertQuote.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={bodyTreatmentsData.expertQuote.image}
                        alt={bodyTreatmentsData.expertQuote.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-lg">
                      {bodyTreatmentsData.expertQuote.name}
                    </p>
                    <p className="text-primary-100">
                      {bodyTreatmentsData.expertQuote.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {bodyTreatmentsData.faqs && bodyTreatmentsData.faqs.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={bodyTreatmentsData.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Body?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised
              body contouring plan for you
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
