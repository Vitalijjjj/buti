import type { Metadata } from "next";
import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { PageHeader } from "@/components/membership/PageHeader";
import { FeatureGrid } from "@/components/membership/FeatureGrid";
import { ValueTiles } from "@/components/membership/ValueTiles";
import { BenefitCard } from "@/components/membership/BenefitCard";
import { Timeline } from "@/components/membership/Timeline";
import { TermsCard } from "@/components/membership/TermsCard";
import { MembershipFAQ, FAQItem } from "@/components/membership/MembershipFAQ";
import { MembershipCTA } from "@/components/membership/MembershipCTA";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  Gift,
  Calendar,
  Award,
  Target,
  BarChart,
  Zap,
} from "lucide-react";

// Metadata for SEO
export const metadata: Metadata = {
  title:
    "Facecult Membership Dublin — Skin Membership & Monthly Treatments | Facecult",
  description:
    "Join Facecult Membership in Dublin: monthly medically-led skin treatments, 3D skin scan, Skin Coach, discounts on injectables and products. Cancel anytime — expert-led, science-based skincare.",
  keywords: [
    "Facecult Membership Dublin",
    "skin membership Dublin",
    "aesthetic clinic membership Dublin",
    "monthly aesthetics membership",
    "membership for injectables",
    "membership skin treatments",
    "3D skin scan membership",
    "skin coach subscription",
  ],
  openGraph: {
    title: "Facecult Membership Dublin | Monthly Skin Treatments",
    description:
      "Join Facecult Membership: monthly treatments, 3D skin scan, expert guidance. Science-based, personalised skincare in Dublin.",
    type: "website",
    url: "https://facecult.ie/membership",
    images: [
      {
        url: "/assets/Hero.png",
        width: 1200,
        height: 630,
        alt: "Facecult Membership Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facecult Membership Dublin",
    description:
      "Monthly skin treatments, 3D scan, expert coaching. Join today.",
    images: ["/assets/Hero.png"],
  },
  alternates: {
    canonical: "https://facecult.ie/membership",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ data
const faqItems: FAQItem[] = [
  {
    id: "pause-membership",
    question: "Can I pause my membership?",
    answer:
      "Yes — once per year, for up to 2 months, upon request. Your balance and discounts will be preserved.",
  },
  {
    id: "share-membership",
    question: "Can I share my membership?",
    answer: "Membership is personal and non-transferable.",
  },
  {
    id: "unused-treatment",
    question: "What if I don't use my treatment this month?",
    answer:
      "The full value rolls over and accumulates, so you can use it for a future visit or combine balances for a more advanced treatment.",
  },
  {
    id: "worth-it",
    question: "Is it really worth it?",
    answer:
      "Absolutely. The welcome package alone (worth €350) covers nearly 3 months of your fee — plus ongoing savings and expert guidance.",
  },
  {
    id: "injectables-included",
    question: "Can injectables be part of my monthly treatment?",
    answer:
      "Yes — absolutely. All injectable procedures such as fillers, skin boosters, mesotherapy, or revitalization treatments are part of your membership plan. If the treatment price exceeds your monthly balance, you simply pay the difference — with your member discount automatically applied.",
  },
  {
    id: "short-term",
    question: "Can I join for only a few months?",
    answer:
      "Yes. Membership is flexible — you can join for as long as you wish and cancel with a 30-day notice.",
  },
  {
    id: "transfer-balance",
    question: "Can I transfer my unused balance to someone else?",
    answer:
      "No, membership credit is personal. However, your unused balance rolls over each month and can be used later for any treatment, including injectables.",
  },
  {
    id: "travel-break",
    question: "What happens if I travel or need a break?",
    answer:
      "You can pause your membership for up to 2 months once per year — your balance and discounts will be preserved.",
  },
  {
    id: "change-plan",
    question: "Can I change my plan later?",
    answer:
      "Of course. Your Skin Coach will regularly review your skin's progress and adjust your treatment plan and priorities accordingly.",
  },
  {
    id: "injectable-discounts",
    question: "Are injectables discounted for members?",
    answer:
      "Yes. All members receive 10% discount during the first 3 months and 15% discount once your monthly spend exceeds €500. These discounts apply to all injectables and advanced treatments.",
  },
  {
    id: "products-purchase",
    question: "Can I use my balance for skincare products?",
    answer:
      "Yes — you can use your member discount (10–15%) to purchase professional skincare recommended during your consultations.",
  },
  {
    id: "minimum-commitment",
    question: "Is there a minimum commitment period?",
    answer:
      "No, there's no minimum. But staying consistent helps your Skin Coach monitor results and gives you access to annual rewards.",
  },
  {
    id: "policy-changes",
    question: "What if prices or policies change?",
    answer:
      "Any updates will be communicated at least 60 days in advance. You'll always have the choice to continue or cancel your plan.",
  },
];

export default function MembershipPage() {
  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facecult Membership",
    description:
      "Monthly skin membership including 3D skin scan, Skin Coach consultation, personalised treatments, and exclusive member benefits in Dublin.",
    provider: {
      "@type": "MedicalBusiness",
      name: "Facecult",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
      telephone: "+353-XX-XXX-XXXX", // Replace with actual phone
    },
    offers: {
      "@type": "Offer",
      price: "120.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://facecult.ie/membership",
      eligibleRegion: {
        "@type": "Place",
        name: "Dublin",
      },
      description:
        "Monthly membership with €350 welcome package, monthly treatments up to €150, and 10-15% member discounts",
    },
    areaServed: {
      "@type": "City",
      name: "Dublin",
      "@id": "https://en.wikipedia.org/wiki/Dublin",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Facecult",
    description: "Boutique medical aesthetics clinic in Dublin",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    telephone: "+353-XX-XXX-XXXX", // Replace with actual phone
    url: "https://facecult.ie",
    sameAs: [
      // Add social media URLs
      "https://instagram.com/facecult",
      "https://facebook.com/facecult",
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
        name: "Membership",
        item: "https://facecult.ie/membership",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        <FloatingNav />

        {/* Hero Section */}
        <PageHeader
          title="Facecult Membership"
          subtitle="Where science meets beauty — and your skin evolves."
          primaryCTA={{
            href: "https://partner.pabau.com/online-bookings/facecult",
            label: "Join Now",
          }}
          secondaryCTA={{
            href: "https://partner.pabau.com/online-bookings/facecult",
            label: "Book a Consultation",
          }}
          imageSrc="/assets/Hero.png"
          imageAlt="Facecult Membership - Advanced 3D Skin Analysis and Treatment"
        />

        {/* Why Join Section */}
        <section className="relative -mt-24 pb-20 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16">
                <div className="text-center max-w-4xl mx-auto mb-12">
                  <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                    Why Join Facecult Membership
                  </h2>
                  <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                    Facecult Membership is more than a monthly treatment plan.
                    It&apos;s a complete, guided skin management program —
                    combining advanced technology, expert coaching, and
                    personalised care.
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    We don&apos;t guess. We measure, analyze, and design your
                    perfect routine with <strong>scientific precision</strong>.
                  </p>
                </div>

                <FeatureGrid />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Welcome Experience Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-accent-rose to-accent-gold text-white px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Gift className="w-10 h-10" />
                  </div>
                  <p className="text-xl font-bold uppercase tracking-wider">
                    Complimentary Welcome Gift worth €350
                  </p>
                  <p className="text-base font-medium text-white/90 mt-1">
                    Yours when you join today
                  </p>
                </div>
              </div>
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Welcome Experience
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Your journey begins with a full professional onboarding package
              </p>
            </div>

            <ValueTiles />

            <div className="mt-8 text-center">
              <p className="text-lg text-neutral-700 font-medium">
                All of this is <strong>complimentary</strong> when you join
                Facecult Membership.
              </p>
            </div>
          </div>
        </section>

        {/* Monthly Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Monthly Benefits
              </h2>
              <p className="text-xl text-neutral-600">
                Your path to long-term skin transformation — guided by science,
                care, and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <BenefitCard
                icon={Sparkles}
                title="1 Treatment / Month"
                description={
                  <div>
                    <p className="mb-3">
                      Choose from a curated menu worth up to €150:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>HydraFacial</li>
                      <li>Glass-Skin Facial</li>
                      <li>Detox Facials</li>
                      <li>Lifting Treatments</li>
                      <li>Collagen Boosting</li>
                      <li>And more...</li>
                    </ul>
                  </div>
                }
                highlight
              />

              <BenefitCard
                icon={TrendingUp}
                title="10–15% Member Discount"
                description={
                  <div>
                    <p className="mb-2">
                      On injectables, peels, and professional skincare:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>First 3 months:</strong> 10% off all additional
                        treatments & products
                      </li>
                      <li>
                        <strong>After 3 months:</strong> 15% off whenever your
                        treatment cost exceeds €500
                      </li>
                    </ul>
                  </div>
                }
              />

              <BenefitCard
                icon={Gift}
                title="Annual Gift"
                description="1 premium treatment after 12 months of continuous membership worth €50"
              />

              <BenefitCard
                icon={Calendar}
                title="Priority Access"
                description="To new technologies, workshops, and exclusive member events"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-neutral-600">
                Simple steps to transform your skin
              </p>
            </div>

            <Timeline />

            {/* Price Block */}
            <Card className="mt-12 bg-gradient-to-br from-primary-600 to-primary-700 border-0 shadow-2xl">
              <CardContent className="p-10 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Join Today</h3>
                <div className="text-5xl font-bold mb-4">€120</div>
                <p className="text-xl text-white/90 mb-2">per month</p>
                <p className="text-sm text-white/80">
                  Cancel anytime with 30 days&apos; notice
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Facecult Difference Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                The Facecult Difference
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                This is not just maintenance — it&apos;s{" "}
                <strong className="text-primary-600">Skin Intelligence</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Personalised Care
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Through scientific skin analysis
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Guided Transformation
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      With your dedicated Skin Coach
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Progress Tracking
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Ongoing skincare evolution monitoring
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Latest Innovations
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Access to cutting-edge aesthetic technologies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Terms Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TermsCard />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Everything you need to know about Facecult Membership
              </p>
            </div>

            <MembershipFAQ items={faqItems} />

            {/* Individual Consultation Note */}
            <Card className="mt-12 bg-gradient-to-br from-accent-cream to-primary-50 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="font-semibold text-2xl text-neutral-900 mb-4">
                  Individual Consultation
                </h3>
                <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto">
                  Every Facecult Membership is fully customizable. All treatment
                  combinations — including injectables, advanced devices, or
                  product purchases — can be tailored to your goals and
                  discussed personally in the clinic with your Skin Coach.
                </p>
                <p className="text-neutral-700 font-medium mt-4">
                  Your skin journey is personal — and at Facecult, we make sure
                  it&apos;s intelligently designed just for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      Ready to Start Your Skin Evolution?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Join the Facecult Membership today and step into a new
                      level of personalised, science-based beauty.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <MembershipCTA
                        href="https://partner.pabau.com/online-bookings/facecult"
                        label="Join Now"
                        variant="secondary"
                        data-analytics="join_now_final"
                        className="bg-white text-primary-600 hover:bg-accent-rose hover:text-white"
                      />
                      <MembershipCTA
                        href="https://partner.pabau.com/online-bookings/facecult"
                        label="Book a Consultation"
                        variant="outline"
                        data-analytics="book_consultation_final"
                        className="border-white text-white hover:bg-white hover:text-primary-600"
                      />
                    </div>

                    <p className="text-sm text-white/70 mt-8">
                      Membership terms subject to clinic approval. Individual
                      results may vary. Full T&Cs available on request.
                    </p>
                  </div>

                  <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/Hero.png"
                      alt="Facecult Team and 3D Skin Analysis"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
