import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/ui/faq";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import {
  Clock,
  Award,
  Heart,
  Shield,
  Sparkles,
  RefreshCw,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chemical Peels Dublin | Light, Medium & Deep Peels | Medical Skin Rejuvenation | Facecult",
  description:
    "Professional chemical peels in Dublin for skin renewal and rejuvenation. Light, medium & deep peels for acne, wrinkles, pigmentation. Expert medical aestheticians. Book consultation.",
  keywords:
    "chemical peels Dublin, skin peel Dublin, TCA peel, glycolic peel, medical peel, skin rejuvenation Dublin, acne treatment, anti-aging peel, Facecult Dublin",
  openGraph: {
    title: "Chemical Peels Dublin | Medical Skin Rejuvenation | Facecult",
    description:
      "Expert chemical peel treatments for acne, wrinkles, and pigmentation. Light, medium & deep peels in Dublin.",
    type: "website",
  },
};

const peelTypes = [
  {
    icon: Sun,
    title: "Light Peels",
    subtitle: "Superficial Exfoliation",
    description:
      "Gentle peels using AHAs (glycolic, lactic acid) for mild skin concerns. Minimal downtime, subtle improvements with regular treatments.",
    benefits: ["Brightens skin tone", "Reduces fine lines", "Improves texture", "No downtime"],
    downtime: "None - 1 day",
  },
  {
    icon: RefreshCw,
    title: "Medium Peels",
    subtitle: "Deeper Resurfacing",
    description:
      "TCA or combination peels that penetrate to the dermis for moderate skin damage. More dramatic results with manageable recovery.",
    benefits: [
      "Treats sun damage",
      "Reduces wrinkles",
      "Evens pigmentation",
      "Improves acne scars",
    ],
    downtime: "3-7 days",
  },
  {
    icon: Sparkles,
    title: "Deep Peels",
    subtitle: "Maximum Rejuvenation",
    description:
      "Phenol or high-concentration TCA peels for significant skin damage. Dramatic, long-lasting results requiring supervised recovery.",
    benefits: [
      "Removes deep wrinkles",
      "Treats severe sun damage",
      "Improves deep scars",
      "Long-lasting results",
    ],
    downtime: "14-21 days",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Medical-Grade Solutions",
    description: "Professional-strength peels administered by experienced practitioners",
  },
  {
    icon: Shield,
    title: "Safe & Controlled",
    description: "Precise application with careful monitoring for optimal results",
  },
  {
    icon: Heart,
    title: "Customized Approach",
    description: "Tailored to your skin type, concerns, and desired outcomes",
  },
  {
    icon: Clock,
    title: "Proven Results",
    description: "Decades of clinical evidence supporting effectiveness",
  },
];

const skinConcerns = [
  {
    concern: "Acne & Acne Scars",
    solution: "Chemical peels reduce active acne, unclog pores, and improve the appearance of acne scarring through controlled exfoliation and cellular turnover.",
  },
  {
    concern: "Hyperpigmentation",
    solution: "Peels break down excess melanin deposits, evening skin tone and reducing dark spots, melasma, and sun damage.",
  },
  {
    concern: "Fine Lines & Wrinkles",
    solution: "Stimulates collagen production and removes damaged surface skin, revealing smoother, more youthful-looking skin.",
  },
  {
    concern: "Uneven Texture",
    solution: "Exfoliates rough, dull skin to reveal fresh, smooth skin with improved clarity and radiance.",
  },
  {
    concern: "Sun Damage",
    solution: "Removes sun-damaged skin cells and promotes regeneration of healthy skin with reduced signs of photoaging.",
  },
  {
    concern: "Large Pores",
    solution: "Deep cleansing and exfoliation help minimize the appearance of enlarged pores for refined skin texture.",
  },
];

const faqs = [
  {
    id: "what-is-chemical-peel",
    question: "What is a chemical peel and how does it work?",
    answer:
      "A chemical peel is a medical aesthetic treatment that uses controlled application of chemical solutions to remove damaged outer layers of skin. This process triggers the body&apos;s natural healing response, stimulating collagen production and revealing fresh, healthy skin underneath. Different strength peels penetrate to different depths for varying levels of correction.",
  },
  {
    id: "which-peel-right-for-me",
    question: "Which type of chemical peel is right for me?",
    answer:
      "The best peel depends on your skin type, concerns, and desired downtime. Light peels are ideal for mild concerns with no downtime, medium peels for moderate issues with a week of recovery, and deep peels for significant damage requiring 2-3 weeks healing. We&apos;ll assess your skin during consultation and recommend the most appropriate treatment.",
  },
  {
    id: "how-long-results-last",
    question: "How long do results from chemical peels last?",
    answer:
      "Results vary by peel depth and individual factors. Light peels provide subtle improvements lasting 1-2 months (requiring regular maintenance). Medium peels deliver results lasting 6-12 months. Deep peels can provide dramatic, long-lasting results for several years. Proper skincare, sun protection, and maintenance treatments extend results.",
  },
  {
    id: "recovery-process",
    question: "What is the recovery process like?",
    answer:
      "Recovery depends on peel depth. Light peels have minimal to no peeling with possible mild redness. Medium peels involve 3-7 days of visible peeling and redness. Deep peels require 14-21 days with significant peeling, redness, and swelling. We provide detailed aftercare instructions and support throughout your recovery.",
  },
  {
    id: "safe-for-all-skin-types",
    question: "Are chemical peels safe for all skin types?",
    answer:
      "Chemical peels can be performed on most skin types, but certain skin tones (Fitzpatrick IV-VI) require extra caution to prevent post-inflammatory hyperpigmentation. Our medical professionals have extensive experience treating diverse skin types and will customize your treatment protocol to ensure safety and optimal results.",
  },
  {
    id: "how-many-treatments-needed",
    question: "How many treatments will I need?",
    answer:
      "Treatment frequency depends on the peel type and your goals. Light peels are often done in a series of 4-6 treatments every 2-4 weeks. Medium peels may be done 1-2 times per year. Deep peels are typically one-time treatments. We&apos;ll create a personalised treatment plan during your consultation.",
  },
  {
    id: "combine-with-other-treatments",
    question: "Can I combine chemical peels with other treatments?",
    answer:
      "Yes! Chemical peels can be combined with other treatments like microneedling, laser therapy, or injectables for enhanced results. However, timing is important - some combinations require spacing treatments apart. We&apos;ll design a comprehensive treatment plan that safely optimizes your results.",
  },
];

export default function ChemicalPeelsPage() {
  // JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Facecult Dublin - Chemical Peels",
    description:
      "Professional chemical peel treatments for skin renewal and rejuvenation. Light, medium, and deep peels for various skin concerns in Dublin.",
    provider: {
      "@type": "MedicalBusiness",
      name: "Facecult Dublin",
    },
    areaServed: {
      "@type": "City",
      name: "Dublin",
      "@id": "https://en.wikipedia.org/wiki/Dublin",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chemical Peel Treatments",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Light Chemical Peel",
            description: "Superficial exfoliation for mild skin concerns with no downtime",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medium Chemical Peel",
            description: "Deeper resurfacing for moderate skin damage and aging signs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep Chemical Peel",
            description: "Maximum rejuvenation for significant skin damage and aging",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        name: "Chemical Peels",
        item: "https://facecult.ie/treatments/chemical-peels",
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

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-0">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
                    Medical Skin Rejuvenation
                  </span>
                </div>
                <h1 className="font-primary text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                  Chemical Peels in Dublin: Renew & Rejuvenate Your Skin
                </h1>
                <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8">
                  Professional chemical peel treatments at{" "}
                  <span className="font-semibold text-accent-gold">Facecult Dublin</span>. From
                  light maintenance peels to deep resurfacing, we customize each treatment to
                  address your unique skin concerns and goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTA
                  href="/book"
                  label="Book Free Consultation"
                  data-analytics="chemical_peels_hero_book"
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                />
                <CTA
                  href="/contact"
                  label="Contact Us"
                  variant="outline"
                  data-analytics="chemical_peels_hero_contact"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">3</div>
                  <div className="text-sm text-neutral-600">Peel Depths</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">Safe</div>
                  <div className="text-sm text-neutral-600">Medical-Grade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">Proven</div>
                  <div className="text-sm text-neutral-600">Results</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-screen rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600">
              <Image
                src="/assets/Hero.png"
                alt="Chemical peel treatment at Facecult Dublin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Card Section */}
      <section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  Why Choose Chemical Peels?
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Chemical peels are one of the most effective treatments for skin renewal,
                  addressing multiple concerns from acne to aging in a single procedure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Chemical Peels */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Find Your Perfect Peel
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We offer three depths of chemical peels to match your skin concerns and
              lifestyle needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {peelTypes.map((peel, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-4">
                      <peel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-neutral-900 mb-1">
                      {peel.title}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium">{peel.subtitle}</p>
                  </div>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {peel.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {peel.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                        <p className="text-sm text-neutral-700">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-neutral-700">Downtime:</span>
                      <span className="text-sm text-primary-600 font-medium">
                        {peel.downtime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Concerns Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              What Can Chemical Peels Treat?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Chemical peels address a wide range of skin concerns with scientifically
              proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skinConcerns.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    {item.concern}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Expectations */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
                  What to Expect
                </span>
              </div>
              <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Your Chemical Peel Journey
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Understanding the process helps you prepare and ensures optimal results from
                your chemical peel treatment.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Before Treatment</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Pre-treatment skincare preparation may be recommended. Avoid sun exposure,
                    retinoids, and certain medications as directed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">During Treatment</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    The peel solution is carefully applied to cleansed skin. You may feel
                    tingling or warmth. Treatment takes 30-60 minutes depending on peel depth.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">After Treatment</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Follow our detailed aftercare instructions. Use gentle products, avoid sun
                    exposure, and don&apos;t pick peeling skin. Results emerge as skin heals.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <CTA
                  href="/book"
                  label="Schedule Consultation"
                  data-analytics="chemical_peels_journey_book"
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                />
              </div>
            </div>

            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
              <Image
                src="/assets/Hero.png"
                alt="Chemical peel treatment process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MembershipTeaser />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about chemical peel treatments
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-accent-cream to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Reveal Fresh, Radiant Skin?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book your complimentary consultation with our medical team at{" "}
            <span className="font-semibold text-accent-gold">Facecult Dublin</span>
            {" "}to discover the ideal chemical peel for your skin goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              href="/book"
              label="Book Free Consultation"
              data-analytics="chemical_peels_final_cta_book"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            />
            <CTA
              href="/treatments"
              label="View All Treatments"
              variant="outline"
              data-analytics="chemical_peels_final_cta_treatments"
              className="border-primary-600 text-primary-600 hover:bg-primary-50"
            />
          </div>
        </div>
      </section>
    </>
  );
}
