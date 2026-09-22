/**
 * Botox Treatment Page
 *
 * Detailed treatment page for Botox/Anti-Wrinkle Injections
 * Route: /treatments/injectables/botox
 *
 * Features:
 * - Scrollable treatment area tabs (sticky)
 * - Comprehensive treatment information
 * - SEO-optimized with JSON-LD schemas
 * - Before/after results
 * - Expert testimonials
 */

import { Metadata } from "next";
import { TreatmentDetailPage } from "@/components/treatment/TreatmentDetailPage";
import { botoxTreatment } from "@/data/treatments";

export const metadata: Metadata = {
  title:
    "Anti-Wrinkle Injections Dublin | Botox® Treatments | Doctor-Led | Facecult",
  description:
    "Transform your appearance with doctor-led anti-wrinkle injections in Dublin. Natural-looking Botox® treatments for forehead lines, crow's feet, frown lines & more. Book free consultation.",
  keywords: [
    "anti-wrinkle injections Dublin",
    "Botox Dublin",
    "cosmetic injections Dublin",
    "doctor-led Botox",
    "forehead lines treatment Dublin",
    "crow's feet treatment",
    "frown lines Dublin",
    "non-surgical facial rejuvenation Dublin",
  ],
  openGraph: {
    title: "Anti-Wrinkle Injections Dublin | Botox® Treatments | Facecult",
    description:
      "Doctor-led anti-wrinkle injections for natural-looking results. Treat forehead lines, crow's feet, frown lines & more. Free consultation available.",
    type: "website",
    locale: "en_IE",
    siteName: "Facecult",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Wrinkle Injections Dublin | Botox® Treatments",
    description:
      "Doctor-led anti-wrinkle injections for natural-looking results. Book your free consultation today.",
  },
  alternates: {
    canonical: "https://facecult.ie/treatments/injectables/botox",
  },
};

export default function BotoxTreatmentPage() {
  // JSON-LD Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: botoxTreatment.name,
    description: botoxTreatment.description,
    procedureType: botoxTreatment.category,
    medicalproceduretype: "Cosmetic",
    bodyLocation: "Face",
    preparation: "Free consultation required",
    followup: "Complimentary follow-up appointment after 2 weeks",
    howPerformed: botoxTreatment.howItWorks.description,
    isProprietary: false,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do anti-wrinkle injection results last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Results typically last 3-6 months. We recommend maintenance treatments every 3-6 months to maintain optimal results.",
        },
      },
      {
        "@type": "Question",
        name: "When will I see results from anti-wrinkle injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Results start to appear within 5-7 days, with the full effect visible after 2 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Are anti-wrinkle injections safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when administered by qualified medical professionals. All our treatments are doctor-led and use FDA-approved products.",
        },
      },
      {
        "@type": "Question",
        name: "What areas can be treated with anti-wrinkle injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can treat forehead lines, frown lines, crow's feet, bunny lines, gummy smile, lip flip, brow lift, masseter (jaw slimming), neck bands, chin dimpling, and hyperhidrosis (excessive sweating).",
        },
      },
    ],
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
        name: "Anti-Wrinkle Injections",
        item: "https://facecult.ie/treatments/injectables/botox",
      },
    ],
  };

  return (
    <TreatmentDetailPage
      treatment={botoxTreatment}
      jsonLdSchemas={{
        service: serviceSchema,
        faq: faqSchema,
        breadcrumb: breadcrumbSchema,
      }}
    />
  );
}
