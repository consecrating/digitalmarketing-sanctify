import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "AI Search & Goa Tourism: How Tourists Discover Businesses Through AI in 2026",
  description: "Expert guide on AI search Goa tourism from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/ai-search-goa-tourism/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="AI Search & Goa Tourism: How Tourists Discover Businesses Through AI in 2026"
      slug="ai-search-goa-tourism"
      keyword="AI search Goa tourism"
    />
  );
}
