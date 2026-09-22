/**
 * Navigation Menu Data
 *
 * This file contains all the content for the mega menu navigation.
 * Update this file to modify menu items, categories, and CTAs.
 *
 * Structure:
 * - Each category has multiple columns of treatments
 * - Each category has its own set of CTAs
 * - Solution-focused language emphasizes benefits and outcomes
 */

import { MegaMenuData, NavLink } from "@/types/navigation";

// Main navigation links
export const mainNavLinks: NavLink[] = [
  { label: "FACECULT", href: "/" },
  { label: "TREATMENTS", href: "/treatments", hasMegaMenu: true },
  { label: "PRICING", href: "/pricing" },
  { label: "RESULTS", href: "/results" },
  { label: "MEMBERSHIP", href: "/membership", special: true },
  { label: "CONTACT", href: "/contact" },
];

// Mega menu data for treatments
export const treatmentsMenuData: MegaMenuData = {
  categories: [
    {
      id: "injectables",
      label: "Injectables",
      href: "/treatments/injectables",
      columns: [
        {
          header: "COSMETIC INJECTIONS",
          treatments: [
            { label: "Skin Boosters", href: "/treatments/injectables/skin-boosters" },
            { label: "Polynucleotides", href: "/treatments/injectables/polynucleotides" },
            { label: "Karisma", href: "/treatments/injectables/karisma" },
            { label: "Hair Loss", href: "/treatments/injectables/hair-loss" },
            { label: "Jalupro", href: "/treatments/injectables/jalupro" },
            { label: "Profhilo", href: "/treatments/injectables/profhilo" },
          ],
        },
        {
          header: "DERMAL FILLERS",
          treatments: [
            { label: "Bio-fillers", href: "/treatments/dermal-fillers/bio-fillers" },
            { label: "Lip filler", href: "/treatments/dermal-fillers/lip-filler" },
            { label: "Radiesse", href: "/treatments/dermal-fillers/radiesse" },
          ],
        },
      ],
      ctas: [
        {
          label: "Is This Right for You?",
          href: "/treatments/injectables",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
        {
          label: "See Before & After Results",
          href: "/results",
          variant: "outline",
        },
      ],
    },
    {
      id: "laser-hair-removal",
      label: "Laser Hair Removal",
      columns: [
        {
          header: "FOR WOMEN",
          treatments: [
            { label: "Bikini", href: "/treatments/laser-hair-removal/women/bikini" },
            { label: "Face", href: "/treatments/laser-hair-removal/women/face" },
            { label: "Upper Body", href: "/treatments/laser-hair-removal/women/upper-body" },
            { label: "Lower Body", href: "/treatments/laser-hair-removal/women/lower-body" },
            { label: "Full Body", href: "/treatments/laser-hair-removal/women/full-body" },
          ],
        },
        {
          header: "FOR MEN",
          treatments: [
            { label: "Face", href: "/treatments/laser-hair-removal/men/face" },
            { label: "Upper Body", href: "/treatments/laser-hair-removal/men/upper-body" },
            { label: "Lower Body", href: "/treatments/laser-hair-removal/men/lower-body" },
            { label: "Full Body", href: "/treatments/laser-hair-removal/men/full-body" },
          ],
        },
      ],
      ctas: [
        {
          label: "For Women",
          href: "/treatments/laser-hair-removal/women",
          variant: "outline",
        },
        {
          label: "For Men",
          href: "/treatments/laser-hair-removal/men",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
      ],
    },
    {
      id: "skin-treatments",
      label: "Skin Treatments",
      columns: [
        {
          header: "FACIAL TREATMENTS",
          treatments: [
            { label: "Facials", href: "/treatments/skin-treatments/facials" },
            { label: "HydraFacial", href: "/treatments/skin-treatments/hydrafacial" },
            { label: "Chemical Peels", href: "/treatments/skin-treatments/chemical-peels" },
            { label: "Laser Hollywood Facial", href: "/treatments/skin-treatments/laser-hollywood-facial" },
            { label: "IPL Treatment", href: "/treatments/skin-treatments/ipl" },
          ],
        },
        {
          header: "SKIN CONCERNS",
          treatments: [
            { label: "Acne & Oily Skin", href: "/treatments/skin-concerns/acne" },
            { label: "Acne Scarring", href: "/treatments/skin-concerns/scarring" },
            { label: "Ageing Skin & Wrinkles", href: "/treatments/skin-concerns/aging" },
            { label: "Pigmentation & Sun Damage", href: "/treatments/skin-concerns/pigmentation" },
            { label: "Redness & Sensitivity", href: "/treatments/skin-concerns/redness" },
            { label: "Rosacea", href: "/treatments/skin-concerns/rosacea" },
          ],
        },
      ],
      ctas: [
        {
          label: "View All Treatments",
          href: "/treatments/skin-treatments",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
        {
          label: "See Results",
          href: "/results",
          variant: "outline",
        },
      ],
    },
    {
      id: "body-treatments",
      label: "Body Treatments",
      href: "/treatments/body",
      columns: [
        {
          header: "BODY CONTOURING & SCULPTING",
          treatments: [
            { label: "HIFU Body", href: "/treatments/body/hifu-body" },
            { label: "Emsculpt", href: "/treatments/body/emsculpt" },
          ],
        },
      ],
      ctas: [
        {
          label: "View All Body Treatments",
          href: "/treatments/body",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
      ],
    },
    // HIDDEN: Anti Ageing menu - uncomment to restore
    // {
    //   id: "anti-ageing",
    //   label: "Anti Ageing",
    //   columns: [
    //     {
    //       header: "FACE & NECK",
    //       treatments: [
    //         { label: "PDO Thread Lift", href: "/treatments/thread-lift" },
    //         { label: "Ultherapy®", href: "/treatments/ultherapy" },
    //         { label: "Plasma Pen", href: "/treatments/plasma-pen" },
    //         { label: "Vampire Facial (PRP)", href: "/treatments/prp-facial" },
    //         { label: "Skin Boosters", href: "/treatments/skin-boosters" },
    //         { label: "Profhilo®", href: "/treatments/profhilo" },
    //         { label: "Neck Lift (Non-Surgical)", href: "/treatments/neck-lift" },
    //       ],
    //     },
    //     {
    //       header: "COMPREHENSIVE PROGRAMS",
    //       treatments: [
    //         { label: "Complete Anti Ageing Package", href: "/treatments/anti-ageing-package" },
    //         { label: "Liquid Facelift", href: "/treatments/liquid-facelift" },
    //         { label: "Collagen Induction Therapy", href: "/treatments/collagen-therapy" },
    //         { label: "LED Light Therapy", href: "/treatments/led-therapy" },
    //         { label: "Oxygen Facial", href: "/treatments/oxygen-facial" },
    //         { label: "Age-Defying Membership", href: "/membership/anti-ageing" },
    //       ],
    //     },
    //   ],
    //   ctas: [
    //     {
    //       label: "Age Assessment",
    //       href: "/treatments/age-assessment",
    //       variant: "outline",
    //     },
    //     {
    //       label: "Book Free Consultation",
    //       href: "/book-consultation",
    //       variant: "primary",
    //     },
    //     {
    //       label: "Anti Ageing Packages",
    //       href: "/pricing/anti-ageing",
    //       variant: "secondary",
    //     },
    //     {
    //       label: "See Transformations",
    //       href: "/results/anti-ageing",
    //       variant: "outline",
    //     },
    //   ],
    // },
    {
      id: "facelift",
      label: "Facelift",
      href: "/treatments/facelift",
      columns: [
        {
          header: "FACELIFT",
          treatments: [
            { label: "HIFU", href: "/treatments/facelift/hifu" },
            { label: "Autologous Threads", href: "/treatments/facelift/autologous-threads" },
            { label: "Liquid Face lift", href: "/treatments/facelift/liquid-facelift" },
            { label: "Radiesse", href: "/treatments/facelift/radiesse" },
          ],
        },
      ],
      ctas: [
        {
          label: "Explore All Options",
          href: "/treatments/facelift",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
        {
          label: "See Results",
          href: "/results",
          variant: "outline",
        },
      ],
    },
    {
      id: "microneedling",
      label: "Microneedling",
      href: "/treatments/microneedling",
      columns: [
        {
          header: "MICRONEEDLING",
          treatments: [
            { label: "Microneedling", href: "/treatments/microneedling/microneedling" },
            { label: "Exosomes", href: "/treatments/microneedling/exosomes" },
          ],
        },
      ],
      ctas: [
        {
          label: "Learn More",
          href: "/treatments/microneedling",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
        {
          label: "See Results",
          href: "/results",
          variant: "outline",
        },
      ],
    },
    {
      id: "rf-microneedling",
      label: "RF Microneedling",
      href: "/treatments/rf-microneedling",
      columns: [
        {
          header: "RF MICRONEEDLING",
          treatments: [
            { label: "DoubleTite", href: "/treatments/rf-microneedling/doubletite" },
            { label: "DoubleTite & Exosomes", href: "/treatments/rf-microneedling/doubletite-exosomes" },
          ],
        },
      ],
      ctas: [
        {
          label: "Learn More",
          href: "/treatments/rf-microneedling",
          variant: "outline",
        },
        {
          label: "Book Free Consultation",
          href: "https://partner.pabau.com/online-bookings/facecult",
          variant: "primary",
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "secondary",
        },
        {
          label: "See Results",
          href: "/results",
          variant: "outline",
        },
      ],
    },
    // HIDDEN: Men's Treatments menu - uncomment to restore
    // {
    //   id: "mens-treatments",
    //   label: "Men's Treatments",
    //   columns: [
    //     {
    //       header: "FACIAL TREATMENTS",
    //       treatments: [
    //         { label: "Male Botox", href: "/treatments/mens/botox" },
    //         { label: "Jawline Enhancement", href: "/treatments/mens/jawline" },
    //         { label: "Beard Shaping (Laser)", href: "/treatments/mens/beard-shaping" },
    //         { label: "Acne Treatment", href: "/treatments/mens/acne" },
    //         { label: "Under Eye Treatment", href: "/treatments/mens/under-eye" },
    //         { label: "Non-Surgical Rhinoplasty", href: "/treatments/mens/rhinoplasty" },
    //       ],
    //     },
    //     {
    //       header: "BODY & HAIR",
    //       treatments: [
    //         { label: "Body Hair Removal", href: "/treatments/mens/body-hair" },
    //         { label: "Back & Chest Hair Removal", href: "/treatments/mens/back-chest" },
    //         { label: "Body Contouring", href: "/treatments/mens/body-contouring" },
    //         { label: "Excessive Sweating Treatment", href: "/treatments/mens/sweating" },
    //         { label: "Hair Loss Treatment", href: "/treatments/mens/hair-loss" },
    //         { label: "Scalp Micropigmentation", href: "/treatments/mens/scalp" },
    //       ],
    //     },
    //   ],
    //   ctas: [
    //     {
    //       label: "Men's Treatment Guide",
    //       href: "/treatments/mens/guide",
    //       variant: "outline",
    //     },
    //     {
    //       label: "Book Free Consultation",
    //       href: "https://partner.pabau.com/online-bookings/facecult",
    //       variant: "primary",
    //     },
    //     {
    //       label: "Men's Packages",
    //       href: "/pricing",
    //       variant: "secondary",
    //     },
    //     {
    //       label: "Before & After Gallery",
    //       href: "/results",
    //       variant: "outline",
    //     },
    //   ],
    // },
  ],
};
