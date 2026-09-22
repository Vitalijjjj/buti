/**
 * Treatment Page Type Definitions
 *
 * Defines the data structure for detailed treatment pages
 * with tabbed treatment areas, quick facts, and expert testimonials.
 */

export interface TreatmentArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
  detailedDescription?: string;
  benefits?: string[];
  pricing?: string;
  duration?: string;
  image?: string;
}

export interface QuickFacts {
  treatmentLength: string;
  resultsSeen: string;
  durationOfResults: string;
  sessionFrequency: string;
}

export interface HowItWorksSection {
  heading: string;
  description: string;
  image: string;
}

export interface ResultsSection {
  heading: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface ExpertQuote {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export interface CTASection {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  categoryPath: string; // e.g., "Injectables > Cosmetic Injections"
  tagline: string;
  description: string;
  heroImage: string;
  quickFacts: QuickFacts;
  howItWorks: HowItWorksSection;
  results: ResultsSection;
  treatmentAreas: TreatmentArea[];
  expertQuote: ExpertQuote;
  cta: CTASection;
}
