/**
 * Body Treatments - Dynamic Treatment Page
 *
 * Route: /treatments/body/[treatment]
 *
 * Dynamic routes for:
 * - hifu-body
 * - emsculpt
 * - pelvic-chair
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { bodyTreatmentsData } from "@/data/body-treatments";
import { Check } from "lucide-react";

interface PageProps {
  params: Promise<{
    treatment: string;
  }>;
}

// Valid treatment IDs
const validTreatments = ["hifu-body", "emsculpt", "pelvic-chair"];

// Generate static params for all treatments
export async function generateStaticParams() {
  return validTreatments.map((treatment) => ({
    treatment,
  }));
}

// Generate metadata dynamically based on treatment
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;
  const treatment = bodyTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  if (!treatment) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${treatment.name} Dublin | Body Contouring & Sculpting | Facecult`,
    description: treatment.description,
    keywords: [
      `${treatment.name} Dublin`,
      "body contouring Dublin",
      "body sculpting Dublin",
      "non-surgical body treatment",
    ],
    openGraph: {
      title: `${treatment.name} Dublin | Facecult`,
      description: treatment.description,
      type: "website",
      locale: "en_IE",
      siteName: "Facecult",
    },
    alternates: {
      canonical: `https://facecult.ie/treatments/body/${treatmentId}`,
    },
  };
}

export default async function BodyTreatmentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;

  // Find the specific treatment
  const treatment = bodyTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  // Return 404 if treatment not found
  if (!treatment) {
    notFound();
  }

  // JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.description,
    procedureType: "Non-Surgical Body Contouring",
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
      {
        "@type": "ListItem",
        position: 4,
        name: treatment.name,
        item: `https://facecult.ie/treatments/body/${treatmentId}`,
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-white">
        <FloatingNav />

        {/* Breadcrumb Navigation */}
        <div className="pt-28 pb-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex text-sm text-neutral-600">
              <Link href="/treatments" className="hover:text-primary-600">Treatments</Link>
              <span className="mx-2">/</span>
              <Link href="/treatments/body" className="hover:text-primary-600">Body Treatments</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{treatment.name}</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="bg-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900">
              Body Treatments
            </h1>
          </div>
        </div>

        {/* Treatment Tabs Navigation */}
        <div className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {bodyTreatmentsData.treatments.map((t) => (
                <a
                  key={t.id}
                  href={`/treatments/body/${t.id}`}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 border-2 whitespace-nowrap ${
                    t.id === treatmentId
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {t.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  {treatment.name}
                </h2>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  {treatment.tagline}
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed mb-8">
                  {treatment.detailedDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Benefits */}
                {treatment.benefits && treatment.benefits.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {treatment.benefits.slice(0, 8).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quick Facts Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Duration
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.duration}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Sessions
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {treatment.sessionsRequired}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Results
                    </p>
                    <p className="text-neutral-900 font-semibold text-sm">
                      {treatment.resultsTimeline}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      Pricing
                    </p>
                    <p className="text-neutral-900 font-semibold text-sm">
                      {treatment.pricing.perSession || treatment.pricing.perArea || "From €100"}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href="https://partner.pabau.com/online-bookings/facecult"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
                  >
                    Book This Treatment
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        {treatment.idealFor && treatment.idealFor.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-accent-cream to-primary-50 rounded-2xl p-8 md:p-10">
                <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                  Ideal For
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {treatment.idealFor.map((item, index) => (
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
          </section>
        )}

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

        {/* Before & After Results - Hidden */}
        {/* {bodyTreatmentsData.beforeAfterImages && bodyTreatmentsData.beforeAfterImages.length > 0 && (
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
        )} */}

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
