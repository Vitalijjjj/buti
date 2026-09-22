import type { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { HeroSection } from "@/components/homepage/hero-section";
import { FeaturedTreatments } from "@/components/homepage/featured-treatments";
import { PopularTreatments } from "@/components/homepage/popular-treatments";
// import { TeamSection } from "@/components/homepage/team-section";
import { NewsSection } from "@/components/homepage/news-section";
// import { WhyChooseSection } from "@/components/homepage/why-choose-section";
import { ResultsGallery } from "@/components/homepage/results-gallery";
import { InstagramSection } from "@/components/homepage/instagram-section";
import { QuestionsSection } from "@/components/homepage/questions-section";
import { AreasSection } from "@/components/homepage/areas-section";
import { Footer } from "@/components/homepage/footer";
import { GoogleReviewsSection } from "@/components/reviews/google-reviews-section";

export const metadata: Metadata = {
  title: "Facecult Dublin | Premier Aesthetic Clinic & Advanced Skin Treatments",
  description:
    "Facecult Dublin - Dublin's leading aesthetic clinic offering laser treatments, injectables, skin rejuvenation & advanced aesthetics. Medical-grade treatments by certified specialists in Dublin. Book your consultation today.",
  keywords: [
    "facecult dublin",
    "facecult",
    "aesthetic clinic Dublin",
    "skin treatments Dublin",
    "laser hair removal Dublin",
    "botox Dublin",
    "dermal fillers Dublin",
    "microneedling Dublin",
    "skin rejuvenation Dublin",
    "facecult aesthetic clinic",
    "facecult ireland",
  ],
  alternates: {
    canonical: "https://facecult.ie",
  },
  openGraph: {
    title: "Facecult Dublin | Premier Aesthetic Clinic & Advanced Skin Treatments",
    description:
      "Dublin's leading aesthetic clinic offering laser treatments, injectables, skin rejuvenation & advanced aesthetics. Medical-grade treatments by certified specialists.",
    url: "https://facecult.ie",
    siteName: "Facecult",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facecult Dublin | Premier Aesthetic Clinic & Advanced Skin Treatments",
    description:
      "Dublin's leading aesthetic clinic offering laser treatments, injectables, skin rejuvenation & advanced aesthetics. Medical-grade treatments by certified specialists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  // LocalBusiness JSON-LD Schema
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://facecult.ie/#business",
    name: "Facecult",
    alternateName: "Facecult Dublin",
    description:
      "Premier aesthetic clinic in Dublin offering medical-grade skin treatments, laser therapies, and advanced aesthetics.",
    url: "https://facecult.ie",
    telephone: "+353899735302",
    email: "info@facecult.ie",
    image: "https://facecult.ie/assets/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "39/40 Mount Street Upper",
      addressLocality: "Dublin 2",
      addressRegion: "Dublin",
      postalCode: "D02 R229",
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.3356",
      longitude: "-6.2492",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "€€€",
    areaServed: [
      {
        "@type": "City",
        name: "Dublin",
      },
      {
        "@type": "Place",
        name: "Dublin 2",
      },
      {
        "@type": "Place",
        name: "Dublin City Centre",
      },
      {
        "@type": "Place",
        name: "South Dublin",
      },
    ],
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "EUR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aesthetic Treatments",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser Hair Removal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Botox & Injectables",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dermal Fillers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Microneedling & Skin Rejuvenation",
          },
        },
      ],
    },
  };

  // Organization JSON-LD Schema
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://facecult.ie/#organization",
    name: "Facecult",
    url: "https://facecult.ie",
    logo: "https://facecult.ie/assets/logo.png",
    description:
      "Premier aesthetic clinic in Dublin specializing in advanced skin treatments and medical-grade aesthetics.",
    sameAs: [
      // TODO: Add social media profiles
      "https://www.instagram.com/facecult",
      "https://www.facebook.com/facecult",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+353899735302",
      contactType: "customer service",
      areaServed: "IE",
      availableLanguage: "en",
    },
  };

  // BreadcrumbList JSON-LD Schema
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://facecult.ie",
      },
    ],
  };

  // FAQPage JSON-LD Schema
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are medical aesthetic treatments safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when performed by experienced practitioners using FDA-approved treatments and equipment. Our clinic follows strict medical protocols and safety standards. We conduct thorough consultations to ensure treatments are appropriate for your individual needs and medical history.",
        },
      },
      {
        "@type": "Question",
        name: "How long do results typically last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Results vary by treatment type. Botox typically lasts 3-4 months, dermal fillers 6-18 months depending on the product used, laser treatments may provide permanent results for hair removal but require multiple sessions, and chemical peels offer progressive improvement with proper maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Will the treatments be painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most treatments involve minimal discomfort. We use topical numbing creams, ice, and advanced techniques to minimize any discomfort. Injectable treatments feel like small pinpricks, laser treatments may cause mild warming sensations, and we ensure you're comfortable throughout every procedure.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during a consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "During your complimentary consultation, we'll discuss your goals, assess your skin and medical history, explain treatment options, provide realistic expectations about results, and create a personalised treatment plan. There's no pressure to commit to any treatments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the recovery time and aftercare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recovery varies by treatment. Injectable treatments typically require no downtime with possible minor swelling for 24-48 hours. Laser treatments may cause temporary redness for a few days. Chemical peels may involve light peeling for 3-7 days. We provide detailed aftercare instructions for each treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How much do treatments cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment costs vary based on the type and extent of treatment needed. We offer transparent pricing during consultations, financing options, and package deals for multiple treatments. Many clients find the investment worthwhile for the confidence and results they achieve.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <main className="min-h-screen">
        <FloatingNav />
        <HeroSection />
        <FeaturedTreatments />
        <PopularTreatments />
        {/* <TeamSection /> */}
        <GoogleReviewsSection className="bg-accent-warmBeige" />
        {/* <NewsSection /> */}
        {/* <WhyChooseSection /> */}
        <ResultsGallery />
        {/* <InstagramSection /> */}
        <QuestionsSection />
        <AreasSection />
        <Footer />
      </main>
    </>
  );
}
