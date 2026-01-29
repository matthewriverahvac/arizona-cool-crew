import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-gradient-teal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-display italic text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Customer Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Trusted by{" "}
            <span className="text-gradient-gold">Arizona Homeowners</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We're building our reputation one satisfied customer at a time.
          </p>
        </div>

        {/* Reviews Placeholder */}
        <div 
          className="max-w-4xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-gradient-card border border-border rounded-2xl p-10 md:p-16 text-center">
            {/* Stars Placeholder */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-10 h-10 text-primary/30 stroke-primary/50"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Reviews Coming Soon
            </h3>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              We're a new company dedicated to earning your trust. Our goal is to provide 
              such exceptional service that our customers can't help but share their experiences.
            </p>

            {/* Review Platform Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://www.google.com/search?q=Cool+Fox+Heating+Cooling+Arizona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  View on Google
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  View on Facebook
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Message */}
        <div 
          className="text-center mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-muted-foreground italic">
            "Your comfort is our mission. Integrity built, expertly crafted."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
