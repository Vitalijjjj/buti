"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const practitioners = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Medical Director & Board-Certified Dermatologist",
    specialties: ["Injectable Treatments", "Laser Therapy", "Skin Cancer"],
    credentials: ["MD", "Board Certified", "15+ Years Experience"],
    bio: "Dr. Johnson brings over 15 years of experience in medical and cosmetic dermatology. She specializes in advanced injectable treatments and laser procedures, with a focus on natural-looking results.",
    image: "/placeholder-doctor-1.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Jessica Martinez, RN",
    title: "Licensed Aesthetic Nurse Practitioner",
    specialties: ["Dermal Fillers", "Chemical Peels", "Skin Health"],
    credentials: ["RN", "Certified Injector", "10+ Years Experience"],
    bio: "Jessica is a highly skilled aesthetic nurse with extensive training in advanced injection techniques. She is passionate about helping clients achieve their aesthetic goals through personalised treatment plans.",
    image: "/placeholder-nurse-1.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Cosmetic Surgeon & Aesthetic Specialist",
    specialties: ["Body Contouring", "Advanced Procedures", "Reconstructive"],
    credentials: ["MD", "Board Certified", "20+ Years Experience"],
    bio: "Dr. Chen is a board-certified plastic surgeon specializing in minimally invasive cosmetic procedures. His artistic approach and attention to detail ensure exceptional results for every patient.",
    image: "/placeholder-doctor-2.jpg",
    featured: false,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-accent-warmBeige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-secondary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Meet Our Expert Medical Practitioners
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our team of board-certified physicians and licensed aesthetic professionals bring decades of combined experience and a commitment to excellence in patient care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-12">
          {practitioners.map((practitioner, index) => (
            <Card
              key={practitioner.id}
              className={`overflow-hidden bg-white shadow-lg border-0 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } min-h-[400px]`}>
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary-100 to-primary-200" />
                  {practitioner.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary-600 text-white">
                        Featured Practitioner
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <CardContent className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                      {practitioner.name}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium mb-4">
                      {practitioner.title}
                    </p>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {practitioner.credentials.map((credential, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-accent-cream text-neutral-700"
                        >
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {practitioner.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {practitioner.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Button className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
                      <a href="#booking">Book Consultation</a>
                    </Button>
                    <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-3">
              Why Choose Our Medical Team?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">35+</div>
                <div className="text-sm text-neutral-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-sm text-neutral-600">Successful Treatments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5<span className="text-[#FBBC04]">★</span>
                </div>
                <div className="text-sm text-neutral-600">Google Reviews</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8"
            >
              Meet the Full Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}