/**
 * RF Microneedling Treatments Overview Page
 *
 * Route: /treatments/rf-microneedling
 *
 * Features:
 * - Scrollable treatment tabs
 * - Overview of all RF microneedling treatments
 * - Links to individual treatment pages
 * - SEO optimized
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentAreaTabs } from "@/components/treatment/TreatmentAreaTabs";
import { rfMicroneedlingTreatmentsData } from "@/data/rf-microneedling-treatments";

export const metadata: Metadata = {
  title: "RF Microneedling Dublin | DoubleTite & Exosomes | Facecult",
  description:
    "Advanced RF microneedling treatments in Dublin: DoubleTite radiofrequency microneedling with optional exosomes. Professional skin tightening by certified specialists.",
  keywords: [
    "RF microneedling Dublin",
    "radiofrequency microneedling Dublin",
    "DoubleTite Dublin",
    "skin tightening Dublin",
    "collagen remodeling Dublin",
    "RF microneedling exosomes Dublin",
  ],
  openGraph: {
    title: "RF Microneedling Treatments Dublin | Facecult",
    description:
      "Advanced RF microneedling treatments for superior skin tightening and rejuvenation. Professional solutions in Dublin.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/rf-microneedling",
  },
};

export default function RFMicroneedlingPage() {
  // Convert treatments to match TreatmentArea type
  const treatmentAreas = rfMicroneedlingTreatmentsData.treatments.map((treatment) => ({
    ...treatment,
    pricing: `Single: ${treatment.pricing.singleSession}${
      treatment.pricing.package3 ? ` | Package: ${treatment.pricing.package3}` : ""
    }`,
  }));

  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Facecult RF Microneedling Treatments",
    description: rfMicroneedlingTreatmentsData.description,
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
      name: "RF Microneedling Treatments",
      itemListElement: rfMicroneedlingTreatmentsData.treatments.map((treatment) => ({
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
    mainEntity: rfMicroneedlingTreatmentsData.faqs.map((faq) => ({
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
        name: "RF Microneedling Treatments",
        item: "https://facecult.ie/treatments/rf-microneedling",
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