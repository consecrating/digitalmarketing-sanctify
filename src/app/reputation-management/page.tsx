import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Online Reputation Management in Goa — reputation management Goa",
  description: "Monitor, manage, and improve your online reputation. Review management, crisis response, and building a positive digital footprint. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted ORM partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/reputation-management/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Online Reputation Management"
      keyword="reputation management Goa"
      description="Monitor, manage, and improve your online reputation. Review management, crisis response, and building a positive digital footprint."
      slug="reputation-management"
    />
  );
}
