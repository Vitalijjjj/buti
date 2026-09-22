import { Card, CardContent } from "@/components/ui/card";
import { ScanIcon } from "./icons/ScanIcon";
import { CoachIcon } from "./icons/CoachIcon";
import { HomeCareIcon } from "./icons/HomeCareIcon";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ScanIcon className="w-10 h-10" />,
    title: "3D Skin Scan",
    description: "Advanced technology for precise skin analysis and measurement",
  },
  {
    icon: <CoachIcon className="w-10 h-10" />,
    title: "Dedicated Skin Coach",
    description: "Certified expert guidance throughout your transformation journey",
  },
  {
    icon: <HomeCareIcon className="w-10 h-10" />,
    title: "Home Care Plan",
    description: "Personalised daily routine designed specifically for your skin",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full mb-6">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-xl text-neutral-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
