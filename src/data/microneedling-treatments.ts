/**
 * Microneedling Treatments Data
 *
 * Complete data for all microneedling treatments including:
 * - Treatment descriptions
 * - Benefits
 * - Pricing
 * - FAQs
 * - How it works
 */

export interface MicroneedlingTreatment {
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

export const microneedlingTreatmentsData = {
  title: "Microneedling Treatments",
  description:
    "Advanced microneedling treatments for skin rejuvenation, texture improvement, and collagen stimulation. Professional treatments delivered by certified specialists in Dublin.",

  treatments: [
    {
      id: "microneedling",
      title: "Microneedling",
      description:
        "Collagen induction therapy using fine needles to stimulate skin regeneration and improvement.",
      detailedDescription:
        "Microneedling, also known as collagen induction therapy, uses fine needles to create controlled micro-injuries in the skin. This stimulates the body's natural healing process, boosting collagen and elastin production. The treatment effectively improves skin texture, reduces scarring, minimizes pores, and diminishes fine lines for smoother, more youthful-looking skin.",
      benefits: [
        "Stimulates collagen and elastin production",
        "Improves skin texture and tone",
        "Reduces acne scars and scarring",
        "Minimizes pore appearance",
        "Reduces fine lines and wrinkles",
        "Enhances product absorption",
        "Natural skin rejuvenation",
      ],
      pricing: {
        singleSession: "€220",
        package3: "€550",
      },
      duration: "45-60 minutes",
      downtime: "2-3 days mild redness",
      image: "/assets/microneedling_1.png",
    },
    {
      id: "exosomes",
      title: "Exosomes",
      description:
        "Advanced regenerative treatment using exosomes for enhanced skin repair and rejuvenation.",
      detailedDescription:
        "Exosome therapy is a cutting-edge regenerative treatment that uses growth factors and signaling molecules to promote cellular repair and regeneration. When combined with microneedling, exosomes penetrate deep into the skin, accelerating healing, enhancing collagen production, and delivering superior anti-aging and rejuvenation results.",
      benefits: [
        "Advanced cellular regeneration",
        "Accelerates skin healing",
        "Enhances collagen production",
        "Reduces inflammation",
        "Improves skin tone and texture",
        "Anti-aging properties",
        "Superior rejuvenation results",
      ],
      pricing: {
        singleSession: "€350",
        package3: "€850",
      },
      duration: "60 minutes",
      downtime: "2-4 days mild redness and sensitivity",
      image: "/assets/microneedling_1.png",
    },
  ],

  faqs: [
    {
      id: "how-long-last",
      question: "How long do microneedling results last?",
      answer:
        "Results from microneedling typically last 4-6 months. With exosome treatments, results can last 6-9 months. A series of treatments (usually 3-6 sessions) provides optimal and longer-lasting results. Maintenance sessions every 6-9 months help sustain improvements.",
    },
    {
      id: "painful",
      question: "Is microneedling painful?",
      answer:
        "We apply a topical numbing cream before treatment to minimize discomfort. Most clients describe the sensation as mild tingling or slight pressure. The treatment is well-tolerated, and any discomfort is brief.",
    },
    {
      id: "results-timeline",
      question: "How soon will I see results?",
      answer:
        "Initial improvements in skin texture and radiance can be visible within 1-2 weeks. Optimal results develop over 4-6 weeks as collagen production increases. Full benefits are typically seen after completing a series of treatments.",
    },
    {
      id: "combining-treatments",
      question: "Can microneedling be combined with other treatments?",
      answer:
        "Yes! Microneedling pairs excellently with exosomes for enhanced results. It can also be combined with PRP (platelet-rich plasma), hyaluronic acid serums, and other growth factors for superior rejuvenation outcomes.",
    },
    {
      id: "skin-types",
      question: "Is microneedling suitable for all skin types?",
      answer:
        "Yes, microneedling is safe and effective for all skin types and tones. Unlike some laser treatments, it doesn't cause hyperpigmentation in darker skin tones, making it an excellent option for diverse clients.",
    },
    {
      id: "treatment-frequency",
      question: "How many treatments do I need?",
      answer:
        "Most clients benefit from a series of 3-6 treatments spaced 4-6 weeks apart for optimal results. Deeper concerns like acne scarring may require more sessions. Maintenance treatments every 6-9 months help sustain results.",
    },
  ],

  howItWorks: {
    title: "How Microneedling Treatments Work",
    description:
      "Our microneedling treatments are performed by experienced practitioners using advanced techniques and sterile equipment to ensure optimal results and safety.",
    steps: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Comprehensive skin assessment and personalised treatment plan discussion.",
      },
      {
        step: 2,
        title: "Preparation",
        description:
          "Thorough skin cleansing and application of topical numbing cream for comfort.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Precise microneedling application with or without exosomes using sterile medical-grade device.",
      },
      {
        step: 4,
        title: "Aftercare",
        description:
          "Application of soothing serums, post-treatment care instructions, and follow-up scheduling.",
      },
    ],
  },
};