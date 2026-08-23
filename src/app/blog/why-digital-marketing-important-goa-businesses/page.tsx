import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Why Digital Marketing is Important for Goa Businesses in 2026",
  description: "Learn about digital marketing importance Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/why-digital-marketing-important-goa-businesses/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Why Digital Marketing is Important for Goa Businesses in 2026"
      slug="why-digital-marketing-important-goa-businesses"
      keyword="digital marketing importance Goa"
    />
  );
}
