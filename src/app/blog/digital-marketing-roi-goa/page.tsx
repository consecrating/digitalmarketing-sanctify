import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Measuring Digital Marketing ROI for Goa Businesses",
  description: "Learn about digital marketing ROI Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/digital-marketing-roi-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Measuring Digital Marketing ROI for Goa Businesses"
      slug="digital-marketing-roi-goa"
      keyword="digital marketing ROI Goa"
    />
  );
}
