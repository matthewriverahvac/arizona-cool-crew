import { Target, Heart, Users } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6 shadow-gold-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <p className="text-primary font-display italic text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our Mission
          </p>
          
          {/* Mission Statement */}
          <blockquote className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              "To deliver <span className="text-gradient-gold-shine">honest, dependable</span> HVAC service that treats every customer like family — because in Arizona's extreme heat, 
              <span className="text-gradient-gold-shine"> comfort isn't a luxury, it's a necessity.</span>"
            </p>
          </blockquote>
          
          <div className="divider-gold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }} />
          
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl text-foreground mb-2">Integrity First</h4>
              <p className="text-muted-foreground text-sm">Honest pricing, no upsells, no surprises</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl text-foreground mb-2">Family Values</h4>
              <p className="text-muted-foreground text-sm">We treat your home like our own</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl text-foreground mb-2">Excellence Always</h4>
              <p className="text-muted-foreground text-sm">Quality work that stands the test of time</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Mission;
