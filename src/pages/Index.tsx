import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import WhyDriveSection from "@/components/WhyDriveSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <WhyDriveSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
