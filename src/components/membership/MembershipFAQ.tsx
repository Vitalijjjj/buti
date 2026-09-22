"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { gaEvent } from "@/lib/analytics";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface MembershipFAQProps {
  items: FAQItem[];
}

export function MembershipFAQ({ items }: MembershipFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string, question: string) => {
    const newOpenItems = new Set(openItems);
    const isOpening = !openItems.has(id);

    if (isOpening) {
      newOpenItems.add(id);
      gaEvent("faq_expand", { question, page: "/membership" });
    } else {
      newOpenItems.delete(id);
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className="border border-neutral-200 rounded-2xl bg-white hover:border-primary-300 transition-colors"
          >
            <button
              onClick={() => toggleItem(item.id, item.question)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="font-semibold text-lg text-neutral-900 pr-8">
                {item.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
