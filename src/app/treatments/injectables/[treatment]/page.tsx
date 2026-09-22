/**
 * Injectable Treatments - Dynamic Treatment Page
 *
 * Route: /treatments/injectables/[treatment]
 *
 * Dynamic routes for:
 * - skin-boosters
 * - polynucleotides
 * - karisma
 * - hair-loss
 * - jalupro
 * - profhilo
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { injectablesTreatmentsData } from "@/data/injectables-treatments";
import { Check, Clock, Calendar, Sparkles, Users } from "lucide-react";

interface PageProps {
  params: Promise<{
    treatment: string;
  }>;
}

// Valid treatment IDs
const validTreatments = [
  "skin-boosters",
  "polynucleotides",
  "karisma",
  "hair-loss",
  "jalupro",
  "profhilo",
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
  const treatment = injectablesTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  if (!treatment) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${treatment.title} Dublin | Injectable Treatment | Facecult`,
    description: treatment.description,
    keywords: [
      `${treatment.title.toLowerCase()} Dublin`,
      `${treatment.title.toLowerCase()} Ireland`,
      "injectable treatments Dublin",
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
      canonical: `https://facecult.ie/treatments/injectables/${treatmentId}`,
    },
  };
}

export default async function InjectableTreatmentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;

  // Find the specific treatment
  const treatment = injectablesTreatmentsData.treatments.find(
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
    procedureType: "Injectable Treatment",
    preparation: "Avoid blood thinners and alcohol 24 hours before treatment.",
    followup: "Avoid strenuous exercise and excessive heat for 24-48 hours.",
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
        name: "Injectables",
        item: "https://facecult.ie/treatments/injectables",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: treatment.title,
        item: `https://facecult.ie/treatments/injectables/${treatmentId}`,
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
              <Link href="/treatments/injectables" className="hover:text-primary-600">Injectables</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{treatment.title}</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="bg-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900">
              Injectable Treatments
            </h1>
          </div>
        </div>

        {/* Treatment Tabs Navigation */}
        <div className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {injectablesTreatmentsData.treatments.map((t) => (
                <Link
                  key={t.id}
                  href={`/treatments/injectables/${t.id}`}
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
        <section className="pt-12 pb-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                  {treatment.title}
                </h2>
                <p className="text-xl text-neutral-700 mb-8">
                  {treatment.detailedDescription}
                </p>

                {/* Quick Facts Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
                        Pricing from
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">
                      {treatmentId === "karisma" || treatmentId === "profhilo"
                        ? "€300"
                        : treatmentId === "jalupro"
                        ? "€250"
                        : treatmentId === "hair-loss"
                        ? "€150"
                        : "€180"}
                    </p>
                  </div>

                  {(treatment.pricing.package3 || treatment.pricing.package6) && (
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                          Packages Available
                        </p>
                      </div>
                      <p className="text-neutral-900 font-semibold">Yes</p>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://partner.pabau.com/online-bookings/facecult"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                  >
                    Book Consultation
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full border-2 border-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={treatment.image || "/assets/Hero.png"}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-primary text-3xl font-bold text-neutral-900 mb-12 text-center">
              Treatment Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 bg-primary-50 rounded-xl"
                >
                  <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-900 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-primary text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <FAQAccordion faqs={injectablesTreatmentsData.faqs} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
