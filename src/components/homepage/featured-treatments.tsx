"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredTreatments = [
  {
    id: 1,
    title: "Skin Rejuvenation",
    description: "Skin boosters, Profhilo, Polynucleotides, exosomes, and collagen bio-stimulation for radiant, healthy glowing skin.",
    image: "/assets/skin_rejuvenation.png",
    duration: "30-45 min",
    price: "From €180",
    popular: true,
    learnMoreLink: "/treatments/injectables/skin-boosters",
  },
  {
    id: 2,
    title: "Dermal Fillers",
    description: "Bio-fillers and 3D face modelling for volume restoration and facial lifting with natural-looking results.",
    image: "/assets/dermal_fillers.jpg",
    duration: "30-45 min",
    price: "From €190",
    popular: false,
    learnMoreLink: "/treatments/dermal-fillers/bio-fillers",
  },
  {
    id: 3,
    title: "Anti-Ageing Treatments",
    description: "RF microneedling, HIFU face lift, and autologous threads for non-surgical facial rejuvenation and youthful results.",
    image: "/assets/anti_ageing_main.png",
    duration: "45-60 min",
    price: "From €150",
    popular: true,
    learnMoreLink: "/treatments/rf-microneedling/doubletite-exosomes",
  },
];

export function FeaturedTreatments() {
  return (
    <section className="py-16 lg:py-24 bg-accent-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-secondary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Our Most Popular Treatments
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our signature treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment) => (
            <Card key={treatment.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={treatment.id === 1}
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {treatment.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <span className="bg-white/90 text-neutral-800 px-2 py-1 rounded text-sm font-medium">
                    {treatment.duration}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-xl text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {treatment.title}
                  </h3>
                  <span className="text-lg font-semibold text-primary-600">
                    {treatment.price}
                  </span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {treatment.description}
                </p>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white"
                    asChild
                  >
                    <a
                      href="https://partner.pabau.com/online-bookings/facecult"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                  {treatment.learnMoreLink ? (
                    <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50" asChild>
                      <Link href={treatment.learnMoreLink}>Learn More</Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                      Learn More
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Treatments CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8"
            asChild
          >
            <a
              href="https://partner.pabau.com/online-bookings/facecult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}