import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Complete Guide to Facebook Ads for Goa Businesses",
  description: "Learn about Facebook ads Goa guide. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/facebook-ads-guide-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Complete Guide to Facebook Ads for Goa Businesses"
      slug="facebook-ads-guide-goa"
      keyword="Facebook ads Goa guide"
    />
  );
}
