"use client";

import Image from "next/image";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { CTA } from "@/components/CTA";
import { FAQ, FAQItem } from "@/components/ui/faq";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Shield, Clock, Sparkles, Star, Play, Heart, Droplet, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqItems: FAQItem[] = [
  {
    id: "medical-vs-spa-facial",
    question: "What is the difference between a medical-grade facial and a spa facial?",
    answer:
      "Medical-grade facials use professional-strength products and advanced techniques administered by trained medical professionals. They penetrate deeper into the skin, deliver more dramatic results, and can address specific medical skin concerns like acne, rosacea, and hyperpigmentation. Spa facials are primarily relaxation-focused with cosmetic-grade products.",
  },
  {
    id: "facial-frequency",
    question: "How often should I get a facial treatment?",
    answer:
      "For optimal results, we recommend facial treatments every 4-6 weeks. This aligns with your skin's natural renewal cycle and helps maintain consistent improvement. However, the ideal frequency depends on your skin type, concerns, and treatment goals, which we'll discuss during your consultation.",
  },
  {
    id: "hydrafacial-explained",
    question: "What is HydraFacial and how does it work?",
    answer:
      "HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts impurities, and hydrates the skin using patented Vortex-Fusion technology. It's suitable for all skin types and addresses fine lines, wrinkles, enlarged pores, oily/congested skin, and hyperpigmentation. Results are immediate with no downtime.",
  },
  {
    id: "sensitive-skin",
    question: "Are facial treatments suitable for sensitive skin?",
    answer:
      "Yes! We customize every facial treatment to your specific skin type and sensitivities. Our medical professionals will assess your skin during consultation and select appropriate products and techniques. Many of our treatments, like HydraFacial and LED therapy, are gentle enough for even the most sensitive skin.",
  },
  {
    id: "facial-downtime",
    question: "Is there any downtime after a facial treatment?",
    answer:
      "Most of our facial treatments have no downtime. You may experience slight redness immediately after treatment, which typically subsides within an hour. You can return to your normal activities right away and even apply makeup if needed. We'll provide specific aftercare instructions for your treatment.",
  },
  {
    id: "facials-for-acne",
    question: "Can facial treatments help with acne?",
    answer:
      "Absolutely. Medical-grade facials can significantly improve acne through deep cleansing, extractions, and targeted treatments with ingredients like salicylic acid and benzoyl peroxide. LED light therapy (blue light) is particularly effective for killing acne-causing bacteria. We'll create a customized treatment plan to address your specific acne concerns.",
  },
  {
    id: "facial-duration",
    question: "How long does a facial treatment take?",
    answer:
      "Treatment duration varies depending on the specific facial. Most sessions range from 30-60 minutes. HydraFacial treatments typically take 30-45 minutes, while comprehensive anti-aging facials may take up to 60 minutes. We'll provide the exact timing when you book your appointment.",
  },
];

export default function FacialsPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Grade Facials in Dublin",
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
      name: "Facial Treatment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HydraFacial Treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oxygen Facial",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LED Light Therapy",
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
        name: "Facials",
        item: "https://facecult.ie/treatments/facials",
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
                  Medical Grade Facials in Dublin<br />
                  <span className="text-primary-600">Glow, Hydrate, Transform</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
                  HydraFacial, Oxygen Facials & Advanced LED Therapy
                </p>

                {/* Descriptive Text */}
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Experience professional facial treatments delivered by certified medical
                  aestheticians in Dublin. Medical-grade products, advanced technology,
                  and instant results you can see and feel.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <CTA
                    href="/book"
                    label="Book Facial Consultation"
                    variant="default"
                    data-analytics="cta-book-facial-hero"
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
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">30min</h3>
                    <p className="text-sm text-neutral-600">Quick Treatment</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Zero</h3>
                    <p className="text-sm text-neutral-600">Downtime</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Instant</h3>
                    <p className="text-sm text-neutral-600">Results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-screen group">
              <Image
                src="/assets/Hero.png"
                alt="Medical-Grade Facial Treatment at Facecult Dublin"
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
                    Medical-grade facial treatments delivered by certified aestheticians in Dublin&apos;s premier aesthetic clinic.
                  </p>

                  {/* Key Benefits Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Medical-Grade Products</h3>
                        <p className="text-sm text-neutral-600">Professional-strength formulations not available over the counter</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Certified Aestheticians</h3>
                        <p className="text-sm text-neutral-600">Trained medical professionals with years of experience</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Customized Treatments</h3>
                        <p className="text-sm text-neutral-600">Tailored to your unique skin type and concerns</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Immediate Results</h3>
                        <p className="text-sm text-neutral-600">Visible improvement after just one session</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facial Treatments Section */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Our Facial Treatment Options
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Each treatment is customized to your unique skin type and goals by our certified medical aestheticians.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* HydraFacial Card */}
              <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <Droplet className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                        HydraFacial
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        The gold standard in medical-grade facials. Deep cleansing, exfoliation, extraction, and hydration in one seamless treatment.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Patented Vortex-Fusion technology
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Instant, noticeable results with no downtime
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Suitable for all skin types
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Addresses fine lines, pores, pigmentation
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Oxygen Facial Card */}
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
                        Oxygen Facial
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        Infuse your skin with pure oxygen and customized serums for instant radiance, plumping, and rejuvenation.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Boosts collagen production
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Instant plumping and glow
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Perfect pre-event treatment
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Detoxifies and hydrates skin
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LED Therapy Card */}
              <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                        LED Light Therapy
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        Medical-grade LED therapy to target acne, inflammation, aging, and promote cellular regeneration.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Blue light kills acne bacteria
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Red light stimulates collagen
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Non-invasive and painless
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Reduces inflammation and redness
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Anti-Ageing Facial Card */}
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
                        Anti-Ageing Facial
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        Comprehensive treatment combining advanced techniques to reduce fine lines, wrinkles, and restore youthful vitality.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Targets fine lines and wrinkles
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Firms and lifts sagging skin
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Improves skin texture and tone
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span className="text-neutral-700">
                        Restores radiance and vitality
                      </span>
                    </li>
                  </ul>
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
                Your facial treatment journey at Facecult Dublin — from consultation to glowing results.
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
                        Skin Analysis & Consultation
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        We assess your skin type, concerns, and goals to create a customized
                        treatment plan using professional-grade products.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Deep Cleansing & Preparation
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Your skin is thoroughly cleansed and prepared to maximize treatment
                        effectiveness and product absorption.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Treatment Application
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Depending on your treatment, we apply medical-grade serums, perform
                        extractions, or use advanced technology like LED or oxygen therapy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Hydration & Protection
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Final hydrating serums and SPF protection are applied. Your
                        aesthetician provides personalised aftercare advice for optimal results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <p className="text-neutral-700">
                    <strong>Downtime:</strong> Zero. You can return to your daily activities
                    immediately and even apply makeup if desired. Most clients experience an
                    instant glow with no redness or irritation.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                          Monthly Facial Plan
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 15% when you book monthly facials. Perfect for maintaining
                          radiant skin all year round.
                        </p>
                      </div>
                      <div className="p-6 bg-neutral-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary-600" />
                          Treatment Bundle
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 20% with our multi-treatment bundle. Combine HydraFacial,
                          LED therapy, and more for optimal results.
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
                Is a Medical Facial Right for Me?
              </h2>
              <p className="text-xl text-neutral-600">
                Our facial treatments are suitable for most skin types and concerns, but some conditions require special consideration.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl rounded-3xl mb-8">
              <CardContent className="p-10">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  Perfect For
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>Anyone looking to improve skin health, texture, and radiance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>All skin types including sensitive, acne-prone, and mature skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>Those seeking professional results without downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span>Pre-event glow or regular maintenance treatments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-xl rounded-3xl">
              <CardContent className="p-10">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Special Considerations
                </h3>
                <p className="text-neutral-700 mb-4">
                  Please inform us during consultation if you:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Are pregnant or breastfeeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have active skin infections, cold sores, or severe acne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Are using prescription retinoids or have recently used Accutane</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have allergies to skincare ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Have received recent cosmetic procedures or injectables</span>
                  </li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  Our medical professionals will review your history and customize your
                  treatment for safety and optimal results.
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
                Everything you need to know about facial treatments at Facecult Dublin.
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
                href="/treatments/laser"
                className="group"
              >
                <Card className="bg-white border-0 shadow-md rounded-2xl hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Laser Treatments
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Advanced laser hair removal and IPL skin treatments.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/treatments/chemical-peels"
                className="group"
              >
                <Card className="bg-white border-0 shadow-md rounded-2xl hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Chemical Peels
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Professional peels for skin resurfacing and renewal.
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
                  Ready to Glow?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Book your facial consultation at Facecult Dublin today and experience
                  the transformative power of medical-grade skincare.
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
