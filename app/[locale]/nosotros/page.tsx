'use client';

import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
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

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Juan Díaz</h3>
              <p className="text-blue-600 font-medium mb-2">Director Técnico</p>
              <p className="text-gray-600 text-sm">
                15 años de experiencia en tecnología CAD/CAM dental
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl font-bold">ML</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">María López</h3>
              <p className="text-blue-600 font-medium mb-2">Especialista en Estética</p>
              <p className="text-gray-600 text-sm">
                Experta en zirconio y materiales de alta estética
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl font-bold">CR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Carlos Ruiz</h3>
              <p className="text-blue-600 font-medium mb-2">Ingeniero CNC</p>
              <p className="text-gray-600 text-sm">
                Especialista en fresado de precisión micrométrica
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}

