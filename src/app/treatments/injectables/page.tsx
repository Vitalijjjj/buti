"use client";

import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { CTA } from "@/components/CTA";
import { FAQ, FAQItem } from "@/components/ui/faq";
import { MembershipTeaser } from "@/components/MembershipTeaser";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Users, Sparkles, Star, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TreatmentResult } from "@/components/results/treatment-result";
import { injectablesTreatmentsData } from "@/data/injectables-treatments";

const faqItems: FAQItem[] = injectablesTreatmentsData.faqs.map(faq => ({
  id: faq.id,
  question: faq.question,
  answer: faq.answer,
}));

export default function InjectablesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Injectable Treatments in Dublin",
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
      name: "Injectable Treatment Packages",
      itemListElement: injectablesTreatmentsData.treatments.map((treatment) => ({
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
        name: "Injectable Treatments",
        item: "https://facecult.ie/treatments/injectables",
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
                  Injectable Treatments in Dublin<br />
                  <span className="text-primary-600">Radiant, Rejuvenated Skin</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
                  Medical-Grade Skin Boosters & Bio-Rejuvenation
                </p>

                {/* Descriptive Text */}
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Advanced injectable treatments for skin hydration, rejuvenation, and regeneration
                  in the heart of Dublin. Medical-grade solutions, certified specialists,
                  and results you can trust.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <CTA
                    href="/book"
                    label="Book Injectable Consultation"
                    variant="default"
                    data-analytics="cta-book-injectable-hero"
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
                    <p className="text-sm text-neutral-600">Premium treatments</p>
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
                    <h3 className="font-semibold text-neutral-900 mb-1">Quick Sessions</h3>
                    <p className="text-sm text-neutral-600">30-45 minute treatments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-screen group">
              <Image
                src="/assets/Hero.png"
                alt="Advanced Injectable Treatments at Facecult Dublin"
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
                    Advanced injectable treatments delivered by certified medical specialists in Dublin&apos;s premier aesthetic clinic.
                  </p>

                  {/* Key Benefits Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Medical-Grade</h3>
                        <p className="text-sm text-neutral-600">Premium injectable treatments meeting the highest standards</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Expert Specialists</h3>
                        <p className="text-sm text-neutral-600">Experienced practitioners with extensive expertise</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Natural Results</h3>
                        <p className="text-sm text-neutral-600">Treatments that enhance your natural beauty</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">Personalised Care</h3>
                        <p className="text-sm text-neutral-600">Tailored treatment plans for your unique needs</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Injectable Treatments Overview */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Our Injectable Treatments
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Explore our range of advanced injectable treatments designed to rejuvenate, hydrate, and restore your skin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {injectablesTreatmentsData.treatments.map((treatment) => (
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
                        href={`/treatments/injectables/${treatment.id}`}
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
                See the remarkable transformations our clients have achieved with injectable treatments at Facecult Dublin.
              </p>
            </div>

            <Tabs defaultValue="skin-boosters" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-12 bg-neutral-100">
                <TabsTrigger value="skin-boosters" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Skin Boosters
                </TabsTrigger>
                <TabsTrigger value="profhilo" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Profhilo
                </TabsTrigger>
                <TabsTrigger value="polynucleotides" className="text-sm font-semibold data-[state=active]:bg-primary-600 data-[state=active]:text-white">
                  Polynucleotides
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skin-boosters" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Face Hydration"
                    description="Deep skin hydration for a radiant, youthful glow. Natural-looking results."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before skin booster treatment"
                    afterAlt="After skin booster treatment"
                  />
                  <TreatmentResult
                    title="Neck & Décolletage"
                    description="Improved texture and firmness in delicate areas. Visible rejuvenation."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before skin booster neck treatment"
                    afterAlt="After skin booster neck treatment"
                  />
                  <TreatmentResult
                    title="Hands"
                    description="Restored volume and smoothness to aging hands. Youthful appearance."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before skin booster hands"
                    afterAlt="After skin booster hands"
                  />
                </div>
              </TabsContent>

              <TabsContent value="profhilo" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Face Bio-Remodeling"
                    description="Natural lifting and skin laxity improvement. Visible firming effect."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before Profhilo treatment"
                    afterAlt="After Profhilo treatment"
                  />
                  <TreatmentResult
                    title="Jawline Definition"
                    description="Enhanced contour and definition with bio-remodeling technology."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before Profhilo jawline"
                    afterAlt="After Profhilo jawline"
                  />
                  <TreatmentResult
                    title="Neck Lift"
                    description="Non-surgical neck tightening and smoothing. Dramatic improvement."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before Profhilo neck"
                    afterAlt="After Profhilo neck"
                  />
                </div>
              </TabsContent>

              <TabsContent value="polynucleotides" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TreatmentResult
                    title="Skin Regeneration"
                    description="Cellular-level repair and rejuvenation. Long-term skin improvement."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before polynucleotide treatment"
                    afterAlt="After polynucleotide treatment"
                  />
                  <TreatmentResult
                    title="Scar Improvement"
                    description="Reduced appearance of acne scars and skin damage. Smoother texture."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before scar treatment"
                    afterAlt="After scar treatment"
                  />
                  <TreatmentResult
                    title="Skin Quality"
                    description="Overall improvement in skin elasticity and tone. Youthful radiance."
                    beforeImage="/assets/Hero.png"
                    afterImage="/assets/Hero.png"
                    beforeAlt="Before skin quality treatment"
                    afterAlt="After skin quality treatment"
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
                Your injectable treatment journey at Facecult Dublin — from consultation to results.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl rounded-3xl">
              <CardContent className="p-10">
                <div className="space-y-8">
                  {injectablesTreatmentsData.howItWorks.steps.map((step) => (
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
                    <strong>Downtime:</strong> Minimal. Most treatments have minimal downtime with possible slight redness
                    or swelling for 24-48 hours. You can return to daily activities immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Packages & Membership */}
        <section className="py-20 bg-primary-50">
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
                          3-Session Package
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 15% when you book 3 sessions. Perfect for initial
                          treatment courses and optimal results.
                        </p>
                      </div>
                      <div className="p-6 bg-neutral-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary-600" />
                          6-Session Package
                        </h4>
                        <p className="text-neutral-600">
                          Save up to 20% with our 6-session bundle. Ideal for maintenance
                          and long-term skin health programs.
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

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Everything you need to know about injectable treatments at Facecult Dublin.
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
                  Ready for Radiant, Rejuvenated Skin?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Book your injectable consultation at Facecult Dublin today and discover
                  the difference medical-grade treatments make.
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