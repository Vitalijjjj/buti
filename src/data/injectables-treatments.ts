/**
 * Injectable Treatments Data
 *
 * Complete data for all injectable treatments including:
 * - Treatment descriptions
 * - Benefits
 * - Pricing
 * - FAQs
 * - How it works
 */

export interface InjectableTreatment {
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

export const injectablesTreatmentsData = {
  title: "Injectable Treatments",
  description:
    "Advanced injectable treatments for skin rejuvenation, hydration, and regeneration. Medical-grade solutions delivered by certified professionals in Dublin.",

  treatments: [
    {
      id: "skin-boosters",
      title: "Skin Boosters",
      description:
        "Deep skin hydration treatment that improves skin quality, texture, and elasticity from within.",
      detailedDescription:
        "Skin boosters are injectable treatments containing hyaluronic acid that deeply hydrate the skin from within. Unlike dermal fillers, they don't add volume but instead improve overall skin quality, texture, and elasticity. The treatment stimulates collagen production and provides intense hydration, resulting in a natural, healthy glow.",
      benefits: [
        "Deep skin hydration",
        "Improved skin texture and tone",
        "Enhanced skin elasticity",
        "Natural-looking glow",
        "Stimulates collagen production",
        "Reduces fine lines",
        "Long-lasting results",
      ],
      pricing: {
        singleSession: "€350",
        package3: "€950",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - slight redness for 24-48 hours",
      image: "/assets/skin_boosters.png",
    },
    {
      id: "polynucleotides",
      title: "Polynucleotides",
      description:
        "Advanced bio-regenerative treatment that repairs and rejuvenates skin at a cellular level.",
      detailedDescription:
        "Polynucleotides are innovative injectable treatments derived from purified DNA fragments that work at a cellular level to repair and regenerate damaged skin. This cutting-edge treatment stimulates fibroblast activity, promotes collagen synthesis, and improves skin elasticity. Ideal for skin rejuvenation, scar treatment, and anti-ageing.",
      benefits: [
        "Cellular-level skin repair",
        "Stimulates natural regeneration",
        "Improves skin elasticity",
        "Reduces appearance of scars",
        "Anti-inflammatory properties",
        "Long-term skin improvement",
        "Safe and natural treatment",
      ],
      pricing: {
        singleSession: "€400",
        package3: "€1,100",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - may have slight swelling",
      image: "/assets/polynucleotides.png",
    },
    {
      id: "karisma",
      title: "Karisma",
      description:
        "Premium skin rejuvenation treatment combining hyaluronic acid with essential vitamins and amino acids.",
      detailedDescription:
        "Karisma is a sophisticated injectable treatment that combines non-cross-linked hyaluronic acid with a powerful blend of vitamins, amino acids, and antioxidants. This unique formulation provides deep hydration while nourishing the skin with essential nutrients. Perfect for improving skin quality, reducing fine lines, and achieving a radiant complexion.",
      benefits: [
        "Deep hydration and nourishment",
        "Vitamin-enriched formula",
        "Improves skin radiance",
        "Reduces fine lines",
        "Enhances skin tone",
        "Antioxidant protection",
        "Quick treatment with immediate glow",
      ],
      pricing: {
        singleSession: "€375",
        package3: "€1,000",
      },
      duration: "30-45 minutes",
      downtime: "None - return to activities immediately",
      image: "/assets/karisma.png",
    },
    {
      id: "hair-loss",
      title: "Hair Loss Treatment",
      description:
        "Injectable therapy to stimulate hair growth and improve hair density for both men and women.",
      detailedDescription:
        "Our advanced hair loss injectable treatment uses growth factors and bioactive compounds to stimulate hair follicles, improve scalp circulation, and promote natural hair regrowth. Suitable for both male and female pattern hair loss, this treatment works by revitalizing dormant follicles and strengthening existing hair.",
      benefits: [
        "Stimulates hair regrowth",
        "Improves hair density",
        "Strengthens existing hair",
        "Slows hair loss progression",
        "Improves scalp health",
        "Natural-looking results",
        "Suitable for men and women",
      ],
      pricing: {
        singleSession: "€450",
        package6: "€2,400",
      },
      duration: "45-60 minutes",
      downtime: "Minimal - avoid washing hair for 24 hours",
      image: "/assets/hair_loss.png",
    },
    {
      id: "jalupro",
      title: "Jalupro",
      description:
        "Bio-revitalization treatment combining amino acids and hyaluronic acid for skin rejuvenation.",
      detailedDescription:
        "Jalupro is a powerful bio-revitalization treatment that combines sterile amino acids with hyaluronic acid to restore skin vitality and combat signs of aging. The amino acids stimulate fibroblast production, promoting collagen and elastin synthesis, while hyaluronic acid provides deep hydration. Ideal for treating photoaging, skin laxity, and improving overall skin quality.",
      benefits: [
        "Stimulates collagen production",
        "Improves skin elasticity",
        "Reduces photoaging damage",
        "Deep skin hydration",
        "Brightens complexion",
        "Smooths fine lines",
        "Bio-revitalizing effect",
      ],
      pricing: {
        singleSession: "€350",
        package3: "€950",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - slight redness possible",
      image: "/assets/jalupro.png",
    },
    {
      id: "profhilo",
      title: "Profhilo",
      description:
        "Revolutionary bio-remodeling treatment with highest concentration of hyaluronic acid for skin laxity.",
      detailedDescription:
        "Profhilo is one of the most innovative anti-ageing treatments available, featuring the highest concentration of hyaluronic acid on the market. Unlike traditional fillers, Profhilo bio-remodels the skin by stimulating collagen and elastin production in multiple layers. It's particularly effective for treating skin laxity, crepey skin, and providing an overall lifting effect.",
      benefits: [
        "Bio-remodels aging skin",
        "Highest HA concentration",
        "Treats skin laxity",
        "Improves skin tone",
        "Natural lifting effect",
        "Long-lasting hydration",
        "Minimal injection points (5 per side)",
      ],
      pricing: {
        singleSession: "€400",
        package3: "€1,050",
      },
      duration: "15-30 minutes",
      downtime: "Minimal - may have small bumps for 24 hours",
      image: "/assets/profhilo.png",
    },
  ],

  faqs: [
    {
      id: "how-long-last",
      question: "How long do injectable treatments last?",
      answer:
        "Results vary by treatment type. Skin boosters and Profhilo typically last 6-9 months, polynucleotides can provide results for up to 12 months, and hair loss treatments require ongoing sessions for optimal results. We'll create a personalised treatment plan during your consultation.",
    },
    {
      id: "painful",
      question: "Are injectable treatments painful?",
      answer:
        "Most clients experience minimal discomfort. We use ultra-fine needles and can apply topical numbing cream before treatment. Many of our injectable treatments also contain lidocaine for added comfort during the procedure.",
    },
    {
      id: "results-timeline",
      question: "How soon will I see results?",
      answer:
        "Initial improvements are often visible within 2-3 weeks as the treatment stimulates your body's natural processes. Optimal results develop over 4-6 weeks and continue to improve over the following months. Some treatments like Karisma provide an immediate glow.",
    },
    {
      id: "combining-treatments",
      question: "Can I combine different injectable treatments?",
      answer:
        "Yes! Many clients benefit from combining treatments. For example, Profhilo for bio-remodeling with polynucleotides for cellular repair. During your consultation, we'll recommend the best combination for your specific skin concerns and goals.",
    },
    {
      id: "difference-from-fillers",
      question: "What's the difference between these and dermal fillers?",
      answer:
        "These injectable treatments focus on improving overall skin quality, hydration, and stimulating natural collagen production. Dermal fillers, on the other hand, add volume to specific areas. Both can be complementary in a comprehensive treatment plan.",
    },
    {
      id: "treatment-frequency",
      question: "How often do I need treatments?",
      answer:
        "Initial treatment plans typically involve 2-3 sessions spaced 4-6 weeks apart. Maintenance treatments are usually recommended every 6-9 months to sustain results. Your personalised treatment schedule will be discussed during consultation.",
    },
  ],

  howItWorks: {
    title: "How Injectable Treatments Work",
    description:
      "Our injectable treatments are administered by experienced practitioners using precise techniques to ensure optimal results and safety.",
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
          "Skin cleansing and optional topical numbing for your comfort.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Precise injection of treatment using ultra-fine needles or cannula technique.",
      },
      {
        step: 4,
        title: "Aftercare",
        description:
          "Post-treatment care instructions and follow-up appointment scheduling.",
      },
    ],
  },
};
