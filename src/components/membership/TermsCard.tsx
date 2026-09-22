"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { gaEvent } from "@/lib/analytics";

export function TermsCard() {
  const terms = [
    "Monthly payment: €120 (auto renewal, cancel anytime with 30 days' notice)",
    "Welcome package worth €350 included as a complimentary gift",
    "Member discounts 10–15% on selected services and products",
    "Free premium treatment after 12 continuous months",
  ];

  const handleTermsClick = () => {
    gaEvent("click_terms", { location: "membership", page: "/membership" });
  };

  return (
    <Card className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 shadow-lg">
      <CardContent className="p-8 lg:p-10">
        <h2 className="font-primary text-2xl font-bold text-neutral-900 mb-6">
          Membership Terms (Summary)
        </h2>

        <ul className="space-y-4 mb-8">
          {terms.map((term, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-neutral-700 leading-relaxed">{term}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-600 mb-3">
            Full Terms & Conditions available at clinic or via email.
          </p>
          <a
            href="mailto:info@facecult.ie?subject=Membership Terms Request"
            onClick={handleTermsClick}
            className="text-primary-600 hover:text-primary-700 font-medium underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
          >
            Request Full Terms & Conditions
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
