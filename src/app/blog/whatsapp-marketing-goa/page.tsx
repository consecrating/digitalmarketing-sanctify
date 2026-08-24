import type { Metadata } from "next";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";

export const metadata: Metadata = {
  title: "WhatsApp Marketing for Goa Businesses — Complete Guide",
  description: "Learn about WhatsApp marketing Goa. Expert insights from Sanctify — Goa's leading digital marketing agency with 14+ years of experience.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/blog/whatsapp-marketing-goa/" },
};

export default function Page() {
  return (
    <BlogPostTemplate
      title="WhatsApp Marketing for Goa Businesses — Complete Guide"
      slug="whatsapp-marketing-goa"
      keyword="WhatsApp marketing Goa"
    />
  );
}
