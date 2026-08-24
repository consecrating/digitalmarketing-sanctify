import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "AI Marketing: The Future of Digital Advertising in Goa",
  description: "Learn about AI marketing future Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/ai-marketing-future-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="AI Marketing: The Future of Digital Advertising in Goa"
      slug="ai-marketing-future-goa"
      keyword="AI marketing future Goa"
    />
  );
}
