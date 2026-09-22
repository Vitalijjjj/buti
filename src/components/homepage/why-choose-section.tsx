/**
 * Why Choose Section - Homepage
 *
 * Client-focused section emphasizing personalised approach,
 * scientific methodology, and world-class technology.
 * SEO-optimized with focus on transformation and results.
 */

"use client";

import { Button } from "@/components/ui/button";
import { Microscope, TrendingUp, Shield } from "lucide-react";

const approachPillars = [
  {
    icon: Microscope,
    title: "Scientific, Personalised Approach",
    description:
      "Every skin journey begins with data-driven analysis and a dedicated Skin Coach. We design each plan specifically for your unique skin type, needs, and goals — combining science and expertise for truly personalised care.",
  },
  {
    icon: TrendingUp,
    title: "World-Class Technologies",
    description:
      "We use the latest global innovations in aesthetic medicine — from advanced 3D skin scanning to injectables, facials, and cutting-edge device treatments — all seamlessly integrated into your personalised plan.",
  },
  {
    icon: Shield,
    title: "Visible, Lasting Results",
    description:
      "Our approach isn't about temporary fixes. With consistent guidance, advanced technology, and personalised care, we deliver measurable, long-term improvements you can see and feel.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-primary text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            It&apos;s All About You
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed mb-4">
            Transform your skin with advanced medical aesthetics treatments
            delivered by certified professionals in a luxury clinical setting.
          </p>
        </div>

        {/* Why Choose Us - Hero Statement */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-3xl p-8 lg:p-12 mb-16 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-6">
              Why Choose Facecult?
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              With years of experience and thousands of successful
              transformations, we combine the latest global innovations in
              anti-ageing, skin rejuvenation, and cosmetic technologies with a
              personalised approach, giving each client remarkable, safe, and
              natural results.
            </p>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Our Approach
            </h3>
            <p className="text-xl text-primary-600 font-semibold mb-6">
              Personalised, Safe, and Effective Aesthetic Solutions
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We create customized anti-ageing and skincare programs based on
                your unique skin type, concerns, and lifestyle. Every treatment
                is scientifically proven, minimally invasive, and monitored for
                optimal results, from acne treatment and scar reduction to skin
                lifting and pigmentation correction.
              </p>
              <p className="text-lg text-neutral-900 font-medium italic">
                No risky procedures. No compromises. Just precision, elegance,
                and natural beauty that endures.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {approachPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-xl text-neutral-900 mb-4">
                    {pillar.title}
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
            <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-sm text-neutral-600 font-medium">
              Successful Transformations
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              5<span className="text-[#FBBC04]">★</span>
            </div>
            <div className="text-sm text-neutral-600 font-medium">
              Google Reviews
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-sm text-neutral-600 font-medium">
              Years of Excellence
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-primary-100 hover:border-primary-300 transition-colors">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-sm text-neutral-600 font-medium">
              Advanced Treatments
            </div>
          </div>
        </div>

        {/* Bottom Statement & CTA */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-2xl text-neutral-900 font-semibold mb-4">
              Facecult is where science, technology, and personalised care meet
              to transform your skin.
            </p>
            <p className="text-lg text-neutral-600">
              Experience the difference of truly personalised aesthetic care
              backed by cutting-edge technology and genuine expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Book Your Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-10 py-6 text-lg rounded-full"
            >
              Explore Our Treatments
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
