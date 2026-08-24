import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "LLMO vs SEO: What's the Difference and Do You Need Both?",
  description: "Expert guide on LLMO vs SEO difference from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/llmo-vs-seo-difference/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="LLMO vs SEO: What's the Difference and Do You Need Both?"
      slug="llmo-vs-seo-difference"
      keyword="LLMO vs SEO difference"
    />
  );
}
