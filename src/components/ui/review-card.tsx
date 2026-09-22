/**
 * ReviewCard Component
 *
 * Reusable component for displaying client reviews
 * Features:
 * - Star rating display
 * - Client name and date
 * - Treatment received
 * - Review text
 * - Optional client image
 */

"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  rating: number; // 1-5
  date: string;
  treatment: string;
  review: string;
  image?: string;
  className?: string;
}

export function ReviewCard({
  name,
  rating,
  date,
  treatment,
  review,
  image,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {/* Header: Stars + Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={cn(
                "w-5 h-5",
                index < rating
                  ? "fill-primary-600 text-primary-600"
                  : "fill-neutral-200 text-neutral-200"
              )}
            />
          ))}
        </div>
        <span className="text-sm text-neutral-500">{date}</span>
      </div>

      {/* Review Text */}
      <p className="text-neutral-700 leading-relaxed mb-4 italic">
        &quot;{review}&quot;
      </p>

      {/* Footer: Name + Treatment */}
      <div className="pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-neutral-900">{name}</p>
            <p className="text-sm text-neutral-600">Treatment: {treatment}</p>
          </div>
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
