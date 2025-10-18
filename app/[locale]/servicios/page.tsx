import Header from '@/components/Header';
import OurServicesSection from '@/components/OurServicesSection';
import Footer from '@/components/Footer';

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Servicios Especializados
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-blue-600">Nuestros Servicios</span> de Fresado Dental
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Ofrecemos una gama completa de servicios especializados en fresado dental, 
              con tecnología de vanguardia y materiales de la más alta calidad.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Casos completados</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Satisfacción cliente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <OurServicesSection />

      {/* Detailed Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Service 1: Fresado de Estructuras */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Fresado de Estructuras</h3>
                      <p className="text-blue-600 font-medium">Para Implantes Dentales</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Fabricamos estructuras para implantes con tecnología de fresado de 5 ejes y precisión de 5 micras. 
                    Utilizamos materiales certificados ISO y garantizamos la máxima calidad en cada pieza.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">5μm</div>
                      <div className="text-sm text-gray-600">Precisión máxima</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                      <div className="text-sm text-gray-600">Tiempo de entrega</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-800">Materiales Disponibles:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Zirconio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Titanio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Cromo-Cobalto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">PMMA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                    <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-4xl">🔧</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">Estructura de Implante</h4>
                        <p className="text-gray-600">Precisión de 5 micras</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Estética Avanzada */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8">
                    <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-4xl">✨</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">Corona Estética</h4>
                        <p className="text-gray-600">Zirconio multilaminado</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">✨</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Estética Avanzada</h3>
                      <p className="text-purple-600 font-medium">Restauraciones Naturales</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Creamos restauraciones estéticas de alta calidad utilizando zirconio multilaminado y disilicato de litio. 
                    Nuestro proceso garantiza resultados naturales perfectos.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">VITA 3D</div>
                      <div className="text-sm text-gray-600">Sistema de colores</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                      <div className="text-sm text-gray-600">Biocompatible</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-800">Tipos de Restauraciones:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Coronas individuales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Puentes fijos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Carillas estéticas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Inlays y Onlays</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contactar Ahora
            </a>
            <a 
              href="/materiales" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ver Materiales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
