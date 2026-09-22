/**
 * Laser Hollywood Facial Treatment Detail Page
 *
 * Route: /treatments/skin-treatments/laser-hollywood-facial
 *
 * Features:
 * - Complete laser hollywood facial treatment details
 * - How it works section
 * - Benefits and ideal candidates
 * - Before/After results
 * - Expert testimonial
 * - FAQs
 * - SEO optimized
 */

import { Metadata } from "next";
import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { SkinTreatmentTabs } from "@/components/skin-treatment/SkinTreatmentTabs";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { laserHollywoodFacialDetail, allSkinTreatments } from "@/data/skin-treatments";
import { Check, Clock, Sparkles, Calendar, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Laser Hollywood Facial Dublin | Carbon Peel Laser Treatment | Facecult",
  description:
    "Celebrity favorite Laser Hollywood Facial in Dublin. Carbon peel laser treatment for instant skin refinement, pore reduction, and red carpet glow. Book consultation.",
  keywords: [
    "laser Hollywood facial Dublin",
    "carbon peel Dublin",
    "carbon laser facial",
    "celebrity facial Dublin",
    "Hollywood peel Dublin",
  ],
  openGraph: {
    title: "Laser Hollywood Facial Dublin | Facecult",
    description:
      "Get red carpet ready skin with the celebrity favorite Laser Hollywood Facial. Instant refinement and glow.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-treatments/laser-hollywood-facial",
  },
};

export default function LaserHollywoodFacialPage() {
  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Laser Hollywood Facial Treatment",
    description: laserHollywoodFacialDetail.description,
    procedureType: "Cosmetic Laser Treatment",
    bodyLocation: {
      "@type": "AnatomicalStructure",
      name: "Face",
    },
    preparation: "Arrive with clean skin. No special preparation required.",
    followup: "Sun protection recommended. Normal activities can resume immediately.",
    howPerformed: laserHollywoodFacialDetail.howItWorks.description,
    expectedPrognosis: "Instant skin refinement and glow with no downtime.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: laserHollywoodFacialDetail.faqs?.map((faq) => ({
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
        name: "Skin Treatments",
        item: "https://facecult.ie/treatments/skin-treatments",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Laser Hollywood Facial",
        item: "https://facecult.ie/treatments/skin-treatments/laser-hollywood-facial",
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

        {/* Treatment Tabs - Laser Hollywood Facial Pre-Selected */}
        <div className="pt-24">
          <SkinTreatmentTabs
            treatments={allSkinTreatments}
            activeTreatmentId="laser-hollywood-facial"
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div>
                <h1 className="font-primary text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  About {laserHollywoodFacialDetail.name}
                </h1>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  {laserHollywoodFacialDetail.tagline}
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                  {laserHollywoodFacialDetail.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Quick Facts Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Duration
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      {laserHollywoodFacialDetail.quickFacts.duration}
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Downtime
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      {laserHollywoodFacialDetail.quickFacts.downtime}
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Results
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      {laserHollywoodFacialDetail.quickFacts.resultsTimeline}
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Frequency
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      {laserHollywoodFacialDetail.quickFacts.treatmentFrequency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={laserHollywoodFacialDetail.heroImage}
                  alt={laserHollywoodFacialDetail.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {laserHollywoodFacialDetail.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {laserHollywoodFacialDetail.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {laserHollywoodFacialDetail.howItWorks.steps.map((step, index) => (
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

        {/* Benefits & Ideal For */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-10">
                <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                  Treatment Benefits
                </h2>
                <ul className="space-y-3">
                  {laserHollywoodFacialDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="bg-gradient-to-br from-accent-cream to-primary-50 rounded-2xl p-8 md:p-10">
                <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                  Ideal For
                </h2>
                <ul className="space-y-3">
                  {laserHollywoodFacialDetail.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Results - Hidden */}
        {/* {laserHollywoodFacialDetail.beforeAfterImages &&
          laserHollywoodFacialDetail.beforeAfterImages.length > 0 && (
            <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                    Real Results from Real Clients
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    See the transformation our Hollywood Facial has achieved for our clients
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {laserHollywoodFacialDetail.beforeAfterImages.map((result, index) => (
                    <div key={index} className="space-y-4">
                      <BeforeAfterSlider
                        beforeImage={result.before}
                        afterImage={result.after}
                        beforeAlt={`Before Hollywood Facial treatment ${index + 1}`}
                        afterAlt={`After Hollywood Facial treatment ${index + 1}`}
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
          )} */}

        {/* Expert Testimonial */}
        {laserHollywoodFacialDetail.expertQuote && (
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-6">&quot;</div>
                <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  {laserHollywoodFacialDetail.expertQuote.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {laserHollywoodFacialDetail.expertQuote.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={laserHollywoodFacialDetail.expertQuote.image}
                        alt={laserHollywoodFacialDetail.expertQuote.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-lg">
                      {laserHollywoodFacialDetail.expertQuote.name}
                    </p>
                    <p className="text-primary-100">
                      {laserHollywoodFacialDetail.expertQuote.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {laserHollywoodFacialDetail.faqs && laserHollywoodFacialDetail.faqs.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={laserHollywoodFacialDetail.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Red Carpet Skin?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a
              personalised treatment plan for you
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