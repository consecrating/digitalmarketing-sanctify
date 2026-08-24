import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "Video Marketing for Goa Tourism Industry",
  description: "Learn about video marketing Goa tourism. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/video-marketing-goa-tourism/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="Video Marketing for Goa Tourism Industry"
      slug="video-marketing-goa-tourism"
      keyword="video marketing Goa tourism"
    />
  );
}
