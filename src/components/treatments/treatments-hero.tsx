"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Heart, Shield, Star } from "lucide-react";

export function TreatmentsHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 via-accent-cream to-primary-200 pt-24 sm:pt-32 pb-16">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            Our Expert Skin Care Services
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of advanced medical aesthetic treatments, each designed to enhance your natural beauty and boost your confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 text-xl font-medium rounded-full"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-10 py-4 text-xl font-medium rounded-full"
            >
              About Facecult
            </Button>
          </div>

          {/* About Facecult Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-600 leading-relaxed mb-8">
              At Facecult, we believe that everyone deserves to feel confident in their own skin. Our team of experienced practitioners combines years of expertise with cutting-edge technology to deliver safe, effective, and natural-looking results. We&apos;re committed to providing personalised care in a comfortable, luxury environment where your goals become our mission.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Certified</h3>
                <p className="text-sm text-neutral-600">Medical Professionals</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Safe</h3>
                <p className="text-sm text-neutral-600">FDA-Approved Treatments</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">5000+</h3>
                <p className="text-sm text-neutral-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">5-Star</h3>
                <p className="text-sm text-neutral-600">Client Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Image Section */}
      <section className="relative z-20 -mt-16 sm:-mt-24 lg:-mt-32 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl overflow-hidden p-0">
            {/* Featured Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/assets/services_hero.png"
                alt="Facecult Medical Aesthetics Clinic"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Image Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-2xl">
                  <h3 className="font-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                    Experience Luxury Medical Aesthetics
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                    Step into our state-of-the-art facility where advanced technology meets personalised care, creating the perfect environment for your transformation journey.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-800 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-full"
                    >
                      View Our Treatments
                    </Button>
                    <Button
                      className="bg-white text-neutral-800 hover:bg-neutral-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-full"
                    >
                      Take Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-primary text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Expert Treatment for Healthy, Radiant Skin
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of treatments combines cutting-edge technology with proven medical techniques to deliver exceptional results.
            </p>
          </div>

          {/* Facecult "Glow Me" Facials Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Facecult &quot;Glow Me&quot; Facials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/facials"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Laser Skin Treatment Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Laser Skin Treatment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Laser {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/laser"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Facelift Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Facelift
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Facelift {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/facelift"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skin Aesthetics Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Skin Aesthetics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/skin-aesthetics"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skin Boosters Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Skin Boosters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Booster {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/skin-boosters"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Anti-Ageing Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Anti-Ageing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/anti-aging"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RF Microneedling Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              RF Microneedling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/rf-microneedling"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hair Loss Section */}
          <div className="mb-20">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Hair Loss
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/hair-loss"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Acne Treatment Section */}
          <div>
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 text-center mb-12">
              Acne Treatment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                      Treatment {index + 1}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Professional treatment description will go here.
                    </p>
                    {index === 0 && (
                      <Link
                        href="/treatments/acne"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary-600 text-white hover:bg-accent-rose hover:text-primary-600 transition-all duration-200 font-medium text-sm"
                      >
                        Learn More
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}