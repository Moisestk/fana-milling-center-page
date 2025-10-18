'use client';

import { WrenchScrewdriverIcon, CogIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer, staggerItem, scaleIn, viewportOptions } from '@/lib/animations';

export default function OurServicesSection() {
  const t = useTranslations('newDesign.services');
  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: t('service1.title'),
      description: t('service1.description'),
      bgColor: 'from-blue-50 to-blue-100',
      image: '/images/services/service-general-milling.png',
      imageAlt: 'Fresado CNC de materiales dentales'
    },
    {
      icon: CogIcon,
      title: t('service2.title'),
      description: t('service2.description'),
      bgColor: 'from-green-50 to-green-100',
      image: '/images/services/service-implant-structures.png',
      imageAlt: 'Estructuras de implantes dentales en titanio'
    },
    {
      icon: SparklesIcon,
      title: t('service3.title'),
      description: t('service3.description'),
      bgColor: 'from-purple-50 to-purple-100',
      image: '/images/services/service-advanced-aesthetics.png',
      imageAlt: 'Coronas de zirconio estéticas'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3"
            variants={fadeInUp}
          >
            {t('badge')}
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            <span className="text-gray-800">{t('title.part1')}</span>
            <br />
            <span className="text-blue-600">{t('title.part2')}</span>
          </motion.h2>
          <motion.div 
            className="flex justify-center mt-6"
            variants={fadeInUp}
          >
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-md overflow-hidden group"
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Image with Icon */}
              <div className={`h-52 bg-gradient-to-br ${service.bgColor} relative overflow-hidden`}>
                {/* Real Service Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Placeholder background (shows if image not available) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-50`}></div>
                
                {/* Overlay gradient for icon visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Icon Circle */}
                <motion.div 
                  className="absolute bottom-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 15px 30px -5px rgba(37, 99, 235, 0.5)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-600 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('learnMore')}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
