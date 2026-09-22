/**
 * Skin Treatments Data
 *
 * Overview data for skin treatments category page with tabs
 * Individual treatment detail data
 */

import { SkinTreatmentOverview, SkinTreatmentDetail } from "@/types/skin-treatment";

// Overview data for skin-treatments page tabs
export const allSkinTreatments: SkinTreatmentOverview[] = [
  {
    id: "facials",
    name: "Facials",
    tagline: "Professional Medical-Grade Facial Treatments",
    description:
      "Customized medical-grade facials tailored to your skin's unique needs. Our expert aestheticians use advanced techniques and premium products to deliver exceptional results.",
    image: "/assets/facials_1.png",
    href: "/treatments/skin-treatments/facials",
    benefits: [
      "Deep cleansing and purification",
      "Customized to your skin type",
      "Relaxing and rejuvenating",
      "Improves overall skin health",
    ],
    idealFor: ["All Skin Types", "Regular Maintenance", "Stress Relief", "Healthy Glow"],
    pricing: "From €100",
    duration: "60 mins",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    tagline: "Deep Cleansing, Hydration & Radiance in One Treatment",
    description:
      "Revolutionary medical-grade facial that cleanses, extracts, and hydrates. Perfect for all skin types with zero downtime and instant results.",
    image: "/assets/hydrafacial.png",
    href: "/treatments/skin-treatments/hydrafacial",
    benefits: [
      "Deeply cleanses and exfoliates",
      "Extracts impurities and blackheads",
      "Intensely hydrates skin",
      "Immediate visible results",
    ],
    idealFor: ["Acne & Oily Skin", "Dehydrated Skin", "Fine Lines", "Dull Complexion"],
    pricing: "From €150",
    duration: "45 mins",
  },
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    tagline: "Reveal Fresh, Radiant Skin",
    description:
      "Medical-grade chemical exfoliation removes dead skin cells, revealing brighter, smoother skin. Customized to your skin type and concerns.",
    image: "/assets/chemical_peel.png",
    href: "/treatments/skin-treatments/chemical-peels",
    benefits: [
      "Exfoliates dead skin cells",
      "Brightens complexion",
      "Reduces fine lines and wrinkles",
      "Improves skin texture",
    ],
    idealFor: ["Dull Skin", "Acne Scarring", "Fine Lines", "Hyperpigmentation"],
    pricing: "From €120",
    duration: "30 mins",
  },
  {
    id: "laser-hollywood-facial",
    name: "Laser Hollywood Facial",
    tagline: "Red Carpet Ready Skin in Minutes",
    description:
      "Celebrity favorite treatment combining laser technology with a specialized carbon mask for instant skin refinement. Perfect for events and special occasions.",
    image: "/assets/hollywood_laser_peel.png",
    href: "/treatments/skin-treatments/laser-hollywood-facial",
    benefits: [
      "Instant skin refinement",
      "Reduces pore size dramatically",
      "Controls oil production",
      "Achieves red carpet glow",
    ],
    idealFor: ["Special Events", "Enlarged Pores", "Oily Skin", "Instant Results"],
    pricing: "From €150",
    duration: "45 mins",
  },
  {
    id: "ipl",
    name: "IPL Treatment",
    tagline: "Advanced Light Therapy for Flawless Skin",
    description:
      "Intense Pulsed Light technology targets pigmentation, redness, and sun damage. Non-invasive treatment that delivers dramatic improvements in skin tone and texture.",
    image: "/assets/laser_ipl.png",
    href: "/treatments/skin-treatments/ipl",
    benefits: [
      "Reduces pigmentation and age spots",
      "Minimizes redness and rosacea",
      "Treats sun damage effectively",
      "Improves overall skin tone",
    ],
    idealFor: ["Pigmentation", "Redness & Rosacea", "Sun Damage", "Uneven Skin Tone"],
    pricing: "From €200",
    duration: "30-45 mins",
  },
];

// Detailed HydraFacial treatment data
export const hydrafacialDetail: SkinTreatmentDetail = {
  id: "hydrafacial",
  name: "HydraFacial",
  tagline: "Deep Cleansing, Hydration & Radiance in One Treatment",
  description: `HydraFacial is a revolutionary medical-grade facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one seamless treatment. Perfect for all skin types, HydraFacial addresses multiple skin concerns simultaneously, delivering instant, noticeable results with zero downtime.

Whether you're dealing with acne, fine lines, hyperpigmentation, or dull skin, HydraFacial's patented Vortex-Fusion technology gently removes impurities while simultaneously infusing skin with intensive serums tailored to your specific needs. The result is clearer, more radiant skin that looks and feels healthier immediately.

Experience the treatment that celebrities and skincare experts swear by – combining advanced medical technology with a relaxing, luxurious experience that rejuvenates your skin from the inside out.`,
  heroImage: "/assets/hydrafacial.png",
  quickFacts: {
    duration: "45 minutes",
    downtime: "None",
    resultsTimeline: "Immediate glow, optimal results with monthly treatments",
    treatmentFrequency: "Monthly for maintenance",
  },
  howItWorks: {
    title: "The HydraFacial 3-Step Process",
    description:
      "HydraFacial uses patented Vortex-Fusion technology to deliver a comprehensive facial treatment that cleanses, extracts, and hydrates your skin in three simple steps.",
    steps: [
      {
        title: "Cleanse & Exfoliate",
        description:
          "Gently removes dead skin cells and uncovers a new layer of skin using a gentle exfoliating tip and resurfacing serum.",
      },
      {
        title: "Extract & Hydrate",
        description:
          "Uses painless suction to remove debris from pores while simultaneously saturating the skin with intense moisturizers.",
      },
      {
        title: "Fuse & Protect",
        description:
          "Infuses skin with antioxidants and peptides to maximize your glow and protect against environmental damage.",
      },
    ],
  },
  benefits: [
    "Deeply cleanses and exfoliates skin",
    "Removes blackheads and impurities painlessly",
    "Intensely hydrates and plumps skin",
    "Reduces fine lines and wrinkles",
    "Improves skin tone and texture",
    "Minimizes enlarged pores",
    "Addresses acne and oily skin",
    "No downtime - return to activities immediately",
    "Suitable for all skin types including sensitive",
    "Immediate visible results after first treatment",
  ],
  idealFor: [
    "Anyone wanting instant skin rejuvenation",
    "Busy professionals with no time for downtime",
    "Acne-prone and oily skin",
    "Dehydrated and dull complexion",
    "Fine lines and early signs of aging",
    "Enlarged pores and blackheads",
    "Uneven skin tone and texture",
    "Pre-event skin boost",
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After 3 HydraFacial treatments - improved skin texture and radiance",
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "Single HydraFacial session - immediate glow and hydration",
    },
  ],
  expertQuote: {
    quote:
      "HydraFacial is one of the most versatile treatments we offer. It's perfect for anyone looking to improve their skin health, whether you're dealing with specific concerns like acne or simply want that red-carpet glow. The best part? You see results immediately with absolutely no downtime.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  faqs: [
    {
      id: "what-is-hydrafacial",
      question: "What is HydraFacial?",
      answer:
        "HydraFacial is a medical-grade, multi-step facial treatment that cleanses, exfoliates, extracts impurities, and hydrates the skin using patented Vortex-Fusion technology. It treats multiple skin concerns including acne, fine lines, pigmentation, and dehydration.",
    },
    {
      id: "how-long",
      question: "How long does a HydraFacial take?",
      answer:
        "A HydraFacial treatment typically takes 45 minutes, making it perfect for busy schedules. There's no downtime, so you can return to your normal activities immediately.",
    },
    {
      id: "results-timeline",
      question: "When will I see results from HydraFacial?",
      answer:
        "Most clients see immediate results after their first HydraFacial, with visibly clearer, more radiant skin. Optimal and long-lasting results are achieved with regular monthly treatments.",
    },
    {
      id: "sensitive-skin",
      question: "Is HydraFacial suitable for sensitive skin?",
      answer:
        "Yes! HydraFacial is gentle and customizable, making it suitable for all skin types including sensitive skin. Our medical professionals will tailor the treatment to your specific skin needs and concerns.",
    },
    {
      id: "pricing",
      question: "How much does HydraFacial cost in Dublin?",
      answer:
        "HydraFacial treatments at Facecult start from €150. Pricing varies depending on any add-on boosters or treatment packages. Contact us for a personalised consultation and exact pricing.",
    },
  ],
};

// Detailed Facials treatment data
export const facialsDetail: SkinTreatmentDetail = {
  id: "facials",
  name: "Facials",
  tagline: "Professional Medical-Grade Facial Treatments",
  description: `Our professional medical-grade facials are customized to your skin's unique needs, combining advanced techniques with premium products to deliver exceptional results. Each facial is performed by expert aestheticians who understand the science of skin health and beauty.

Unlike standard spa facials, our medical-grade treatments use clinical-strength products and proven protocols to address specific skin concerns. Whether you're looking for deep cleansing, anti-aging benefits, or simply want to maintain healthy, glowing skin, our facials are tailored to achieve your goals.

Experience the perfect blend of relaxation and results with treatments that not only make your skin look better but actually improve its health from within. Our facials are suitable for all skin types and can be customized to address multiple concerns in a single session.`,
  heroImage: "/assets/facials_1.png",
  quickFacts: {
    duration: "60 minutes",
    downtime: "None",
    resultsTimeline: "Immediate glow, progressive improvements with regular treatments",
    treatmentFrequency: "Every 4-6 weeks for optimal results",
  },
  howItWorks: {
    title: "Our Professional Facial Process",
    description:
      "Each facial treatment follows a comprehensive protocol designed to cleanse, treat, and protect your skin while providing a luxurious, relaxing experience.",
    steps: [
      {
        title: "Deep Cleansing & Analysis",
        description:
          "Thorough cleansing removes impurities while our aesthetician analyzes your skin to customize the treatment to your specific needs and concerns.",
      },
      {
        title: "Exfoliation & Treatment",
        description:
          "Medical-grade exfoliation removes dead skin cells, followed by targeted treatments using clinical-strength products to address your specific concerns.",
      },
      {
        title: "Massage & Hydration",
        description:
          "Relaxing facial massage improves circulation and lymphatic drainage, followed by intensive hydration to lock in moisture and active ingredients.",
      },
    ],
  },
  benefits: [
    "Deep cleansing removes impurities and toxins",
    "Customized to your specific skin type and concerns",
    "Improves skin texture and tone",
    "Boosts circulation for healthy glow",
    "Reduces stress and promotes relaxation",
    "Enhances product absorption",
    "Suitable for all skin types",
    "No downtime required",
    "Progressive improvements with regular treatments",
    "Professional skincare recommendations included",
  ],
  idealFor: [
    "Anyone wanting professional skin care",
    "Regular skin maintenance",
    "Stress relief and relaxation",
    "Preparing for special events",
    "Complementing home skincare routine",
    "First-time facial clients",
    "All skin types and concerns",
    "Busy professionals",
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After regular facial treatments - improved clarity and radiance",
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "Single facial session - immediate glow and hydration",
    },
  ],
  expertQuote: {
    quote:
      "Our facials are the foundation of any good skincare routine. Regular professional treatments not only give you that immediate glow but also improve your skin's health over time, making all your other skincare products work better.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  faqs: [
    {
      id: "what-is-facial",
      question: "What is a medical-grade facial?",
      answer:
        "A medical-grade facial uses clinical-strength products and advanced techniques performed by trained aestheticians. Unlike spa facials, our treatments are customized based on skin analysis and designed to deliver measurable results for specific skin concerns.",
    },
    {
      id: "how-often",
      question: "How often should I get a facial?",
      answer:
        "For optimal results, we recommend facials every 4-6 weeks. This aligns with your skin's natural renewal cycle and helps maintain consistent improvements in skin health and appearance.",
    },
    {
      id: "first-time",
      question: "What should I expect for my first facial?",
      answer:
        "Your first facial includes a thorough skin analysis and consultation. We'll discuss your concerns, customize the treatment, and provide recommendations for home care. The experience is relaxing with visible results immediately after.",
    },
    {
      id: "sensitive-skin",
      question: "Can I get a facial if I have sensitive skin?",
      answer:
        "Absolutely! Our facials are customized for all skin types, including sensitive skin. We use gentle, medical-grade products and adjust techniques to ensure a comfortable, effective treatment without irritation.",
    },
    {
      id: "pricing",
      question: "How much does a facial cost in Dublin?",
      answer:
        "Our professional facials start from €100. Pricing varies based on the specific treatment and any add-ons. Contact us for a consultation to discuss the best facial treatment for your needs and exact pricing.",
    },
  ],
};

// Detailed Chemical Peels treatment data
export const chemicalPeelsDetail: SkinTreatmentDetail = {
  id: "chemical-peels",
  name: "Chemical Peels",
  tagline: "Reveal Fresh, Radiant Skin",
  description: `Chemical peels are medical-grade treatments that use carefully formulated acids to exfoliate and renew the skin. By removing the outer layers of dead, damaged skin cells, chemical peels reveal the fresh, healthy skin beneath while stimulating collagen production for long-term improvements.

Our peels are customized to your skin type and concerns, ranging from gentle superficial peels for maintenance and glow to deeper peels for more significant concerns like acne scarring, hyperpigmentation, and aging. Unlike over-the-counter products, our medical-grade peels deliver professional-strength results under expert supervision.

Whether you're dealing with dull skin, fine lines, acne, or sun damage, chemical peels can dramatically improve your skin's appearance and health. The treatment is quick, effective, and can be tailored to fit your schedule and tolerance for downtime.`,
  heroImage: "/assets/chemical_peel.png",
  quickFacts: {
    duration: "30-45 minutes",
    downtime: "Varies: None to 7 days depending on peel depth",
    resultsTimeline: "Visible improvement within days, progressive results over weeks",
    treatmentFrequency: "Every 4-6 weeks for series, maintenance quarterly",
  },
  howItWorks: {
    title: "How Chemical Peels Work",
    description:
      "Chemical peels use controlled exfoliation to remove damaged skin layers and stimulate renewal, revealing healthier, more radiant skin.",
    steps: [
      {
        title: "Skin Preparation",
        description:
          "Skin is thoroughly cleansed and prepped to ensure even penetration of the peel solution. We assess your skin and select the appropriate peel strength.",
      },
      {
        title: "Peel Application",
        description:
          "The medical-grade chemical solution is carefully applied to target areas. You may feel tingling or warmth as the peel works to exfoliate and renew your skin.",
      },
      {
        title: "Neutralization & Protection",
        description:
          "The peel is neutralized and removed. Soothing, protective products are applied to support healing and maximize results while minimizing any discomfort.",
      },
    ],
  },
  benefits: [
    "Removes dead skin cells and reveals fresh skin",
    "Reduces fine lines and wrinkles",
    "Improves skin texture and smoothness",
    "Brightens complexion and evens skin tone",
    "Treats acne and prevents breakouts",
    "Reduces hyperpigmentation and sun damage",
    "Minimizes pore size",
    "Stimulates collagen production",
    "Enhances product absorption",
    "Customizable to your skin needs",
  ],
  idealFor: [
    "Dull, tired-looking skin",
    "Fine lines and early aging signs",
    "Acne and acne scarring",
    "Hyperpigmentation and dark spots",
    "Sun damage and age spots",
    "Uneven skin texture",
    "Large pores",
    "Melasma",
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After series of chemical peels - dramatically improved texture and tone",
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "Post-peel results - brighter, more even complexion",
    },
  ],
  expertQuote: {
    quote:
      "Chemical peels are one of the most effective treatments for comprehensive skin renewal. They address multiple concerns simultaneously and deliver results that you simply can't achieve with topical products alone. The key is customization - selecting the right peel for your specific skin type and goals.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  faqs: [
    {
      id: "what-is-peel",
      question: "What is a chemical peel?",
      answer:
        "A chemical peel is a medical-grade treatment that uses specialized acids to exfoliate and remove damaged outer layers of skin. This reveals fresher, healthier skin and stimulates collagen production for improved texture, tone, and overall appearance.",
    },
    {
      id: "downtime",
      question: "How much downtime is required after a chemical peel?",
      answer:
        "Downtime varies by peel depth. Superficial peels have minimal to no downtime with slight flaking for 2-3 days. Medium peels may have 3-5 days of peeling. We'll recommend the appropriate peel based on your schedule and goals.",
    },
    {
      id: "painful",
      question: "Are chemical peels painful?",
      answer:
        "Most clients experience only mild tingling or warmth during the treatment. The sensation is temporary and well-tolerated. We monitor your comfort throughout and can adjust the treatment as needed.",
    },
    {
      id: "how-many",
      question: "How many chemical peel treatments will I need?",
      answer:
        "Results are visible after one treatment, but optimal results typically require a series of 3-6 peels spaced 4-6 weeks apart. Maintenance peels every 3-4 months help sustain results long-term.",
    },
    {
      id: "pricing",
      question: "How much do chemical peels cost in Dublin?",
      answer:
        "Chemical peels at Facecult start from €120. Pricing varies based on peel type and depth. We offer package deals for series treatments. Contact us for a consultation to determine the best peel for your needs.",
    },
  ],
};

// Detailed Laser Hollywood Facial treatment data
export const laserHollywoodFacialDetail: SkinTreatmentDetail = {
  id: "laser-hollywood-facial",
  name: "Laser Hollywood Facial",
  tagline: "Red Carpet Ready Skin in Minutes",
  description: `The Laser Hollywood Facial, also known as the Carbon Laser Peel, is the celebrity secret for achieving instant red carpet-ready skin. This revolutionary treatment combines a special carbon mask with laser technology to deeply cleanse, refine pores, and give your skin an instant luminous glow.

Perfect for special occasions, events, or whenever you want your skin to look its absolute best, the Hollywood Facial delivers dramatic results with zero downtime. The treatment works by applying a carbon lotion that penetrates deep into pores, which is then targeted by laser energy to vaporize impurities, dead skin cells, and excess oil.

Popular with celebrities before major events, this treatment has become the go-to solution for anyone wanting instantly refined, glowing skin. The results are immediate - tighter pores, smoother texture, controlled oil production, and that coveted red carpet radiance.`,
  heroImage: "/assets/hollywood_laser_peel.png",
  quickFacts: {
    duration: "45 minutes",
    downtime: "None - immediate return to activities",
    resultsTimeline: "Instant glow, progressive improvements over following days",
    treatmentFrequency: "Monthly for optimal results, or before special events",
  },
  howItWorks: {
    title: "The Hollywood Facial Process",
    description:
      "This innovative treatment combines carbon technology with laser energy for instant skin refinement and glow.",
    steps: [
      {
        title: "Carbon Mask Application",
        description:
          "A specialized medical-grade carbon lotion is applied to your skin. The carbon particles penetrate deep into pores, binding to oil, dirt, and dead skin cells.",
      },
      {
        title: "Laser Treatment",
        description:
          "Laser energy is carefully passed over the carbon-treated skin. The laser is attracted to the carbon particles, creating a controlled explosion that vaporizes impurities and stimulates collagen.",
      },
      {
        title: "Soothing & Protection",
        description:
          "After the laser treatment, a soothing serum and SPF are applied. You'll see immediately refined pores, smoother texture, and radiant glow - ready for any event.",
      },
    ],
  },
  benefits: [
    "Instant skin refinement and glow",
    "Dramatically reduces pore size",
    "Deep cleansing of pores",
    "Controls excess oil production",
    "Improves skin texture and smoothness",
    "Stimulates collagen production",
    "Reduces fine lines",
    "Evens skin tone",
    "No downtime - event-ready immediately",
    "Suitable for all skin types",
  ],
  idealFor: [
    "Special events and occasions",
    "Before important meetings or photos",
    "Enlarged pores",
    "Oily and congested skin",
    "Dull complexion",
    "Uneven skin texture",
    "Busy professionals",
    "Anyone wanting instant results",
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Immediately after Hollywood Facial - refined pores and radiant glow",
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "Single treatment results - dramatically improved texture",
    },
  ],
  expertQuote: {
    quote:
      "The Laser Hollywood Facial is my go-to recommendation for clients with important events. The results are instant and dramatic - refined pores, controlled oil, and that celebrity glow. It's called the Hollywood Facial for a reason - it gets you red carpet ready.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  faqs: [
    {
      id: "what-is-hollywood",
      question: "What is the Laser Hollywood Facial?",
      answer:
        "The Laser Hollywood Facial, or Carbon Laser Peel, combines a carbon mask with laser technology to deeply cleanse pores, refine texture, and create an instant glow. It's the celebrity secret for red carpet-ready skin with zero downtime.",
    },
    {
      id: "painful",
      question: "Is the Hollywood Facial painful?",
      answer:
        "No, the treatment is generally painless. Most clients describe a warm, tingling sensation and may hear small popping sounds as the laser targets the carbon particles. The experience is comfortable and relaxing.",
    },
    {
      id: "immediate",
      question: "Can I see results immediately?",
      answer:
        "Yes! One of the main benefits is instant visible results. You'll see refined pores, smoother texture, and radiant glow immediately after treatment - perfect for events the same day.",
    },
    {
      id: "how-often",
      question: "How often should I get a Hollywood Facial?",
      answer:
        "For ongoing skin refinement and maintenance, monthly treatments are ideal. Many clients also book this treatment before important events, weddings, or photoshoots for instant red carpet-ready skin.",
    },
    {
      id: "pricing",
      question: "How much does a Hollywood Facial cost in Dublin?",
      answer:
        "Laser Hollywood Facial treatments at Facecult start from €150. This premium treatment delivers instant, dramatic results with no downtime. Contact us to book your red carpet-ready appointment.",
    },
  ],
};

// Detailed IPL treatment data
export const iplDetail: SkinTreatmentDetail = {
  id: "ipl",
  name: "IPL Treatment",
  tagline: "Advanced Light Therapy for Flawless Skin",
  description: `IPL (Intense Pulsed Light) is an advanced, non-invasive treatment that uses broad-spectrum light to target and correct a wide range of skin concerns. Unlike lasers that use a single wavelength, IPL delivers multiple wavelengths of light energy to treat pigmentation, redness, sun damage, and signs of aging simultaneously.

The technology works by delivering precise pulses of light energy into the skin, where it's absorbed by pigmented cells and blood vessels. This breaks down unwanted pigmentation and closes dilated blood vessels, leading to dramatic improvements in skin tone, texture, and overall appearance.

IPL is particularly effective for treating sun damage, age spots, rosacea, and broken capillaries - issues that are often difficult to address with topical products alone. The treatment is safe, effective, and requires minimal downtime, making it perfect for busy individuals seeking significant skin improvements.`,
  heroImage: "/assets/laser_ipl.png",
  quickFacts: {
    duration: "30-45 minutes",
    downtime: "Minimal - slight redness for 1-2 hours",
    resultsTimeline: "Progressive improvement over 2-4 weeks, optimal after series",
    treatmentFrequency: "3-6 treatments spaced 4 weeks apart, then maintenance",
  },
  howItWorks: {
    title: "How IPL Technology Works",
    description:
      "IPL uses controlled light energy to target and eliminate pigmentation, redness, and other skin imperfections at their source.",
    steps: [
      {
        title: "Skin Preparation & Protection",
        description:
          "Skin is cleansed and a cooling gel is applied. Protective eyewear is provided. We assess your skin and customize treatment settings for safe, effective results.",
      },
      {
        title: "Light Pulse Delivery",
        description:
          "The IPL handpiece delivers precise pulses of light energy to target areas. The light penetrates skin to target pigmented cells and blood vessels. You'll feel a warm, snapping sensation.",
      },
      {
        title: "Post-Treatment Care",
        description:
          "Cooling gel is removed and soothing products applied. Treated pigmentation may darken temporarily before flaking off. Strict sun protection is essential for optimal results.",
      },
    ],
  },
  benefits: [
    "Reduces pigmentation and age spots",
    "Treats sun damage effectively",
    "Minimizes redness and rosacea",
    "Reduces visible blood vessels and capillaries",
    "Evens overall skin tone",
    "Improves skin texture",
    "Stimulates collagen production",
    "Non-invasive with minimal downtime",
    "Treats large areas quickly",
    "Long-lasting results",
  ],
  idealFor: [
    "Sun damage and age spots",
    "Hyperpigmentation and melasma",
    "Rosacea and facial redness",
    "Broken capillaries and blood vessels",
    "Uneven skin tone",
    "Freckles",
    "Overall skin rejuvenation",
    "Those seeking non-invasive solutions",
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After IPL series - dramatically reduced pigmentation and redness",
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "IPL treatment results - even tone and clearer complexion",
    },
  ],
  expertQuote: {
    quote:
      "IPL is remarkable for its versatility - it can address multiple skin concerns in one treatment. I especially love it for sun damage and rosacea, conditions that are challenging to treat otherwise. The results are progressive and natural-looking, with each treatment building on the last.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  faqs: [
    {
      id: "what-is-ipl",
      question: "What is IPL treatment?",
      answer:
        "IPL (Intense Pulsed Light) is a non-invasive light therapy that targets pigmentation, redness, and sun damage. It delivers broad-spectrum light energy that's absorbed by unwanted pigment and blood vessels, breaking them down for clearer, more even skin.",
    },
    {
      id: "painful",
      question: "Does IPL hurt?",
      answer:
        "Most clients describe IPL as feeling like a warm rubber band snap against the skin. The sensation is brief and generally well-tolerated. We apply cooling gel and can adjust settings for your comfort.",
    },
    {
      id: "how-many",
      question: "How many IPL treatments will I need?",
      answer:
        "Optimal results typically require a series of 3-6 treatments spaced 4 weeks apart. The exact number depends on your specific concerns and skin condition. Maintenance treatments every 6-12 months help sustain results.",
    },
    {
      id: "sun-exposure",
      question: "Can I go in the sun after IPL?",
      answer:
        "You must avoid sun exposure and use SPF 50+ for at least 2 weeks before and 4 weeks after treatment. Sun exposure can interfere with results and increase risk of complications. We'll provide detailed aftercare instructions.",
    },
    {
      id: "pricing",
      question: "How much does IPL cost in Dublin?",
      answer:
        "IPL treatments at Facecult start from €200. Pricing varies based on treatment area and number of sessions. We offer package deals for series treatments. Contact us for a consultation and personalised treatment plan.",
    },
  ],
};
