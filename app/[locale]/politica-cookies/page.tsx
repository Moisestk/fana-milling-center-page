'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function PoliticaCookiesPage() {
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
                <span className="text-fana-primary">Política de Cookies</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Información sobre el uso de cookies conforme a la LSSI-CE
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
                    POLÍTICA DE COOKIES
                  </h2>
                  <p className="text-fana-primary font-semibold mb-2">FANA GROUP CORP (Nombre ficticio: FANA MILLING CENTER)</p>
                  <p className="text-gray-600">
                    <strong>Número de registro:</strong> G25000131466<br/>
                    <strong>Domicilio:</strong> 8501 NW 107TH CT. UNIT 3, MIAMI, FL 33178, USA<br/>
                    <strong>Condado:</strong> MIAMI-DADE<br/>
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
                    ¿Qué son las Cookies?
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Una cookie es un pequeño archivo de texto que un sitio web, como FANA Milling Center, almacena en su navegador 
                      (ordenador, móvil, tableta, etc.) cuando usted lo visita.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Las cookies son herramientas esenciales para la prestación de muchos servicios de la sociedad de la información. 
                      Permiten a la página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su 
                      equipo y, dependiendo de la información obtenida, pueden utilizarse para reconocer al usuario, mejorar el servicio 
                      ofrecido o personalizar la visualización de contenidos.
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
                    Tipos de Cookies Utilizadas en Nuestro Sitio Web y sus Finalidades
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      En nuestro sitio web, utilizamos cookies propias y de terceros con diferentes finalidades:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-fana-navy mb-2">Cookies Técnicas (Necesarias):</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          Estas cookies son estrictamente necesarias para el correcto funcionamiento de la web B2B. Permiten la gestión de la sesión, 
                          el inicio de sesión del profesional en el área privada ("Acceso a Profesionales"), el correcto funcionamiento de la plataforma 
                          de subida de archivos CAD/CAM y el carrito de compra.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Consentimiento:</strong> No requieren consentimiento y su base legal es el interés legítimo o la ejecución de un contrato.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-fana-navy mb-2">Cookies de Preferencias o Personalización:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          Permiten recordar información sobre las elecciones del usuario, como el idioma o la configuración regional, para ofrecer 
                          una experiencia de navegación más cómoda y personalizada.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Consentimiento:</strong> Su instalación requiere su consentimiento previo.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-fana-navy mb-2">Cookies Analíticas o de Medición:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de cómo los profesionales 
                          utilizan nuestros servicios. La información obtenida se utiliza para mejorar la oferta de servicios y el rendimiento de la web. 
                          Ejemplo de estas cookies son las utilizadas por Google Analytics.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Consentimiento:</strong> Su instalación requiere su consentimiento.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-fana-navy mb-2">Cookies de Publicidad Comportamental:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          Almacenan información sobre el comportamiento de los usuarios (hábitos de navegación) para desarrollar un perfil específico 
                          que permite mostrar publicidad B2B relevante y personalizada fuera de nuestro sitio.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Consentimiento:</strong> Su instalación requiere su consentimiento.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Cookies de Terceros
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Nuestro sitio web utiliza servicios de terceros que pueden instalar cookies para fines analíticos o publicitarios. 
                      Los principales terceros que pueden instalar cookies en su equipo son <strong>Google Analytics</strong> y <strong>Google Ads</strong>.
                    </p>
                  </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Consentimiento y Gestión de Cookies
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h4 className="font-semibold text-fana-navy mb-3">Obtención del Consentimiento:</h4>
                        <p className="mb-3">
                          De acuerdo con la legislación vigente, excepto las cookies estrictamente necesarias (Técnicas), la instalación de 
                          cualquier otro tipo de cookie requiere su consentimiento expreso. Al acceder a nuestra web, se le mostrará un aviso de 
                          cookies (banner) a través del cual podrá aceptar, rechazar o configurar su uso.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-fana-navy mb-3">Revocación y Eliminación:</h4>
                        <p className="mb-3">
                          Usted puede, en cualquier momento, cambiar o revocar su consentimiento previamente otorgado a través del panel de 
                          configuración de cookies disponible en la web.
                        </p>
                        <p className="mb-3">
                          También puede desactivar la instalación de cookies directamente a través de las opciones de configuración de su navegador:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="font-medium text-fana-navy mb-1">Google Chrome:</div>
                            <div className="text-sm text-gray-600">Puede gestionar las cookies aquí.</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="font-medium text-fana-navy mb-1">Mozilla Firefox:</div>
                            <div className="text-sm text-gray-600">Puede gestionar las cookies aquí.</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="font-medium text-fana-navy mb-1">Safari:</div>
                            <div className="text-sm text-gray-600">Puede gestionar las cookies aquí.</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="font-medium text-fana-navy mb-1">Microsoft Edge:</div>
                            <div className="text-sm text-gray-600">Puede gestionar las cookies aquí.</div>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-yellow-800 text-sm">
                            <strong>Importante:</strong> Tenga en cuenta que la desactivación de algunas cookies puede limitar o 
                            impedir el acceso a funcionalidades clave de nuestra plataforma B2B, como el inicio de sesión o la subida de archivos.
                          </p>
                        </div>
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
                    Retención y Contacto
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      FANA Milling Center conservará la información recabada por las cookies por un plazo limitado (normalmente no superior a 2 años para las cookies persistentes).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Si tiene alguna duda sobre nuestra Política de Cookies, puede contactarnos a través del correo electrónico 
                      <a href="mailto:info@fanamilling.com" className="text-fana-primary hover:text-fana-navy font-medium">
                        info@fanamilling.com
                      </a>.
                    </p>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="bg-fana-primary text-white p-8 rounded-2xl text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">¿Tienes Preguntas sobre Cookies?</h3>
                  <p className="text-white mb-6">
                    Si necesitas más información sobre nuestra política de cookies o quieres gestionar tus preferencias, 
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
