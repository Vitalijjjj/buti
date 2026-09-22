"use client";

import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function MembershipTeaser() {
  return (
    <Card className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200">
      <h3 className="font-primary text-2xl font-bold text-neutral-900 mb-4">
        Save More with Membership
      </h3>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <span className="text-neutral-700">
            <strong>Preferential pricing</strong> on all treatments
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <span className="text-neutral-700">
            <strong>Monthly payments</strong> for easier budgeting
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <span className="text-neutral-700">
            <strong>Priority booking</strong> & exclusive access
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <span className="text-neutral-700">
            <strong>Complimentary skin reviews</strong> with our specialists
          </span>
        </li>
      </ul>
      <CTA
        href="/membership"
        label="View Membership Plans"
        variant="default"
        data-analytics="cta-view-membership"
        className="w-full"
      />
    </Card>
  );
}