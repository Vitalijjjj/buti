/**
 * Dermal Fillers Treatments Data
 *
 * Complete data for all dermal filler treatments including:
 * - Treatment descriptions
 * - Benefits
 * - Pricing
 * - FAQs
 * - How it works
 */

export interface DermalFillerTreatment {
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

export const dermalFillersTreatmentsData = {
  title: "Dermal Fillers",
  description:
    "Premium dermal filler treatments in Dublin for facial enhancement and rejuvenation. Expert injectors using medical-grade hyaluronic acid fillers for natural-looking results.",

  treatments: [
    {
      id: "bio-fillers",
      title: "Bio-Fillers",
      description:
        "Advanced bio-stimulating fillers that work with your body to naturally restore volume and stimulate collagen production.",
      detailedDescription:
        "Bio-fillers represent the next generation of dermal filler treatments, using biocompatible materials that stimulate your body's natural collagen production while providing immediate volume restoration. Unlike traditional fillers, bio-fillers work in harmony with your skin's natural processes to create gradual, natural-looking improvements that can last longer. These innovative treatments are ideal for those seeking subtle, natural enhancement with long-term skin quality improvements.",
      benefits: [
        "Stimulates natural collagen production",
        "Provides immediate and long-term results",
        "Biocompatible and safe",
        "Natural-looking enhancement",
        "Improves skin quality over time",
        "Long-lasting results (18-24 months)",
        "Minimal downtime",
      ],
      pricing: {
        singleSession: "€450",
      },
      duration: "45-60 minutes",
      downtime: "Minimal - slight swelling for 24-48 hours",
      image: "/assets/skin_rejuvenation-10.png",
    },
    {
      id: "lip-filler",
      title: "Lip Filler",
      description:
        "Enhance lip volume, shape, and definition with premium hyaluronic acid fillers for natural-looking results.",
      detailedDescription:
        "Lip filler treatments use premium hyaluronic acid-based dermal fillers to enhance lip volume, improve symmetry, define borders, and smooth vertical lip lines. Our expert injectors create natural, balanced results tailored to your facial proportions and aesthetic goals. Whether you desire subtle enhancement or more dramatic volume, we customize each treatment to achieve your ideal lip appearance.",
      benefits: [
        "Adds volume to thin lips",
        "Improves lip symmetry",
        "Defines lip borders",
        "Smooths vertical lip lines",
        "Enhances lip shape",
        "Natural-looking results",
        "Immediate visible improvement",
      ],
      pricing: {
        singleSession: "€350",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - slight swelling for 24-48 hours",
      image: "/assets/Hero.png",
    },
    {
      id: "radiesse",
      title: "Radiesse",
      description:
        "Long-lasting calcium hydroxylapatite filler that stimulates natural collagen production for facial rejuvenation and hand enhancement.",
      detailedDescription:
        "Radiesse is a unique dermal filler made of calcium hydroxylapatite (CaHA) microspheres suspended in a gel carrier. Unlike traditional hyaluronic acid fillers, Radiesse provides immediate volume correction while stimulating your body's natural collagen production for long-lasting results. It's FDA-approved for facial wrinkles, folds, and hand rejuvenation. Radiesse is particularly effective for deeper facial lines, cheek augmentation, jawline contouring, and restoring volume loss in the hands. Results can last 12-18 months or longer.",
      benefits: [
        "Immediate volume restoration",
        "Stimulates natural collagen production",
        "Long-lasting results (12-18+ months)",
        "FDA-approved for face and hands",
        "Natural-looking enhancement",
        "Minimal downtime",
        "Can be diluted for different treatment areas",
      ],
      pricing: {
        singleSession: "€500",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - possible mild swelling for 2-3 days",
      image: "/assets/Hero.png",
    },
    {
      id: "cheek-fillers",
      title: "Cheek Fillers",
      description:
        "Restore volume and enhance cheek contours for a youthful, lifted appearance with dermal fillers.",
      detailedDescription:
        "Cheek filler treatments restore lost volume and enhance cheek contours using premium hyaluronic acid fillers. As we age, the mid-face loses volume, leading to a tired or hollow appearance. Strategic filler placement can restore youthful fullness, create natural lift, and improve overall facial balance. Our technique focuses on creating subtle, natural-looking enhancement that complements your facial structure.",
      benefits: [
        "Restores lost volume",
        "Enhances cheek contours",
        "Creates natural lift effect",
        "Improves facial balance",
        "Reduces appearance of nasolabial folds",
        "Rejuvenates mid-face area",
        "Long-lasting results (12-18 months)",
      ],
      pricing: {
        singleSession: "€400",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - possible mild swelling",
      image: "/assets/Hero.png",
    },
    {
      id: "jawline-contouring",
      title: "Jawline Contouring",
      description:
        "Define and sculpt your jawline for a more contoured, masculine or feminine appearance.",
      detailedDescription:
        "Jawline contouring uses dermal fillers to define, strengthen, and sculpt the jawline for a more contoured facial appearance. This treatment can create a sharper, more defined jaw for a masculine look or a softer, more elegant contour for a feminine aesthetic. Strategic filler placement can also improve jaw asymmetry and create the coveted 'snatched' jawline appearance popular in modern aesthetics.",
      benefits: [
        "Defines and sharpens jawline",
        "Improves facial contours",
        "Corrects asymmetry",
        "Creates more angular appearance",
        "Non-surgical alternative to jaw surgery",
        "Instant visible results",
        "Minimal downtime",
      ],
      pricing: {
        singleSession: "€450",
      },
      duration: "45-60 minutes",
      downtime: "Minimal - slight swelling for 2-3 days",
      image: "/assets/Hero.png",
    },
    {
      id: "chin-augmentation",
      title: "Chin Augmentation",
      description:
        "Enhance chin projection and profile balance with non-surgical dermal filler treatment.",
      detailedDescription:
        "Non-surgical chin augmentation uses dermal fillers to enhance chin projection, improve facial profile, and create better balance between facial features. This treatment can strengthen a weak chin, improve a receding profile, or add definition to the chin area. It's an excellent alternative to surgical chin implants, offering immediate results with no downtime and the ability to adjust the level of enhancement.",
      benefits: [
        "Enhances chin projection",
        "Improves facial profile",
        "Creates better facial balance",
        "Corrects weak or receding chin",
        "Non-surgical alternative",
        "Immediate results",
        "Reversible treatment",
      ],
      pricing: {
        singleSession: "€350",
      },
      duration: "30 minutes",
      downtime: "None - return to activities immediately",
      image: "/assets/Hero.png",
    },
    {
      id: "nasolabial-folds",
      title: "Nasolabial Folds Treatment",
      description:
        "Soften smile lines and reduce the appearance of nasolabial folds for a more youthful look.",
      detailedDescription:
        "Nasolabial fold treatment addresses the deep lines that run from the nose to the corners of the mouth, commonly known as smile lines. Using carefully placed dermal fillers, we can soften these folds, restore volume loss in the area, and create a smoother, more youthful appearance. The treatment is carefully balanced to maintain natural facial movement and expression while reducing the appearance of these age-related lines.",
      benefits: [
        "Softens deep smile lines",
        "Reduces nasolabial fold depth",
        "Restores mid-face volume",
        "Creates smoother facial contours",
        "Natural-looking results",
        "Maintains facial expression",
        "Long-lasting improvement",
      ],
      pricing: {
        singleSession: "€400",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - slight redness possible",
      image: "/assets/Hero.png",
    },
    {
      id: "under-eye-fillers",
      title: "Under Eye Fillers",
      description:
        "Reduce hollowing, dark circles, and tired appearance with specialized under-eye filler treatment.",
      detailedDescription:
        "Under-eye filler treatment, also known as tear trough treatment, addresses hollowing, dark circles, and tired appearance in the under-eye area. This delicate procedure uses specialized fillers designed for the thin skin around the eyes to restore volume, reduce shadowing that causes dark circles, and create a more refreshed, youthful look. Our expert injectors use advanced techniques to achieve natural results in this challenging area.",
      benefits: [
        "Reduces under-eye hollowing",
        "Diminishes dark circles",
        "Creates more youthful eye area",
        "Reduces tired appearance",
        "Smooths tear troughs",
        "Immediate visible improvement",
        "Long-lasting results",
      ],
      pricing: {
        singleSession: "€450",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - possible minor swelling",
      image: "/assets/Hero.png",
    },
    {
      id: "temple-fillers",
      title: "Temple Fillers",
      description:
        "Restore volume loss in the temples for a more youthful, balanced facial appearance.",
      detailedDescription:
        "Temple filler treatment restores volume loss in the temporal area (sides of the forehead above the cheekbones). As we age, this area can become hollow, creating a gaunt or aged appearance. Strategic filler placement in the temples can restore youthful fullness, create better facial balance, and provide a subtle lifting effect to the brow and eye area. This often-overlooked treatment can significantly improve overall facial harmony.",
      benefits: [
        "Restores temple volume",
        "Reduces hollow appearance",
        "Creates more youthful contours",
        "Improves facial balance",
        "Subtle brow lift effect",
        "Enhances facial harmony",
        "Long-lasting results",
      ],
      pricing: {
        singleSession: "€400",
      },
      duration: "30 minutes",
      downtime: "None - return to activities immediately",
      image: "/assets/Hero.png",
    },
    {
      id: "non-surgical-rhinoplasty",
      title: "Non-Surgical Rhinoplasty",
      description:
        "Reshape and refine your nose without surgery using advanced dermal filler techniques.",
      detailedDescription:
        "Non-surgical rhinoplasty, also known as liquid nose job, uses dermal fillers to reshape and refine the nose without surgery. This innovative treatment can smooth bumps, lift the tip, straighten the profile, improve symmetry, and create better nasal proportions. While it cannot reduce nose size, it's highly effective for camouflaging imperfections and creating the appearance of a more refined nose shape. Results are immediate and can last 12-18 months.",
      benefits: [
        "Smooths nasal bumps",
        "Lifts drooping tip",
        "Straightens nasal profile",
        "Improves nose symmetry",
        "No surgery or downtime",
        "Immediate visible results",
        "Reversible treatment",
      ],
      pricing: {
        singleSession: "€450",
      },
      duration: "30-45 minutes",
      downtime: "Minimal - slight swelling for 24-48 hours",
      image: "/assets/Hero.png",
    },
  ],

  faqs: [
    {
      id: "how-long-last",
      question: "How long do dermal fillers last?",
      answer:
        "Dermal fillers typically last 6-18 months depending on the product used, treatment area, and individual factors like metabolism and lifestyle. Areas with more movement (like lips) may see fillers break down faster, while areas with less movement (like cheeks) can last longer. We'll discuss expected longevity during your consultation.",
    },
    {
      id: "painful",
      question: "Are dermal filler treatments painful?",
      answer:
        "Most clients experience minimal discomfort during dermal filler treatments. We use ultra-fine needles and often employ numbing techniques including topical anesthetic cream and dental nerve blocks for more sensitive areas. Many fillers also contain lidocaine (local anesthetic) for added comfort during injection. Most clients describe the sensation as mild pressure with minimal pain.",
    },
    {
      id: "botox-vs-fillers",
      question: "What's the difference between Botox and dermal fillers?",
      answer:
        "Botox and dermal fillers work differently and address different concerns. Botox is a neuromodulator that relaxes muscles to reduce wrinkles caused by facial expressions (like forehead lines and crow's feet). Dermal fillers are gel-like substances that add volume and fill areas that have lost fullness (like lips, cheeks, and nasolabial folds). They're often used together for comprehensive facial rejuvenation.",
    },
    {
      id: "reversible",
      question: "Can dermal fillers be reversed?",
      answer:
        "Yes, hyaluronic acid-based dermal fillers (which we exclusively use) can be dissolved with an enzyme called hyaluronidase if needed. This provides an important safety net and allows us to adjust results if desired. The dissolution process is quick, typically working within 24-48 hours. This reversibility is one reason we prefer hyaluronic acid fillers over permanent options.",
    },
    {
      id: "natural-looking",
      question: "Will I look overdone or unnatural?",
      answer:
        "Not with the right injector! Our philosophy is conservative, natural-looking enhancement that preserves your unique features and facial expressions. We carefully calculate the amount of filler needed and use advanced injection techniques to achieve balanced, harmonious results. You'll still look like yourself—just more refreshed and rejuvenated. We can always add more at a follow-up appointment if desired.",
    },
    {
      id: "results-timeline",
      question: "How soon will I see results from dermal fillers?",
      answer:
        "Results from dermal fillers are visible immediately after treatment. However, there may be initial swelling that can make the area appear slightly overfilled for the first few days. Final results are typically apparent within 2 weeks once any swelling has completely subsided and the filler has settled into its optimal position.",
    },
    {
      id: "aftercare",
      question: "What should I avoid after dermal filler treatment?",
      answer:
        "After dermal filler treatment, avoid strenuous exercise, excessive heat (saunas, hot yoga), alcohol consumption, and facial massages for 24-48 hours. Don't apply makeup for at least 4 hours post-treatment. Avoid blood-thinning medications and supplements (if safe to do so) for a few days to minimize bruising. We'll provide detailed aftercare instructions specific to your treatment area.",
    },
    {
      id: "combining-treatments",
      question: "Can I combine multiple filler treatments?",
      answer:
        "Yes! Many clients achieve the best results by combining multiple filler treatments to address different areas and create overall facial harmony. For example, combining cheek filler with chin augmentation can create better facial balance, or treating nasolabial folds along with lip enhancement can create a more comprehensive rejuvenation. During your consultation, we'll recommend a treatment plan tailored to your goals.",
    },
  ],

  howItWorks: {
    title: "How Dermal Filler Treatments Work",
    description:
      "Our dermal filler treatments are administered by experienced practitioners using advanced injection techniques to ensure optimal results and safety.",
    steps: [
      {
        step: 1,
        title: "Consultation & Assessment",
        description:
          "Comprehensive facial assessment and discussion of your aesthetic goals and desired outcomes.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Customized treatment plan created based on your facial anatomy and aesthetic objectives.",
      },
      {
        step: 3,
        title: "Preparation & Numbing",
        description:
          "Cleansing and optional topical anesthetic or dental nerve block for maximum comfort.",
      },
      {
        step: 4,
        title: "Precise Injection",
        description:
          "Expert filler placement using ultra-fine needles or cannula technique for natural results.",
      },
      {
        step: 5,
        title: "Sculpting & Assessment",
        description:
          "Careful molding and shaping of filler with immediate assessment of symmetry and results.",
      },
      {
        step: 6,
        title: "Aftercare & Follow-Up",
        description:
          "Detailed aftercare instructions and complimentary follow-up appointment to assess results.",
      },
    ],
  },
};
