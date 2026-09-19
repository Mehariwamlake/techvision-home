import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { ProductSections } from "@/components/solutions/product-sections";
import { BundlesSection } from "@/components/site/bundles-section";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Solutions — TechVision",
  description:
    "Explore TechVision's LMS, Education ERP, ERP, and HR Management System. Buy individually or bundle them into a suite.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <SolutionsHero />
      <ProductSections />
      <BundlesSection />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
