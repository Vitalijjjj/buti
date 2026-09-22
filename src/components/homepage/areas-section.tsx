"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dublinAreas = [
  "Dublin City Centre",
  "Temple Bar",
  "Ballsbridge",
  "Donnybrook",
  "Ranelagh",
  "Rathmines",
  "Rathgar",
  "Terenure",
  "Dundrum",
  "Sandyford",
  "Stillorgan",
  "Blackrock",
  "Dún Laoghaire",
  "Dalkey",
  "Killiney",
  "Clontarf",
  "Howth",
  "Malahide",
  "Swords",
  "Lucan",
];

export function AreasSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-primary-600" />
          </div>

          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Serving Dublin & Surrounding Areas
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Conveniently located to serve clients across Dublin. From laser treatments to advanced skin rejuvenation,
            our medical-grade aesthetic services are accessible to you.
          </p>
        </div>

        {/* Areas Grid */}
        <Card className="bg-neutral-50 border-0 shadow-md">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {dublinAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary-600 shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
              <p className="text-neutral-600">
                Don&apos;t see your area listed?{" "}
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium underline"
                >
                  Contact us
                </a>{" "}
                — we welcome clients from all over Dublin and surrounding counties.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}