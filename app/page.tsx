import Hero from "@/components/hero";
import Features from "@/components/features";
import Solutions from "@/components/solutions";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <CTA />
    </main>
  );
}