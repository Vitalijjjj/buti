/**
 * Google Reviews Data
 *
 * TODO: Replace with actual Google reviews from your Facecult Google Business Profile
 *
 * To update:
 * 1. Go to your Google Business Profile
 * 2. Copy reviews with: name, rating (1-5), date, and review text
 * 3. Update the reviews array below
 * 4. Update the summary stats (totalReviews, averageRating)
 */

export interface GoogleReview {
  name: string;
  rating: number; // 1-5
  date: string; // e.g., "2 weeks ago", "1 month ago"
  review: string;
}

export interface GoogleReviewsData {
  businessName: string;
  totalReviews: number;
  averageRating: number; // e.g., 4.9
  googleProfileUrl: string; // Your Google Business Profile URL
  reviews: GoogleReview[];
}

// Actual Google reviews from Facecult Google Business Profile
export const googleReviewsData: GoogleReviewsData = {
  businessName: "Facecult",
  totalReviews: 8,
  averageRating: 5.0,
  googleProfileUrl: "https://g.page/facecult",

  reviews: [
    {
      name: "Lela Aleksejeva",
      rating: 5,
      date: "Google Review",
      review: "I am absolutely delighted with the service I received and the results I got. Elena was so nice and welcoming. She gives very natural results, guides you through the process and ensures you are comfortable the entire time. I will come back to Elena every time as I had such a wonderful experience!",
    },
    {
      name: "Oksana Pankeviciene",
      rating: 5,
      date: "Google Review",
      review: "Best experience out of all Irish clinics. Elena has magic hands, you just know that all will go well regardless what procedure you are going to have. I always return.",
    },
    {
      name: "Cida Arcanjo",
      rating: 5,
      date: "Google Review",
      review: "Elena is very caring and only recommends what is needed for her clients. After the procedure she follows up on how the patient is doing which is something hard to see happening with other clinics. Highly recommend her for your beauty treatments.",
    },
    {
      name: "Georgiana Crivat",
      rating: 5,
      date: "Google Review",
      review: "Elena is the best, I love coming to her every time! It makes my lips the most beautiful! Without pain and above all, my lips have never been bruised after the procedure, as I have seen with other girls!! I recommend Elena with all my heart! She is the best beautician and the friendliest girl!",
    },
    {
      name: "Ernesta Jonaite",
      rating: 5,
      date: "Google Review",
      review: "I only trust Elena with my face. The best specialist that loves what she does and constantly evolving. The best advice and outcome as promised each visit.",
    },
    {
      name: "Ironia art",
      rating: 5,
      date: "Google Review",
      review: "I can recommend Elena as an enthusiast of her profession. I had terribly pigmented deep scarring on my face and had entrusted my skin to her knowledge and the results are just amazing! no need for hiding under makeup anymore, skin looks a lot more healthier and toned. and scars are barely visible. thank you!",
    },
    {
      name: "Julia Deriapa",
      rating: 5,
      date: "Google Review",
      review: "Elena has been my cosmetologist and esthetician for years now. Very happy with her careful approach and recommendations. She was able to transform my skin. Have only pleasant experience and can recommend for sure.",
    },
    {
      name: "Jane Broydo",
      rating: 5,
      date: "Google Review",
      review: "Facecult has become my go-to destination for all things beauty. Every visit to their establishment leaves me feeling rejuvenated and confident, as their team consistently delivers exceptional results. Not only does my skin look flawlessly radiant, but I also feel noticeably younger thanks to the expertise of the Facecult professionals.",
    },
  ],
};
