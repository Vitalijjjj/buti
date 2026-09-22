import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoogleReviewCard } from "./google-review-card";
import { Star, ExternalLink } from "lucide-react";
import { googleReviewsData } from "@/data/google-reviews";

interface GoogleReviewsSectionProps {
  maxReviews?: number; // Limit number of reviews displayed (default: 6)
  showHeader?: boolean; // Show section header (default: true)
  showCTA?: boolean; // Show "View all on Google" button (default: true)
  className?: string;
}

export function GoogleReviewsSection({
  maxReviews = 6,
  showHeader = true,
  showCTA = true,
  className = "",
}: GoogleReviewsSectionProps) {
  const { businessName, totalReviews, averageRating, googleProfileUrl, reviews } =
    googleReviewsData;

  // Limit reviews to display
  const displayedReviews = reviews.slice(0, maxReviews);

  return (
    <section className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            {showHeader && (
              <div className="text-center mb-12">
                {/* Google Rating Summary */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-semibold text-neutral-900">Google Reviews</span>
                  </div>
                </div>

                {/* Rating Display */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-neutral-900">{averageRating}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(averageRating)
                            ? "text-yellow-400 fill-current"
                            : averageRating > i && averageRating < i + 1
                            ? "text-yellow-400 fill-current opacity-50"
                            : "text-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 mt-6">
                  What Our Clients Say
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Read authentic reviews from our satisfied clients on Google and discover why {businessName} is Dublin&apos;s trusted choice for aesthetic treatments.
                </p>
              </div>
            )}

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedReviews.map((review, index) => (
                <GoogleReviewCard key={index} {...review} />
              ))}
            </div>

            {/* CTA Button */}
            {showCTA && (
              <div className="text-center pt-8 border-t border-neutral-100">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8"
                >
                  <a
                    href={googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>View All Reviews on Google</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
