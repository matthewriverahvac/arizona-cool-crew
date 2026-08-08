import type { Metadata } from "next";
import { MessageSquareQuote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = pageMetadata("Customer Reviews", "Read approved Cool Fox Heating and Cooling customer feedback with links to verified review sources.", "/reviews");

export default function ReviewsPage() {
  const approved = reviews.filter((review) => review.approved);
  return (
    <>
      <PageHero eyebrow="Customer Feedback" title="Service stories, published with permission" text="This page is reserved for approved feedback connected to a verifiable review source." />
      <section className="section shell">
        {approved.length ? <div className="location-grid">{approved.map((review) => <article className="content-card" key={`${review.source}-${review.displayName}`}><MessageSquareQuote aria-hidden="true" /><p>&quot;{review.quote}&quot;</p><strong>{review.displayName}, {review.city}</strong><a className="text-link" href={review.sourceUrl}>View on {review.source}</a></article>)}</div> : <div className="empty-state"><MessageSquareQuote aria-hidden="true" /><h2>Verified reviews are being prepared</h2><p>Cool Fox will only publish customer feedback after approval and source verification. No invented names, ratings, or review totals are shown.</p></div>}
      </section>
    </>
  );
}
