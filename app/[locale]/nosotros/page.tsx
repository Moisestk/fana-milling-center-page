'use client';

import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
      <AboutSection />
      
      {/* Additional About Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                FANA Milling Center nació hace más de 15 años con una visión clara: revolucionar la fabricación dental 
                mediante la tecnología CAD/CAM más avanzada. Desde nuestros inicios, hemos estado comprometidos con la 
                excelencia y la innovación constante.
              </p>
              <p className="mb-6">
                Hoy en día, somos líderes en el sector, ofreciendo servicios de fresado CNC de 5 ejes con precisión 
                micrométrica. Nuestro equipo de expertos trabaja día a día para garantizar que cada prótesis dental 
                que sale de nuestro laboratorio cumpla con los más altos estándares de calidad.
              </p>
              <p>
                Con más de 500 casos completados exitosamente y una tasa de satisfacción del 99%, nos enorgullece ser 
                el socio tecnológico de confianza para laboratorios y clínicas dentales en toda España.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-gradient-to-r from-fana-secondary to-fana-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-fana-navy mb-4">
              ¿Interesado en Nuestros Servicios?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Descubre cómo podemos ayudarte a mejorar la calidad de tus prótesis dentales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/contacto`} 
                className="bg-fana-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-fana-navy transition-colors"
              >
                Contactar Ahora
              </Link>
              <Link 
                href={`/${locale}/servicios`} 
                className="border border-fana-primary text-fana-primary px-6 py-3 rounded-lg font-medium hover:bg-fana-primary hover:text-white transition-colors"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}

