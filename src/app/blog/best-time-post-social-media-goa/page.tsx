import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Best Time to Post on Social Media for Goa Audience",
  description: "Learn about best time post social media Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/best-time-post-social-media-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Best Time to Post on Social Media for Goa Audience"
      slug="best-time-post-social-media-goa"
      keyword="best time post social media Goa"
    />
  );
}
