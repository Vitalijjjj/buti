/**
 * Dermal Fillers - Dynamic Treatment Page
 *
 * Route: /treatments/dermal-fillers/[treatment]
 *
 * Dynamic routes for:
 * - bio-fillers
 * - lip-filler
 * - radiesse
 * - cheek-fillers
 * - jawline-contouring
 * - chin-augmentation
 * - nasolabial-folds
 * - under-eye-fillers
 * - temple-fillers
 * - non-surgical-rhinoplasty
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { dermalFillersTreatmentsData } from "@/data/dermal-fillers-treatments";
import { Check, Clock, Calendar, Sparkles, Users } from "lucide-react";

interface PageProps {
  params: Promise<{
    treatment: string;
  }>;
}

// Valid treatment IDs
const validTreatments = [
  "bio-fillers",
  "lip-filler",
  "radiesse",
  "cheek-fillers",
  "jawline-contouring",
  "chin-augmentation",
  "nasolabial-folds",
  "under-eye-fillers",
  "temple-fillers",
  "non-surgical-rhinoplasty",
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
  const treatment = dermalFillersTreatmentsData.treatments.find(
    (t) => t.id === treatmentId
  );

  if (!treatment) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${treatment.title} Dublin | Dermal Filler Treatment | Facecult`,
    description: treatment.description,
    keywords: [
      `${treatment.title.toLowerCase()} Dublin`,
      `${treatment.title.toLowerCase()} Ireland`,
      "dermal fillers Dublin",
      "facial enhancement Dublin",
    ],
    openGraph: {
      title: `${treatment.title} Dublin | Facecult`,
      description: treatment.description,
      type: "website",
      locale: "en_IE",
      siteName: "Facecult",
    },
    alternates: {
      canonical: `https://facecult.ie/treatments/dermal-fillers/${treatmentId}`,
    },
  };
}

export default async function DermalFillerTreatmentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const treatmentId: string = resolvedParams.treatment;

  // Find the specific treatment
  const treatment = dermalFillersTreatmentsData.treatments.find(
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
    procedureType: "Dermal Filler Treatment",
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
        name: "Dermal Fillers",
        item: "https://facecult.ie/treatments/dermal-fillers",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: treatment.title,
        item: `https://facecult.ie/treatments/dermal-fillers/${treatmentId}`,
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
              <Link href="/treatments/dermal-fillers" className="hover:text-primary-600">Dermal Fillers</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{treatment.title}</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="bg-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900">
              Dermal Fillers
            </h1>
          </div>
        </div>

        {/* Treatment Tabs Navigation */}
        <div className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {dermalFillersTreatmentsData.treatments
                .filter((t) => ["bio-fillers", "lip-filler", "radiesse"].includes(t.id))
                .map((t) => (
                <Link
                  key={t.id}
                  href={`/treatments/dermal-fillers/${t.id}`}
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
                        Single Session
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatment.pricing.singleSession}</p>
                  </div>
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

            <FAQAccordion faqs={dermalFillersTreatmentsData.faqs} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
