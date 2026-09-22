import * as React from "react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TreatmentResultProps {
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
  className?: string;
}

export function TreatmentResult({
  title,
  description,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  aspectRatio = "3/4",
  className,
}: TreatmentResultProps) {
  return (
    <Card className={cn("overflow-hidden bg-white shadow-lg border-0 h-full", className)}>
      <CardContent className="p-0 flex flex-col h-full">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          beforeAlt={beforeAlt}
          afterAlt={afterAlt}
          aspectRatio={aspectRatio}
          className="rounded-t-xl rounded-b-none"
        />
        <div className="p-6 space-y-2 flex-grow">
          <h3 className="font-secondary text-xl font-semibold text-neutral-900">
            {title}
          </h3>
          {description && (
            <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}