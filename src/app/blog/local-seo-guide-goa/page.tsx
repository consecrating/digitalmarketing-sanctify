import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Local SEO Guide for Goa — Rank in Google Maps",
  description: "Learn about local SEO Goa guide. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/local-seo-guide-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Local SEO Guide for Goa — Rank in Google Maps"
      slug="local-seo-guide-goa"
      keyword="local SEO Goa guide"
    />
  );
}
