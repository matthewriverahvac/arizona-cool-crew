import { Phone, Mail, MapPin, Instagram, Globe } from "lucide-react";
import badge from "@/assets/cool-fox-badge.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-deep border-t border-border relative">
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-gold opacity-50" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={badge} 
              alt="Cool Fox Heating & Cooling" 
              className="h-28 w-28 rounded-full mb-6 shadow-gold-glow"
            />
            <p className="text-primary font-display italic text-lg mb-2">
              "From Our Family to Yours"
            </p>
            <p className="text-muted-foreground text-sm">
              Family owned. No corporate pricing. Just honest service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-primary mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Services</a>
              <a href="#why-us" className="text-foreground/70 hover:text-primary transition-colors">Why Choose Us</a>
              <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-primary mb-6">Our Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-foreground/70">AC Repair</span>
              <span className="text-foreground/70">AC Installation</span>
              <span className="text-foreground/70">Commercial HVAC</span>
              <span className="text-foreground/70">Residential Cooling</span>
              <span className="text-foreground/70">Emergency Service</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-primary mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:6238891281" 
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                (623) 889-1281
              </a>
              <a 
                href="mailto:Service@cool-fox.com" 
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                Service@cool-fox.com
              </a>
              <a 
                href="https://cool-fox.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                cool-fox.com
              </a>
              <a 
                href="https://instagram.com/coolfox" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
                @coolfox
              </a>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                Serving Phoenix & Surrounding Areas
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Cool Fox Heating & Cooling. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Licensed & Insured</span>
            <span className="text-primary">•</span>
            <span>ROC Licensed</span>
            <span className="text-primary">•</span>
            <span>Family Owned</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
