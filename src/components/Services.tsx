import { Wrench, Snowflake, Calendar, Clock, Home, Building2, Shield, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <div 
    className="group card-premium p-8 hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold-glow transition-all duration-300">
      <div className="text-primary-foreground">{icon}</div>
    </div>
    <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
    <Button 
      variant="ghost" 
      className="text-primary hover:text-primary hover:bg-primary/10 p-0 font-semibold"
      asChild
    >
      <a href="#contact">
        Schedule Service →
      </a>
    </Button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "AC Repair",
      description: "Fast diagnostics, transparent pricing, and reliable repairs built to last — even in 110° Arizona heat. We service all brands and models.",
    },
    {
      icon: <Snowflake className="w-7 h-7" />,
      title: "AC Installation",
      description: "Expert installation of energy-efficient cooling systems. We'll help you choose the perfect unit for your space.",
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Maintenance Plans",
      description: "Keep your system running at peak efficiency with regular tune-ups. Prevent costly breakdowns before they happen.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Emergency Service",
      description: "24/7 emergency HVAC service when you need it most. No extra charge for after-hours calls in Arizona heat.",
    },
    {
      icon: <Home className="w-7 h-7" />,
      title: "Residential Cooling",
      description: "Complete home comfort solutions tailored for the Arizona desert climate. From single rooms to whole-house systems.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Commercial HVAC",
      description: "Keep your business running cool. We service offices, retail spaces, warehouses, and industrial facilities across Arizona.",
    },
    {
      icon: <Thermometer className="w-7 h-7" />,
      title: "Indoor Air Quality Services",
      description: "Breathe easier with solutions designed to reduce dust, allergens, and airborne contaminants. Our air quality services help create a healthier, more comfortable home year-round.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Heating Services",
      description: "Furnace repair, installation, and maintenance. Stay warm during Arizona's cold desert nights.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-dark relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-display italic text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            HVAC Services Built for{" "}
            <span className="text-gradient-gold">Arizona Heat</span>
          </h2>
          <div className="divider-gold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.25s" }} />
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            From emergency repairs to complete system installations — residential and commercial. 
            Our team is trained to handle the unique challenges of desert climate cooling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={`${0.4 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Services;
