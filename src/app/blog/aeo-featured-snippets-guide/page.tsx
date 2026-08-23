import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "AEO: How to Win Featured Snippets & Position Zero for Your Goa Business",
  description: "Expert guide on AEO featured snippets guide from Sanctify — Goa's first AI-ready digital marketing agency. 12+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/aeo-featured-snippets-guide/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="AEO: How to Win Featured Snippets & Position Zero for Your Goa Business"
      slug="aeo-featured-snippets-guide"
      keyword="AEO featured snippets guide"
    />
  );
}
