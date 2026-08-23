import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Design & Development in Goa — web design agency Goa",
  description: "Stunning, fast-loading, mobile-responsive websites that convert visitors into customers. Modern UI/UX with SEO-ready architecture. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Web Design partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/web-design/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Web Design & Development"
      keyword="web design agency Goa"
      description="Stunning, fast-loading, mobile-responsive websites that convert visitors into customers. Modern UI/UX with SEO-ready architecture."
      slug="web-design"
    />
  );
}
