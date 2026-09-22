import type { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { Footer } from "@/components/homepage/footer";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Book a Consultation | Facecult Dublin",
  description:
    "Book your consultation at Facecult Dublin. Expert aesthetic treatments tailored to your skin goals.",
  alternates: {
    canonical: "https://facecult.ie/book",
  },
};

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-primary text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Book Your Consultation
            </h1>
            <p className="text-lg text-neutral-600">
              Ready to start your journey to better skin? Book your consultation with
              our expert team at Facecult Dublin.
            </p>
          </div>

          <Section>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 text-center">
              <p className="text-neutral-600 mb-4">
                Booking system integration coming soon.
              </p>
              <p className="text-neutral-600">
                For now, please contact us directly to schedule your appointment.
              </p>
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </main>
  );
}