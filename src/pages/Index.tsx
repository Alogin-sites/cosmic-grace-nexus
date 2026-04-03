import StarfieldBackground from '@/components/StarfieldBackground';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import RituaisSection from '@/components/RituaisSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EbooksSection from '@/components/EbooksSection';
import ShopSection from '@/components/ShopSection';
import OracleSection from '@/components/OracleSection';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="relative">
      <StarfieldBackground />
      <Topbar />
      <Navbar />
      <main className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RituaisSection />
        <TestimonialsSection />
        <EbooksSection />
        <ShopSection />
        <OracleSection />
        <ContactFooter />
      </main>
    </div>
  );
};

export default Index;
