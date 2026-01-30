import { Shield, Users, Clock, Award, ThumbsUp, Banknote } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <div 
    className="flex gap-5 opacity-0 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
      <div className="text-primary-foreground">{icon}</div>
    </div>
    <div>
      <h4 className="font-display text-xl text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Owned & Operated",
      description: "We're not a faceless corporation. When you call Cool Fox, you're talking to neighbors who care about your comfort.",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "No Corporate Pricing",
      description: "Tired of being gouged? We offer fair, transparent pricing without the hidden fees that big companies love to add.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind. We stand behind every job we do.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Service",
      description: "Arizona heat doesn't wait, and neither do we. Emergency service available around the clock.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Honest Recommendations",
      description: "We'll never upsell you on services you don't need. We treat your home like our own.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Desert Climate Experts",
      description: "We understand Arizona's extreme heat and know exactly what your HVAC system needs to survive it.",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-primary font-display italic text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Why Cool Fox?
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Service the Way{" "}
              <span className="text-gradient-gold">It Should Be</span>
            </h2>
            <div className="divider-gold mb-6 !mx-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.25s" }} />
            <p className="text-muted-foreground text-lg mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              We started Cool Fox because we were tired of seeing Arizona families get overcharged by big corporate HVAC companies. 
              We believe you deserve honest service at a fair price — from a team that actually cares.
            </p>
            
            {/* Anti-Corporate Callout */}
            <div className="card-premium p-6 mb-8 gold-border-glow opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <p className="text-foreground font-display text-xl mb-2">
                "Tired of Being Gouged by Big Corporate Companies"
              </p>
              <p className="text-muted-foreground">
                We get it. That's exactly why we started Cool Fox. Real service. Real pricing. Real people.
              </p>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={`${0.4 + index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default WhyChooseUs;
