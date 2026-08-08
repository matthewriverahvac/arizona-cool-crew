import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { generalFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("HVAC Frequently Asked Questions", "Straightforward answers to common Arizona air conditioning, heating, maintenance, and indoor air quality questions.", "/faq");

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: generalFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <><JsonLd data={schema} /><PageHero eyebrow="Helpful Answers" title="Arizona HVAC frequently asked questions" text="Practical answers for common comfort problems, maintenance questions, and service decisions." /><section className="section shell faq-preview"><SectionHeading eyebrow="Ask Cool Fox" title="Start with the most common questions" text="A system diagnosis is still the best way to understand a specific problem." /><FaqList faqs={generalFaqs} /></section></>;
}
