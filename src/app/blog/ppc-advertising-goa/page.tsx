import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "PPC Advertising for Goa Businesses — Maximize Your ROI",
  description: "Learn about PPC advertising Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/ppc-advertising-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="PPC Advertising for Goa Businesses — Maximize Your ROI"
      slug="ppc-advertising-goa"
      keyword="PPC advertising Goa"
    />
  );
}
