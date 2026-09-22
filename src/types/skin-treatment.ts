/**
 * Skin Treatment Types
 *
 * Data structures for skin treatment overview and individual treatment pages
 */

export interface SkinTreatmentOverview {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  benefits?: string[];
  idealFor?: string[];
  pricing?: string;
  duration?: string;
}

export interface SkinTreatmentDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  quickFacts: {
    duration: string;
    downtime: string;
    resultsTimeline: string;
    treatmentFrequency: string;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  benefits: string[];
  idealFor: string[];
  beforeAfterImages?: Array<{
    before: string;
    after: string;
    description?: string;
  }>;
  expertQuote?: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  };
  faqs?: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}
