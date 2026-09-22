import { FloatingNav } from "@/components/navigation/floating-nav";
import { ResultsHero } from "@/components/results/results-hero";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/homepage/footer";
import { GoogleReviewsSection } from "@/components/reviews/google-reviews-section";

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <ResultsHero />

      {/* Injectables Section */}
      <section className="relative z-20 -mt-32 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Injectables
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  See the remarkable transformations achieved with our injectable treatments including skin boosters and dermal fillers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/skin_treatment_before_1.png"
                      afterImage="/assets/skin_treatment_after_1.png"
                      beforeAlt="Skin Boosters & Dermal Fillers before"
                      afterAlt="Skin Boosters & Dermal Fillers after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Skin Boosters & Dermal Fillers
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Enhanced facial harmony and rejuvenation
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      1 month post-treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/face_lift_4_before.png"
                      afterImage="/assets/face_lift_4_after.png"
                      beforeAlt="Skin Boosters before"
                      afterAlt="Skin Boosters after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Skin Boosters
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Deep hydration and improved skin quality
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      2 weeks post-treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/skin_booster_2_before.png"
                      afterImage="/assets/skin_booster_2_after.png"
                      beforeAlt="Injectable Treatments before"
                      afterAlt="Injectable Treatments after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Injectable Treatments
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Enhanced facial harmony and rejuvenation
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      1 month post-treatment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dermal Fillers Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Dermal Fillers
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Natural volume restoration and facial contouring with premium dermal filler treatments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/dermal_fillers_2_before.png"
                      afterImage="/assets/dermal_fillers_2_after.png"
                      beforeAlt="Lip Enhancement before"
                      afterAlt="Lip Enhancement after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Chin bio-filler
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Volume and definition
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      Immediately after treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/face_lift_2_before.png"
                      afterImage="/assets/face_lift_2_after.png"
                      beforeAlt="Cheek Augmentation before"
                      afterAlt="Cheek Augmentation after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Face lift
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Combined protocol for face lift and volume restoration
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      1 month after treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/skin_rejuvenation_before.png"
                      afterImage="/assets/skin_rejuvenation_after.png"
                      beforeAlt="Facial Contouring before"
                      afterAlt="Facial Contouring after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Face lift and skin rejuvenation
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Skin health, restored volume
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      8 weeks post treatment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skin Health Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Skin Health
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Advanced skin treatments for dramatic improvements in tone, texture, and overall skin health.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/anti_pigmentation _2_before.png"
                      afterImage="/assets/anti_pigmentation_2_after.png"
                      beforeAlt="Chemical Peel Series before"
                      afterAlt="Chemical Peel Series after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Chemical Peel Series
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Dramatic improvement in skin tone and clarity
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      8 weeks post-treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/post_acne_treatment_before.png"
                      afterImage="/assets/post_acne_treatment_after.png"
                      beforeAlt="HydraFacial Series before"
                      afterAlt="HydraFacial Series after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Post-Acne treatment
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Scarring, pigmentation and skin texture improvement
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      8 weeks post treatment
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage="/assets/pigmentation_treatment_before.png"
                      afterImage="/assets/pigmentation_treatment_after.png"
                      beforeAlt="Facials Treatment before"
                      afterAlt="Facials Treatment after"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      Pigmentation treatment
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Sun spot removal
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      Straight after the treatment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviewsSection className="bg-white" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your goals and see how we can help you achieve the results you desire.
          </p>
          <BookConsultationButton size="lg" showIcon className="px-8" asChild>
            <a
              href="https://partner.pabau.com/online-bookings/facecult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Consultation
            </a>
          </BookConsultationButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}