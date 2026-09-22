/**
 * Navigation Data Types
 *
 * This file defines the TypeScript interfaces for the mega menu navigation system.
 * It provides type safety and makes it easy to update menu content.
 */

export interface TreatmentLink {
  label: string;
  href: string;
  description?: string;
}

export interface TreatmentColumn {
  header: string;
  treatments: TreatmentLink[];
}

export interface CTALink {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface Category {
  id: string;
  label: string;
  icon?: string;
  href?: string; // Optional link to category overview page
  columns: TreatmentColumn[];
  ctas: CTALink[];
}

export interface NavLink {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  special?: boolean; // For special styling (e.g., Membership with pink bg)
}

export interface MegaMenuData {
  categories: Category[];
}
