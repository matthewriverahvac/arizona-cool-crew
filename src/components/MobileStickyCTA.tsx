import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/98 backdrop-blur-md border-t border-border p-4 shadow-elevated">
      <div className="flex gap-3">
        <Button 
          size="lg" 
          className="flex-1 bg-gradient-gold-shine hover:opacity-90 shadow-gold font-semibold"
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
          className="flex-1 border-primary text-primary hover:bg-primary/10 font-semibold"
          asChild
        >
          <a href="#contact">
            Get Quote
          </a>
        </Button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Family Owned • No Hidden Fees
      </p>
    </div>
  );
};

export default MobileStickyCTA;
