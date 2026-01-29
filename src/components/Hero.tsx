import { Phone, Calendar, MessageSquare, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Anti-Corporate Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Family Owned • No Corporate Pricing</span>
          </div>
          
          {/* Tagline */}
          <p className="text-primary font-display italic text-xl md:text-2xl mb-6 opacity-0 animate-fade-in text-shadow" style={{ animationDelay: "0.2s" }}>
            From Our Family to Yours
          </p>
          
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up text-shadow" style={{ animationDelay: "0.4s" }}>
            Fast, Reliable{" "}
            <span className="text-gradient-gold-shine">HVAC Service</span>
            <br />in Arizona
          </h1>
          
          {/* Anti-Corporate Hook */}
          <p className="text-lg md:text-xl text-foreground/90 mb-4 opacity-0 animate-fade-in font-medium" style={{ animationDelay: "0.5s" }}>
            Tired of Being Gouged by Big Corporate Companies?
          </p>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Residential & Commercial AC Repair, Installation & Maintenance — Built for Extreme Desert Heat. 
            Your comfort is our mission.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-gold-shine hover:opacity-90 shadow-gold text-lg px-8 py-6 w-full sm:w-auto font-semibold"
              asChild
            >
              <a href="tel:6238891281">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 w-full sm:w-auto font-semibold"
              asChild
            >
              <a href="#contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-foreground hover:text-primary text-lg px-8 py-6 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            {[
              "Licensed & Insured",
              "Family Owned",
              "Same-Day Service",
              "No Hidden Fees"
            ].map((badge) => (
              <div 
                key={badge}
                className="flex items-center gap-2 text-foreground/80"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-gold shadow-gold" />
                <span className="text-sm md:text-base font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
