/**
 * Body Treatment Types
 *
 * Data structures for body treatment pages (HIFU, Emsculpt, Pelvic Chair)
 */

export interface BodyTreatmentOverview {
  id: string;
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  benefits: string[];
  idealFor: string[];
  treatmentAreas?: string[]; // Areas that can be treated
  duration: string;
  sessionsRequired: string;
  pricing: {
    perSession?: string;
    perArea?: string;
    package?: string;
  };
  resultsTimeline: string;
  downtime: string;
}

export interface BodyTreatmentsData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  treatments: BodyTreatmentOverview[];
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
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
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}
