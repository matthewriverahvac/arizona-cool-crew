import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
