import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoogleReviewCardProps {
  name: string;
  rating: number;
  date: string;
  review: string;
  className?: string;
}

export function GoogleReviewCard({
  name,
  rating,
  date,
  review,
  className,
}: GoogleReviewCardProps) {
  return (
    <Card className={cn("bg-white shadow-lg border-0 h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-neutral-900">{name}</h3>
          </div>
          {/* Google Badge */}
          <div className="flex items-center gap-1 bg-white border border-neutral-200 px-2 py-1 rounded">
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-xs font-medium text-neutral-700">Google</span>
          </div>
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