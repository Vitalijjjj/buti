/**
 * RF Microneedling Treatments Data
 *
 * Complete data for all RF microneedling treatments including:
 * - Treatment descriptions
 * - Benefits
 * - Pricing
 * - FAQs
 * - How it works
 */

export interface RFMicroneedlingTreatment {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  pricing: {
    singleSession: string;
    package3?: string;
    package6?: string;
  };
  duration: string;
  downtime: string;
  image?: string;
}

export const rfMicroneedlingTreatmentsData = {
  title: "RF Microneedling Treatments",
  description:
    "Advanced radiofrequency microneedling treatments combining microneedling with RF energy for superior skin tightening and rejuvenation. Professional treatments delivered by certified specialists in Dublin.",

  treatments: [
    {
      id: "doubletite",
      title: "DoubleTite",
      description:
        "Advanced RF microneedling technology for deep skin tightening and collagen remodeling.",
      detailedDescription:
        "DoubleTite is an advanced radiofrequency microneedling treatment that combines the collagen-inducing benefits of microneedling with the skin-tightening power of radiofrequency energy. The treatment delivers controlled RF energy deep into the dermis through ultra-fine needles, stimulating collagen and elastin production while tightening skin from within. This powerful combination provides superior results for skin laxity, wrinkles, and texture improvement.",
      benefits: [
        "Deep skin tightening and lifting",
        "Stimulates collagen remodeling",
        "Reduces wrinkles and fine lines",
        "Improves skin texture and tone",
        "Minimizes pore appearance",
        "Treats acne scars effectively",
        "Long-lasting rejuvenation results",
      ],
      pricing: {
        singleSession: "€450",
        package3: "€1,200",
      },
      duration: "60-75 minutes",
      downtime: "3-5 days mild redness and swelling",
      image: "/assets/rf_microneedling.png",
    },
    {
      id: "doubletite-exosomes",
      title: "DoubleTite & Exosomes/Skin Boosters",
      description:
        "Premium combination treatment pairing RF microneedling with regenerative exosomes for maximum rejuvenation.",
      detailedDescription:
        "This premium treatment combines the powerful skin-tightening effects of DoubleTite RF microneedling with the advanced regenerative properties of exosomes. The RF energy creates micro-channels while tightening skin, allowing exosomes to penetrate deeply and accelerate healing, enhance collagen production, and deliver superior anti-aging results. This synergistic combination provides the ultimate in skin rejuvenation and regeneration.",
      benefits: [
        "Maximum skin tightening and lifting",
        "Enhanced cellular regeneration",
        "Accelerated healing and recovery",
        "Superior collagen production",
        "Dramatic texture improvement",
        "Reduces wrinkles and scarring",
        "Ultimate anti-aging results",
      ],
      pricing: {
        singleSession: "€700",
        package3: "€1,950",
      },
      duration: "75-90 minutes",
      downtime: "3-5 days mild redness and sensitivity",
      image: "/assets/rf_microneedling.png",
    },
  ],

  faqs: [
    {
      id: "how-long-last",
      question: "How long do RF microneedling results last?",
      answer:
        "Results from DoubleTite RF microneedling typically last 9-12 months. When combined with exosomes, results can extend to 12-18 months. A series of 3-4 treatments provides optimal results. Annual maintenance treatments help sustain the improvements.",
    },
    {
      id: "painful",
      question: "Is RF microneedling painful?",
      answer:
        "We apply topical numbing cream before treatment to ensure comfort. Most clients experience only mild warmth and slight pressure during the procedure. The treatment is well-tolerated, and we monitor your comfort throughout.",
    },
    {
      id: "results-timeline",
      question: "How soon will I see results?",
      answer:
        "You'll notice initial improvements in skin texture and radiance within 1-2 weeks. Skin tightening results develop progressively over 2-3 months as new collagen forms. Optimal results are visible after 3 months and continue improving for up to 6 months.",
    },
    {
      id: "vs-regular-microneedling",
      question: "How does RF microneedling differ from regular microneedling?",
      answer:
        "RF microneedling adds radiofrequency energy to traditional microneedling, delivering heat deep into the dermis for superior skin tightening and collagen remodeling. It's more effective for skin laxity, deeper wrinkles, and provides longer-lasting results than standard microneedling.",
    },
    {
      id: "skin-types",
      question: "Is RF microneedling suitable for all skin types?",
      answer:
        "Yes, RF microneedling is safe and effective for all skin types and tones. The treatment is customizable, allowing us to adjust depth and energy levels based on your specific skin type and concerns.",
    },
    {
      id: "treatment-frequency",
      question: "How many treatments do I need?",
      answer:
        "Most clients achieve optimal results with a series of 3-4 treatments spaced 4-6 weeks apart. Deeper concerns may benefit from additional sessions. Maintenance treatments every 9-12 months help sustain results.",
    },
  ],

  howItWorks: {
    title: "How RF Microneedling Treatments Work",
    description:
      "Our RF microneedling treatments are performed by experienced practitioners using state-of-the-art technology and precise techniques to ensure optimal results and safety.",
    steps: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Comprehensive facial assessment and personalised treatment plan creation.",
      },
      {
        step: 2,
        title: "Preparation",
        description:
          "Thorough cleansing and application of topical numbing cream for maximum comfort.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Precise RF microneedling application with or without exosomes using advanced DoubleTite technology.",
      },
      {
        step: 4,
        title: "Aftercare",
        description:
          "Application of soothing serums, detailed aftercare instructions, and follow-up scheduling.",
      },
    ],
  },
};