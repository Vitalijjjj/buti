import { Card, CardContent } from "@/components/ui/card";
import { ScanIcon } from "./icons/ScanIcon";
import { CoachIcon } from "./icons/CoachIcon";
import { HomeCareIcon } from "./icons/HomeCareIcon";
import { FileText } from "lucide-react";

interface ValueTile {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const tiles: ValueTile[] = [
  {
    icon: <ScanIcon className="w-8 h-8" />,
    title: "3D Skin Scan & Analysis",
    value: "€200",
    description: "Advanced diagnostic imaging and detailed skin report",
  },
  {
    icon: <CoachIcon className="w-8 h-8" />,
    title: "Skin Coach Consultation",
    value: "€100",
    description: "One-to-one session with our certified Skin Coach",
  },
  {
    icon: <HomeCareIcon className="w-8 h-8" />,
    title: "Home Care Prescription",
    value: "€50",
    description: "Personalised skincare plan and product recommendations",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Tailored Treatment Plan",
    value: "Included",
    description: "Built around your unique skin goals and lifestyle",
  },
];

export function ValueTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map((tile, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
              {tile.icon}
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">
              {tile.title}
            </h3>
            <div className="text-2xl font-bold text-primary-600 mb-3">
              {tile.value}
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {tile.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
