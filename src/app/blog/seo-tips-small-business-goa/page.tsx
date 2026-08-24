import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "10 SEO Tips for Small Businesses in Goa",
  description: "Learn about SEO tips Goa small business. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/seo-tips-small-business-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="10 SEO Tips for Small Businesses in Goa"
      slug="seo-tips-small-business-goa"
      keyword="SEO tips Goa small business"
    />
  );
}
