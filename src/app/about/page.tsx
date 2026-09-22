import { FloatingNav } from "@/components/navigation/floating-nav";
import { AboutHero } from "@/components/about/about-hero";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/homepage/footer";
import { Shield, Award, Heart, Users, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <AboutHero />

      {/* Our Story Section */}
      <section className="relative z-20 -mt-32 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Our Story
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  A journey of excellence in medical aesthetics
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/Hero.png"
                    alt="Our Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Founded over two decades ago, FaceCult Medical Aesthetics began with a simple mission: to help people feel confident and beautiful in their own skin. What started as a small practice has grown into a leading medical aesthetics center, trusted by thousands of satisfied clients.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Our team of board-certified physicians and licensed practitioners combines medical expertise with artistic vision to deliver natural-looking results. We stay at the forefront of aesthetic medicine through continuous education and investment in the latest FDA-approved technologies.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Every client who walks through our doors receives personalised care tailored to their unique goals and concerns. We believe that the best results come from listening to our clients and creating customized treatment plans that honor their individual beauty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 lg:py-24 bg-accent-warmBeige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Safety First
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We use only FDA-approved treatments and follow the highest medical standards to ensure your safety and wellbeing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-rose/10 border border-accent-rose/20 rounded-2xl mb-6">
                    <Heart className="w-8 h-8 text-accent-rose" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Personalised Care
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Every treatment plan is customized to your unique needs, goals, and aesthetic preferences.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl mb-6">
                    <Award className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Excellence
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We strive for excellence in every treatment, combining medical expertise with artistic vision.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Client-Centered
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Your satisfaction and comfort are our top priorities from consultation to aftercare.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-rose/10 border border-accent-rose/20 rounded-2xl mb-6">
                    <Target className="w-8 h-8 text-accent-rose" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Natural Results
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We believe in enhancing your natural beauty, not changing who you are.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl mb-6">
                    <Lightbulb className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    Innovation
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We continuously invest in the latest technologies and advanced training.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Board-certified professionals dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/Hero.png"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl text-neutral-900 mb-1">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Medical Director
                </p>
                <p className="text-neutral-600 text-sm">
                  Board-certified physician with 15+ years specializing in aesthetic medicine and facial rejuvenation.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/Hero.png"
                  alt="Dr. Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl text-neutral-900 mb-1">
                  Dr. Michael Chen
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Senior Physician
                </p>
                <p className="text-neutral-600 text-sm">
                  Expert in injectables and laser treatments with a passion for natural-looking results.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/Hero.png"
                  alt="Emma Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl text-neutral-900 mb-1">
                  Emma Rodriguez
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Lead Aesthetician
                </p>
                <p className="text-neutral-600 text-sm">
                  Licensed aesthetician specializing in advanced skincare treatments and client education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule your complimentary consultation and discover how our team can help you achieve your aesthetic goals.
          </p>
          <BookConsultationButton size="lg" showIcon className="px-8">
            Book Your Free Consultation
          </BookConsultationButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}