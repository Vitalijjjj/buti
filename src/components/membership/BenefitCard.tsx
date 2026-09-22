import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string | React.ReactNode;
  highlight?: boolean;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
  highlight = false,
}: BenefitCardProps) {
  return (
    <Card
      className={`${
        highlight
          ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white border-0 shadow-xl"
          : "bg-white border border-neutral-200 hover:border-primary-300"
      } transition-all duration-300 hover:shadow-lg`}
    >
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
              highlight
                ? "bg-white/20 text-white"
                : "bg-primary-100 text-primary-600"
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3
              className={`font-semibold text-xl mb-3 ${
                highlight ? "text-white" : "text-neutral-900"
              }`}
            >
              {title}
            </h3>
            <div
              className={`leading-relaxed ${
                highlight ? "text-white/90" : "text-neutral-600"
              }`}
            >
              {description}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
