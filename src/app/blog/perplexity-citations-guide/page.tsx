import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Get Cited by Perplexity AI — Step by Step Guide",
  description: "Expert guide on Perplexity AI citations guide from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/perplexity-citations-guide/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How to Get Cited by Perplexity AI — Step by Step Guide"
      slug="perplexity-citations-guide"
      keyword="Perplexity AI citations guide"
    />
  );
}
