'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import { useMobile } from '@/lib/useMobile';

export default function WhyChooseUs() {
  const t = useTranslations('gleamer.whyChooseUs');
  const isMobile = useMobile();

  const reasons = [
    {
      number: "01",
      title: t('reason1.title'),
      description: t('reason1.description'),
      icon: "👥",
      gradient: "from-fana-primary to-fana-navy"
    },
    {
      number: "02", 
      title: t('reason2.title'),
      description: t('reason2.description'),
      icon: "⚙️",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: t('reason3.title'),
      description: t('reason3.description'),
      icon: "🛡️",
      gradient: "from-green-500 to-green-600"
    },
    {
      number: "04",
      title: t('reason4.title'),
      description: t('reason4.description'),
      icon: "⏰",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      title: t('reason5.title'),
      description: t('reason5.description'),
      icon: "✅",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-fana-white to-fana-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-fana-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-fana-navy rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-fana-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-50px" }}
            className="mb-6"
          >
            <span className="inline-block bg-fana-primary/10 text-fana-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-fana-navy mb-6 leading-tight">
              {t('title')}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-50px" }}
            className="font-lato text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl">{reason.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-fana-primary font-bold text-lg">{reason.number}</span>
                      <div className="w-8 h-0.5 bg-fana-primary"></div>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-fana-navy mb-4 group-hover:text-fana-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="font-lato text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-fana-primary mt-6 group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-fana-navy to-fana-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-fana-white mb-4">
                  {t('cta.title')}
                </h3>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="font-lato text-fana-secondary mb-8 max-w-2xl mx-auto text-lg"
              >
                {t('cta.subtitle')}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-white text-fana-navy px-10 py-4 rounded-xl font-lato font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group"
              >
                {t('cta.button')}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
