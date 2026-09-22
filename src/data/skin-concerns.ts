/**
 * Skin Concerns Data
 *
 * Contains all skin concern content for concern pages.
 * Each concern has recommended treatments, before/after, and reviews.
 */

import { SkinConcern } from "@/types/skin-concern";

export const acneConcern: SkinConcern = {
  id: "acne-oily-skin",
  name: "Acne & Oily Skin",
  title: "Acne & Oily Skin Treatment Dublin | Medical-Grade Solutions | Facecult",
  description: `Acne and oily skin are common concerns that can affect confidence and skin health. Whether you're dealing with persistent breakouts, enlarged pores, or excess oil production, our medical-grade treatments provide effective, long-lasting solutions tailored to your skin type.

Our approach combines advanced technology with proven dermatological methods to address the root causes of acne, not just the symptoms. From reducing inflammation and clearing pores to balancing oil production and preventing future breakouts, we create comprehensive treatment plans designed for lasting results.`,
  causes: `Acne and oily skin are typically caused by a combination of factors including hormonal fluctuations, genetics, stress, diet, and environmental triggers. Excess sebum production can clog pores, leading to blackheads, whiteheads, and inflammatory acne. Understanding your unique triggers allows us to create the most effective treatment strategy.`,
  howWeTreat: `Our multi-layered approach to acne treatment includes deep cleansing facials, advanced laser therapies, chemical peels, and LED light therapy. We focus on reducing active breakouts, minimizing scarring, controlling oil production, and preventing future blemishes through personalised treatment protocols and medical-grade skincare.`,
  heroImage: "/assets/concern_acne.png",
  quickFacts: {
    commonAge: "12-40+ years",
    treatmentTime: "30-60 mins per session",
    resultsTimeline: "2-4 weeks for visible improvement",
    maintenanceFrequency: "Every 4-6 weeks",
  },
  recommendedTreatments: [
    {
      id: "hydrafacial",
      name: "HydraFacial",
      tagline: "Deep cleansing and extraction for clear, balanced skin",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/hydrafacial",
    },
    {
      id: "laser-facial",
      name: "Laser Facial",
      tagline: "Target bacteria and reduce inflammation with precision",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/laser-facial",
    },
    {
      id: "chemical-peels",
      name: "Chemical Peels",
      tagline: "Exfoliate, unclog pores, and reveal clearer skin",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/chemical-peels",
    },
    {
      id: "led-therapy",
      name: "LED Light Therapy",
      tagline: "Blue light kills acne bacteria, red light reduces inflammation",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/led-therapy",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Moderate acne cleared after 8 weeks of treatment",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Oily skin balanced with reduced breakouts",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Sarah M.",
      rating: 5,
      date: "2 months ago",
      treatment: "HydraFacial + LED Therapy",
      review:
        "After struggling with adult acne for years, the team at Facecult finally helped me get it under control. The HydraFacial combined with LED therapy has made such a difference. My skin is clearer than it's been in a decade!",
    },
    {
      id: "review-2",
      name: "James K.",
      rating: 5,
      date: "3 months ago",
      treatment: "Laser Facial Series",
      review:
        "The laser facial treatments have been a game-changer for my oily skin and breakouts. Not only are the active spots clearing up, but my overall skin texture has improved dramatically. Highly recommend!",
    },
    {
      id: "review-3",
      name: "Emma L.",
      rating: 5,
      date: "1 month ago",
      treatment: "Chemical Peel + Skincare Plan",
      review:
        "I was skeptical at first, but the personalised approach really works. The chemical peels are gentle but effective, and the medical-grade skincare routine they recommended has kept my acne at bay. So grateful!",
    },
  ],
};

export const scarringConcern: SkinConcern = {
  id: "acne-scarring",
  name: "Acne Scarring",
  title: "Acne Scar Treatment Dublin | Remove Acne Scars | Facecult",
  description: `Acne scarring can be one of the most persistent reminders of past breakouts, affecting both skin texture and confidence. Whether you're dealing with ice pick scars, rolling scars, or boxcar scars, our advanced treatments can significantly reduce their appearance and restore smoother, more even skin.

Our comprehensive approach combines multiple technologies specifically designed to remodel scar tissue, stimulate collagen production, and resurface the skin. From microneedling and RF treatments to laser resurfacing and dermal fillers, we create personalized treatment plans that target your specific scar type for optimal results.`,
  causes: `Acne scars form when inflammatory acne damages the skin's collagen structure. Deep breakouts can destroy skin tissue, causing depressions (atrophic scars), or trigger excess collagen production, creating raised scars (hypertrophic). The severity depends on inflammation levels, genetics, and how the skin was treated during active breakouts.`,
  howWeTreat: `We use advanced technologies including microneedling, RF microneedling, dermal fillers, chemical peels, and laser treatments to rebuild collagen, fill depressions, and resurface scarred skin. Treatment plans are customized based on scar type, depth, and skin tone for safe, effective results.`,
  heroImage: "/assets/concerns_acne_scarring.png",
  quickFacts: {
    commonAge: "18-50+ years",
    treatmentTime: "45-90 mins per session",
    resultsTimeline: "4-8 weeks for visible improvement",
    maintenanceFrequency: "Series of 3-6 treatments",
  },
  recommendedTreatments: [
    {
      id: "microneedling",
      name: "Microneedling",
      tagline: "Stimulate collagen to fill and smooth acne scars",
      image: "/assets/microneedling_1.png",
      href: "/treatments/microneedling/microneedling",
    },
    {
      id: "rf-microneedling",
      name: "RF Microneedling",
      tagline: "Advanced scar remodeling with radiofrequency energy",
      image: "/assets/rf_microneedling.png",
      href: "/treatments/rf-microneedling/doubletite",
    },
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      tagline: "Instantly fill deep atrophic scars for smoother skin",
      image: "/assets/skin_rejuvenation-10.png",
      href: "/treatments/dermal-fillers/bio-fillers",
    },
    {
      id: "chemical-peels",
      name: "Chemical Peels",
      tagline: "Resurface skin and reduce shallow scarring",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/chemical-peels",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Deep acne scars improved after RF microneedling series",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Rolling scars smoothed with microneedling and fillers",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Michael R.",
      rating: 5,
      date: "3 months ago",
      treatment: "RF Microneedling Series",
      review:
        "I've had acne scars for over 10 years and tried everything. The RF microneedling at Facecult has made the biggest difference I've ever seen. My skin texture is so much smoother and the deep scars are barely noticeable now.",
    },
    {
      id: "review-2",
      name: "Lisa T.",
      rating: 5,
      date: "2 months ago",
      treatment: "Microneedling + Dermal Fillers",
      review:
        "The combination approach really works! The microneedling sessions built up collagen gradually, and the fillers filled in the deeper scars immediately. I finally feel confident without makeup.",
    },
    {
      id: "review-3",
      name: "David K.",
      rating: 5,
      date: "4 weeks ago",
      treatment: "Chemical Peel + Microneedling",
      review:
        "After just 3 treatments, my acne scars have faded significantly. The team really knows what they're doing when it comes to scar treatment. Highly recommend to anyone struggling with scarring.",
    },
  ],
};

export const ageingConcern: SkinConcern = {
  id: "ageing-wrinkles",
  name: "Ageing Skin & Wrinkles",
  title: "Anti-Ageing Treatments Dublin | Reduce Wrinkles | Facecult",
  description: `Ageing skin, fine lines, and wrinkles are natural parts of life, but modern aesthetic medicine offers powerful solutions to turn back the clock. From loss of elasticity and volume to deep expression lines and crepey texture, our comprehensive anti-ageing treatments address all visible signs of ageing for natural, youthful results.

Our approach combines dermal fillers, anti-wrinkle injections, skin tightening technologies, and regenerative treatments to restore volume, smooth wrinkles, tighten skin, and stimulate collagen production. Each treatment plan is personalized to your unique ageing concerns and desired outcomes.`,
  causes: `Skin ageing occurs due to decreased collagen and elastin production, sun exposure, lifestyle factors, genetics, and repeated facial expressions. Over time, skin loses volume, elasticity decreases, and wrinkles form. Environmental factors like UV exposure and pollution accelerate the process.`,
  howWeTreat: `We combine multiple modalities including anti-wrinkle injections for expression lines, dermal fillers for volume restoration, HIFU and RF treatments for skin tightening, and regenerative therapies like microneedling with exosomes to stimulate natural collagen production and rejuvenation.`,
  heroImage: "/assets/concerns_ageing.png",
  quickFacts: {
    commonAge: "30-70+ years",
    treatmentTime: "30-90 mins depending on treatment",
    resultsTimeline: "Immediate to 3 months",
    maintenanceFrequency: "Every 6-18 months",
  },
  recommendedTreatments: [
    {
      id: "anti-wrinkle",
      name: "Anti-Wrinkle Injections",
      tagline: "Smooth forehead lines, crow's feet, and frown lines",
      image: "/assets/Hero.png",
      href: "/treatments/injectables/anti-wrinkle",
    },
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      tagline: "Restore lost volume and smooth deep wrinkles",
      image: "/assets/skin_rejuvenation-10.png",
      href: "/treatments/dermal-fillers/bio-fillers",
    },
    {
      id: "hifu",
      name: "HIFU Facelift",
      tagline: "Non-surgical skin tightening and lifting",
      image: "/assets/Hero.png",
      href: "/treatments/facelift/hifu",
    },
    {
      id: "exosomes",
      name: "Exosomes",
      tagline: "Advanced cellular regeneration and rejuvenation",
      image: "/assets/microneedling_1.png",
      href: "/treatments/microneedling/exosomes",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Dramatic wrinkle reduction with anti-wrinkle injections and fillers",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Natural volume restoration and skin tightening with HIFU",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Patricia M.",
      rating: 5,
      date: "1 month ago",
      treatment: "Liquid Facelift",
      review:
        "The liquid facelift has taken years off my appearance! The combination of fillers and anti-wrinkle injections looks so natural. People keep asking if I've changed my skincare routine, not realizing I've had treatments. Perfect!",
    },
    {
      id: "review-2",
      name: "John S.",
      rating: 5,
      date: "6 weeks ago",
      treatment: "HIFU + Anti-Wrinkle",
      review:
        "As a man in my 50s, I wanted to look refreshed without looking 'done'. The HIFU tightened my jawline and the anti-wrinkle injections softened my forehead lines. Exactly the subtle improvement I wanted.",
    },
    {
      id: "review-3",
      name: "Catherine D.",
      rating: 5,
      date: "2 months ago",
      treatment: "Exosomes + Microneedling",
      review:
        "The exosomes treatment has transformed my skin! Not only are my fine lines reduced, but my overall skin quality has improved dramatically. It looks plumper, smoother, and more radiant. Worth every penny.",
    },
  ],
};

export const pigmentationConcern: SkinConcern = {
  id: "pigmentation",
  name: "Pigmentation & Sun Damage",
  title: "Pigmentation Treatment Dublin | Remove Sun Spots | Facecult",
  description: `Pigmentation issues like sun spots, age spots, melasma, and uneven skin tone can make skin appear older and less radiant. Whether caused by sun exposure, hormonal changes, or post-inflammatory hyperpigmentation, our targeted treatments can significantly reduce dark patches and restore even, luminous skin.

Our comprehensive approach uses advanced technologies including laser treatments, chemical peels, medical-grade skincare, and light therapies to break down excess melanin, prevent new pigmentation, and reveal clearer, more even-toned skin.`,
  causes: `Hyperpigmentation occurs when skin produces excess melanin due to UV exposure, hormonal changes (pregnancy, birth control), inflammation from acne or injury, genetics, and certain medications. Sun damage is the most common cause of age spots and uneven pigmentation.`,
  howWeTreat: `We use targeted laser treatments to break down pigmentation, chemical peels to resurface and lighten dark spots, LED therapy to reduce inflammation, and medical-grade skincare with active ingredients like vitamin C, retinoids, and tyrosinase inhibitors to prevent new pigmentation and maintain results.`,
  heroImage: "/assets/concern_pigmentation.png",
  quickFacts: {
    commonAge: "25-70+ years",
    treatmentTime: "30-60 mins per session",
    resultsTimeline: "4-8 weeks for visible fading",
    maintenanceFrequency: "Every 8-12 weeks",
  },
  recommendedTreatments: [
    {
      id: "laser-facial",
      name: "Laser Facial",
      tagline: "Target and break down stubborn pigmentation",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/laser-facial",
    },
    {
      id: "chemical-peels",
      name: "Chemical Peels",
      tagline: "Exfoliate dark spots and reveal brighter skin",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/chemical-peels",
    },
    {
      id: "hydrafacial",
      name: "HydraFacial",
      tagline: "Brighten and even skin tone with antioxidants",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/hydrafacial",
    },
    {
      id: "led-therapy",
      name: "LED Light Therapy",
      tagline: "Reduce inflammation and prevent dark spots",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/led-therapy",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Sun damage and age spots faded after laser treatment series",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Melasma significantly lightened with chemical peels",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Maria G.",
      rating: 5,
      date: "5 weeks ago",
      treatment: "Laser Facial Series",
      review:
        "My sun spots have faded so much after just 3 laser treatments! I spent years trying creams that didn't work. Should have done this sooner. My skin tone is finally even and I feel confident without foundation.",
    },
    {
      id: "review-2",
      name: "Sarah L.",
      rating: 5,
      date: "2 months ago",
      treatment: "Chemical Peel + LED",
      review:
        "Struggled with melasma for years after pregnancy. The combination of chemical peels and LED therapy has made such a difference. The dark patches are barely visible now and my skin looks brighter overall.",
    },
    {
      id: "review-3",
      name: "Anne K.",
      rating: 5,
      date: "3 months ago",
      treatment: "HydraFacial + Medical Skincare",
      review:
        "The HydraFacial treatments combined with the prescribed skincare routine have completely transformed my pigmentation issues. My complexion is clearer and more radiant than it's been in years.",
    },
  ],
};

export const rednessConcern: SkinConcern = {
  id: "redness-sensitivity",
  name: "Redness & Sensitivity",
  title: "Redness & Sensitive Skin Treatment Dublin | Facecult",
  description: `Chronic redness, facial flushing, and sensitive skin can be frustrating and difficult to manage. Whether caused by broken capillaries, reactive skin, or inflammatory conditions, our gentle yet effective treatments can significantly reduce redness, strengthen skin barrier function, and calm irritation.

Our approach focuses on soothing inflammation, strengthening compromised skin barriers, reducing visible blood vessels, and desensitizing reactive skin through targeted treatments and medical-grade skincare specifically formulated for sensitive skin types.`,
  causes: `Redness and sensitivity result from various factors including broken capillaries, thin skin, compromised skin barrier, genetic predisposition, environmental triggers (temperature changes, wind), irritating skincare products, and underlying conditions. The skin's inflammatory response becomes overactive.`,
  howWeTreat: `We use gentle treatments including LED light therapy to reduce inflammation, specialized facials with calming ingredients, laser treatments to target visible blood vessels, and medical-grade skincare to strengthen the skin barrier and reduce reactivity over time.`,
  heroImage: "/assets/concern_sensitivity.png",
  quickFacts: {
    commonAge: "20-60+ years",
    treatmentTime: "30-60 mins per session",
    resultsTimeline: "2-6 weeks for visible calming",
    maintenanceFrequency: "Every 4-8 weeks",
  },
  recommendedTreatments: [
    {
      id: "led-therapy",
      name: "LED Light Therapy",
      tagline: "Reduce inflammation and calm reactive skin",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/led-therapy",
    },
    {
      id: "hydrafacial",
      name: "HydraFacial",
      tagline: "Gentle cleansing with soothing serums",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/hydrafacial",
    },
    {
      id: "laser-facial",
      name: "Laser Facial",
      tagline: "Target and reduce visible blood vessels",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/laser-facial",
    },
    {
      id: "bio-fillers",
      name: "Skin Boosters",
      tagline: "Deep hydration to strengthen skin barrier",
      image: "/assets/skin_rejuvenation-10.png",
      href: "/treatments/dermal-fillers/bio-fillers",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Facial redness reduced with LED therapy and barrier repair",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Broken capillaries treated with targeted laser therapy",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Emma W.",
      rating: 5,
      date: "6 weeks ago",
      treatment: "LED Therapy Series",
      review:
        "My skin has always been red and reactive to everything. After a series of LED treatments and switching to their recommended skincare, my redness has calmed down so much. I can finally wear less makeup!",
    },
    {
      id: "review-2",
      name: "Claire B.",
      rating: 5,
      date: "1 month ago",
      treatment: "Laser + HydraFacial",
      review:
        "The laser treatment reduced my broken capillaries significantly, and the HydraFacials keep my sensitive skin calm and hydrated. My complexion is so much more even now without constant redness.",
    },
    {
      id: "review-3",
      name: "Rachel P.",
      rating: 5,
      date: "2 months ago",
      treatment: "Skin Boosters + LED",
      review:
        "This combination has been amazing for my sensitive, red-prone skin. The skin boosters strengthened my skin barrier and the LED calmed inflammation. Best investment I've made in my skin.",
    },
  ],
};

export const rosaceaConcern: SkinConcern = {
  id: "rosacea",
  name: "Rosacea",
  title: "Rosacea Treatment Dublin | Medical-Grade Care | Facecult",
  description: `Rosacea is a chronic inflammatory skin condition causing persistent redness, visible blood vessels, flushing, and sometimes acne-like bumps. While there's no cure, our medical-grade treatments can significantly control symptoms, reduce flare-ups, and improve skin appearance for long-term management.

Our comprehensive rosacea management program combines anti-inflammatory treatments, gentle therapies to reduce redness and visible vessels, barrier repair protocols, and personalized trigger identification to keep your rosacea under control and your skin looking calm and healthy.`,
  causes: `Rosacea's exact cause is unknown but involves genetic predisposition, abnormal blood vessel response, inflammatory triggers, skin barrier dysfunction, and possibly demodex mites. Common triggers include sun exposure, stress, hot drinks, spicy foods, alcohol, and temperature extremes.`,
  howWeTreat: `We create personalized rosacea management plans including LED therapy to reduce inflammation, gentle laser treatments for visible vessels, medical-grade skincare to strengthen the skin barrier, HydraFacials with calming ingredients, and trigger identification to minimize flare-ups.`,
  heroImage: "/assets/concern_rosacea.png",
  quickFacts: {
    commonAge: "30-60+ years",
    treatmentTime: "30-75 mins per session",
    resultsTimeline: "4-8 weeks for symptom reduction",
    maintenanceFrequency: "Ongoing management every 4-8 weeks",
  },
  recommendedTreatments: [
    {
      id: "led-therapy",
      name: "LED Light Therapy",
      tagline: "Reduce inflammation and prevent flare-ups",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/led-therapy",
    },
    {
      id: "laser-facial",
      name: "Laser Facial",
      tagline: "Target visible blood vessels and persistent redness",
      image: "/assets/Hero.png",
      href: "/treatments/skin-treatments/laser-facial",
    },
    {
      id: "hydrafacial",
      name: "HydraFacial",
      tagline: "Gentle treatment with anti-inflammatory serums",
      image: "/assets/services_hero.png",
      href: "/treatments/skin-treatments/hydrafacial",
    },
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      tagline: "Strengthen compromised skin barrier",
      image: "/assets/skin_rejuvenation-10.png",
      href: "/treatments/dermal-fillers/bio-fillers",
    },
  ],
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Rosacea redness and flushing controlled with LED and laser therapy",
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "Visible vessels reduced and skin barrier strengthened",
    },
  ],
  reviews: [
    {
      id: "review-1",
      name: "Jennifer H.",
      rating: 5,
      date: "2 months ago",
      treatment: "Rosacea Management Program",
      review:
        "Living with rosacea has been challenging, but the team at Facecult has helped me finally get it under control. The LED treatments and customized skincare routine have reduced my flare-ups significantly. Life-changing!",
    },
    {
      id: "review-2",
      name: "Thomas M.",
      rating: 5,
      date: "6 weeks ago",
      treatment: "Laser + LED Therapy",
      review:
        "After years of constant redness and flushing, I finally found treatments that work. The laser reduced my visible blood vessels and the LED keeps inflammation down. My skin looks normal for the first time in years.",
    },
    {
      id: "review-3",
      name: "Aoife C.",
      rating: 5,
      date: "3 months ago",
      treatment: "HydraFacial + Barrier Repair",
      review:
        "The gentle HydraFacials combined with medical-grade barrier repair products have transformed my rosacea-prone skin. My skin is calmer, less reactive, and the constant redness has faded. Couldn't be happier!",
    },
  ],
};

// All skin concerns for the tabs
export const allSkinConcerns = [
  {
    id: "acne-oily-skin",
    name: "Acne & Oily Skin",
    href: "/treatments/skin-concerns/acne",
  },
  {
    id: "acne-scarring",
    name: "Acne Scarring",
    href: "/treatments/skin-concerns/scarring",
  },
  {
    id: "ageing-wrinkles",
    name: "Ageing Skin & Wrinkles",
    href: "/treatments/skin-concerns/aging",
  },
  {
    id: "pigmentation",
    name: "Pigmentation & Sun Damage",
    href: "/treatments/skin-concerns/pigmentation",
  },
  {
    id: "redness-sensitivity",
    name: "Redness & Sensitivity",
    href: "/treatments/skin-concerns/redness",
  },
  {
    id: "rosacea",
    name: "Rosacea",
    href: "/treatments/skin-concerns/rosacea",
  },
];
