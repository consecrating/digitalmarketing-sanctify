import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management in Goa — Google Ads agency Goa",
  description: "Maximize ROI with expertly managed Google Ads campaigns. Search, display, YouTube, and remarketing — optimized for your best cost-per-lead. Serving Panaji, Margao, Mapusa & all Goa. Sanctify — Goa's trusted Google Ads partner since 2012.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/google-ads/" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Google Ads Management"
      keyword="Google Ads agency Goa"
      description="Maximize ROI with expertly managed Google Ads campaigns. Search, display, YouTube, and remarketing — optimized for your best cost-per-lead."
      slug="google-ads"
    />
  );
}
