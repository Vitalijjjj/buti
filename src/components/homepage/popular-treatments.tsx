"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Droplet, RefreshCw, Target, Heart, LucideIcon } from "lucide-react";

// Types
interface TextService {
  id: number;
  type: "text";
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

interface ImageService {
  id: number;
  type: "image";
  title: string;
  image: string;
  href?: string;
}

type Service = TextService | ImageService;

// Component: Text Service Card
function TextServiceCard({ service }: { service: TextService }) {
  const content = (
    <Card className="group overflow-hidden transition-all duration-300 rounded-2xl h-80 bg-accent-cream hover:shadow-lg border-0 cursor-pointer">
      <div className="p-8 lg:p-12 flex flex-col items-center text-center h-full justify-center">
        <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mb-6">
          <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-secondary text-xl lg:text-2xl font-semibold text-primary-800 mb-3">
          {service.title}
        </h3>
        <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </Card>
  );

  if (service.href) {
    return <Link href={service.href}>{content}</Link>;
  }

  return content;
}

// Component: Image Service Card
function ImageServiceCard({ service }: { service: ImageService }) {
  const content = (
    <Card className="group overflow-hidden transition-all duration-300 rounded-2xl h-80 bg-neutral-100 hover:shadow-xl hover:scale-[1.02] border border-neutral-200 cursor-pointer">
      <div className="relative h-full overflow-hidden rounded-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-secondary text-xl lg:text-2xl font-semibold text-white">
            {service.title}
          </h3>
        </div>
      </div>
    </Card>
  );

  if (service.href) {
    return <Link href={service.href}>{content}</Link>;
  }

  return content;
}

const services: Service[] = [
  // Row 1
  {
    id: 1,
    type: "text",
    title: "Injectable Treatments",
    description: "Skin boosters, Dermal fillers, anti-wrinkle for natural-looking results",
    icon: Sparkles,
  },
  {
    id: 2,
    type: "image",
    title: "Laser & IPL",
    image: "/assets/laser_ipl.png",
  },
  {
    id: 3,
    type: "text",
    title: "Chemical Peels",
    description: "Light, Medium & Deep peels for skin renewal and rejuvenation",
    icon: Droplet,
  },
  // Row 2
  {
    id: 4,
    type: "image",
    title: "Facials",
    image: "/assets/facials_1.png",
  },
  {
    id: 5,
    type: "text",
    title: "Collagen Bio Stimulation",
    description: "Advanced collagen bio-stimulation treatments for natural skin rejuvenation",
    icon: Target,
  },
  {
    id: 6,
    type: "image",
    title: "Microneedling",
    image: "/assets/microneedling_1.png",
  },
  // Row 3
  {
    id: 7,
    type: "text",
    title: "Skin Health",
    description: "Hydrafacial, Face workouts, Detox Facials, LED therapy for glowing skin",
    icon: Heart,
  },
  {
    id: 8,
    type: "image",
    title: "RF Microneedling",
    image: "/assets/rf_microneedling.png",
  },
  {
    id: 9,
    type: "text",
    title: "Anti-Ageing",
    description: "Comprehensive anti-aging solutions for youthful, radiant skin",
    icon: RefreshCw,
  },
];

export function PopularTreatments() {
  return (
    <section id="treatments" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Most Popular Skin Treatment Options
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            From non-invasive rejuvenation to advanced aesthetic procedures, explore our comprehensive range of treatments designed to help you look and feel your best.
          </p>
        </div>

        {/* Services Grid - 3x3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            service.type === "text" ? (
              <TextServiceCard key={service.id} service={service} />
            ) : (
              <ImageServiceCard key={service.id} service={service} />
            )
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-accent-cream rounded-2xl">
          <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
            Not Sure Which Treatment is Right for You?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our medical professionals to create a personalised treatment plan tailored to your unique needs and goals.
          </p>
          <Button
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8"
            asChild
          >
            <a
              href="https://partner.pabau.com/online-bookings/facecult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}