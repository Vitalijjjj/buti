/**
 * Treatment Data
 *
 * Contains all treatment content for detailed treatment pages.
 * Add new treatments by following the Treatment interface structure.
 */

import { Treatment } from "@/types/treatment";

export const botoxTreatment: Treatment = {
  id: "botox",
  name: "Anti-Wrinkle Injections (Botox®)",
  category: "Cosmetic Injections",
  categoryPath: "Injectables > Cosmetic Injections",
  tagline: "Look Natural, Feel Confident with Doctor-Led Anti-Wrinkle Injections",
  description: `Whether you want to lift drooping eyebrows, refine the jawline, or refresh tired-looking skin, our wrinkle reduction treatments deliver subtle, natural-looking results that boost your confidence without changing your unique features.

Led by experienced doctors, our injectable treatments are tailored to you, providing long-lasting results for both static and dynamic wrinkles. These injectables work by blocking the signals between the nerves and muscles to create long-lasting effects.

We believe in enhancing your natural beauty, not changing it. With our anti-wrinkle injections, you'll enjoy smoother skin and the confidence that comes with looking your best.`,
  heroImage: "/assets/Hero.png",
  quickFacts: {
    treatmentLength: "30 mins",
    resultsSeen: "1-2 weeks",
    durationOfResults: "3-6 months",
    sessionFrequency: "Every 3-6 months",
  },
  howItWorks: {
    heading: "How Anti-Wrinkle Injections Work",
    description: `At Facecult, our medically precise anti-wrinkle injections target and interrupt nerve-to-muscle communication. This controlled, temporary muscle relaxation smooths dynamic expressions like lip lines, crow's feet, and forehead creases, helping both to soften existing wrinkles and inhibit the formation of new ones.

Administered by our experienced doctors, the treatment is individually tailored to preserve your unique facial anatomy, delivering subtle, natural-looking rejuvenation without compromising expressiveness. The procedure is quick, virtually painless, and requires no downtime, making it perfect for busy lifestyles.`,
    image: "/assets/services_hero.png",
  },
  results: {
    heading: "Our Clients See Real Results",
    description: `Results from your treatment will start to appear within 5–7 days, with the full effect visible after 2 weeks. To ensure you're fully satisfied with your results, we offer a complimentary follow-up appointment two weeks after your treatment. During this visit, our expert team will review your progress and, if necessary, provide any touch-ups to help you achieve your desired look.`,
    beforeImage: "/assets/Hero.png",
    afterImage: "/assets/Hero.png",
  },
  treatmentAreas: [
    {
      id: "forehead-lines",
      title: "Forehead Lines",
      description: "Lines that show when you raise your brows.",
      detailedDescription:
        "Horizontal forehead lines are caused by repeated raising of the eyebrows. Our anti-wrinkle injections relax the frontalis muscle, smoothing these lines while maintaining natural movement and expression. Results are subtle and natural-looking, helping you appear more refreshed and youthful.",
      benefits: [
        "Smooths horizontal forehead creases",
        "Prevents deepening of existing lines",
        "Maintains natural facial expressions",
        "Quick 10-15 minute procedure",
        "Results last 3-6 months",
      ],
      pricing: "From €150",
      duration: "10-15 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "frown-lines",
      title: "Frown Lines (11s)",
      description: "Frown lines, known also as \"elevens\".",
      detailedDescription:
        "The vertical lines between your eyebrows, often called \"11 lines\" or glabellar lines, can make you appear angry or stressed even when you're not. Our targeted injections relax the corrugator and procerus muscles, softening these lines and creating a more relaxed, approachable appearance.",
      benefits: [
        "Softens vertical lines between brows",
        "Creates a more relaxed appearance",
        "Prevents formation of deeper wrinkles",
        "Minimal discomfort",
        "No downtime required",
      ],
      pricing: "From €150",
      duration: "10-15 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "crows-feet",
      title: "Crow's Feet",
      description: "Eye lines that show while smiling or squinting.",
      detailedDescription:
        "The fine lines that radiate from the outer corners of your eyes are known as crow's feet. While they're a natural part of aging and expression, our gentle anti-wrinkle treatment can soften these lines, helping your eyes appear more youthful and refreshed while preserving your natural smile.",
      benefits: [
        "Reduces fine lines around eyes",
        "Maintains genuine smile appearance",
        "Prevents wrinkle deepening",
        "Quick and comfortable treatment",
        "Long-lasting natural results",
      ],
      pricing: "From €150",
      duration: "10-15 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "masseter",
      title: "Masseter (Jaw Slimming)",
      description:
        "Injections into the masseter muscle relax jaw tension, slim the face and reduce teeth grinding.",
      detailedDescription:
        "Masseter muscle reduction is a dual-purpose treatment that slims and contours the jawline while reducing teeth grinding (bruxism) and jaw tension. By relaxing the overdeveloped masseter muscles, we create a softer, more V-shaped facial contour while alleviating TMJ discomfort and protecting your teeth from grinding damage.",
      benefits: [
        "Slims and contours the jawline",
        "Reduces teeth grinding (bruxism)",
        "Relieves TMJ pain and tension",
        "Creates V-shaped facial contour",
        "Non-surgical facial sculpting",
      ],
      pricing: "From €350",
      duration: "15-20 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "gummy-smile",
      title: "Gummy Smile",
      description:
        "Anti-wrinkle treatments can relax the upper lip muscles to reduce gum exposure when smiling.",
      detailedDescription:
        "A gummy smile occurs when too much of your upper gums show when you smile. Our precise anti-wrinkle treatment relaxes the muscles that elevate your upper lip, reducing gum exposure and creating a more balanced, confident smile without affecting your ability to smile naturally.",
      benefits: [
        "Reduces excessive gum display",
        "Creates balanced smile aesthetics",
        "Non-surgical solution",
        "Maintains natural smile function",
        "Quick treatment with no downtime",
      ],
      pricing: "From €150",
      duration: "10 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "lip-flip",
      title: "Lip Flip",
      description:
        "A lip flip subtly lifts the upper lip, creating a fuller appearance without adding volume.",
      detailedDescription:
        "The lip flip is a subtle enhancement that relaxes the muscles around the upper lip, causing it to gently roll outward. This creates the appearance of fuller, more defined lips without adding volume, perfect for those who want subtle enhancement or who feel their upper lip disappears when they smile.",
      benefits: [
        "Subtle lip enhancement without filler",
        "Creates fuller upper lip appearance",
        "Prevents lip from disappearing when smiling",
        "Natural-looking results",
        "Quick and affordable option",
      ],
      pricing: "From €100",
      duration: "5-10 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "brow-lift",
      title: "Brow Lift",
      description:
        "A brow lift with anti-wrinkle injections gently elevates the eyebrows for a more lifted look.",
      detailedDescription:
        "The non-surgical brow lift uses strategic anti-wrinkle injections to relax the muscles that pull the brows downward, allowing the natural lifting muscles to elevate the eyebrows. This creates a more youthful, alert appearance and can help open up the eye area without surgery.",
      benefits: [
        "Lifts drooping eyebrows naturally",
        "Opens up the eye area",
        "Creates more youthful appearance",
        "Non-surgical alternative to brow surgery",
        "Results visible within 1-2 weeks",
      ],
      pricing: "From €150",
      duration: "10-15 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "trapezius",
      title: "Trapezius (TrapTox)",
      description:
        "Trapezius treatment relaxes shoulders, easing tension and slimming the neck and shoulder line.",
      detailedDescription:
        "TrapTox is an innovative treatment that targets the trapezius muscles in your shoulders and neck. By relaxing these often overworked muscles, we can relieve chronic tension, reduce shoulder bulk, create a more elegant neckline, and alleviate tension headaches caused by muscle tightness.",
      benefits: [
        "Relieves chronic neck and shoulder tension",
        "Slims the shoulder line",
        "Creates elegant neck contour",
        "Reduces tension headaches",
        "Improves posture-related discomfort",
      ],
      pricing: "From €400",
      duration: "15-20 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "neck-bands",
      title: "Neck Bands",
      description:
        "Relaxes the platysma muscles to smooth the appearance of neck bands.",
      detailedDescription:
        "Platysmal bands are the vertical cords that appear in the neck as we age. Our anti-wrinkle treatment relaxes the platysma muscle, softening these bands and creating a smoother, more youthful neck appearance. This treatment can also help with the appearance of a &apos;turkey neck&apos; and create better definition along the jawline.",
      benefits: [
        "Smooths vertical neck bands",
        "Creates more youthful neck appearance",
        "Improves jawline definition",
        "Non-surgical neck rejuvenation",
        "Minimal downtime",
      ],
      pricing: "From €250",
      duration: "15 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "bunny-lines",
      title: "Bunny Lines",
      description:
        "Treatment reduces nostril flaring by relaxing the muscles around the nose.",
      detailedDescription:
        "Bunny lines are the diagonal wrinkles that appear on either side of your nose when you scrunch it. While often considered cute, some people find them bothersome. Our precise treatment relaxes the nasalis muscle, softening these lines while maintaining natural facial expression.",
      benefits: [
        "Smooths diagonal nose wrinkles",
        "Reduces nostril flaring",
        "Subtle, natural-looking results",
        "Quick treatment",
        "Complements other facial treatments",
      ],
      pricing: "From €100",
      duration: "5-10 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "chin-dimpling",
      title: "Chin Dimpling",
      description: "Smooths the chin area to reduce dimpling.",
      detailedDescription:
        "Chin dimpling, often called &apos;orange peel chin&apos; or &apos;pebble chin,&apos; occurs when the mentalis muscle in your chin contracts. Our anti-wrinkle treatment relaxes this muscle, creating a smoother, more refined chin contour and reducing the dimpled appearance.",
      benefits: [
        "Smooths dimpled chin texture",
        "Creates refined chin contour",
        "Reduces orange peel appearance",
        "Quick and effective treatment",
        "Natural-looking results",
      ],
      pricing: "From €100",
      duration: "5-10 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "underarm-sweating",
      title: "Underarm Sweating (Hyperhidrosis)",
      description:
        "Treatment blocks sweat glands, effectively reducing excessive sweating in targeted areas.",
      detailedDescription:
        "Hyperhidrosis, or excessive sweating, can be embarrassing and impact your confidence. Our anti-wrinkle treatment for underarm sweating blocks the chemical signals that activate your sweat glands, dramatically reducing perspiration. Results can last 6-12 months, giving you freedom from worry about sweat marks and odor.",
      benefits: [
        "Reduces excessive underarm sweating",
        "Results last 6-12 months",
        "Increases confidence in social situations",
        "No more sweat marks on clothing",
        "Quick treatment with minimal discomfort",
      ],
      pricing: "From €450",
      duration: "20-30 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "hand-sweating",
      title: "Hand Sweating",
      description:
        "Target sweat glands in the hands to significantly reduce excessive sweating.",
      detailedDescription:
        "Excessive hand sweating (palmar hyperhidrosis) can affect your professional and personal life, from handshakes to holding hands. Our treatment blocks the signals to sweat glands in your palms, significantly reducing moisture and allowing you to feel confident in any situation. Results typically last 4-6 months.",
      benefits: [
        "Dramatically reduces palm sweating",
        "Improves confidence in social situations",
        "No more clammy handshakes",
        "Results last 4-6 months",
        "Life-changing for severe cases",
      ],
      pricing: "From €500",
      duration: "30 mins",
      image: "/assets/Hero.png",
    },
  ],
  expertQuote: {
    quote:
      "Cosmetic Injections are an extension of good skincare. They work by relaxing specific muscles of facial expression that are associated with tiredness, stress and aging. The treatment is tailored and bespoke to every individual patient to create a fresher, more youthful look in a very natural and subtle way.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  cta: {
    heading: "Ready to Get Started?",
    description:
      "Book your free consultation today and discover how our doctor-led treatments can help you look and feel your best.",
    buttonText: "Book Free Consultation",
    buttonLink: "/book-consultation",
  },
};

export const hydrafacialTreatment: Treatment = {
  id: "hydrafacial",
  name: "HydraFacial",
  category: "Advanced Skin Treatment",
  categoryPath: "Skin Treatments > Advanced Treatments",
  tagline: "Deep Cleansing, Hydration & Radiance in One Treatment",
  description: `HydraFacial is a revolutionary medical-grade facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one seamless treatment. Perfect for all skin types, HydraFacial addresses multiple skin concerns simultaneously, delivering instant, noticeable results with zero downtime.

Whether you're dealing with acne, fine lines, hyperpigmentation, or dull skin, HydraFacial's patented Vortex-Fusion technology gently removes impurities while simultaneously infusing skin with intensive serums tailored to your specific needs. The result is clearer, more radiant skin that looks and feels healthier immediately.

Experience the treatment that celebrities and skincare experts swear by – combining advanced medical technology with a relaxing, luxurious experience that rejuvenates your skin from the inside out.`,
  heroImage: "/assets/services_hero.png",
  quickFacts: {
    treatmentLength: "30-60 mins",
    resultsSeen: "Immediately",
    durationOfResults: "4-6 weeks",
    sessionFrequency: "Every 4-6 weeks",
  },
  howItWorks: {
    heading: "How HydraFacial Works",
    description: `HydraFacial uses patented Vortex-Fusion technology to perform a multi-step treatment that cleanses, exfoliates, extracts, and hydrates your skin. Unlike traditional facials that can be harsh and irritating, HydraFacial's gentle spiral design creates a vortex effect to dislodge and remove impurities while simultaneously delivering hydrating skin solutions.

The treatment is customizable with boosters and serums targeted to your specific skin concerns – whether that's acne, aging, hyperpigmentation, or sensitivity. Each step is designed to work synergistically, preparing your skin to absorb maximum benefits from the nourishing serums applied during the treatment.`,
    image: "/assets/Hero.png",
  },
  results: {
    heading: "See Results Immediately",
    description: `One of the most remarkable aspects of HydraFacial is that you'll see and feel results immediately after your first treatment. Your skin will look brighter, feel smoother, and appear more radiant. For optimal long-term results, we recommend a series of treatments tailored to your skin goals, with maintenance sessions every 4-6 weeks.`,
    beforeImage: "/assets/Hero.png",
    afterImage: "/assets/Hero.png",
  },
  treatmentAreas: [
    {
      id: "acne-oily-skin",
      title: "Acne & Oily Skin",
      description: "Deep cleansing and extraction to clear breakouts and control oil",
      detailedDescription:
        "HydraFacial for acne combines deep pore cleansing with gentle extraction to remove blackheads, whiteheads, and congestion. The treatment includes salicylic acid to penetrate pores, blue LED light to kill acne bacteria, and soothing serums to reduce inflammation without irritation.",
      benefits: [
        "Clears clogged pores and blackheads",
        "Reduces active breakouts and inflammation",
        "Controls excess oil production",
        "Prevents future blemishes",
        "No purging or downtime",
      ],
      pricing: "From €150",
      duration: "45 mins",
      image: "/assets/services_hero.png",
    },
    {
      id: "fine-lines-wrinkles",
      title: "Fine Lines & Wrinkles",
      description: "Anti-aging serums and peptides for smoother, younger-looking skin",
      detailedDescription:
        "Combat signs of aging with our anti-aging HydraFacial. We infuse skin with powerful peptides, antioxidants, and hyaluronic acid to plump fine lines, improve skin texture, and boost collagen production. Red LED light therapy enhances results by stimulating cellular renewal.",
      benefits: [
        "Reduces appearance of fine lines",
        "Improves skin firmness and elasticity",
        "Boosts collagen production",
        "Hydrates deeply for plumper skin",
        "Enhances skin radiance",
      ],
      pricing: "From €180",
      duration: "60 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "pigmentation",
      title: "Pigmentation & Sun Damage",
      description: "Brightening serums to fade dark spots and even skin tone",
      detailedDescription:
        "Our brightening HydraFacial targets hyperpigmentation, sun damage, and uneven skin tone. We use specialized serums containing brightening agents, vitamin C, and kojic acid to fade dark spots and reveal a more even, luminous complexion.",
      benefits: [
        "Fades dark spots and melasma",
        "Evens out skin tone",
        "Reduces sun damage",
        "Brightens complexion",
        "Safe for all skin tones",
      ],
      pricing: "From €170",
      duration: "50 mins",
      image: "/assets/services_hero.png",
    },
    {
      id: "dehydrated-skin",
      title: "Dehydrated & Dull Skin",
      description: "Intensive hydration for plump, glowing skin",
      detailedDescription:
        "Restore your skin's moisture barrier with our hydration-focused HydraFacial. Multiple layers of hyaluronic acid, antioxidants, and nourishing serums deeply hydrate and revitalize tired, dull skin, revealing a healthy, dewy glow.",
      benefits: [
        "Deeply hydrates dry skin",
        "Restores radiance and glow",
        "Plumps and smooths texture",
        "Strengthens moisture barrier",
        "Immediate luminosity",
      ],
      pricing: "From €150",
      duration: "45 mins",
      image: "/assets/Hero.png",
    },
    {
      id: "sensitive-skin",
      title: "Redness & Sensitivity",
      description: "Gentle treatment with calming serums for reactive skin",
      detailedDescription:
        "Our gentle HydraFacial for sensitive skin uses the lowest suction settings and calming, anti-inflammatory serums to cleanse and nourish without irritation. Perfect for rosacea-prone skin or anyone with sensitivity concerns.",
      benefits: [
        "Reduces redness and inflammation",
        "Calms irritated skin",
        "Gentle enough for rosacea",
        "Strengthens skin barrier",
        "No irritation or flare-ups",
      ],
      pricing: "From €160",
      duration: "45 mins",
      image: "/assets/services_hero.png",
    },
    {
      id: "enlarged-pores",
      title: "Enlarged Pores",
      description: "Deep cleansing to minimize pore appearance",
      detailedDescription:
        "Target stubborn congestion and minimize the appearance of enlarged pores with our pore-refining HydraFacial. Deep extractions combined with pore-tightening serums help reduce pore size and prevent future congestion.",
      benefits: [
        "Minimizes pore appearance",
        "Deep cleanses congestion",
        "Refines skin texture",
        "Prevents blackheads",
        "Creates smoother complexion",
      ],
      pricing: "From €150",
      duration: "45 mins",
      image: "/assets/Hero.png",
    },
  ],
  expertQuote: {
    quote:
      "HydraFacial is the gold standard in non-invasive skin resurfacing. It addresses multiple skin concerns in one treatment, delivering immediate, visible results without any downtime. I recommend it to clients of all ages and skin types as both a standalone treatment and as preparation for other procedures.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png",
  },
  cta: {
    heading: "Experience the HydraFacial Difference",
    description:
      "Book your HydraFacial today and discover why it's the most popular facial treatment worldwide. See immediate results with zero downtime.",
    buttonText: "Book HydraFacial Now",
    buttonLink: "/book-consultation",
  },
};

// Export all treatments for easy access
export const treatments: Treatment[] = [botoxTreatment, hydrafacialTreatment];
