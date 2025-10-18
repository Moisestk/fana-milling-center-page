'use client';

import { WrenchScrewdriverIcon, SparklesIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

export default function ServicesNavigation() {
  const t = useTranslations('newDesign.servicesNav');
  const services = [
    {
      icon: WrenchScrewdriverIcon,
      name: t('service1')
    },
    {
      icon: SparklesIcon,
      name: t('service2')
    },
    {
      icon: CogIcon,
      name: t('service3')
    },
    {
      icon: ShieldCheckIcon,
      name: t('service4')
    }
  ];

  return (
    <section className="bg-blue-600 py-5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16"
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-2.5 text-white cursor-pointer group"
              variants={staggerItem}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-4 h-4" />
              </motion.div>
              <span className="font-medium text-sm">{service.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
