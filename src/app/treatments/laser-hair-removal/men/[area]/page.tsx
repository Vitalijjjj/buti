/**
 * Laser Hair Removal for Men - Dynamic Area Page
 *
 * Route: /treatments/laser-hair-removal/men/[area]
 *
 * Dynamic routes for:
 * - face
 * - upper-body
 * - lower-body
 * - full-body
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { laserHairRemovalMen } from "@/data/laser-hair-removal";
import { Check, Clock, Calendar, Sparkles, Users } from "lucide-react";

interface PageProps {
  params: Promise<{
    area: string;
  }>;
}

// Valid area IDs
const validAreas = ["face", "upper-body", "lower-body", "full-body"];

// Generate static params for all treatment areas
export async function generateStaticParams() {
  return validAreas.map((area) => ({
    area,
  }));
}

// Generate metadata dynamically based on area
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const areaId: string = resolvedParams.area;
  const treatmentArea = laserHairRemovalMen.treatmentAreas.find(
    (area) => area.id === areaId
  );

  if (!treatmentArea) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${treatmentArea.title} Laser Hair Removal Dublin | For Men | Facecult`,
    description: treatmentArea.description,
    keywords: [
      `${treatmentArea.title.toLowerCase()} laser hair removal Dublin`,
      `${treatmentArea.title.toLowerCase()} hair removal men`,
      "laser hair removal Dublin",
      "permanent hair removal men",
    ],
    openGraph: {
      title: `${treatmentArea.title} Laser Hair Removal Dublin | Facecult`,
      description: treatmentArea.description,
      type: "website",
      locale: "en_IE",
      siteName: "Facecult",
    },
    alternates: {
      canonical: `https://facecult.ie/treatments/laser-hair-removal/men/${areaId}`,
    },
  };
}

export default async function LaserHairRemovalAreaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const areaId: string = resolvedParams.area;

  // Find the specific treatment area
  const treatmentArea = laserHairRemovalMen.treatmentAreas.find(
    (area) => area.id === areaId
  );

  // Return 404 if area not found
  if (!treatmentArea) {
    notFound();
  }

  // JSON-LD Schema for this specific treatment
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${treatmentArea.title} Laser Hair Removal for Women`,
    description: treatmentArea.description,
    procedureType: "Laser Hair Removal",
    bodyLocation: {
      "@type": "AnatomicalStructure",
      name: treatmentArea.title,
    },
    preparation: "Shave treatment area 24 hours before. Avoid sun exposure for 2 weeks prior.",
    followup: "Avoid sun exposure and use SPF 50 for 2 weeks after treatment.",
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
        name: "Laser Hair Removal",
        item: "https://facecult.ie/treatments/laser-hair-removal",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "For Men",
        item: "https://facecult.ie/treatments/laser-hair-removal/women",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: treatmentArea.title,
        item: `https://facecult.ie/treatments/laser-hair-removal/men/${areaId}`,
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
              <Link href="/treatments/laser-hair-removal/men" className="hover:text-primary-600">Laser Hair Removal - Men</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{treatmentArea.title}</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="bg-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900">
              Laser Hair Removal - Men
            </h1>
          </div>
        </div>

        {/* Treatment Area Tabs Navigation */}
        <div className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
              {laserHairRemovalMen.treatmentAreas.map((area) => (
                <a
                  key={area.id}
                  href={`/treatments/laser-hair-removal/men/${area.id}`}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 border-2 whitespace-nowrap ${
                    area.id === areaId
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {area.title}
                </a>
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
                  {treatmentArea.title}
                </h2>
                <p className="text-xl text-primary-600 font-medium mb-6">
                  Professional Laser Hair Removal in Dublin
                </p>
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed mb-8">
                  {treatmentArea.detailedDescription.split("\n\n").map((para, i) => (
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
                    <p className="text-neutral-900 font-semibold">{treatmentArea.duration}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Sessions
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatmentArea.sessionsRequired}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        Single Session
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatmentArea.pricing.singleSession}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-primary-600" />
                      <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                        6 Sessions
                      </p>
                    </div>
                    <p className="text-neutral-900 font-semibold">{treatmentArea.pricing.package6}</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={treatmentArea.image}
                  alt={`${treatmentArea.title} Laser Hair Removal`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 md:p-10">
                <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                  Treatment Benefits
                </h2>
                <ul className="space-y-3">
                  {treatmentArea.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas Included */}
              {treatmentArea.areasIncluded && treatmentArea.areasIncluded.length > 0 && (
                <div className="bg-gradient-to-br from-accent-cream to-primary-50 rounded-2xl p-8 md:p-10">
                  <h2 className="font-primary text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                    Areas Included
                  </h2>
                  <ul className="space-y-3">
                    {treatmentArea.areasIncluded.map((area, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-neutral-700 text-lg">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {laserHairRemovalMen.howItWorks.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {laserHairRemovalMen.howItWorks.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {laserHairRemovalMen.howItWorks.steps.map((step, index) => (
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

        {/* Before & After Results */}
        {laserHairRemovalMen.beforeAfterImages && laserHairRemovalMen.beforeAfterImages.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Real Results from Real Clients
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  See the transformation laser hair removal has achieved for our clients
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {laserHairRemovalMen.beforeAfterImages.map((result, index) => (
                  <div key={index} className="space-y-4">
                    <BeforeAfterSlider
                      beforeImage={result.before}
                      afterImage={result.after}
                      beforeAlt={`Before laser hair removal ${index + 1}`}
                      afterAlt={`After laser hair removal ${index + 1}`}
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
        )}

        {/* Expert Testimonial */}
        {laserHairRemovalMen.expertQuote && (
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-6">&quot;</div>
                <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  {laserHairRemovalMen.expertQuote.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {laserHairRemovalMen.expertQuote.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src={laserHairRemovalMen.expertQuote.image}
                        alt={laserHairRemovalMen.expertQuote.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-lg">
                      {laserHairRemovalMen.expertQuote.name}
                    </p>
                    <p className="text-primary-100">
                      {laserHairRemovalMen.expertQuote.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {laserHairRemovalMen.faqs && laserHairRemovalMen.faqs.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={laserHairRemovalMen.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Smooth, Hair-Free Skin?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free consultation and let our medical experts create a personalised
              laser hair removal plan for you
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
