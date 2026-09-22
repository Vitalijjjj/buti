/**
 * Facelift Treatments Overview Page
 *
 * Route: /treatments/facelift
 *
 * Features:
 * - Scrollable treatment tabs
 * - Overview of all facelift treatments
 * - Links to individual treatment pages
 * - SEO optimized
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentAreaTabs } from "@/components/treatment/TreatmentAreaTabs";
import { faceliftTreatmentsData } from "@/data/facelift-treatments";

export const metadata: Metadata = {
  title: "Non-Surgical Facelift Treatments Dublin | HIFU, Thread Lift & More | Facecult",
  description:
    "Advanced non-surgical facelift treatments in Dublin: HIFU, Autologous Threads, Liquid Facelift & Radiesse. Natural facial rejuvenation by certified professionals.",
  keywords: [
    "facelift Dublin",
    "HIFU Dublin",
    "thread lift Dublin",
    "liquid facelift Dublin",
    "Radiesse Dublin",
    "non-surgical facelift Dublin",
    "facial rejuvenation Dublin",
  ],
  openGraph: {
    title: "Non-Surgical Facelift Treatments Dublin | Facecult",
    description:
      "Advanced non-surgical facelift treatments for natural facial rejuvenation and lifting. Professional solutions in Dublin.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/facelift",
  },
};

export default function FaceliftPage() {
  // Convert treatments to match TreatmentArea type
  const treatmentAreas = faceliftTreatmentsData.treatments.map((treatment) => ({
    ...treatment,
    pricing: `Single: ${treatment.pricing.singleSession}${
      treatment.pricing.package3 ? ` | Package: ${treatment.pricing.package3}` : ""
    }`,
  }));

  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Facecult Facelift Treatments",
    description: faceliftTreatmentsData.description,
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
      name: "Facelift Treatments",
      itemListElement: faceliftTreatmentsData.treatments.map((treatment) => ({
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
    mainEntity: faceliftTreatmentsData.faqs.map((faq) => ({
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
        name: "Facelift Treatments",
        item: "https://facecult.ie/treatments/facelift",
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