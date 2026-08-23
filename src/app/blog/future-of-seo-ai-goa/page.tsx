import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "The Future of SEO in Goa: Why AI Optimization is Non-Negotiable",
  description: "Expert guide on future of SEO AI Goa from Sanctify — Goa's first AI-ready digital marketing agency. 12+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/future-of-seo-ai-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="The Future of SEO in Goa: Why AI Optimization is Non-Negotiable"
      slug="future-of-seo-ai-goa"
      keyword="future of SEO AI Goa"
    />
  );
}
