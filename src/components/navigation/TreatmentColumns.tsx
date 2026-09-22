/**
 * TreatmentColumns Component
 *
 * Displays treatment links in a multi-column layout.
 * Shows 2 columns of treatments with headers.
 *
 * Features:
 * - Responsive column layout
 * - Smooth hover effects on treatment links
 * - Clean typography hierarchy
 * - Accessible link structure
 */

"use client";

import Link from "next/link";
import { TreatmentColumn } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface TreatmentColumnsProps {
  columns: TreatmentColumn[];
  className?: string;
}

export function TreatmentColumns({ columns, className }: TreatmentColumnsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 px-6",
        className
      )}
    >
      {columns.map((column, index) => (
        <div key={index} className="space-y-4">
          {/* Column Header */}
          <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider border-b border-primary-200 pb-2">
            {column.header}
          </h3>

          {/* Treatment Links */}
          <ul className="space-y-2" role="list">
            {column.treatments.map((treatment, treatmentIndex) => (
              <li key={treatmentIndex}>
                <Link
                  href={treatment.href}
                  className={cn(
                    "block py-2 px-3 -mx-3 rounded-md transition-all duration-150",
                    "text-neutral-700 hover:text-primary-600 hover:bg-primary-50",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    "group"
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-150">
                      {treatment.label}
                    </span>
                    {/* Subtle arrow indicator on hover */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-primary-600"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                  {treatment.description && (
                    <span className="text-xs text-neutral-500 mt-1 block">
                      {treatment.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
