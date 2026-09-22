"use client";

import { Button } from "@/components/ui/button";
import { Award, Users2, Sparkles } from "lucide-react";

const expertiseFeatures = [
  {
    icon: Award,
    title: "Expert Medical Care",
    description: "Board-certified physicians and licensed practitioners with decades of combined experience in medical aesthetics.",
    badge: "15+ Years Experience",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and medical-grade treatments ensure safe, effective, and natural-looking results.",
    badge: "Medical-Grade Equipment",
  },
  {
    icon: Users2,
    title: "Personalised Approach",
    description: "Every treatment plan is customized to your unique needs, goals, and skin type for optimal results.",
    badge: "5★ Google Reviews",
  },
];

const certifications = [
  "Experienced Practitioners",
  "Irish Medical Council Registered",
  "International Association for Physicians in Aesthetic Medicine",
  "Advanced Aesthetic Training & Certification",
  "Medical-Grade Treatment Facility",
  "Highest Safety Standards & Protocols",
];

export function ExpertiseSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="font-primary text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Why Choose Facecult?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Experience the difference with our comprehensive approach to medical aesthetics and skin health. Facecult combines scientific precision with personalised care for exceptional, natural results.
            </p>

            {/* Features Grid */}
            <div className="space-y-6 mb-8">
              {expertiseFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-neutral-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-16">
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {feature.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 rounded-full"
            >
              Learn About Our Approach
            </Button>
          </div>

          {/* Statistics & Certifications Side */}
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-neutral-600">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-sm text-neutral-600">Successful Treatments</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5<span className="text-[#FBBC04]">★</span>
                </div>
                <div className="text-sm text-neutral-600">Google Reviews</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-neutral-600">Treatment Options</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                Certifications & Memberships
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-neutral-600">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Badge */}
            <div className="bg-primary-600 text-white p-6 rounded-xl text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2">Safety First Commitment</h3>
              <p className="text-sm text-primary-100">
                Medical-grade facility with highest safety standards and protocols
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}