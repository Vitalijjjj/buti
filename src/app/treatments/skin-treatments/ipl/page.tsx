/**
 * IPL Treatment Detail Page
 *
 * Route: /treatments/skin-treatments/ipl
 *
 * Features:
 * - Complete IPL treatment details
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
import { iplDetail, allSkinTreatments } from "@/data/skin-treatments";
import { Check, Clock, Sparkles, Calendar, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "IPL Treatment Dublin | Intense Pulsed Light Therapy | Facecult",
  description:
    "Advanced IPL treatment in Dublin. Targets pigmentation, redness, rosacea, and sun damage. Non-invasive light therapy for flawless skin. Book consultation.",
  keywords: [
    "IPL Dublin",
    "IPL treatment Dublin",
    "intense pulsed light Dublin",
    "IPL pigmentation Dublin",
    "IPL rosacea Dublin",
  ],
  openGraph: {
    title: "IPL Treatment Dublin | Facecult",
    description:
      "Advanced light therapy for flawless skin. Targets pigmentation, redness, and sun damage with IPL treatment.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/skin-treatments/ipl",
  },
};

export default function IPLPage() {
  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "IPL (Intense Pulsed Light) Treatment",
    description: iplDetail.description,
    procedureType: "Cosmetic Light Therapy Treatment",
    bodyLocation: {
      "@type": "AnatomicalStructure",
      name: "Face",
    },
    preparation: "Avoid sun exposure 2 weeks before treatment. Arrive with clean skin.",
    followup: "Strict sun protection for 4 weeks. Avoid harsh products for 48 hours.",
    howPerformed: iplDetail.howItWorks.description,
    expectedPrognosis: "Progressive improvement in pigmentation, redness, and skin tone over 2-4 weeks.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: iplDetail.faqs?.map((faq) => ({
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
        name: "IPL Treatment",
        item: "https://facecult.ie/treatments/skin-treatments/ipl",
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

        {/* Treatment Tabs - IPL Pre-Selected */}
        <div className="pt-24">
          <SkinTreatmentTabs
            treatments={allSkinTreatments}
            activeTreatmentId="ipl"
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div>
                <h1 className="font-primary text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  About {iplDetail.name}
                </h1>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  {iplDetail.tagline}
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                  {iplDetail.description.split("\n\n").map((para, i) => (
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
                      {iplDetail.quickFacts.duration}
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
                      {iplDetail.quickFacts.downtime}
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
                      {iplDetail.quickFacts.resultsTimeline}
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
                      {iplDetail.quickFacts.treatmentFrequency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={iplDetail.heroImage}
                  alt={iplDetail.name}
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
                {iplDetail.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {iplDetail.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {iplDetail.howItWorks.steps.map((step, index) => (
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
                  {iplDetail.benefits.map((benefit, index) => (
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
                  {iplDetail.idealFor.map((item, index) => (
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
        {/* {iplDetail.beforeAfterImages &&
          iplDetail.beforeAfterImages.length > 0 && (
            <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                    Real Results from Real Clients
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    See the transformation our IPL treatments have achieved for our clients
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {iplDetail.beforeAfterImages.map((result, index) => (
                    <div key={index} className="space-y-4">
                      <BeforeAfterSlider
                        beforeImage={result.before}
                        afterImage={result.after}
                        beforeAlt={`Before IPL treatment ${index + 1}`}
                        afterAlt={`After IPL treatment ${index + 1}`}
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
        {iplDetail.expertQuote && (
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-6">&quot;</div>
                <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  {iplDetail.expertQuote.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {iplDetail.expertQuote.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={iplDetail.expertQuote.image}
                        alt={iplDetail.expertQuote.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-lg">
                      {iplDetail.expertQuote.name}
                    </p>
                    <p className="text-primary-100">
                      {iplDetail.expertQuote.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {iplDetail.faqs && iplDetail.faqs.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={iplDetail.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Flawless Skin?
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