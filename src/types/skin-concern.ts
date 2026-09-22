/**
 * Skin Concern Type Definitions
 *
 * Defines data structure for skin concern pages
 * with recommended treatments, before/after, and reviews
 */

export interface RecommendedTreatment {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string; // Links to treatment detail page with concern tab pre-selected
}

export interface SkinConcern {
  id: string;
  name: string;
  title: string; // SEO-friendly title
  description: string; // What is this concern
  causes: string; // What causes it
  howWeTreat: string; // Our approach
  heroImage: string;
  quickFacts: {
    commonAge: string;
    treatmentTime: string;
    resultsTimeline: string;
    maintenanceFrequency: string;
  };
  recommendedTreatments: RecommendedTreatment[]; // 3-4 top treatments
  beforeAfterImages: {
    before: string;
    after: string;
    description?: string;
  }[];
  reviews: {
    id: string;
    name: string;
    rating: number;
    date: string;
    treatment: string;
    review: string;
    image?: string;
  }[];
}
