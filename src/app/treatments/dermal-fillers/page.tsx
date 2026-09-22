"use client";

import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { CTA } from "@/components/CTA";
import { FAQ, FAQItem } from "@/components/ui/faq";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Sparkles, Star, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TreatmentResult } from "@/components/results/treatment-result";
import { dermalFillersTreatmentsData } from "@/data/dermal-fillers-treatments";

const faqItems: FAQItem[] = dermalFillersTreatmentsData.faqs.map(faq => ({
  id: faq.id,
  question: faq.question,
  answer: faq.answer,
}));

export default function DermalFillersPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dermal Fillers in Dublin",
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
      name: "Dermal Filler Treatments",
      itemListElement: dermalFillersTreatmentsData.treatments.map((treatment) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: treatment.title,
        },
      })),
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
        name: "Dermal Fillers",
        item: "https://facecult.ie/treatments/dermal-fillers",
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
                  Dermal Fillers in Dublin<br />
                  <span className="text-primary-600">Natural Volume & Definition</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
                  Medical-Grade Facial Enhancement & Contouring
                </p>

                {/* Descriptive Text */}
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Advanced dermal filler treatments for facial volumization, definition, and rejuvenation
                  in the heart of Dublin. Premium hyaluronic acid fillers, expert injectors,
                  and natural-looking results you can trust.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <CTA
                    href="/book"
                    label="Book Filler Consultation"
                    variant="default"
                    data-analytics="cta-book-filler-hero"
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
                    <h3 className="font-semibold text-neutral-900 mb-1">Medical-Grade</h3>
                    <p className="text-sm text-neutral-600">Premium HA fillers</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Expert Injectors</h3>
                    <p className="text-sm text-neutral-600">Certified professionals</p>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Reversible</h3>
                    <p className="text-sm text-neutral-600">Safe HA fillers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-screen group">
              <Image
                src="/assets/Hero.png"
                alt="Advanced Dermal Filler Treatments at Facecult Dublin"
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
                    Advanced dermal filler treatments delivered by certified medical specialists in Dublin&apos;s premier aesthetic clinic.
                  </p>

                  {/* Key Benefits Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Premium Fillers</h3>
                        <p className="text-sm text-neutral-600">Only the highest quality hyaluronic acid products</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Expert Injectors</h3>
                        <p className="text-sm text-neutral-600">Experienced practitioners with extensive expertise</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Natural Results</h3>
                        <p className="text-sm text-neutral-600">Conservative approach for balanced enhancement</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Safety First</h3>
                        <p className="text-sm text-neutral-600">Reversible treatments with proven safety record</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dermal Filler Treatments Overview */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Our Dermal Filler Treatments
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Explore our range of advanced dermal filler treatments designed to restore volume, define contours, and enhance your natural beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dermalFillersTreatmentsData.treatments.slice(0, 6).map((treatment) => (
                <Card key={treatment.id} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {treatment.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wide">From</p>
                        <p className="text-xl font-bold text-primary-600">{treatment.pricing.singleSession}</p>
                      </div>
                      <Link
                        href={`/treatments/dermal-fillers/${treatment.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                See the remarkable transformations our clients have achieved with dermal filler treatments at Facecult Dublin.
              </p>
            </div>

            <Tabs defaultValue="lips" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-12 bg-neutral-100">
                <TabsTrigger value="lips" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Lip Enhancement
                </TabsTrigger>
                <TabsTrigger value="cheeks" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Cheek & Face
                </TabsTrigger>
                <TabsTrigger value="jawline" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Jawline & Chin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lips" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Natural Lip Enhancement"
                    description="Subtle volume and definition for a naturally fuller pout. Beautifully balanced results."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before lip filler treatment"
                    afterAlt="After lip filler treatment"
                  />
                  <TreatmentResult
                    title="Lip Volumization"
                    description="Enhanced fullness and improved lip shape. Proportionate and natural-looking."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before lip volumization"
                    afterAlt="After lip volumization"
                  />
                  <TreatmentResult
                    title="Lip Border Definition"
                    description="Defined cupid's bow and refined lip contours. Elegant enhancement."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before lip border definition"
                    afterAlt="After lip border definition"
                  />
                </div>
              </TabsContent>

              <TabsContent value="cheeks" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Cheek Volumization"
                    description="Restored youthful fullness and enhanced facial contours. Natural lift effect."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before cheek filler treatment"
                    afterAlt="After cheek filler treatment"
                  />
                  <TreatmentResult
                    title="Mid-Face Rejuvenation"
                    description="Comprehensive facial volumization for a refreshed, youthful appearance."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before mid-face treatment"
                    afterAlt="After mid-face treatment"
                  />
                  <TreatmentResult
                    title="Under Eye Fillers"
                    description="Reduced hollowing and dark circles for a more rested appearance."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before under eye treatment"
                    afterAlt="After under eye treatment"
                  />
                </div>
              </TabsContent>

              <TabsContent value="jawline" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Jawline Contouring"
                    description="Enhanced definition and sculpted contours for a striking profile."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before jawline contouring"
                    afterAlt="After jawline contouring"
                  />
                  <TreatmentResult
                    title="Chin Augmentation"
                    description="Improved facial balance and profile with non-surgical enhancement."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before chin augmentation"
                    afterAlt="After chin augmentation"
                  />
                  <TreatmentResult
                    title="Lower Face Lift"
                    description="Defined jawline with enhanced contours for a more youthful appearance."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before lower face lift"
                    afterAlt="After lower face lift"
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

        {/* Treatment Process */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                What to Expect
              </h2>
              <p className="text-xl text-neutral-600">
                Your dermal filler journey at Facecult Dublin — from consultation to results.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl rounded-3xl">
              <CardContent className="p-10">
                <div className="space-y-8">
                  {dermalFillersTreatmentsData.howItWorks.steps.map((step) => (
                    <div key={step.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <p className="text-neutral-700">
                    <strong>Downtime:</strong> Minimal. Most treatments have minimal downtime with possible slight swelling
                    or bruising for 2-3 days. You can return to daily activities immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Everything you need to know about dermal filler treatments at Facecult Dublin.
              </p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-center">
                <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for Natural, Beautiful Enhancement?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Book your dermal filler consultation at Facecult Dublin today and discover
                  the difference expert injectors make.
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