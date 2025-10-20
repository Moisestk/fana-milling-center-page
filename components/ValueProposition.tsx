'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ValueProposition() {
  const t = useTranslations('home.valueProposition');

  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Precisión */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-fana-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-4">
                {t('precision.title')}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {t('precision.description')}
              </p>
            </div>
          </motion.div>

          {/* Velocidad */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-fana-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-4">
                {t('speed.title')}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {t('speed.description')}
              </p>
            </div>
          </motion.div>

          {/* Calidad */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-fana-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-fana-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ComputerDesktopIcon className="w-8 h-8 text-fana-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-4">
                {t('quality.title')}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {t('quality.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}