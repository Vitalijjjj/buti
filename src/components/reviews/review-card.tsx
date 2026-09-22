import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  treatment: string;
  rating: number;
  date: string;
  review: string;
  verified?: boolean;
  className?: string;
}

export function ReviewCard({
  name,
  treatment,
  rating,
  date,
  review,
  verified = true,
  className,
}: ReviewCardProps) {
  return (
    <Card className={cn("bg-white shadow-lg border-0 h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-neutral-900">{name}</h3>
            <p className="text-sm text-neutral-600">{treatment}</p>
          </div>
          {verified && (
            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
              Verified
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "text-yellow-400 fill-current"
                  : "text-neutral-300"
              )}
            />
          ))}
          <span className="text-sm text-neutral-600 ml-2">{date}</span>
        </div>

        {/* Review Text */}
        <p className="text-neutral-700 leading-relaxed flex-grow">
          &ldquo;{review}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}