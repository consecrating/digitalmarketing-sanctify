import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing vs Traditional Advertising for Goa Businesses",
  description: "Learn about digital marketing vs traditional Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/digital-marketing-vs-traditional-advertising-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Digital Marketing vs Traditional Advertising for Goa Businesses"
      slug="digital-marketing-vs-traditional-advertising-goa"
      keyword="digital marketing vs traditional Goa"
    />
  );
}
