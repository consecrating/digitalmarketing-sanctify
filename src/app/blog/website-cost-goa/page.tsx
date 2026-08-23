import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost in Goa? [2026 Guide]",
  description: "Learn about website cost Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/website-cost-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How Much Does a Website Cost in Goa? [2026 Guide]"
      slug="website-cost-goa"
      keyword="website cost Goa"
    />
  );
}
