import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Get Your Business Mentioned by ChatGPT — Sanctify's Proven Method",
  description: "Expert guide on how to get mentioned by ChatGPT from Sanctify — Goa's first AI-ready digital marketing agency. 14+ years of SEO expertise combined with cutting-edge AI optimization.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/how-to-get-mentioned-chatgpt/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="How to Get Your Business Mentioned by ChatGPT — Sanctify's Proven Method"
      slug="how-to-get-mentioned-chatgpt"
      keyword="how to get mentioned by ChatGPT"
    />
  );
}
