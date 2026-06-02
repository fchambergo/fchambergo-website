import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      {/* <ServicesSection /> */}
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
