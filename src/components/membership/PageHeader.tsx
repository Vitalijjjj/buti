"use client";

import Image from "next/image";
import { MembershipCTA } from "./MembershipCTA";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA: {
    href: string;
    label: string;
  };
  secondaryCTA: {
    href: string;
    label: string;
  };
  imageSrc: string;
  imageAlt: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
}: PageHeaderProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 min-h-screen w-full">
        {/* Left Content Section */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-cream to-neutral-100 px-4 sm:px-6 lg:px-12 py-20">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-transparent" />

          <div className="relative z-10 max-w-2xl">
            {/* Main Headline */}
            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {title}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
              {subtitle}
            </p>

            {/* Optional Description */}
            {description && (
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <MembershipCTA
                href={primaryCTA.href}
                label={primaryCTA.label}
                variant="primary"
                data-analytics="join_now_hero"
              />
              <MembershipCTA
                href={secondaryCTA.href}
                label={secondaryCTA.label}
                variant="outline"
                data-analytics="book_consultation_hero"
              />
            </div>

            {/* Microcopy */}
            <p className="text-sm text-neutral-600 italic">
              Science-based, personalised, guided transformation.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative h-full min-h-[400px] lg:min-h-screen">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
