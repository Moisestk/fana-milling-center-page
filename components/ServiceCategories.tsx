'use client';

import { motion } from 'framer-motion';
import { 
  StarIcon, 
  Cog6ToothIcon, 
  ArchiveBoxIcon 
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ServiceCategories() {
  const t = useTranslations('home.services');

  return (
    <section className="py-20 bg-fana-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-fana-navy mb-6">
            {t('title')}
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Estética */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-fana-navy mb-4">
                {t('aesthetics.title')}
              </h3>
              
              <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                {t('aesthetics.description')}
              </p>
              
              <button className="w-full bg-fana-primary text-fana-white py-3 rounded-lg font-lato hover:bg-opacity-90 transition-all duration-300">
                Ver Detalles
              </button>
            </div>
          </motion.div>

          {/* Implantes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Cog6ToothIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-fana-navy mb-4">
                {t('implants.title')}
              </h3>
              
              <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                {t('implants.description')}
              </p>
              
              <button className="w-full bg-fana-primary text-fana-white py-3 rounded-lg font-lato hover:bg-opacity-90 transition-all duration-300">
                Ver Detalles
              </button>
            </div>
          </motion.div>

          {/* Suministros */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <ArchiveBoxIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-fana-navy mb-4">
                {t('supplies.title')}
              </h3>
              
              <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                {t('supplies.description')}
              </p>
              
              <button className="w-full bg-fana-primary text-fana-white py-3 rounded-lg font-lato hover:bg-opacity-90 transition-all duration-300">
                Ver Detalles
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}