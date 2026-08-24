import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Social Media Trends in Goa for 2026",
  description: "Learn about social media trends Goa 2026. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/social-media-trends-goa-2026/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Social Media Trends in Goa for 2026"
      slug="social-media-trends-goa-2026"
      keyword="social media trends Goa 2026"
    />
  );
}
