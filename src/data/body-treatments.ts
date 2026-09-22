/**
 * Body Treatments Data
 *
 * Complete data for body contouring and sculpting treatments
 * HIFU Body, Emsculpt, Pelvic Chair
 */

import { BodyTreatmentsData } from "@/types/body-treatment";

export const bodyTreatmentsData: BodyTreatmentsData = {
  id: "body-treatments",
  title: "Body Contouring & Sculpting",
  tagline: "Advanced Non-Surgical Body Transformation",
  description: `Transform your body without surgery using the latest medical-grade technology. Our body contouring treatments target stubborn fat, build muscle, and tighten skin for a sculpted, toned physique. Whether you want to reduce abdominal fat, lift and tone your buttocks, or strengthen your pelvic floor, we offer proven, FDA-approved treatments that deliver real results with no downtime.

Experience the future of body transformation with treatments trusted by athletes, celebrities, and medical professionals worldwide.`,
  heroImage: "/assets/services_hero.png",
  treatments: [
    {
      id: "hifu-body",
      name: "HIFU Body",
      tagline: "Non-Surgical Fat Reduction & Skin Tightening",
      description: "High-Intensity Focused Ultrasound targets and destroys fat cells while tightening skin for a sculpted, contoured physique.",
      detailedDescription: `HIFU Body is a revolutionary non-invasive treatment that uses high-intensity focused ultrasound energy to permanently destroy fat cells and tighten loose skin. The ultrasound energy penetrates deep beneath the skin's surface, heating and destroying stubborn fat deposits while simultaneously stimulating collagen production for firmer, tighter skin.

Unlike traditional liposuction, HIFU Body requires no surgery, no anesthesia, and no downtime. The destroyed fat cells are naturally eliminated by your body over the following weeks, revealing a more sculpted, contoured silhouette. It's perfect for treating areas resistant to diet and exercise, including the abdomen, love handles, thighs, arms, and knees.

Results continue to improve over 8-12 weeks as your body naturally processes the destroyed fat cells and produces new collagen. Most clients see a noticeable reduction in fat and improved skin tightness after just one treatment, with optimal results after 2-3 sessions.`,
      image: "/assets/hifu_body.png",
      benefits: [
        "Permanent fat cell destruction",
        "Non-surgical and non-invasive",
        "Tightens loose, sagging skin",
        "No downtime or recovery needed",
        "Natural-looking, gradual results",
        "Medical-grade technology",
        "Treats multiple body areas",
        "Stimulates collagen production",
        "Pain-free with minimal discomfort",
        "Long-lasting body contouring"
      ],
      idealFor: [
        "Stubborn belly fat and love handles",
        "Post-pregnancy body changes",
        "Loose skin after weight loss",
        "Arms with excess fat or sagging skin",
        "Inner and outer thighs",
        "Knee fat and skin laxity",
        "Non-surgical body contouring",
        "Those who want to avoid liposuction"
      ],
      treatmentAreas: ["Abdomen/Stomach", "Thighs", "Arms", "Knees", "Love Handles", "Back"],
      duration: "60-90 mins per area",
      sessionsRequired: "2-3 sessions recommended for optimal results",
      pricing: {
        perArea: "€500-€700",
        package: "Contact for multi-area packages"
      },
      resultsTimeline: "Visible results in 4-6 weeks, optimal at 8-12 weeks",
      downtime: "None - return to normal activities immediately"
    },
    {
      id: "emsculpt",
      name: "Emsculpt",
      tagline: "Build Muscle & Burn Fat Simultaneously",
      description: "Revolutionary body sculpting that builds muscle and burns fat using High-Intensity Electromagnetic technology.",
      detailedDescription: `Emsculpt is the world's first and only FDA-approved treatment that simultaneously builds muscle and burns fat. Using High-Intensity Electromagnetic (HIFEM) technology, Emsculpt induces powerful muscle contractions not achievable through voluntary exercise - equivalent to doing 20,000 crunches or squats in just 30 minutes.

These supramaximal contractions force your muscles to adapt and grow, resulting in increased muscle mass, improved tone, and enhanced definition. At the same time, the intense metabolic demand causes nearby fat cells to break down and be eliminated naturally by your body.

Clinical studies show an average of 19% fat reduction and 16% muscle increase after a series of 4 treatments. Emsculpt is perfect for athletes looking to enhance performance, fitness enthusiasts wanting to break through plateaus, or anyone seeking a more sculpted, toned physique. It's particularly popular for sculpting six-pack abs, lifting and toning the buttocks (non-surgical butt lift), and strengthening arms.`,
      image: "/assets/EMSculpt.png",
      benefits: [
        "Builds muscle mass by 16% on average",
        "Reduces fat by 19% on average",
        "Non-invasive with no surgery or needles",
        "Equivalent to 20,000 muscle contractions per session",
        "Enhances athletic performance",
        "Sculpts six-pack abs",
        "Lifts and tones buttocks (non-surgical BBL)",
        "Strengthens and tones arms",
        "Clinically proven results",
        "No downtime - resume activities immediately"
      ],
      idealFor: [
        "Building and defining abdominal muscles",
        "Creating a non-surgical butt lift",
        "Toning and sculpting arms",
        "Enhancing athletic performance",
        "Breaking through fitness plateaus",
        "Post-pregnancy core strengthening",
        "Anyone wanting a more sculpted physique",
        "Complementing existing fitness routines"
      ],
      treatmentAreas: ["Abdomen", "Buttocks", "Arms", "Thighs", "Calves"],
      duration: "30 mins per area",
      sessionsRequired: "4 sessions over 2 weeks, maintenance every 3-6 months",
      pricing: {
        perSession: "€100",
        perArea: "€100 per area per session",
        package: "4 sessions: €360 (save €40)"
      },
      resultsTimeline: "Visible results after 2-4 weeks, optimal at 2-3 months",
      downtime: "None - return to gym immediately"
    }
  ],
  howItWorks: {
    title: "How Body Treatments Work",
    description: "Our advanced body contouring technologies use different mechanisms to sculpt, tone, and transform your body without surgery.",
    steps: [
      {
        title: "Consultation & Assessment",
        description: "We evaluate your body goals, target areas, and recommend the best treatment or combination of treatments. We'll create a personalised plan to achieve your desired results."
      },
      {
        title: "Treatment Session",
        description: "Depending on your chosen treatment, you'll either lie down (HIFU Body, Emsculpt) or sit comfortably (Pelvic Chair). The device is positioned on target areas and delivers energy to destroy fat, build muscle, or strengthen pelvic floor - all completely non-invasively."
      },
      {
        title: "Results & Maintenance",
        description: "Your body naturally processes destroyed fat cells and builds new muscle tissue over the following weeks. Results continue to improve for 2-3 months. Maintenance sessions every 3-12 months (depending on treatment) help you maintain optimal results long-term."
      }
    ]
  },
  beforeAfterImages: [
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After 3 HIFU Body sessions - visible fat reduction and skin tightening on abdomen"
    },
    {
      before: "/assets/Hero.png",
      after: "/assets/Hero.png",
      description: "After 4 Emsculpt sessions - increased muscle definition and toned abs"
    }
  ],
  expertQuote: {
    quote: "Body contouring technology has revolutionized how we approach body transformation. These treatments deliver results that were previously only possible through surgery - but with no downtime, no pain, and completely non-invasively. Whether you want to reduce stubborn fat, build muscle, or strengthen your core, we have proven solutions that work.",
    name: "Elena Ouldali",
    title: "Clinic Owner",
    image: "/assets/Hero.png"
  },
  faqs: [
    {
      id: "which-treatment",
      question: "Which body treatment is right for me?",
      answer: "It depends on your goals. HIFU Body is best for fat reduction and skin tightening. Emsculpt builds muscle while burning fat - perfect for sculpting abs or lifting buttocks. Many clients combine treatments for comprehensive results. We'll recommend the best approach during your free consultation."
    },
    {
      id: "are-they-painful",
      question: "Are body treatments painful?",
      answer: "No! HIFU Body causes a warming sensation but is well-tolerated. Emsculpt feels like an intense workout with strong muscle contractions - unusual but not painful. Most clients read, work on their phone, or relax during treatments."
    },
    {
      id: "how-many-sessions",
      question: "How many sessions will I need?",
      answer: "HIFU Body: 2-3 sessions for optimal results. Emsculpt: 4 sessions over 2 weeks. All treatments benefit from maintenance sessions every 3-12 months to maintain results long-term."
    },
    {
      id: "when-see-results",
      question: "When will I see results?",
      answer: "HIFU Body: Results appear gradually over 8-12 weeks as your body eliminates fat cells. Emsculpt: Visible changes after 2-4 weeks, optimal at 2-3 months. Results continue to improve for months after treatment."
    },
    {
      id: "permanent-results",
      question: "Are the results permanent?",
      answer: "HIFU Body destroys fat cells permanently - they don't come back. However, remaining fat cells can expand with weight gain. Emsculpt builds real muscle that lasts with proper maintenance and exercise. Healthy lifestyle habits help maintain all results long-term."
    },
    {
      id: "downtime",
      question: "Is there any downtime?",
      answer: "None! All body treatments are completely non-invasive with zero downtime. You can return to work, exercise, and all normal activities immediately after each session. Some clients experience mild muscle soreness after Emsculpt (like after a workout) but this resolves quickly."
    },
    {
      id: "cost",
      question: "How much do body treatments cost in Dublin?",
      answer: "HIFU Body: €500-700 per area. Emsculpt: €100 per area per session, packages from €360. We offer package deals and multi-area discounts. Most clients find the investment worthwhile compared to surgical alternatives."
    },
    {
      id: "vs-surgery",
      question: "How do body treatments compare to surgery?",
      answer: "Our body treatments offer significant advantages over surgery: no anesthesia, no incisions, no scarring, no recovery time, and lower cost. While results may be more subtle than surgery, they look completely natural and gradual. Plus, there are no surgical risks or complications. Many clients prefer the non-invasive approach and natural-looking results."
    }
  ]
};
