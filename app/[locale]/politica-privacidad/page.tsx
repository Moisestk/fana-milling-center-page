'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function PoliticaPrivacidadPage() {
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
                <span className="text-fana-primary">Política de Privacidad</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Información sobre el tratamiento de datos personales conforme al RGPD
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
                    POLÍTICA DE PRIVACIDAD (RGPD)
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
                    Responsable del Tratamiento
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      El Responsable del tratamiento de sus datos es <strong>FANA Milling Center</strong>, con domicilio en 
                      Polígono Industrial Norte, 28050 Madrid, España, y correo electrónico de contacto: 
                      <a href="mailto:info@fanamilling.com" className="text-fana-primary hover:text-fana-navy font-medium">
                        info@fanamilling.com
                      </a>.
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
                    Finalidad del Tratamiento
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      En FANA Milling Center tratamos los datos que nos facilita con las siguientes finalidades:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Prestación del Servicio B2B:</strong> Gestionar la recepción de archivos digitales (STL, CAD/CAM), 
                          elaborar presupuestos, fabricar las prótesis dentales solicitadas y gestionar el envío de suministros.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Facturación y Gestión Contractual:</strong> Administrar la relación comercial, facturar los 
                          servicios y gestionar pagos.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Comunicaciones Profesionales:</strong> Enviar información técnica, actualizaciones de productos, 
                          o responder consultas profesionales solicitadas por el cliente.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Marketing (B2B):</strong> Enviar comunicaciones comerciales sobre nuestros productos, ofertas o 
                          eventos, solo si el profesional ha dado su consentimiento expreso.
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
                    Base Legal para el Tratamiento
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La base legal para el tratamiento de sus datos es:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Ejecución de un Contrato:</strong> Para las finalidades 1 y 2 (fabricación y facturación de servicios).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Interés Legítimo:</strong> Para la finalidad 3 (comunicación esencial para el servicio).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Consentimiento del Interesado:</strong> Para la finalidad 4 (marketing B2B) y el tratamiento de 
                          datos de salud contenidos en los archivos CAD/CAM (tratamiento indirecto bajo el encargo del cliente).
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Datos Recogidos y Categorías
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Tratamos las siguientes categorías de datos:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Datos de Identificación Profesional:</strong> Nombre, apellidos, NIF/CIF, número de colegiado, 
                          nombre de la clínica/laboratorio, dirección postal, teléfono y email.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Datos Transaccionales:</strong> Información de pedidos, pagos y facturación.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong>Datos de Salud (Datos Especialmente Protegidos):</strong> Los archivos de diseño CAD/CAM (STL, OBJ, etc.) 
                          que nos remite la clínica contienen datos relativos a la salud bucal del paciente. En este caso, FANA Milling Center 
                          actúa como Encargado del Tratamiento y el cliente (la clínica/laboratorio) es el Responsable. Aplicamos medidas de 
                          seguridad extremas para su custodia y eliminación tras la finalización del servicio.
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Section 5 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Destinatarios de los Datos
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sus datos no se cederán a terceros, salvo obligación legal. Podrán tener acceso a sus datos los siguientes 
                      terceros como Encargados del Tratamiento bajo un contrato de servicios:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>Proveedores de hosting y servicios en la nube.</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fana-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>Agencias de transporte para la entrega de los pedidos.</div>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Section 6 */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-fana-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-fana-primary text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    Derechos del Interesado
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Usted tiene derecho a ejercer los derechos de <strong>Acceso</strong>, <strong>Rectificación</strong>, 
                      <strong> Supresión</strong>, <strong>Oposición</strong>, <strong>Limitación del Tratamiento</strong> y 
                      <strong> Portabilidad</strong> de sus datos ante FANA Milling Center, enviando un correo electrónico a 
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
                  <h3 className="text-2xl font-bold mb-4">¿Tienes Preguntas?</h3>
                  <p className="text-fana-secondary mb-6">
                    Si tienes alguna consulta sobre nuestra política de privacidad o el tratamiento de tus datos, 
                    no dudes en contactarnos.
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
