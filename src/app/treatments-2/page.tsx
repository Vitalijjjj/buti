/**
 * Treatments-2 Page (Pilot)
 *
 * Pilot treatment detail page showcasing the new structure for Botox treatment.
 * This serves as a template for future treatment pages.
 *
 * Features:
 * - SEO-optimized metadata
 * - Comprehensive treatment information
 * - Scrollable treatment area tabs
 * - Before/after results
 * - Expert testimonial
 * - Strong CTAs throughout
 */

import { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentHero } from "@/components/treatment/TreatmentHero";
import { HowItWorks } from "@/components/treatment/HowItWorks";
import { ResultsSection } from "@/components/treatment/ResultsSection";
import { TreatmentAreaTabs } from "@/components/treatment/TreatmentAreaTabs";
import { ExpertTestimonial } from "@/components/treatment/ExpertTestimonial";
import { CTASection } from "@/components/treatment/CTASection";
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
    canonical: "https://facecult.ie/treatments-2",
  },
};

export default function Treatments2Page() {
  const treatment = botoxTreatment;

  // JSON-LD Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.description,
    procedureType: treatment.category,
    medicalproceduretype: "Cosmetic",
    bodyLocation: "Face",
    preparation: "Free consultation required",
    followup: "Complimentary follow-up appointment after 2 weeks",
    howPerformed: treatment.howItWorks.description,
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
        name: "Anti-Wrinkle Injections",
        item: "https://facecult.ie/treatments-2",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
        <FloatingNav />

        {/* Treatment Areas - Scrollable Tabs (FIRST - TOP PRIORITY) */}
        <div className="pt-24">
          <TreatmentAreaTabs treatmentAreas={treatment.treatmentAreas} />
        </div>

        {/* Full Treatment Overview - Hero Section with Quick Facts */}
        <TreatmentHero treatment={treatment} />

        {/* How It Works Section */}
        <HowItWorks howItWorks={treatment.howItWorks} />

        {/* Results Section with Before/After */}
        <ResultsSection results={treatment.results} />

        {/* Expert Testimonial */}
        <ExpertTestimonial expertQuote={treatment.expertQuote} />

        {/* Final CTA */}
        <CTASection cta={treatment.cta} />

        <Footer />
      </main>
    </>
  );
}
