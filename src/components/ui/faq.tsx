"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gaEvent } from "@/components/ga";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className = "" }: FAQProps) {
  const handleFAQClick = (question: string) => {
    gaEvent("faq_expand", { question });
  };

  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-neutral-200">
          <AccordionTrigger
            className="text-left text-lg font-medium text-neutral-900 hover:text-primary-600 py-6"
            onClick={() => handleFAQClick(item.question)}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 pb-6 pt-2 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}