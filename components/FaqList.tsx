import { Plus } from "lucide-react";
import type { Faq } from "@/lib/types";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary><span>{faq.question}</span><Plus aria-hidden="true" /></summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
