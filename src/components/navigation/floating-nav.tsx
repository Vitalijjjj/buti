/**
 * FloatingNav Component
 *
 * Main navigation wrapper - now uses the Navbar component with mega menu.
 * This file replaces the old simple navigation with the new mega menu system.
 *
 * Navigation includes:
 * - Home, Treatments (mega menu), Pricing, Reviews, Membership, Contact
 * - Sticky floating design
 * - Mobile responsive
 */

"use client";

import { Navbar } from "./Navbar";

export function FloatingNav() {
  return <Navbar />;
}
