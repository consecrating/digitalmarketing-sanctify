import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Google Ads vs Facebook Ads — Which is Better for Goa Businesses?",
  description: "Learn about Google Ads vs Facebook Ads Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 12+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/google-ads-vs-facebook-ads-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Google Ads vs Facebook Ads — Which is Better for Goa Businesses?"
      slug="google-ads-vs-facebook-ads-goa"
      keyword="Google Ads vs Facebook Ads Goa"
    />
  );
}
