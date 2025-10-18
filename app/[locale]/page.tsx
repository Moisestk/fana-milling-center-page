'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesNavigation from '@/components/ServicesNavigation';
import OurServicesSection from '@/components/OurServicesSection';
import Footer from '@/components/Footer';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const params = useParams();
  const locale = params.locale as string || 'es';

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesNavigation />
      <OurServicesSection />
      
      {/* Stats Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Casos Completados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Tiempo de Entrega</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfacción Cliente</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5μm</div>
              <div className="text-blue-100">Precisión Micrométrica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              ¿Por Qué Elegir <span className="text-blue-600">FANA?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tecnología de vanguardia al servicio de la excelencia dental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Precisión Micrométrica</h3>
              <p className="text-gray-600">
                Fresado CNC de 5 ejes con tolerancias de ±5μm para resultados perfectos en cada pieza.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">
                Plazos de entrega optimizados de 24-48h sin comprometer la calidad del trabajo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Materiales Premium</h3>
              <p className="text-gray-600">
                Solo trabajamos con materiales certificados y biocompatibles de las mejores marcas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-600">
                Equipamiento de última generación con software CAD/CAM certificado.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soporte Técnico 24/7</h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible para resolver cualquier consulta en tiempo real.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Garantía de Calidad</h3>
              <p className="text-gray-600">
                Certificación ISO 13485 y control de calidad exhaustivo en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Lo Que Dicen <span className="text-blue-600">Nuestros Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Dr. María González</h4>
                  <p className="text-sm text-gray-500">Clínica Dental Premium</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "La calidad y precisión de FANA es excepcional. Sus estructuras de zirconio son perfectas y el tiempo de entrega es increíble."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Dr. Carlos Ruiz</h4>
                  <p className="text-sm text-gray-500">Laboratorio Dental Ruiz</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "El servicio técnico de FANA es excepcional. Siempre están disponibles para resolver cualquier duda."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Dra. Ana Martínez</h4>
                  <p className="text-sm text-gray-500">Centro Odontológico Avanzado</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "La precisión de 5 micras que ofrecen es impresionante. Nuestros pacientes notan la diferencia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 - Services */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Práctica Dental?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a más de 500 laboratorios que ya confían en FANA para sus necesidades de fresado dental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/servicios`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Ver Nuestros Servicios
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href={`/${locale}/contacto`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg inline-flex items-center justify-center"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Preview Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Materiales de <span className="text-blue-600">Alta Calidad</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solo trabajamos con materiales certificados y biocompatibles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Zirconio Multicapa</h3>
              <p className="text-gray-600 text-sm mb-4">Resistencia superior y estética natural</p>
              <div className="text-blue-600 font-semibold text-sm">Resistencia &gt; 1200 MPa</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Disilicato de Litio</h3>
              <p className="text-gray-600 text-sm mb-4">Máxima estética y translucidez</p>
              <div className="text-purple-600 font-semibold text-sm">Resistencia &gt; 400 MPa</div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Titanio Grado 5</h3>
              <p className="text-gray-600 text-sm mb-4">Biocompatibilidad total</p>
              <div className="text-gray-600 font-semibold text-sm">ASTM F136 certificado</div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href={`/${locale}/materiales`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              Ver Todos los Materiales
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section 2 - Contact */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes un Proyecto en Mente?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nuestro equipo de expertos está listo para ayudarte a elegir la mejor solución para tu laboratorio
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold mb-2">Llámanos</h3>
                <p className="text-gray-300 text-sm">+34 91 123 45 67</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-bold mb-2">Escríbenos</h3>
                <p className="text-gray-300 text-sm">info@fanamilling.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">Visítanos</h3>
                <p className="text-gray-300 text-sm">Madrid, España</p>
              </div>
            </div>
            <Link 
              href={`/${locale}/contacto`}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Contactar Ahora
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - About */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Conoce Más Sobre FANA Milling Center
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descubre nuestra historia, nuestro equipo y por qué somos líderes en fabricación dental CAD/CAM
            </p>
            <Link 
              href={`/${locale}/nosotros`}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
            >
              Sobre Nosotros
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
