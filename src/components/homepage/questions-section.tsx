"use client";

import { Button } from "@/components/ui/button";
import { FAQ, FAQItem } from "@/components/ui/faq";
import { MessageCircle } from "lucide-react";
import { gaEvent } from "@/components/ga";

const faqData: FAQItem[] = [
  {
    id: "safety",
    question: "Are medical aesthetic treatments safe?",
    answer: "Yes, when performed by experienced practitioners using FDA-approved treatments and equipment. Our clinic follows strict medical protocols and safety standards. We conduct thorough consultations to ensure treatments are appropriate for your individual needs and medical history."
  },
  {
    id: "results",
    question: "How long do results typically last?",
    answer: "Results vary by treatment type. Botox typically lasts 3-4 months, dermal fillers 6-18 months depending on the product used, laser treatments may provide permanent results for hair removal but require multiple sessions, and chemical peels offer progressive improvement with proper maintenance."
  },
  {
    id: "pain",
    question: "Will the treatments be painful?",
    answer: "Most treatments involve minimal discomfort. We use topical numbing creams, ice, and advanced techniques to minimize any discomfort. Injectable treatments feel like small pinpricks, laser treatments may cause mild warming sensations, and we ensure you're comfortable throughout every procedure."
  },
  {
    id: "consultation",
    question: "What happens during a consultation?",
    answer: "During your complimentary consultation, we'll discuss your goals, assess your skin and medical history, explain treatment options, provide realistic expectations about results, and create a personalised treatment plan. There's no pressure to commit to any treatments."
  },
  {
    id: "aftercare",
    question: "What is the recovery time and aftercare?",
    answer: "Recovery varies by treatment. Injectable treatments typically require no downtime with possible minor swelling for 24-48 hours. Laser treatments may cause temporary redness for a few days. Chemical peels may involve light peeling for 3-7 days. We provide detailed aftercare instructions for each treatment."
  },
  {
    id: "cost",
    question: "How much do treatments cost?",
    answer: "Treatment costs vary based on the type and extent of treatment needed. We offer transparent pricing during consultations, financing options, and package deals for multiple treatments. Many clients find the investment worthwhile for the confidence and results they achieve."
  },
  {
    id: "preparation",
    question: "How should I prepare for my treatment?",
    answer: "Preparation depends on your specific treatment. Generally, avoid blood-thinning medications and supplements, stay hydrated, avoid alcohol 24 hours before treatment, and arrive with clean skin without makeup. We'll provide specific pre-treatment instructions during your consultation."
  },
  {
    id: "frequency",
    question: "How often do I need treatments?",
    answer: "Frequency depends on the treatment type and your goals. Botox is typically repeated every 3-4 months, dermal fillers every 6-18 months, laser hair removal requires 6-8 sessions spaced 4-6 weeks apart, and chemical peels can be done monthly or seasonally depending on intensity."
  }
];

export function QuestionsSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-accent-warmBeige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-6">
            Got Questions? We&apos;ve Got Answers
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our medical aesthetic treatments, safety protocols, and what to expect during your journey with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <FAQ items={faqData} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8" />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our medical professionals are here to provide personalised answers and recommendations. Book a complimentary consultation to discuss your specific needs and goals.
            </p>

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-medium rounded-full"
                onClick={() => gaEvent("cta_click", { cta: "faq_book_consultation", page: "home" })}
                data-analytics="faq-book-consultation"
                asChild
              >
                <a
                  href="https://partner.pabau.com/online-bookings/facecult"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Consultation
                </a>
              </Button>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available Today</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>15-Minute Call</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}