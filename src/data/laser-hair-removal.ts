/**
 * Laser Hair Removal Treatment Data
 *
 * Complete data for women's and men's laser hair removal treatments
 */

import { LaserHairRemovalData } from "@/types/laser-hair-removal";

// Women's Laser Hair Removal Data
export const laserHairRemovalWomen: LaserHairRemovalData = {
  id: "laser-hair-removal-women",
  gender: "women",
  title: "Laser Hair Removal for Women",
  tagline: "Smooth, Hair-Free Skin That Lasts",
  description: `Say goodbye to razors, waxing, and ingrown hairs forever. Our advanced laser hair removal technology delivers permanent hair reduction for women, targeting unwanted hair on any area of the body. Using medical-grade diode laser technology, we safely and effectively remove hair at the root, leaving you with silky smooth skin that lasts.

Our treatments are tailored to your skin type, hair color, and specific needs, ensuring optimal results with minimal discomfort. Whether you're looking to treat small areas like the upper lip or larger areas like full legs, our experienced practitioners provide comfortable, professional care in a private setting.

Experience the freedom of permanent hair reduction and never worry about shaving or waxing appointments again.`,
  heroImage: "/assets/services_hero.png",
  treatmentAreas: [
    {
      id: "bikini",
      title: "Bikini & Brazilian",
      description: "Complete bikini line and Brazilian laser hair removal for smooth, confident skin",
      detailedDescription: "Our bikini and Brazilian laser hair removal treatments offer a comfortable, private solution to unwanted hair in intimate areas. From basic bikini line to full Brazilian, we customize the treatment to your preference. Our advanced cooling technology minimizes discomfort while delivering permanent results.",
      areasIncluded: ["Bikini Line", "Extended Bikini", "Full Brazilian", "Hollywood"],
      benefits: [
        "No more painful waxing or razor burn",
        "Smooth skin year-round",
        "Eliminates ingrown hairs",
        "Long-lasting permanent reduction",
        "Private, comfortable treatment environment",
        "Customizable coverage to your preference"
      ],
      duration: "20-30 mins",
      sessionsRequired: "6-8 sessions recommended",
      pricing: {
        singleSession: "€60",
        package6: "€300"
      },
      image: "/assets/laser_bikini.png"
    },
    {
      id: "face",
      title: "Face",
      description: "Remove unwanted facial hair for smooth, flawless skin",
      detailedDescription: "Facial laser hair removal targets unwanted hair on the upper lip, chin, sideburns, and full face. Perfect for those dealing with hormonal hair growth or simply wanting smooth, hair-free facial skin. Our precise laser technology is safe for delicate facial skin and delivers results without damaging surrounding tissue.",
      areasIncluded: ["Upper Lip", "Chin", "Sideburns", "Full Face", "Jawline", "Cheeks"],
      benefits: [
        "Eliminates need for constant plucking or threading",
        "No more visible dark stubble or shadow",
        "Reduces hormonal facial hair permanently",
        "Safe for sensitive facial skin",
        "Quick treatment with no downtime",
        "Boosts confidence with smooth skin"
      ],
      duration: "10-20 mins",
      sessionsRequired: "6-8 sessions recommended",
      pricing: {
        singleSession: "€25",
        package6: "€120"
      },
      image: "/assets/laser_full_body_women.png"
    },
    {
      id: "upper-body",
      title: "Upper Body",
      description: "Smooth, hair-free arms, underarms, chest, and back",
      detailedDescription: "Upper body laser hair removal covers all areas from the shoulders down to the waist. Perfect for those who want hair-free underarms, smooth arms, or to remove unwanted chest or back hair. Our treatment targets all hair follicles in the upper body region for comprehensive, lasting results.",
      areasIncluded: ["Underarms", "Full Arms", "Half Arms", "Chest", "Abdomen", "Upper Back", "Shoulders"],
      benefits: [
        "No more underarm shaving or irritation",
        "Smooth, hair-free arms all year",
        "Eliminates body odor associated with underarm hair",
        "Wear sleeveless clothing confidently",
        "Long-lasting smooth results",
        "Reduces ingrown hairs and razor bumps"
      ],
      duration: "30-60 mins",
      sessionsRequired: "6-8 sessions recommended",
      pricing: {
        singleSession: "€35",
        package6: "€180"
      },
      image: "/assets/laser_upper_body_women.png"
    },
    {
      id: "lower-body",
      title: "Lower Body",
      description: "Silky smooth legs from thigh to toe",
      detailedDescription: "Lower body laser hair removal targets unwanted hair on legs, thighs, and feet. Whether you want full leg treatment or just half legs, our advanced laser technology removes hair permanently, giving you silky smooth skin without the hassle of constant shaving or waxing. Perfect for those who want year-round smooth legs.",
      areasIncluded: ["Full Legs", "Half Legs (lower)", "Half Legs (upper)", "Thighs", "Knees", "Feet & Toes"],
      benefits: [
        "Never shave your legs again",
        "Smooth legs all year round",
        "No more ingrown hairs or razor burn",
        "Save time on daily grooming",
        "Perfect for active lifestyles and sports",
        "Wear shorts and skirts confidently"
      ],
      duration: "45-90 mins",
      sessionsRequired: "6-8 sessions recommended",
      pricing: {
        singleSession: "€70",
        package6: "€380"
      },
      image: "/assets/laser_Lower_body_women.png"
    },
    {
      id: "full-body",
      title: "Full Body",
      description: "Complete hair removal from head to toe",
      detailedDescription: "Our full body laser hair removal package covers all areas from face to toes, providing comprehensive permanent hair reduction across your entire body. This all-inclusive treatment is perfect for those who want complete freedom from unwanted hair. We customize the treatment to target your specific concerns while delivering smooth, lasting results everywhere.",
      areasIncluded: ["Face", "Underarms", "Full Arms", "Chest", "Abdomen", "Back", "Bikini/Brazilian", "Full Legs", "Feet"],
      benefits: [
        "Complete hair-free body",
        "Maximum time and cost savings",
        "Comprehensive permanent reduction",
        "Smooth skin from head to toe",
        "Perfect for those with extensive hair growth",
        "Best value for multiple treatment areas"
      ],
      duration: "2-3 hours",
      sessionsRequired: "6-8 sessions recommended",
      pricing: {
        singleSession: "€350",
        package6: "€1950"
      },
      image: "/assets/laser_full_body_women.png"
    }
  ],
  howItWorks: {
    title: "How Laser Hair Removal Works",
    description: "Our medical-grade diode laser technology targets hair follicles at the root, delivering permanent hair reduction safely and effectively.",
    steps: [
      {
        title: "Consultation & Assessment",
        description: "We assess your skin type, hair color, and treatment goals to create a customized plan. A patch test ensures safety and optimal settings for your skin."
      },
      {
        title: "Laser Treatment",
        description: "The laser emits concentrated light that's absorbed by melanin in the hair follicle. This heats and destroys the follicle without damaging surrounding skin. Built-in cooling keeps you comfortable."
      },
      {
        title: "Hair Shedding & Results",
        description: "Treated hairs fall out over 1-2 weeks. Hair grows in cycles, so multiple sessions (6-8) spaced 4-6 weeks apart target all follicles for permanent reduction of 80-95%."
      }
    ]
  },
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After 6 sessions - smooth, hair-free legs"
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "After 8 sessions - complete bikini area hair removal"
    }
  ],
  expertQuote: {
    quote: "Laser hair removal is one of the most life-changing treatments we offer. Women tell us they wish they'd done it years ago. The freedom from constant shaving, waxing, and ingrown hairs is truly liberating. With our advanced technology, treatments are comfortable, safe, and deliver permanent results.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png"
  },
  faqs: [
    {
      id: "how-does-it-work",
      question: "How does laser hair removal work?",
      answer: "Laser hair removal uses concentrated light energy that's absorbed by the melanin (pigment) in hair follicles. This heat damages the follicle, preventing future hair growth. The surrounding skin remains unharmed. Multiple sessions are needed because hair grows in cycles, and the laser only affects actively growing hairs."
    },
    {
      id: "is-it-painful",
      question: "Is laser hair removal painful?",
      answer: "Most clients describe the sensation as a quick rubber band snap against the skin. Our advanced diode laser has built-in cooling technology that minimizes discomfort. Sensitive areas like the bikini line may be slightly more uncomfortable, but most clients find it far less painful than waxing and much quicker."
    },
    {
      id: "how-many-sessions",
      question: "How many sessions will I need?",
      answer: "Most clients need 6-8 sessions for optimal results, spaced 4-6 weeks apart. This is because hair grows in cycles, and the laser can only effectively treat hair in the active growth phase. After completing the initial series, you may need occasional maintenance sessions every 6-12 months."
    },
    {
      id: "is-it-permanent",
      question: "Is laser hair removal really permanent?",
      answer: "Yes! Laser hair removal delivers permanent hair reduction of 80-95% in treated areas. While it's technically called 'permanent reduction' rather than 'permanent removal,' most clients experience smooth, hair-free skin with only occasional fine regrowth that's barely noticeable. Results are long-lasting and life-changing."
    },
    {
      id: "what-areas-can-be-treated",
      question: "What areas can be treated?",
      answer: "We can treat virtually any area of the body including face (upper lip, chin, sideburns), underarms, arms, legs, bikini line, Brazilian, chest, back, abdomen, and more. During your consultation, we'll discuss your specific goals and create a customized treatment plan."
    },
    {
      id: "cost",
      question: "How much does laser hair removal cost in Dublin?",
      answer: "Pricing varies by treatment area. Small areas like upper lip start from €60 per session, while larger areas like full legs are €150-200 per session. We offer package deals for multiple sessions which provide significant savings. Most clients find that laser hair removal pays for itself within 1-2 years compared to the lifetime cost of waxing or shaving products."
    },
    {
      id: "skin-types",
      question: "Does it work on all skin types and hair colors?",
      answer: "Our advanced diode laser technology is safe and effective for all skin types, including darker skin tones. It works best on dark hair because the laser targets melanin (pigment). Very light blonde, red, or grey hair may not respond as well, though newer technologies are improving results for lighter hair. We'll assess your suitability during consultation."
    }
  ]
};

// Men's Laser Hair Removal Data
export const laserHairRemovalMen: LaserHairRemovalData = {
  id: "laser-hair-removal-men",
  gender: "men",
  title: "Laser Hair Removal for Men",
  tagline: "Permanent Hair Reduction for the Modern Man",
  description: `More men than ever are choosing laser hair removal for a cleaner, more groomed appearance. Whether you want to remove back and chest hair, sculpt your beard line, or achieve smooth skin for sports and fitness, our medical-grade laser treatments deliver permanent results with minimal discomfort.

Our advanced technology is specifically calibrated for male skin and hair, which tends to be coarser and denser than women's. We understand the unique needs of men and provide discreet, professional treatments that fit your lifestyle.

From athletes and bodybuilders to professionals who simply prefer a groomed look, laser hair removal offers a permanent solution that eliminates the need for constant shaving, waxing, or trimming.`,
  heroImage: "/assets/services_hero.png",
  treatmentAreas: [
    {
      id: "face",
      title: "Face & Neck",
      description: "Sculpt your beard line and eliminate unwanted facial hair",
      detailedDescription: "Facial laser hair removal for men is perfect for defining beard lines, removing neck hair, or eliminating patches and uneven growth. Whether you want clean cheek lines, a smooth neck, or to reduce daily shaving irritation, our treatments target unwanted facial hair while preserving your desired beard shape.",
      areasIncluded: ["Cheek Lines", "Neck", "Unibrow", "Nose", "Ears", "Full Face (if desired)"],
      benefits: [
        "Eliminates razor burn and ingrown hairs on neck",
        "Defines clean, sharp beard lines",
        "No more daily shaving irritation",
        "Removes patchy or uneven facial hair",
        "Smooth neck for professional appearance",
        "Permanent reduction saves time daily"
      ],
      duration: "15-30 mins",
      sessionsRequired: "8-10 sessions recommended",
      pricing: {
        singleSession: "€35",
        package6: "€180"
      },
      image: "/assets/laser_man_face.png"
    },
    {
      id: "upper-body",
      title: "Upper Body",
      description: "Remove chest, back, shoulder, and arm hair permanently",
      detailedDescription: "Upper body laser hair removal is one of our most popular treatments for men. Remove unwanted hair from chest, back, shoulders, and arms for a cleaner, more defined physique. Perfect for athletes, bodybuilders, swimmers, or anyone who prefers a groomed appearance. Our powerful laser effectively treats even the coarsest male body hair.",
      areasIncluded: ["Full Chest", "Abdomen", "Full Back", "Shoulders", "Full Arms", "Underarms"],
      benefits: [
        "Showcase muscle definition without hair",
        "Ideal for bodybuilders and athletes",
        "Eliminates back hair permanently",
        "No more chest or back waxing pain",
        "Improved hygiene and reduced body odor",
        "Confidence boost for beach and pool"
      ],
      duration: "60-90 mins",
      sessionsRequired: "8-10 sessions recommended",
      pricing: {
        singleSession: "€60",
        package6: "€220"
      },
      image: "/assets/upper_body_man.png"
    },
    {
      id: "lower-body",
      title: "Lower Body",
      description: "Smooth legs and lower body for sports and aesthetics",
      detailedDescription: "Lower body laser hair removal for men targets legs, thighs, and lower abdomen. Popular with cyclists, swimmers, runners, and bodybuilders who want smooth legs for performance and aesthetics. Our treatment effectively removes coarse leg hair while being gentle on sensitive areas.",
      areasIncluded: ["Full Legs", "Thighs", "Lower Legs", "Knees", "Feet", "Lower Abdomen"],
      benefits: [
        "Improved aerodynamics for cycling and swimming",
        "Better muscle definition for bodybuilding",
        "Eliminates chafing during sports",
        "Smooth skin for athletic performance",
        "No more razor burn on legs",
        "Clean appearance year-round"
      ],
      duration: "60-90 mins",
      sessionsRequired: "8-10 sessions recommended",
      pricing: {
        singleSession: "€80",
        package6: "€400"
      },
      image: "/assets/lower_body_man.png"
    },
    {
      id: "full-body",
      title: "Full Body",
      description: "Complete body hair removal for maximum results",
      detailedDescription: "Our full body laser hair removal for men covers all major areas from neck to toes. This comprehensive treatment is perfect for bodybuilders, athletes, models, or anyone who wants a completely smooth, groomed physique. We customize the treatment to your goals, targeting all unwanted hair while achieving natural-looking results.",
      areasIncluded: ["Face/Neck", "Chest", "Abdomen", "Full Back", "Shoulders", "Full Arms", "Underarms", "Full Legs", "Feet"],
      benefits: [
        "Complete body transformation",
        "Maximum muscle definition visibility",
        "Perfect for competitive bodybuilders",
        "Best value for multiple areas",
        "Comprehensive permanent reduction",
        "Save hours per week on grooming"
      ],
      duration: "3-4 hours",
      sessionsRequired: "8-10 sessions recommended",
      pricing: {
        singleSession: "€400",
        package6: "€2100"
      },
      image: "/assets/lower_body_man.png"
    }
  ],
  howItWorks: {
    title: "How Laser Hair Removal Works for Men",
    description: "Our powerful medical-grade laser is specifically calibrated for male skin and coarse body hair, delivering effective permanent hair reduction.",
    steps: [
      {
        title: "Consultation & Assessment",
        description: "We evaluate your skin type, hair coarseness, and desired results. Male hair is typically thicker and denser, requiring higher energy settings which we calibrate precisely for safety and effectiveness."
      },
      {
        title: "Laser Treatment",
        description: "The laser targets hair follicles with concentrated light energy, heating and destroying them permanently. Our advanced cooling system keeps treatment comfortable even on sensitive areas. Male treatments often require slightly more sessions due to coarser hair."
      },
      {
        title: "Progressive Results",
        description: "Hair sheds within 1-2 weeks after each session. You'll notice progressive reduction in hair density and thickness with each treatment. Most men achieve 80-95% permanent hair reduction after completing the full course of 8-10 sessions."
      }
    ]
  },
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After 8 sessions - smooth, hair-free chest and abdomen"
    },
    {
      before: "/assets/fillers_before_2.png",
      after: "/assets/fillers_after_2.png",
      description: "After 10 sessions - complete back hair removal"
    }
  ],
  expertQuote: {
    quote: "Male laser hair removal has exploded in popularity over the past few years. Men appreciate the clean, groomed look and the time saved from constant shaving or waxing. Whether it's for athletics, aesthetics, or simply personal preference, laser hair removal gives men the confidence to look and feel their best.",
    name: "Dr. Michael O'Brien",
    title: "Aesthetic Medicine Specialist",
    image: "/assets/Hero.png"
  },
  faqs: [
    {
      id: "why-men",
      question: "Why are more men choosing laser hair removal?",
      answer: "Modern men want to look groomed and feel confident. Laser hair removal offers a permanent solution for unwanted back hair, a cleaner chest, defined beard lines, or smooth skin for athletics. It's particularly popular with bodybuilders, swimmers, cyclists, and professionals who value a polished appearance. The treatment saves time and eliminates the hassle of daily shaving or painful waxing."
    },
    {
      id: "does-it-work-on-men",
      question: "Does laser hair removal work as well on men?",
      answer: "Yes! In fact, laser hair removal can be even more effective on men because male hair tends to be darker and coarser, which the laser targets more easily. However, male hair is also denser, which may require 8-10 sessions instead of the 6-8 typically needed for women. Our technology is specifically calibrated for male skin and hair."
    },
    {
      id: "painful-for-men",
      question: "Is it more painful for men?",
      answer: "Discomfort levels are similar for men and women. Most men describe it as tolerable - like a rubber band snap. Our advanced cooling technology minimizes discomfort. Areas with coarser hair like the back or chest may be slightly more sensitive, but treatments are quick and most men find it far less painful than waxing."
    },
    {
      id: "back-and-chest",
      question: "Can you treat back and chest hair?",
      answer: "Absolutely! Back and chest hair removal are among our most popular treatments for men. Our powerful laser is perfect for treating large areas with dense, coarse hair. Most men see dramatic results and love the clean, groomed appearance. It's especially popular with athletes and bodybuilders who want to showcase muscle definition."
    },
    {
      id: "beard-shaping",
      question: "Can laser hair removal shape my beard?",
      answer: "Yes! We can use laser hair removal to permanently remove hair from areas you don't want it - like high on the cheeks, the neck, or between brows. This creates clean, defined lines that require less maintenance. However, only remove hair you're certain you won't want in the future, as results are permanent."
    },
    {
      id: "cost-men",
      question: "How much does laser hair removal cost for men in Dublin?",
      answer: "Pricing depends on the treatment area. Small areas like neck or beard line start from €80 per session, while large areas like full back are €200-300 per session. We offer package deals for 6 or 8 sessions that provide significant savings. Most men find the investment worthwhile for the permanent results and time saved."
    },
    {
      id: "how-many-sessions-men",
      question: "How many sessions will I need?",
      answer: "Men typically need 8-10 sessions for optimal results due to coarser, denser hair. Sessions are spaced 4-8 weeks apart depending on the area treated. After the initial series, you may need occasional touch-ups every 12-18 months, though many men maintain smooth results indefinitely."
    }
  ]
};
