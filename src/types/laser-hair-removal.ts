/**
 * Laser Hair Removal Types
 *
 * Data structures for laser hair removal treatment pages
 */

export interface LaserTreatmentArea {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  areasIncluded?: string[]; // Specific body areas included
  benefits: string[];
  duration: string;
  sessionsRequired: string;
  pricing: {
    singleSession: string;
    package6: string;
    package8?: string;
  };
  image: string;
}

export interface LaserHairRemovalData {
  id: string;
  gender: "women" | "men";
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  treatmentAreas: LaserTreatmentArea[];
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
