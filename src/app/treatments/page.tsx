import { FloatingNav } from "@/components/navigation/floating-nav";
import { TreatmentsHero } from "@/components/treatments/treatments-hero";
import { Footer } from "@/components/homepage/footer";

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <TreatmentsHero />
      <Footer />
    </main>
  );
}