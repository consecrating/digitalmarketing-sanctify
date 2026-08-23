import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Build a Content Marketing Strategy for Your Goa Business",
  description: "Learn about content marketing strategy Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/content-marketing-strategy-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How to Build a Content Marketing Strategy for Your Goa Business"
      slug="content-marketing-strategy-goa"
      keyword="content marketing strategy Goa"
    />
  );
}
