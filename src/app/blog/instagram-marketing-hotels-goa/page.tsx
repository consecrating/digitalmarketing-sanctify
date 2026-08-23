import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Instagram Marketing for Hotels in Goa — Complete Guide",
  description: "Learn about Instagram marketing hotels Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/instagram-marketing-hotels-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Instagram Marketing for Hotels in Goa — Complete Guide"
      slug="instagram-marketing-hotels-goa"
      keyword="Instagram marketing hotels Goa"
    />
  );
}
