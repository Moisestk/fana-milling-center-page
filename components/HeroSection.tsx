'use client';

import { motion } from 'framer-motion';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  return (
    <section className="min-h-screen bg-fana-navy flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-fana-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-fana-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-fana-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-fana-white mb-6 leading-tight">
            {t('title')}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-lato text-lg md:text-xl lg:text-2xl text-fana-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="bg-fana-primary text-fana-white text-lg px-8 py-4 font-lato font-normal rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
            data-cursor-hover
          >
            <ArrowUpTrayIcon className="w-6 h-6" />
            🚀 Sube tu Caso y Cotiza Ahora
          </button>
          
          <button
            className="border-2 border-fana-primary text-fana-primary text-lg px-8 py-4 font-lato font-normal rounded-lg hover:bg-fana-primary hover:text-fana-white transition-all duration-300"
            data-cursor-hover
          >
            {t('cta')}
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center p-6">
            <div className="font-playfair text-3xl md:text-4xl font-bold text-fana-primary mb-2">
              500+
            </div>
            <div className="font-lato text-fana-secondary">
              Casos Completados
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center p-6">
            <div className="font-playfair text-3xl md:text-4xl font-bold text-fana-primary mb-2">
              24h
            </div>
            <div className="font-lato text-fana-secondary">
              Tiempo de Entrega
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center p-6">
            <div className="font-playfair text-3xl md:text-4xl font-bold text-fana-primary mb-2">
              99%
            </div>
            <div className="font-lato text-fana-secondary">
              Satisfacción Cliente
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-fana-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-fana-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
