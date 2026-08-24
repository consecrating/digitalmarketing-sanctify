import type { Metadata } from "next";
import { PageHero, FactGrid } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — Digital Marketing Retainers & Projects in Goa",
  description:
    "Transparent pricing from Sanctify, Goa. Monthly retainers from ₹15,000. Websites from ₹25,000. Rolling monthly terms, no lock-in contracts, free audit before you commit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced openly,"
        accent="scoped honestly."
        lede="Retainers from ₹15,000 per month and websites from ₹25,000. Rolling monthly terms with 30 days' notice — no lock-in. Every engagement starts with a free audit so scope is agreed before you commit."
        crumbs={[{ href: "/", label: "Home" }, { label: "Pricing" }]}
        meta={
          <FactGrid
            items={[
              { k: "Retainers from", v: "₹15,000/mo" },
              { k: "Websites from", v: "₹25,000" },
              { k: "Contract terms", v: "No lock-in" },
              { k: "Initial audit", v: "Free" },
            ]}
          />
        }
      />
      <Pricing />
      <CTABanner />
    </>
  );
}
