import { FloatingNav } from "@/components/navigation/floating-nav";
import { ReviewsHero } from "@/components/reviews/reviews-hero";
import { ReviewCard } from "@/components/reviews/review-card";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/homepage/footer";

const reviews = [
  {
    name: "Sarah Mitchell",
    treatment: "Botox & Dermal Fillers",
    rating: 5,
    date: "2 weeks ago",
    review: "I'm absolutely thrilled with my results! The team made me feel comfortable throughout the entire process. The natural-looking results exceeded my expectations, and I finally feel confident in my own skin again.",
  },
  {
    name: "Amanda Lopez",
    treatment: "Laser Skin Resurfacing",
    rating: 5,
    date: "1 month ago",
    review: "The improvement in my skin texture is remarkable. I feel so much more confident now. The staff was professional and caring throughout my entire treatment journey. Best decision I've made for my skin!",
  },
  {
    name: "Maria Rodriguez",
    treatment: "Injectable Treatments",
    rating: 5,
    date: "3 weeks ago",
    review: "Everyone says I look rested and refreshed, but no one can tell I had anything done. Perfect! The subtle enhancement was exactly what I was looking for. The team understood my goals completely.",
  },
  {
    name: "Jennifer Kim",
    treatment: "Chemical Peel Series",
    rating: 5,
    date: "1 month ago",
    review: "The series of peels transformed my skin. The results exceeded my expectations and I couldn't be happier. My skin is clearer, brighter, and more youthful than it's been in years. Highly recommend!",
  },
  {
    name: "Emily Chen",
    treatment: "Laser Hair Removal",
    rating: 5,
    date: "2 months ago",
    review: "After years of waxing, I finally decided to try laser hair removal. The results have been amazing and the process was much more comfortable than I expected. Worth every penny!",
  },
  {
    name: "Rachel Thompson",
    treatment: "Microneedling with PRP",
    rating: 5,
    date: "3 weeks ago",
    review: "My skin looks incredible! The fine lines around my eyes have diminished significantly, and my overall complexion is so much brighter. The team was knowledgeable and professional.",
  },
  {
    name: "Lisa Anderson",
    treatment: "Lip Fillers",
    rating: 5,
    date: "1 week ago",
    review: "I was nervous about getting lip fillers, but the doctor made me feel at ease and the results are exactly what I wanted - natural and beautiful. So happy with my decision!",
  },
  {
    name: "Jessica Brown",
    treatment: "Facial Rejuvenation",
    rating: 5,
    date: "1 month ago",
    review: "The combination of treatments recommended for me has taken years off my appearance. I look refreshed and natural, not overdone. The consultation was thorough and informative.",
  },
  {
    name: "Michelle Davis",
    treatment: "Skin Tightening",
    rating: 5,
    date: "2 months ago",
    review: "I've noticed a significant improvement in my jawline and neck area. The treatment was comfortable and the results have been gradual but impressive. Very pleased with the outcome!",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <ReviewsHero />

      {/* Reviews Section */}
      <section className="relative z-20 -mt-32 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Client Reviews
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Read what our satisfied clients have to say about their experience with our treatments and care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>

              {/* CTA inside container */}
              <div className="text-center pt-8 border-t border-neutral-100">
                <h3 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Ready to Join Our Happy Clients?
                </h3>
                <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                  Schedule your free consultation today and discover how we can help you achieve your aesthetic goals.
                </p>
                <BookConsultationButton size="lg" showIcon className="px-8">
                  Book Your Free Consultation
                </BookConsultationButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-neutral-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-neutral-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                5<span className="text-[#FBBC04]">★</span>
              </div>
              <div className="text-neutral-600">Google Reviews</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-neutral-600">Treatments Completed</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}