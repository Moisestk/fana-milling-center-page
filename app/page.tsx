import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesNavigation from '@/components/ServicesNavigation';
import OurServicesSection from '@/components/OurServicesSection';
import Footer from '@/components/Footer';

export default function RootPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesNavigation />
      <OurServicesSection />
      <Footer />
    </div>
  );
}
