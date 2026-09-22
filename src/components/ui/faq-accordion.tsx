/**
 * FAQ Accordion Component
 *
 * Expandable/collapsible FAQ items with smooth animations
 */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Question - Clickable Header */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="font-semibold text-lg text-neutral-900 pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {/* Answer - Expandable Content */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
