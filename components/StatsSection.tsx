'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('gleamer.stats');

  const stats = [
    {
      number: t('stat1.number'),
      label: t('stat1.label'),
      description: t('stat1.description')
    },
    {
      number: t('stat2.number'),
      label: t('stat2.label'),
      description: t('stat2.description')
    },
    {
      number: t('stat3.number'),
      label: t('stat3.label'),
      description: t('stat3.description')
    },
    {
      number: t('stat4.number'),
      label: t('stat4.label'),
      description: t('stat4.description')
    }
  ];
  return (
    <section className="py-20 bg-fana-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-fana-white mb-6">
            {t('title')}
          </h2>
          <p className="font-lato text-lg text-fana-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-fana-primary mb-4">
                  {stat.number}
                </div>
                <h3 className="font-playfair text-xl font-bold text-fana-white mb-3">
                  {stat.label}
                </h3>
                <p className="font-lato text-fana-secondary text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-fana-primary rounded-2xl p-8 md:p-12">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-fana-white mb-4">
              {t('cta.title')}
            </h3>
            <p className="font-lato text-fana-secondary mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <button className="bg-fana-navy text-fana-white px-8 py-4 rounded-lg font-lato font-medium hover:bg-opacity-90 transition-all duration-300">
              {t('cta.button')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
