/**
 * Microneedling Treatments - Dynamic Treatment Page
 *
 * Route: /treatments/microneedling/[treatment]
 *
 * Dynamic routes for:
 * - microneedling
 * - exosomes
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { microneedlingTreatmentsData } from "@/data/microneedling-treatments";
import { Check, Clock, Calendar, Sparkles, Users } from "lucide-react";

interface PageProps {
  params: Promise<{
    treatment: string;
  }>;
}

// Valid treatment IDs
const validTreatments = [
  "microneedling",
  "exosomes",
];

// Generate static params for all treatments
export async function generateStaticParams() {
  return validTreatments.map((treatment) => ({
    treatment,
  }));
}

// Generate metadata dynamically based on treatment
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;
  const treatment = microneedlingTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  if (!treatment) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${treatment.title} Dublin | Microneedling Treatment | Facecult`,
    description: treatment.description,
    keywords: [
      `${treatment.title.toLowerCase()} Dublin`,
      `${treatment.title.toLowerCase()} Ireland`,
      "microneedling treatments Dublin",
      "skin rejuvenation Dublin",
    ],
    openGraph: {
      title: `${treatment.title} Dublin | Facecult`,
      description: treatment.description,
      type: "website",
      locale: "en_IE",
      siteName: "Facecult",
    },
    alternates: {
      canonical: `https://facecult.ie/treatments/microneedling/${treatmentId}`,
    },
  };
}

export default async function MicroneedlingTreatmentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;

  // Find the specific treatment
  const treatment = microneedlingTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  // Return 404 if treatment not found
  if (!treatment) {
    notFound();
  }

  // JSON-LD Schema for this specific treatment
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.description,
    procedureType: "Microneedling Treatment",
    preparation: "Avoid blood thinners and retinoids before treatment.",
    followup: "Avoid sun exposure and use SPF 30+ daily.",
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
        name: "Microneedling",
        item: "https://facecult.ie/treatments/microneedling",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: treatment.title,
        item: `https://facecult.ie/treatments/microneedling/${treatmentId}`,
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
              <Link href="/treatments/microneedling" className="hover:text-primary-600">Microneedling</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{treatment.title}</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="bg-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900">
              Microneedling Treatments
            </h1>
          </div>
        </div>

        {/* Treatment Tabs Navigation */}
        <div className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {microneedlingTreatmentsData.treatments.map((t) => (
                <Link
                  key={t.id}
                  href={`/treatments/microneedling/${t.id}`}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 border-2 whitespace-nowrap ${
                    t.id === treatmentId
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  {treatment.title}
                </h2>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  Professional Microneedling Treatment in Dublin
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed mb-8">
                  {treatment.detailedDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Quick Facts Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Duration
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatment.duration}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Downtime
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatment.downtime}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Single Session
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatment.pricing.singleSession}</p>
                  </div>

                  {treatment.pricing.package3 && (
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                          Package of 3
                        </p>
                      </div>
                      <p className="text-neutral-900 font-semibold">{treatment.pricing.package3}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={treatment.image || "/assets/Hero.png"}
                  alt={`${treatment.title} Treatment`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-10">
              <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                Treatment Benefits
              </h2>
              <ul className="space-y-3">
                {treatment.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-neutral-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {microneedlingTreatmentsData.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {microneedlingTreatmentsData.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {microneedlingTreatmentsData.howItWorks.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
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

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQAccordion faqs={microneedlingTreatmentsData.faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Smoother, Healthier Skin?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised
              microneedling treatment plan for you
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