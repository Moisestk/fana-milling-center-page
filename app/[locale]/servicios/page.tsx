'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import OurServicesSection from '@/components/OurServicesSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

export default function ServiciosPage() {
  const t = useTranslations('newDesign.servicesPage');
  
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
              {t('hero.badge')}
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-blue-600">{t('hero.title').split(' de Fresado Dental')[0]}</span> {t('hero.title').includes(' de Fresado Dental') ? 'de Fresado Dental' : t('hero.title').split(' ').slice(-3).join(' ')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              variants={fadeInUp}
            >
              {t('hero.description')}
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              variants={staggerContainer}
            >
              {[
                { value: t('hero.stats.experience.value'), label: t('hero.stats.experience.label') },
                { value: t('hero.stats.cases.value'), label: t('hero.stats.cases.label') },
                { value: t('hero.stats.satisfaction.value'), label: t('hero.stats.satisfaction.label') }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md"
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
                      <span className="text-white text-2xl">🦷</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{t('millingStructures.title')}</h3>
                      <p className="text-blue-600 font-medium">{t('millingStructures.subtitle')}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t('millingStructures.description')}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{t('millingStructures.precision.value')}</div>
                      <div className="text-sm text-gray-600">{t('millingStructures.precision.label')}</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{t('millingStructures.delivery.value')}</div>
                      <div className="text-sm text-gray-600">{t('millingStructures.delivery.label')}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-800">{t('millingStructures.materialsTitle')}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('millingStructures.materials.zirconia')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('millingStructures.materials.titanium')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('millingStructures.materials.chromeCobalt')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('millingStructures.materials.pmma')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 overflow-hidden">
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden relative group">
                      {/* Real Service Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src="/images/services/service-detail-structures.png"
                          alt={t('millingStructures.imageAlt')}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 600px"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      {/* Placeholder (shows if image not available) */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-4xl">🦷</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-800">{t('millingStructures.imageAlt')}</h4>
                          <p className="text-gray-600">{t('millingStructures.imageSubtitle')}</p>
                        </div>
                      </div>
                      
                      {/* Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h4 className="text-lg font-bold">{t('millingStructures.imageAlt')}</h4>
                        <p className="text-sm text-gray-200">{t('millingStructures.imageSubtitle')}</p>
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
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 overflow-hidden">
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden relative group">
                      {/* Real Service Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src="/images/services/service-detail-aesthetics.png"
                          alt={t('advancedAesthetics.imageAlt')}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 600px"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      {/* Placeholder (shows if image not available) */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-4xl">💎</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-800">{t('advancedAesthetics.imageAlt')}</h4>
                          <p className="text-gray-600">{t('advancedAesthetics.imageSubtitle')}</p>
                        </div>
                      </div>
                      
                      {/* Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h4 className="text-lg font-bold">{t('advancedAesthetics.imageAlt')}</h4>
                        <p className="text-sm text-gray-200">{t('advancedAesthetics.imageSubtitle')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">💎</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{t('advancedAesthetics.title')}</h3>
                      <p className="text-purple-600 font-medium">{t('advancedAesthetics.subtitle')}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t('advancedAesthetics.description')}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{t('advancedAesthetics.colorSystem.value')}</div>
                      <div className="text-sm text-gray-600">{t('advancedAesthetics.colorSystem.label')}</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{t('advancedAesthetics.biocompatible.value')}</div>
                      <div className="text-sm text-gray-600">{t('advancedAesthetics.biocompatible.label')}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-800">{t('advancedAesthetics.restorationsTitle')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('advancedAesthetics.restorations.crowns')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('advancedAesthetics.restorations.bridges')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('advancedAesthetics.restorations.veneers')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{t('advancedAesthetics.restorations.inlaysOnlays')}</span>
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              {t('cta.contactButton')}
            </a>
            <a 
              href="/materiales" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('cta.materialsButton')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}
