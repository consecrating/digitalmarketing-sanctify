import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Optimize Google Business Profile for Goa Businesses",
  description: "Learn about Google Business Profile optimization Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/google-business-profile-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How to Optimize Google Business Profile for Goa Businesses"
      slug="google-business-profile-goa"
      keyword="Google Business Profile optimization Goa"
    />
  );
}
