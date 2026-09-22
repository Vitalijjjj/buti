/**
 * Facelift Treatments Data
 *
 * Complete data for all facelift treatments including:
 * - Treatment descriptions
 * - Benefits
 * - Pricing
 * - FAQs
 * - How it works
 */

export interface FaceliftTreatment {
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

export const faceliftTreatmentsData = {
  title: "Facelift Treatments",
  description:
    "Non-surgical facelift treatments combining advanced technologies for natural facial rejuvenation and lifting. Professional solutions delivered by certified specialists in Dublin.",

  treatments: [
    {
      id: "hifu",
      title: "HIFU",
      description:
        "High-Intensity Focused Ultrasound for non-surgical skin tightening and lifting.",
      detailedDescription:
        "HIFU (High-Intensity Focused Ultrasound) is a non-invasive treatment that delivers focused ultrasound energy deep into the skin layers, stimulating collagen production and tightening loose skin. This advanced technology targets the same deeper layers addressed in surgical facelifts without incisions or downtime.",
      benefits: [
        "Non-surgical facelift alternative",
        "Stimulates natural collagen production",
        "Lifts and tightens skin",
        "No incisions or scarring",
        "Minimal to no downtime",
        "Long-lasting results",
        "Natural-looking improvement",
      ],
      pricing: {
        singleSession: "€450",
      },
      duration: "60-90 minutes",
      downtime: "None - may have slight redness",
      image: "/assets/facelift_hifu.png",
    },
    {
      id: "autologous-threads",
      title: "Autologous Threads",
      description:
        "Advanced thread lift using your own tissue for natural facial rejuvenation.",
      detailedDescription:
        "Autologous thread lift is an innovative treatment that uses biocompatible threads derived from your own tissue to lift and tighten facial skin. This cutting-edge procedure stimulates collagen production while providing immediate lifting effects, resulting in natural and long-lasting facial rejuvenation.",
      benefits: [
        "Uses your own tissue (biocompatible)",
        "Immediate lifting effect",
        "Stimulates collagen production",
        "Natural-looking results",
        "Minimal downtime",
        "Long-lasting improvements",
        "Safe and effective",
      ],
      pricing: {
        singleSession: "€200",
        package3: "€650",
      },
      duration: "45-75 minutes",
      downtime: "Minimal - 2-3 days slight swelling",
      image: "/assets/facelift_threads.png",
    },
    {
      id: "liquid-facelift",
      title: "Liquid Face lift",
      description:
        "Non-surgical facelift using dermal fillers and injectables for comprehensive rejuvenation.",
      detailedDescription:
        "The liquid facelift is a non-surgical alternative to traditional facelift surgery, using a combination of dermal fillers and injectables to restore volume, smooth wrinkles, and lift sagging skin. This comprehensive treatment addresses multiple signs of aging simultaneously for natural, youthful results.",
      benefits: [
        "Non-surgical alternative",
        "Restores facial volume",
        "Lifts sagging skin",
        "Smooths wrinkles and lines",
        "Natural-looking results",
        "No surgery or scars",
        "Immediate visible results",
      ],
      pricing: {
        singleSession: "€450",
        package3: "€800",
      },
      duration: "60-90 minutes",
      downtime: "Minimal - slight swelling possible",
      image: "/assets/liquid_facelift.png",
    },
    {
      id: "radiesse",
      title: "Radiesse",
      description:
        "Calcium-based dermal filler that stimulates natural collagen for volumizing and contouring.",
      detailedDescription:
        "Radiesse is a unique dermal filler made of calcium hydroxylapatite microspheres that provides immediate volume while stimulating your body's natural collagen production. This dual-action treatment is ideal for facial contouring, hand rejuvenation, and restoring lost volume for long-lasting natural results.",
      benefits: [
        "Immediate volumizing effect",
        "Stimulates natural collagen",
        "Long-lasting results (12-18 months)",
        "Facial contouring and lifting",
        "Natural-looking enhancement",
        "Biocompatible and safe",
        "Versatile application areas",
      ],
      pricing: {
        singleSession: "€450",
        package3: "€780",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - may have slight swelling",
      image: "/assets/radiesse.png",
    },
  ],

  faqs: [
    {
      id: "how-long-last",
      question: "How long do facelift treatments last?",
      answer:
        "Results vary by treatment type. HIFU results can last 12-18 months, thread lifts 12-24 months, liquid facelifts 9-18 months depending on products used, and Radiesse 12-18 months. Maintenance treatments help sustain optimal results.",
    },
    {
      id: "painful",
      question: "Are facelift treatments painful?",
      answer:
        "Most treatments involve minimal discomfort. We use topical numbing cream and local anesthesia when necessary. Many clients report only slight pressure or mild discomfort during the procedure.",
    },
    {
      id: "results-timeline",
      question: "How soon will I see results?",
      answer:
        "Some treatments like liquid facelifts and Radiesse provide immediate visible results. HIFU and thread lifts show initial improvements immediately, with optimal results developing over 2-3 months as collagen production increases.",
    },
    {
      id: "combining-treatments",
      question: "Can I combine different facelift treatments?",
      answer:
        "Yes! Many clients achieve optimal results by combining treatments. For example, HIFU for skin tightening with Radiesse for volume restoration. We'll create a personalised treatment plan during your consultation.",
    },
    {
      id: "vs-surgical",
      question: "How do these compare to surgical facelift?",
      answer:
        "Non-surgical treatments offer gradual, natural-looking results with no incisions, minimal downtime, and lower cost. While surgical facelifts provide more dramatic changes, non-surgical options are ideal for those wanting subtle rejuvenation without surgery.",
    },
    {
      id: "treatment-frequency",
      question: "How often do I need treatments?",
      answer:
        "Initial treatments may require 1-3 sessions depending on the procedure. Maintenance treatments are typically recommended every 12-18 months to sustain results. Your personalised schedule will be discussed during consultation.",
    },
  ],

  howItWorks: {
    title: "How Facelift Treatments Work",
    description:
      "Our non-surgical facelift treatments are performed by experienced practitioners using advanced techniques to ensure optimal results and safety.",
    steps: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Comprehensive facial assessment and personalised treatment plan discussion.",
      },
      {
        step: 2,
        title: "Preparation",
        description:
          "Facial cleansing, marking treatment areas, and applying topical anesthesia if needed.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Precise application of chosen technique using advanced technology and sterile procedures.",
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