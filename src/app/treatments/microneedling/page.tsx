/**
 * Microneedling Treatments Overview Page
 *
 * Route: /treatments/microneedling
 *
 * Features:
 * - Scrollable treatment tabs
 * - Overview of all microneedling treatments
 * - Links to individual treatment pages
 * - SEO optimized
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentAreaTabs } from "@/components/treatment/TreatmentAreaTabs";
import { microneedlingTreatmentsData } from "@/data/microneedling-treatments";

export const metadata: Metadata = {
  title: "Microneedling Treatments Dublin | Collagen Induction & Exosomes | Facecult",
  description:
    "Advanced microneedling treatments in Dublin: Collagen induction therapy and Exosome treatments. Professional skin rejuvenation by certified specialists.",
  keywords: [
    "microneedling Dublin",
    "collagen induction Dublin",
    "exosomes Dublin",
    "skin rejuvenation Dublin",
    "acne scar treatment Dublin",
    "microneedling facial Dublin",
  ],
  openGraph: {
    title: "Microneedling Treatments Dublin | Facecult",
    description:
      "Advanced microneedling treatments for skin rejuvenation and texture improvement. Professional solutions in Dublin.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/microneedling",
  },
};

export default function MicroneedlingPage() {
  // Convert treatments to match TreatmentArea type
  const treatmentAreas = microneedlingTreatmentsData.treatments.map((treatment) => ({
    ...treatment,
    pricing: `Single: ${treatment.pricing.singleSession}${
      treatment.pricing.package3 ? ` | Package: ${treatment.pricing.package3}` : ""
    }`,
  }));

  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Facecult Microneedling Treatments",
    description: microneedlingTreatmentsData.description,
    provider: {
      "@type": "MedicalClinic",
      name: "Facecult",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Microneedling Treatments",
      itemListElement: microneedlingTreatmentsData.treatments.map((treatment) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: treatment.title,
          description: treatment.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: microneedlingTreatmentsData.faqs.map((faq) => ({
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
        name: "Microneedling Treatments",
        item: "https://facecult.ie/treatments/microneedling",
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

        {/* Treatment Tabs */}
        <div className="pt-24">
          <TreatmentAreaTabs treatmentAreas={treatmentAreas} />
        </div>

        <Footer />
      </main>
    </>
  );
}