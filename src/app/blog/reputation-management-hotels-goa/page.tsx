import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Online Reputation Management for Hotels in Goa",
  description: "Learn about reputation management hotels Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/reputation-management-hotels-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Online Reputation Management for Hotels in Goa"
      slug="reputation-management-hotels-goa"
      keyword="reputation management hotels Goa"
    />
  );
}
