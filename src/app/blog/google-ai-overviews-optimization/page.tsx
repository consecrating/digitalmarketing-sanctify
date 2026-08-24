import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Appear in Google AI Overviews — A Goa Business Guide",
  description: "Expert guide on Google AI Overviews optimization from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/google-ai-overviews-optimization/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How to Appear in Google AI Overviews — A Goa Business Guide"
      slug="google-ai-overviews-optimization"
      keyword="Google AI Overviews optimization"
    />
  );
}
