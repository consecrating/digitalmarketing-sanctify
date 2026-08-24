import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "SEO vs PPC: Which Should Your Goa Business Invest In?",
  description: "Learn about SEO vs PPC Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/seo-vs-ppc-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="SEO vs PPC: Which Should Your Goa Business Invest In?"
      slug="seo-vs-ppc-goa"
      keyword="SEO vs PPC Goa"
    />
  );
}
