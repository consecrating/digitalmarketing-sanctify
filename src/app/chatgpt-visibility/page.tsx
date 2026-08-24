import type { Metadata } from "next";
import { AIServiceTemplate } from "@/components/AIServiceTemplate";

export const metadata: Metadata = {
  title: "ChatGPT Visibility in Goa — ChatGPT visibility services Goa",
  description: "ChatGPT visibility work from Sanctify, Goa. Build the signals that get your business mentioned when buyers ask for recommendations. Free audit.",
  alternates: { canonical: "https://www.digitalmarketing.sanctify.in/chatgpt-visibility/" },
  openGraph: {
    title: "ChatGPT Visibility in Goa | Sanctify",
    description: "ChatGPT visibility work from Sanctify, Goa. Build the signals that get your business mentioned when buyers ask for recommendations. Free audit.",
    url: "https://www.digitalmarketing.sanctify.in/chatgpt-visibility/",
  },
};

export default function Page() {
  return (
    <AIServiceTemplate
      title={"ChatGPT Visibility"}
      fullTitle={"ChatGPT Visibility"}
      slug={"chatgpt-visibility"}
      heroDesc={"Buyers increasingly open an AI assistant instead of a search engine. Sanctify works on whether your business appears when someone asks ChatGPT for recommendations in your category and area."}
      whatIs={"This is the practice of building the web-wide signals that make an assistant likely to surface your business in a conversational recommendation. In Goa this matters particularly for hospitality, travel and local services, where visitors research destinations and providers conversationally before booking. The work spans content structure, entity consistency and third-party corroboration."}
      whyUs={"Sanctify has been tracking how assistants surface local businesses across our Goa client base for some time, which gives us a practical read on which signals move outcomes and which do not. We work to an agreed prompt set and report month-on-month. We are explicit that placement cannot be guaranteed — these systems are closed and change frequently."}
    />
  );
}
