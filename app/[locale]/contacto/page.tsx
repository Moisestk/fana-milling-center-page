'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ContactoPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-blue-100 text-fana-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                <span className="w-2 h-2 bg-fana-primary rounded-full"></span>
                Contacto Directo
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
                variants={fadeInUp}
              >
                {t('title')}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                {t('subtitle')}
              </motion.p>
            </motion.div>
          </div>
        </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Clínica/Laboratorio
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="estructuras">Estructuras de Implantes</option>
                    <option value="estetica">Estética Avanzada</option>
                    <option value="suministros">Suministros</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent"
                    placeholder="Describe tu proyecto o consulta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-fana-primary text-white py-4 rounded-lg hover:bg-fana-navy transition-colors font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fana-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Teléfono</h3>
                      <p className="text-gray-600">+1 (832) 897-6805</p>
                      <p className="text-gray-600">+1 (832) 897-8335</p>
                      <p className="text-sm text-gray-500 mt-1">Lunes a Viernes: 8:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fana-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">info@fanamilling.com</p>
                      <p className="text-sm text-gray-500 mt-1">Respuesta en 24h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fana-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Dirección</h3>
                      <p className="text-gray-600">8501 NW 107TH CT. UNIT 3</p>
                      <p className="text-gray-600">MIAMI, FL 33178</p>
                      <p className="text-sm text-gray-500 mt-1">Visitas con cita previa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestra Ubicación</h2>
            <p className="text-lg text-gray-600">Visítanos en nuestras instalaciones en Miami</p>
          </div>
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.6849407287896!2d-80.3469807!3d25.8579758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c0c2c5e1f32d%3A0x7e7c1b5e5e5e5e5e!2s8501%20NW%20107th%20Ct%20Unit%203%2C%20Miami%2C%20FL%2033178%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FANA Milling"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}
