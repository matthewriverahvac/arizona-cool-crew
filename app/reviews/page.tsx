import type { Metadata } from "next";
import { ExternalLink, MessageSquareQuote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Customer Reviews", "Read approved Cool Fox Heating and Cooling customer feedback with links to verified review sources.", "/reviews");

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Customer Feedback" title="Real Reviews From Arizona Customers" text="Cool Fox has earned more than 50 reviews from customers who chose the team for heating and cooling service." primaryLabel="Open Google Reviews" primaryHref={siteConfig.googleReviewsUrl} />
      <section className="section shell reviews-source-section">
        <div className="google-review-panel">
          <div className="google-review-icon"><MessageSquareQuote aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">Verified Review Source</p>
            <h2>{siteConfig.googleReviewCountLabel}</h2>
            <p>Read the current rating and every public review directly on the Cool Fox Google Business Profile. Google is the source of record for customer names, dates, star ratings, photos, and original review text.</p>
            <a className="button button-gold" href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">View All Reviews on Google <ExternalLink aria-hidden="true" size={18} /></a>
          </div>
        </div>
        <div className="review-confidence-grid" aria-label="What you can verify on Google">
          <div><strong>Original feedback</strong><span>Read each customer&apos;s words without rewritten testimonials.</span></div>
          <div><strong>Current rating</strong><span>See the live rating and review total maintained by Google.</span></div>
          <div><strong>Customer photos</strong><span>View public photos customers choose to share with their reviews.</span></div>
        </div>
      </section>
    </>
  );
}
