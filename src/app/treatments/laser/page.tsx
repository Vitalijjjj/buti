"use client";

import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { CTA } from "@/components/CTA";
import { FAQ, FAQItem } from "@/components/ui/faq";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Shield, Clock, Users, Sparkles, Star, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TreatmentResult } from "@/components/results/treatment-result";

const faqItems: FAQItem[] = [
  {
    id: "does-it-hurt",
    question: "Does laser treatment hurt?",
    answer:
      "Most clients describe the sensation as a quick snap against the skin, similar to a rubber band. We use advanced cooling technology to minimize discomfort. For hair removal, the feeling is brief and well-tolerated. Pain levels vary by area and individual sensitivity, but most find it very manageable.",
  },
  {
    id: "how-many-sessions",
    question: "How many sessions will I need?",
    answer:
      "Laser hair removal typically requires 6–8 sessions spaced 4–6 weeks apart for optimal results, as hair grows in cycles. Laser/IPL skin treatments for pigmentation, redness, or texture generally need 3–6 sessions spaced 3–4 weeks apart. Your specialist will create a personalised plan during your consultation.",
  },
  {
    id: "dark-skin-safe",
    question: "Is laser safe for dark skin?",
    answer:
      "Yes! We use FDA-cleared and CE-marked technology suitable for all skin tones, including darker complexions. During your consultation, we assess your skin type and adjust settings accordingly. A patch test is always performed to ensure safety and effectiveness.",
  },
  {
    id: "blonde-grey-hair",
    question: "Does laser work on blonde or grey hair?",
    answer:
      "Laser hair removal targets melanin (pigment) in the hair. It works best on dark, coarse hair and is less effective on blonde, red, grey, or very light hair. During your consultation, we&apos;ll assess whether laser is suitable for your hair type and discuss alternative options if needed.",
  },
  {
    id: "pre-post-care",
    question: "What should I do before and after treatment?",
    answer:
      "Before: Shave the area (don&apos;t wax or pluck), avoid sun exposure and self-tanner for 2 weeks, arrive with clean skin (no lotions or makeup on the treatment area). After: Avoid sun exposure, heat (saunas, hot yoga), and harsh products for 24–48 hours. Use SPF 30+ daily. Your specialist will provide detailed aftercare instructions.",
  },
  {
    id: "how-soon-results",
    question: "How soon will I see results?",
    answer:
      "For hair removal, treated hair typically sheds within 2–3 weeks. You&apos;ll notice gradual reduction after each session. For skin treatments (pigmentation, redness), initial improvement may appear within 1–2 weeks, with continued progress over the full treatment course. Full results develop as your skin renews over several weeks.",
  },
  {
    id: "financing-subscriptions",
    question: "Do you offer payment plans or subscriptions?",
    answer:
      "Yes! We offer package discounts for 6 and 10 sessions, making treatment more affordable. We also have membership plans with preferential pricing, monthly payment options, priority booking, and complimentary skin reviews. Visit our Membership page or speak with our team to find the right plan for you.",
  },
];

export default function LaserTreatmentsPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Laser Hair Removal in Dublin",
    provider: {
      "@type": "MedicalBusiness",
      name: "Facecult",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Dublin",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laser Treatment Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "6-Session Laser Package",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "10-Session Laser Package",
          },
        },
      ],
    },
  };

  const jsonLdFAQ = {
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

  const jsonLdBreadcrumb = {
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
        name: "Laser Treatments",
        item: "https://facecult.ie/treatments/laser",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <main className="min-h-screen">
        <FloatingNav />

        {/* Hero Section - Split Screen Design */}
        <section className="relative min-h-screen">
          <div className="grid lg:grid-cols-2 min-h-screen">
            {/* Left Content Section */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-cream to-neutral-100 px-4 sm:px-6 lg:px-12 py-20">
              {/* Background Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-transparent" />

              <div className="relative z-10 max-w-2xl">
                {/* Main Headline */}
                <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                  Laser Skin Treatments in Dublin<br />
                  <span className="text-primary-600">Smooth, Clear, Confident Skin</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
                  Medical-Grade Laser Hair Removal & IPL Treatments
                </p>

                {/* Descriptive Text */}
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Clinic-grade laser hair removal and advanced laser/IPL skin treatments
                  in the heart of Dublin. FDA-cleared technology, certified specialists,
                  and results you can trust.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <CTA
                    href="/book"
                    label="Book Laser Consultation"
                    variant="default"
                    data-analytics="cta-book-laser-hero"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                  />
                  <CTA
                    href="/membership"
                    label="View Packages & Membership"
                    variant="outline"
                    data-analytics="cta-view-membership-hero"
                    className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all"
                  />
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">FDA/CE Certified</h3>
                    <p className="text-sm text-neutral-600">Medical-grade equipment</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Expert Specialists</h3>
                    <p className="text-sm text-neutral-600">Certified professionals</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Low Downtime</h3>
                    <p className="text-sm text-neutral-600">Resume daily activities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-screen group">
              <Image
                src="/assets/Hero.png"
                alt="Advanced Laser Treatment at Facecult Dublin"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="group/play relative flex items-center justify-center"
                  onClick={() => console.log('Video would play here')}
                  aria-label="Play video"
                >
                  {/* Outer ring with pulse animation */}
                  <div className="absolute inset-0 w-24 h-24 bg-white/30 rounded-full animate-pulse" />

                  {/* Main play button */}
                  <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110">
                    <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                  </div>

                  {/* Text below button */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium text-lg whitespace-nowrap drop-shadow-lg">
                    Watch Treatment Process
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overlapping Introduction Section */}
        <section className="relative -mt-24 pb-20 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overlapping Card */}
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                    Why Choose <span className="text-accent-gold">Facecult Dublin</span>
                  </h2>
                  <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed mb-12">
                    Advanced laser treatments delivered by certified specialists in Dublin&apos;s premier aesthetic clinic.
                  </p>

                  {/* Key Benefits Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">FDA/CE Certified</h3>
                        <p className="text-sm text-neutral-600">Medical-grade equipment meeting the highest safety standards</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Expert Specialists</h3>
                        <p className="text-sm text-neutral-600">Highly trained laser technicians with extensive experience</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Quick Sessions</h3>
                        <p className="text-sm text-neutral-600">Fast, efficient treatments that fit into your busy schedule</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Low Downtime</h3>
                        <p className="text-sm text-neutral-600">Resume daily activities immediately with minimal downtime</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Laser Hair Removal Section */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Laser Hair Removal — Long-Term Smoothness
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Say goodbye to shaving, waxing, and ingrown hairs. Our advanced laser technology targets hair at the root for lasting reduction.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Benefits Card */}
              <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                        Benefits
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Permanent hair reduction (80–90% after full course)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Eliminates ingrown hairs and irritation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Precision targeting — no damage to surrounding skin
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Fast sessions (e.g., underarms in 5–10 minutes)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Safe for all skin tones with proper settings
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Areas Card */}
              <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <Star className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                        Popular Treatment Areas
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary-600" />
                        Face
                      </h4>
                      <p className="text-neutral-600 text-sm ml-6">
                        Upper lip, chin, sideburns, full face
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary-600" />
                        Upper Body
                      </h4>
                      <p className="text-neutral-600 text-sm ml-6">
                        Underarms, arms, chest, back, shoulders
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary-600" />
                        Lower Body
                      </h4>
                      <p className="text-neutral-600 text-sm ml-6">
                        Full legs, half legs, thighs, feet, toes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary-600" />
                        Bikini & Intimate
                      </h4>
                      <p className="text-neutral-600 text-sm ml-6">
                        Bikini line, Brazilian, Hollywood
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before & After Results Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Real Results from Dublin Clients
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                See the remarkable transformations our clients have achieved with laser hair removal at Facecult Dublin.
              </p>
            </div>

            <Tabs defaultValue="women" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 bg-neutral-100">
                <TabsTrigger value="women" className="text-base font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  For Women
                </TabsTrigger>
                <TabsTrigger value="men" className="text-base font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  For Men
                </TabsTrigger>
              </TabsList>

              <TabsContent value="women" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Legs"
                    description="Smooth, hair-free legs all year round. No more razor burn or ingrown hairs."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before laser hair removal on legs"
                    afterAlt="After laser hair removal on legs"
                  />
                  <TreatmentResult
                    title="Bikini Line"
                    description="Permanent smoothness and confidence. Perfect for beach season and beyond."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before bikini line laser treatment"
                    afterAlt="After bikini line laser treatment"
                  />
                  <TreatmentResult
                    title="Underarms"
                    description="Silky smooth underarms with no irritation. Quick 5-10 minute sessions."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before underarm laser hair removal"
                    afterAlt="After underarm laser hair removal"
                  />
                </div>
              </TabsContent>

              <TabsContent value="men" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Back"
                    description="Complete back hair removal for a clean, confident look. Long-lasting results."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before back laser hair removal"
                    afterAlt="After back laser hair removal"
                  />
                  <TreatmentResult
                    title="Shoulders"
                    description="Smooth shoulders without the hassle of shaving or waxing. Permanent reduction."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before shoulder laser treatment"
                    afterAlt="After shoulder laser treatment"
                  />
                  <TreatmentResult
                    title="Arms"
                    description="Hair-free arms that look and feel great. Fast treatment, lasting results."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before arm laser hair removal"
                    afterAlt="After arm laser hair removal"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-neutral-600 mb-6">
                Ready to see results like these?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/book" data-analytics="cta-book-results">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Your Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Laser & IPL Skin Treatments Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Laser & IPL Skin Treatments — Clarity + Collagen
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Advanced light-based therapies to address pigmentation, redness, texture, and signs of aging.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white border-0 shadow-md rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                    Pigmentation
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Sunspots, age spots, melasma, freckles, uneven tone
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                    Redness & Rosacea
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Broken capillaries, diffuse redness, flushing
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                    Pores & Texture
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Enlarged pores, rough texture, dull skin
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                    Fine Lines
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Periorbital lines, early signs of photoaging
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect Process Section */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What to Expect
              </h2>
              <p className="text-xl text-neutral-600">
                Your laser treatment journey at Facecult Dublin — from consultation to results.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl rounded-3xl">
              <CardContent className="p-10">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Consultation & Patch Test
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        We assess your skin type, medical history, and treatment goals.
                        A patch test ensures safety and optimal settings for your skin.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Personalised Treatment Plan
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Your specialist designs a treatment schedule tailored to your
                        hair/skin type, desired results, and lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Treatment Sessions
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Quick, efficient sessions with advanced cooling technology for comfort.
                        Most areas completed in under 30 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Aftercare & Maintenance
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Simple post-treatment care (avoid sun, heat, harsh products).
                        Optional maintenance sessions keep results long-lasting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <p className="text-neutral-700">
                    <strong>Downtime:</strong> Minimal. Mild redness may occur for 1–4 hours
                    post-treatment. You can return to daily activities immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Treatment Plan */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Results & Treatment Plan
              </h2>
              <p className="text-xl text-neutral-600">
                Understand what to expect and how many sessions you&apos;ll need for optimal results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Hair Removal
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">SESSIONS</p>
                      <p className="text-neutral-700">6–8 treatments spaced 4–6 weeks apart</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">RESULTS</p>
                      <p className="text-neutral-700">Progressive reduction after each session. 80–90% permanent reduction after full course.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">MAINTENANCE</p>
                      <p className="text-neutral-700">1–2 sessions per year to maintain smoothness.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Skin Treatments
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">SESSIONS</p>
                      <p className="text-neutral-700">3–6 treatments spaced 3–4 weeks apart</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">RESULTS</p>
                      <p className="text-neutral-700">Visible improvement within 1–2 weeks. Continued progress over the treatment course.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-600 mb-1">MAINTENANCE</p>
                      <p className="text-neutral-700">Seasonal touch-ups recommended for long-term clarity and collagen support.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Packages & Membership */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Packages & Membership
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Save with our treatment packages and exclusive membership plans designed for regular clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="space-y-6">
                <Card className="bg-white border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Treatment Packages
                    </h3>
                    <div className="space-y-4">
                      <div className="p-6 bg-neutral-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary-600" />
                          6-Session Package
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 15% when you book 6 sessions. Ideal for completing
                          most hair removal and skin treatment courses.
                        </p>
                      </div>
                      <div className="p-6 bg-neutral-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary-600" />
                          10-Session Package
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 20% with our 10-session bundle. Perfect for multiple
                          areas or extended treatment plans.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <MembershipTeaser />
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/book" data-analytics="cta-book-packages">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Your Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Suitability */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Is Laser Right for Me?
              </h2>
              <p className="text-xl text-neutral-600">
                Laser treatments are safe and effective for most people, but some conditions require caution.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl rounded-3xl mb-8">
              <CardContent className="p-10">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  Good Candidates
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>Adults with unwanted hair or skin concerns (pigmentation, redness, texture)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>All skin tones (with appropriate laser settings)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>Realistic expectations about results and treatment course</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-xl rounded-3xl">
              <CardContent className="p-10">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contraindications
                </h3>
                <p className="text-neutral-700 mb-4">
                  Laser treatment may not be suitable if you:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Are pregnant or breastfeeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have active skin infections, open wounds, or severe acne in the treatment area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Are taking photosensitizing medications (e.g., certain antibiotics, Accutane — consult your specialist)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have a history of keloid scarring or skin cancer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have been tanning or used self-tanner within 2 weeks</span>
                  </li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  During your consultation, we&apos;ll review your medical history and determine
                  if laser is right for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Everything you need to know about laser treatments at Facecult Dublin.
              </p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* Related Treatments */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Related Treatments
              </h2>
              <p className="text-xl text-neutral-600">
                Explore other advanced skin treatments at Facecult Dublin.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link
                href="/treatments/microneedling-exosomes"
                className="group"
              >
                <Card className="bg-white border-0 shadow-md rounded-2xl hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Microneedling + Exosomes
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Stimulate collagen and repair with regenerative exosome therapy.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/treatments/ejal-40"
                className="group"
              >
                <Card className="bg-white border-0 shadow-md rounded-2xl hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Ejal 40
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Biorevitalization with hyaluronic acid for deep hydration and glow.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/treatments/karisma"
                className="group"
              >
                <Card className="bg-white border-0 shadow-md rounded-2xl hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Karisma
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Advanced skin rejuvenation for texture, tone, and elasticity.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-center">
                <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for Smooth, Clear, Confident Skin?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Book your laser consultation at Facecult Dublin today and discover
                  the difference medical-grade technology makes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-6 text-xl font-medium rounded-full transition-all bg-transparent"
                  >
                    <Link href="/book" data-analytics="cta-book-final">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Book Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-6 text-xl font-medium rounded-full transition-all bg-transparent"
                  >
                    <Link href="/contact" data-analytics="cta-contact-final">
                      Contact Us
                    </Link>
                  </Button>
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