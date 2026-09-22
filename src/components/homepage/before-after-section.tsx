"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    age: 42,
    treatment: "Botox & Dermal Fillers",
    testimonial: "I'm absolutely thrilled with my results! The team made me feel comfortable throughout the entire process. The natural-looking results exceeded my expectations, and I finally feel confident in my own skin again.",
    rating: 5,
    profileImage: "/assets/Hero.png", // Using hero image as placeholder
    timeframe: "3 months post-treatment",
  },
  {
    id: 2,
    name: "Amanda Lopez",
    age: 35,
    treatment: "Laser Skin Resurfacing",
    testimonial: "The improvement in my skin texture is remarkable. I feel so much more confident now. The staff was professional and caring throughout my entire treatment journey. Best decision I've made for my skin!",
    rating: 5,
    profileImage: "/assets/Hero.png", // Using hero image as placeholder
    timeframe: "6 months post-treatment",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    age: 38,
    treatment: "Injectable Treatments",
    testimonial: "Everyone says I look rested and refreshed, but no one can tell I had anything done. Perfect! The subtle enhancement was exactly what I was looking for. The team understood my goals completely.",
    rating: 5,
    profileImage: "/assets/Hero.png", // Using hero image as placeholder
    timeframe: "4 weeks post-treatment",
  },
  {
    id: 4,
    name: "Jennifer Kim",
    age: 29,
    treatment: "Chemical Peel Series",
    testimonial: "The series of peels transformed my skin. The results exceeded my expectations and I couldn't be happier. My skin is clearer, brighter, and more youthful than it's been in years. Highly recommend!",
    rating: 5,
    profileImage: "/assets/Hero.png", // Using hero image as placeholder
    timeframe: "8 weeks post-treatment",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6">
            Hear directly from our satisfied clients about their transformative experiences and the confidence they&apos;ve gained through our treatments.
          </p>
          <p className="text-sm text-neutral-500">
            *All testimonials are from real clients and shared with their consent.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="overflow-hidden bg-white shadow-lg border-0 rounded-2xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Profile Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
                    <Image
                      src={testimonial.profileImage}
                      alt={`${testimonial.name} profile`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <div className="mb-6">
                    <Badge variant="secondary" className="bg-accent-cream text-primary-700 mb-4">
                      {testimonial.treatment}
                    </Badge>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="mb-6">
                    <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </blockquote>

                  {/* Client Info */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg text-neutral-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      Age {testimonial.age} • {testimonial.timeframe}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <BookConsultationButton asChild>
                      <a href="#booking">Book Consultation</a>
                    </BookConsultationButton>
                    <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                      View Results
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl max-w-4xl mx-auto shadow-lg">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved their aesthetic goals with our personalised treatment approach and expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookConsultationButton
                size="lg"
                className="px-8"
                asChild
              >
                <a href="#booking">Book Free Consultation</a>
              </BookConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8"
              >
                Read More Testimonials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}