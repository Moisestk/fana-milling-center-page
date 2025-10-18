'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

export default function MaterialesPage() {
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
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Materiales Premium
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-blue-600">Materiales</span> de Alta Calidad
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              Solo trabajamos con materiales certificados y biocompatibles de las mejores marcas internacionales.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zirconio */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Zirconio Multicapa</h3>
              <p className="text-gray-600 mb-6">
                Material de alta resistencia y estética superior para restauraciones dentales duraderas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Resistencia &gt; 1200 MPa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Translucidez natural
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Certificación ISO 13356
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Biocompatibilidad total
                </li>
              </ul>
            </div>

            {/* Disilicato de Litio */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Disilicato de Litio</h3>
              <p className="text-gray-600 mb-6">
                Material estético de excelencia para restauraciones que requieren máxima naturalidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Resistencia &gt; 400 MPa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Estética superior
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Mínimo desgaste
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Certificación CE
                </li>
              </ul>
            </div>

            {/* Titanio */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔩</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Titanio Grado 5</h3>
              <p className="text-gray-600 mb-6">
                Material biocompatible ideal para estructuras de implantes de larga duración.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  ASTM F136 certificado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Resistencia a corrosión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Biocompatibilidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Ligereza excepcional
                </li>
              </ul>
            </div>

            {/* PMMA */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🦷</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">PMMA</h3>
              <p className="text-gray-600 mb-6">
                Material provisional de alta calidad para restauraciones temporales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Bloques provisionales
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Fácil fresado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Colores variados
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Económico
                </li>
              </ul>
            </div>

            {/* Cromo-Cobalto */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cromo-Cobalto</h3>
              <p className="text-gray-600 mb-6">
                Aleación metálica de alta resistencia para estructuras de prótesis removibles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Alta resistencia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Biocompatible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Durabilidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Certificado ISO
                </li>
              </ul>
            </div>

            {/* Cera */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🕯️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cera de Fresado</h3>
              <p className="text-gray-600 mb-6">
                Material para modelado y encerado de estructuras protésicas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Modelado preciso
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Fácil fresado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Sin residuos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Colada directa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tecnología de Fresado CNC
            </h2>
            <p className="text-lg text-gray-600">
              Utilizamos maquinaria de 5 ejes con precisión micrométrica para garantizar resultados excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresadoras 5 Ejes</h3>
              <p className="text-gray-600 text-sm">Precisión micrométrica (±5μm)</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Escáneres 3D</h3>
              <p className="text-gray-600 text-sm">Resolución de 10μm</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Software CAD/CAM</h3>
              <p className="text-gray-600 text-sm">Certificación CE médica</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Solicita el Catálogo de Materiales
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Accede a toda la información técnica y certificaciones de nuestros materiales
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Descargar Catálogo
          </button>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}
