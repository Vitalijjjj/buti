"use client";

import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const beforeAfterResults = {
  injectables: [
    {
      id: 1,
      treatment: "Skin Boosters & Dermal Fillers",
      beforeImage: "/assets/skin_treatment_before_1.png",
      afterImage: "/assets/skin_treatment_after_1.png",
      description: "Enhanced facial harmony and rejuvenation",
      timeframe: "1 month post-treatment",
    },
    {
      id: 2,
      treatment: "Skin Rejuvenation",
      beforeImage: "/assets/face_lift_4_before.png",
      afterImage: "/assets/face_lift_4_after.png",
      description: "Deep hydration and improved skin quality",
      timeframe: "1 month post-treatment",
    },
    {
      id: 3,
      treatment: "Injectable Treatments",
      beforeImage: "/assets/skin_booster_2_before.png",
      afterImage: "/assets/skin_booster_2_after.png",
      description: "Enhanced facial harmony and rejuvenation",
      timeframe: "1 month post-treatment",
    },
  ],
  dermalFillers: [
    {
      id: 4,
      treatment: "Chin bio-filler",
      beforeImage: "/assets/dermal_fillers_2_before.png",
      afterImage: "/assets/dermal_fillers_2_after.png",
      description: "Volume and definition",
      timeframe: "Immediately after treatment",
    },
    {
      id: 5,
      treatment: "Face lift",
      beforeImage: "/assets/face_lift_2_before.png",
      afterImage: "/assets/face_lift_2_after.png",
      description: "Combined protocol for face lift and volume restoration",
      timeframe: "1 month after treatment",
    },
    {
      id: 6,
      treatment: "Face lift and skin rejuvenation",
      beforeImage: "/assets/skin_rejuvenation_before.png",
      afterImage: "/assets/skin_rejuvenation_after.png",
      description: "Skin health, restored volume",
      timeframe: "8 weeks post treatment",
    },
  ],
  skinHealth: [
    {
      id: 7,
      treatment: "Chemical Peel Series",
      beforeImage: "/assets/anti_pigmentation _2_before.png",
      afterImage: "/assets/anti_pigmentation_2_after.png",
      description: "Dramatic improvement in skin tone and clarity",
      timeframe: "8 weeks post-treatment",
    },
    {
      id: 8,
      treatment: "Post-Acne treatment",
      beforeImage: "/assets/post_acne_treatment_before.png",
      afterImage: "/assets/post_acne_treatment_after.png",
      description: "Scarring, pigmentation and skin texture improvement",
      timeframe: "8 weeks post treatment",
    },
    {
      id: 9,
      treatment: "Pigmentation treatment",
      beforeImage: "/assets/pigmentation_treatment_before.png",
      afterImage: "/assets/pigmentation_treatment_after.png",
      description: "Sun spot removal",
      timeframe: "Straight after the treatment",
    },
  ],
};

export function ResultsGallery() {
  return (
    <section id="results" className="pt-8 lg:pt-12 pb-16 lg:pb-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Our Treatment Results
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6">
            Browse our collection of real client before and after photos showcasing the transformative power of our medical aesthetic treatments.
          </p>
        </div>

        {/* Tabs with Carousels */}
        <Tabs defaultValue="injectables" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger
              value="injectables"
              className="data-[state=active]:bg-accent-rose data-[state=active]:text-primary-600"
            >
              Injectables
            </TabsTrigger>
            <TabsTrigger
              value="dermalFillers"
              className="data-[state=active]:bg-accent-rose data-[state=active]:text-primary-600"
            >
              Dermal Fillers
            </TabsTrigger>
            <TabsTrigger
              value="skinHealth"
              className="data-[state=active]:bg-accent-rose data-[state=active]:text-primary-600"
            >
              Skin Health
            </TabsTrigger>
          </TabsList>

          <TabsContent value="injectables" className="space-y-8">
            {/* Grid Layout - All Devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterResults.injectables.map((result) => (
                <div key={result.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  {/* Before/After Slider */}
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage={result.beforeImage}
                      afterImage={result.afterImage}
                      beforeAlt={`${result.treatment} before`}
                      afterAlt={`${result.treatment} after`}
                      aspectRatio="4/3"
                    />
                  </div>
                  {/* Content */}
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      {result.treatment}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      {result.description}
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      {result.timeframe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dermalFillers" className="space-y-8">
            {/* Grid Layout - All Devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterResults.dermalFillers.map((result) => (
                <div key={result.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  {/* Before/After Slider */}
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage={result.beforeImage}
                      afterImage={result.afterImage}
                      beforeAlt={`${result.treatment} before`}
                      afterAlt={`${result.treatment} after`}
                      aspectRatio="4/3"
                    />
                  </div>
                  {/* Content */}
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      {result.treatment}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      {result.description}
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      {result.timeframe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skinHealth" className="space-y-8">
            {/* Grid Layout - All Devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterResults.skinHealth.map((result) => (
                <div key={result.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  {/* Before/After Slider */}
                  <div className="p-4">
                    <BeforeAfterSlider
                      beforeImage={result.beforeImage}
                      afterImage={result.afterImage}
                      beforeAlt={`${result.treatment} before`}
                      afterAlt={`${result.treatment} after`}
                      aspectRatio="4/3"
                    />
                  </div>
                  {/* Content */}
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      {result.treatment}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      {result.description}
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      {result.timeframe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
              See More Amazing Results
            </h3>
            <p className="text-neutral-600 mb-6">
              Explore our complete gallery of before and after photos, treatment videos, and client testimonials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8"
                asChild
              >
                <a href="/results">View Full Gallery</a>
              </Button>
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
                  Book Your Treatment
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 max-w-3xl mx-auto">
            All photos are shared with written client consent. Individual results may vary. These images represent typical outcomes but do not guarantee specific results for any individual. Consult with our medical professionals to understand what results you might expect.
          </p>
        </div>
      </div>
    </section>
  );
}