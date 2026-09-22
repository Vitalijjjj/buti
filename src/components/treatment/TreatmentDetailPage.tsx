/**
 * TreatmentDetailPage Component
 *
 * Reusable treatment detail page template with:
 * - Scrollable treatment area tabs (sticky)
 * - Hero section with quick facts
 * - How it works section
 * - Results with before/after
 * - Expert testimonial
 * - CTA section
 *
 * Usage:
 * Import treatment data and pass to this component
 */

"use client";

import { Treatment } from "@/types/treatment";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { TreatmentAreaTabs } from "./TreatmentAreaTabs";
import { TreatmentHero } from "./TreatmentHero";
import { HowItWorks } from "./HowItWorks";
import { ResultsSection } from "./ResultsSection";
import { ExpertTestimonial } from "./ExpertTestimonial";
import { CTASection } from "./CTASection";

interface TreatmentDetailPageProps {
  treatment: Treatment;
  jsonLdSchemas?: {
    service?: object;
    faq?: object;
    breadcrumb?: object;
  };
}

export function TreatmentDetailPage({
  treatment,
  jsonLdSchemas,
}: TreatmentDetailPageProps) {
  return (
    <>
      {/* JSON-LD Schemas */}
      {jsonLdSchemas?.service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchemas.service),
          }}
        />
      )}
      {jsonLdSchemas?.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchemas.faq),
          }}
        />
      )}
      {jsonLdSchemas?.breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchemas.breadcrumb),
          }}
        />
      )}

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
