"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Users, Shield, Star, Clock, Award } from "lucide-react";

export function LaserTreatmentTypes() {
  return (
    <>
      {/* Overlapping Introduction Section */}
      <section className="relative -mt-24 pb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overlapping Card */}
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-12 lg:p-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                  Reduce Unwanted Hair Growth <span className="text-primary-600">Permanently</span>
                </h2>
                <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed mb-6">
                  Say goodbye to shaving, waxing, threading, plucking, and tweezing — as well as the ingrown hairs and shaving rash that often follows!
                </p>
                <p className="text-lg sm:text-xl text-neutral-600 mb-12">
                  Enjoy silky smooth skin thanks to our painless and permanent laser hair removal using the latest FDA-approved technology.
                </p>

                {/* Key Benefits Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-neutral-900 mb-2">Painless Treatment</h3>
                      <p className="text-sm text-neutral-600">Advanced cooling technology</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-neutral-900 mb-2">Safe for All Skin</h3>
                      <p className="text-sm text-neutral-600">Suitable for all skin tones</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-neutral-900 mb-2">Quick Sessions</h3>
                      <p className="text-sm text-neutral-600">Even for larger areas</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-50 border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-neutral-900 mb-2">Permanent Results</h3>
                      <p className="text-sm text-neutral-600">Long-lasting smoothness</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Treatment Areas
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our specialized laser hair reduction techniques provide a fast, effective, and permanent solution for unwanted hair in any area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Facial Hair Removal */}
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                      Facial Hair Removal
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Achieve soft, smooth, and hair-free skin with our precise and careful laser treatments. Whether you&apos;re bothered by subtle peach fuzz or seeking a full transformation, our painless techniques are minimally invasive and very effective.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Lips', 'Chin', 'Full Face', 'Sideburns', 'Eyebrows', 'Forehead'].map((area) => (
                        <div key={area} className="flex items-center">
                          <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upper Body Hair Removal */}
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                      Upper Body Hair Removal
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Enjoy the freedom of having no unwanted hair on your upper body. Our medically trained specialists can help you discover your summer-ready body with techniques for both men and women.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Arms & Underarms', 'Hands', 'Stomach', 'Lower Back', 'Full Back', 'Chest & Shoulders'].map((area) => (
                        <div key={area} className="flex items-center">
                          <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lower Body Hair Removal */}
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                      Lower Body Hair Removal
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Feel confident all year round with our long-lasting hair removal solutions. As one of our most popular services, our professionals carry out leg treatments with utmost precision and discretion.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Half Legs', 'Full Legs', 'Feet & Toes', 'Thighs', 'Buttocks', 'Knees'].map((area) => (
                        <div key={area} className="flex items-center">
                          <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bikini Line Hair Removal */}
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
                      Bikini & Intimate Areas
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Experience ultimate comfort with our bikini area laser treatments. From a classic bikini line to a Brazilian or Hollywood style, we offer a range of options to suit your preferences in complete privacy.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Bikini Line', 'Extended Bikini', 'Brazilian', 'Hollywood', 'Perianal', 'Inner Thighs'].map((area) => (
                        <div key={area} className="flex items-center">
                          <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Facecult Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-primary text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Facecult?
            </h2>
            <p className="text-xl text-neutral-600">
              Experience the difference with our expert care and advanced technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-md rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                  Solutions for All Skin Tones
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our advanced lasers are calibrated to work safely and effectively on all skin types, from the fairest to the darkest tones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                  Treatment Packages
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Save up to 30% with our package deals. Get 25% off when you book 6 sessions, and 30% off when you book 10 sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                  Leading Expertise
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our certified laser specialists have performed thousands of successful treatments with exceptional results and client satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-3xl shadow-xl p-12">
            <h3 className="font-secondary text-3xl font-semibold text-neutral-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Book your free consultation today to evaluate your suitability for laser hair removal treatment and create your personalised treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-6 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-10 py-6 text-xl font-medium rounded-full transition-all"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}