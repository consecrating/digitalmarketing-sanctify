import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "What is GEO? Complete Guide to Generative Engine Optimization [2026]",
  description: "Expert guide on what is GEO optimization from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/what-is-geo-optimization-guide/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="What is GEO? Complete Guide to Generative Engine Optimization [2026]"
      slug="what-is-geo-optimization-guide"
      keyword="what is GEO optimization"
    />
  );
}
