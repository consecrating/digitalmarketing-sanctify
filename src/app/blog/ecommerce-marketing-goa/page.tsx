import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "E-commerce Marketing Strategies for Goa Businesses",
  description: "Learn about ecommerce marketing Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/ecommerce-marketing-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="E-commerce Marketing Strategies for Goa Businesses"
      slug="ecommerce-marketing-goa"
      keyword="ecommerce marketing Goa"
    />
  );
}
