import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServiceCategories from '@/components/ServiceCategories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ServiceCategories />
      <Footer />
    </main>
  );
}
