/**
 * Laser Hair Removal for Men Page
 *
 * Route: /treatments/laser-hair-removal/men
 *
 * Features:
 * - Scrollable treatment area tabs (Face, Upper Body, Lower Body, Full Body)
 * - Complete treatment details for each area
 * - How it works section
 * - Before/After results
 * - Expert testimonial
 * - FAQs
 * - SEO optimized for "laser hair removal for men Dublin"
 */

import { Metadata } from "next";
import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentAreaTabs } from "@/components/treatment/TreatmentAreaTabs";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { laserHairRemovalMen } from "@/data/laser-hair-removal";
import { Clock, Sparkles, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Laser Hair Removal for Men Dublin | Back, Chest & Body Hair Removal | Facecult",
  description:
    "Professional laser hair removal for men in Dublin. Remove back, chest, facial & body hair permanently. Ideal for athletes & bodybuilders. Medical-grade technology. Book consultation.",
  keywords: [
    "laser hair removal for men Dublin",
    "back hair removal men Dublin",
    "chest hair removal Dublin",
    "male laser hair removal Dublin",
    "body hair removal men Ireland",
    "laser hair removal athletes Dublin",
    "permanent hair removal men",
  ],
  openGraph: {
    title: "Laser Hair Removal for Men Dublin | Facecult",
    description:
      "Permanent hair removal for the modern man. Remove back, chest, and body hair. Perfect for athletes and professionals. Book your free consultation.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/laser-hair-removal/men",
  },
};

export default function LaserHairRemovalMenPage() {
  // Convert treatment areas to match TreatmentArea type
  const treatmentAreas = laserHairRemovalMen.treatmentAreas.map((area) => ({
    ...area,
    description: area.description,
    detailedDescription: area.detailedDescription,
    pricing: `Single: ${area.pricing.singleSession} | 6 Sessions: ${area.pricing.package6}`,
    duration: area.duration,
  }));

  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Laser Hair Removal for Men",
    description: laserHairRemovalMen.description,
    procedureType: "Cosmetic Hair Removal",
    bodyLocation: {
      "@type": "AnatomicalStructure",
      name: "Full Body",
    },
    preparation: "Shave treatment area 24 hours before. Avoid sun exposure for 2 weeks prior.",
    followup: "Avoid sun exposure and use SPF 50 for 2 weeks after treatment.",
    howPerformed: laserHairRemovalMen.howItWorks.description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: laserHairRemovalMen.faqs.map((faq) => ({
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
        name: "Laser Hair Removal",
        item: "https://facecult.ie/treatments/laser-hair-removal",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "For Men",
        item: "https://facecult.ie/treatments/laser-hair-removal/men",
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

        {/* Treatment Areas - Scrollable Tabs (FIRST) */}
        <div className="pt-24">
          <TreatmentAreaTabs treatmentAreas={treatmentAreas} />
        </div>

        {/* Hero Section - About Treatment */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="font-primary text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  {laserHairRemovalMen.title}
                </h1>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  {laserHairRemovalMen.tagline}
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                  {laserHairRemovalMen.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Quick Facts Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Sessions Required
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">8-10 treatments</p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Results
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      80-95% permanent reduction
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Frequency
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">Every 4-8 weeks</p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Downtime
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">None</p>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={laserHairRemovalMen.heroImage}
                  alt={laserHairRemovalMen.title}
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
                {laserHairRemovalMen.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {laserHairRemovalMen.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {laserHairRemovalMen.howItWorks.steps.map((step, index) => (
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
        {laserHairRemovalMen.beforeAfterImages && laserHairRemovalMen.beforeAfterImages.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Real Results from Real Clients
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  See the transformation laser hair removal has achieved for our male clients
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {laserHairRemovalMen.beforeAfterImages.map((result, index) => (
                  <div key={index} className="space-y-4">
                    <BeforeAfterSlider
                      beforeImage={result.before}
                      afterImage={result.after}
                      beforeAlt={`Before laser hair removal ${index + 1}`}
                      afterAlt={`After laser hair removal ${index + 1}`}
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
        {laserHairRemovalMen.expertQuote && (
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-6">&quot;</div>
                <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  {laserHairRemovalMen.expertQuote.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {laserHairRemovalMen.expertQuote.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={laserHairRemovalMen.expertQuote.image}
                        alt={laserHairRemovalMen.expertQuote.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-lg">
                      {laserHairRemovalMen.expertQuote.name}
                    </p>
                    <p className="text-primary-100">
                      {laserHairRemovalMen.expertQuote.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {laserHairRemovalMen.faqs && laserHairRemovalMen.faqs.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={laserHairRemovalMen.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for a Groomed, Hair-Free Look?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised
              laser hair removal plan for you
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
