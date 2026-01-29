import { Phone, Mail, Clock, MapPin, Send, Building2, Home, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import badge from "@/assets/cool-fox-badge.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "residential",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", phone: "", email: "", serviceType: "residential", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-40 top-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-display italic text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to Stay{" "}
            <span className="text-gradient-gold">Cool?</span>
          </h2>
          <div className="divider-gold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.25s" }} />
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Whether you need emergency repairs or want to schedule maintenance, 
            we're here to help. Residential and commercial — no job too big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {/* Owner Card */}
            <div className="card-premium flex items-center gap-6 p-6 mb-6">
              <img 
                src={badge} 
                alt="Cool Fox" 
                className="w-20 h-20 rounded-full shadow-gold-glow"
              />
              <div>
                <h3 className="font-display text-xl text-foreground">Matthew Rivera</h3>
                <p className="text-primary">Owner & Operator</p>
                <p className="text-muted-foreground text-sm mt-1">Family Owned • No Corporate Pricing</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:6238891281" 
                className="card-premium flex items-center gap-4 p-5 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:shadow-gold-glow transition-all">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us Anytime</p>
                  <p className="text-lg text-foreground font-semibold">(623) 889-1281</p>
                </div>
              </a>
              
              <a 
                href="mailto:Service@cool-fox.com" 
                className="card-premium flex items-center gap-4 p-5 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:shadow-gold-glow transition-all">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg text-foreground font-semibold">Service@cool-fox.com</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-premium p-5">
                  <Clock className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Available</p>
                  <p className="text-foreground font-semibold">24/7 Emergency</p>
                </div>
                <a 
                  href="https://cool-fox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-5 hover:border-primary/50 transition-all"
                >
                  <Globe className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <p className="text-foreground font-semibold">cool-fox.com</p>
                </a>
              </div>
              
              <div className="card-premium flex items-center gap-4 p-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Area</p>
                  <p className="text-foreground font-semibold">Phoenix & Surrounding Areas</p>
                  <p className="text-sm text-muted-foreground">Scottsdale, Mesa, Chandler, Tempe & more</p>
                </div>
              </div>
            </div>

            {/* Trust message */}
            <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-primary/20 gold-border-glow">
              <p className="text-foreground font-display text-lg mb-2">Tired of Being Gouged?</p>
              <p className="text-muted-foreground text-sm">
                We believe in transparent, fair pricing. No hidden fees, no surprise charges — just honest service from a family that cares.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="font-display text-2xl text-foreground mb-2">
              Request a Free Quote
            </h3>
            <p className="text-muted-foreground mb-6">Fill out the form and we'll get back to you ASAP.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-foreground/80 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm text-foreground/80 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm text-foreground/80 mb-3">
                  Service Type *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: "residential" })}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border transition-all ${
                      formData.serviceType === "residential"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: "commercial" })}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border transition-all ${
                      formData.serviceType === "commercial"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                    Commercial
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-foreground/80 mb-2">
                  How can we help? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your HVAC needs..."
                  rows={4}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-gold-shine hover:opacity-90 shadow-gold font-semibold"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Or call us directly at{" "}
                <a href="tel:6238891281" className="text-primary hover:underline font-semibold">
                  (623) 889-1281
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Contact;
