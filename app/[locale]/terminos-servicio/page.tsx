'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function TerminosServicioPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-fana-secondary to-fana-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-fana-primary/10 text-fana-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                <span className="w-2 h-2 bg-fana-primary rounded-full"></span>
                Información Legal
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-fana-navy mb-6 leading-tight"
                variants={fadeInUp}
              >
                <span className="text-fana-primary">Términos y Condiciones</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Condiciones del servicio B2B para clínicas y laboratorios dentales
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="prose prose-lg max-w-none"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {/* Header */}
                <motion.div 
                  className="bg-fana-primary/5 border-l-4 border-fana-primary p-6 rounded-r-lg mb-8"
                  variants={fadeInUp}
                >
                  <h2 className="text-2xl font-bold text-fana-navy mb-2">
                    TÉRMINOS Y CONDICIONES DEL SERVICIO B2B
                  </h2>
                  <p className="text-gray-600">
                    <strong>Fecha de última actualización:</strong> Octubre de 2025
                  </p>
                </motion.div>

                {/* Section 1 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Objeto
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      El presente documento establece los términos y condiciones que rigen la prestación de servicios de 
                      fresado CNC CAD/CAM, fabricación de prótesis dentales y venta de suministros B2B por parte de 
                      <strong> FANA Milling Center</strong> (en adelante, "El Laboratorio") a clínicas y laboratorios dentales 
                      (en adelante, "El Cliente").
                    </p>
                  </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Servicios Ofrecidos
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El Laboratorio ofrece servicios especializados en:
                    </p>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Fresado de Precisión:</strong> Fabricación de estructuras de implantes, coronas, puentes y 
                          restauraciones estéticas mediante tecnología CNC de 5 ejes y con una precisión garantizada de ±5μm.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Venta de Suministros:</strong> Comercialización de bloques, discos y consumibles certificados 
                          (Zirconio, Disilicato, PMMA, etc.).
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Proceso de Pedido y Fabricación
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4 text-gray-700">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Envío del Caso:</strong> El Cliente enviará el diseño digital (archivo STL/CAD) a través de la 
                          plataforma web o por los canales autorizados. El Cliente es el único responsable de la exactitud del 
                          diseño, los márgenes y la toma de color especificada.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Presupuesto y Confirmación:</strong> El Laboratorio emitirá un presupuesto y el plazo de entrega 
                          estimado (generalmente 24-48 horas a partir de la confirmación). La fabricación solo comenzará tras la 
                          aceptación del presupuesto por parte del Cliente.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Plazos de Entrega:</strong> Los plazos de entrega son estimados y FANA hará todo lo posible por 
                          cumplirlos. No obstante, no se aceptan responsabilidades ni compensaciones económicas por retrasos debidos 
                          a causas ajenas (transporte, fallos de software, fuerza mayor).
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Garantía y Limitación de Responsabilidad
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4 text-gray-700">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Garantía del Producto:</strong> El Laboratorio garantiza que todas las prótesis y estructuras 
                          cumplen con la precisión de ±5μm y están fabricadas con materiales certificados ISO 13485.
                        </div>
                      </div>
                      <div>
                        <strong>Exclusiones de Garantía:</strong> La garantía no cubrirá fallos o ajustes necesarios que sean consecuencia de:
                        <ul className="mt-3 space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Errores en la toma de impresión o diseño CAD suministrado por el Cliente.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Manipulación, alteración o tallado posterior de la pieza por parte del Cliente o terceros.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Uso inadecuado o accidentes.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 5 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Jurisdicción
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Para la resolución de cualquier conflicto o litigio derivado de la interpretación o ejecución de estos términos, 
                      ambas partes se someten a los Juzgados y Tribunales de la ciudad de Madrid, España, con renuncia expresa a 
                      cualquier otro fuero.
                    </p>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="bg-fana-primary text-white p-8 rounded-2xl text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas Aclaraciones?</h3>
                  <p className="text-fana-secondary mb-6">
                    Si tienes alguna consulta sobre nuestros términos y condiciones o necesitas más información sobre nuestros servicios B2B, 
                    nuestro equipo está disponible para ayudarte.
                  </p>
                  <a 
                    href="mailto:info@fanamilling.com"
                    className="inline-flex items-center gap-2 bg-white text-fana-primary px-6 py-3 rounded-lg font-medium hover:bg-fana-secondary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Contactar
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
