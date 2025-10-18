'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { Sparkles, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

export default function AboutSection() {
  const t = useTranslations('newDesign.about');
  
  const features = [
    t('features.feature1'),
    t('features.feature2'),
    t('features.feature3')
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={slideInLeft}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main circular image container */}
              <div className="relative aspect-square">
                {/* Background decorative circles */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Main image circle */}
                <motion.div 
                  className="absolute inset-4 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Real Laboratory Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/about/about-laboratory.png"
                      alt="Laboratorio dental CAD/CAM FANA con equipos de fresado"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Professional Placeholder (shows if image not available) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-white flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div 
                        className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(37, 99, 235, 0.4)",
                            "0 0 0 20px rgba(37, 99, 235, 0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white text-3xl font-bold">F</span>
                      </motion.div>
                      <p className="text-blue-600 font-semibold text-lg">FANA Milling</p>
                      <p className="text-gray-600 text-sm">Tecnología CNC</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative stars */}
                <motion.div 
                  className="absolute -top-4 -left-4"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.div 
                  className="absolute top-8 -left-6"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-blue-400 fill-blue-400" />
                </motion.div>

                {/* Quality Badge */}
                <motion.div 
                  className="absolute bottom-8 -right-4 bg-blue-900 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ y: { duration: 3, repeat: Infinity } }}
                >
                  <div className="text-center">
                    <p className="text-xs font-semibold">CALIDAD</p>
                    <p className="text-2xl font-bold">ISO</p>
                    <p className="text-xs">13485</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Subtitle */}
            <motion.div 
              className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
              variants={fadeInUp}
            >
              {t('badge')}
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              variants={fadeInUp}
            >
              <span className="text-blue-600">{t('title.part1')}</span>
              <br />
              <span className="text-gray-800">{t('title.part2')}</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-base text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              {t('description')}
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="space-y-3"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckIcon className="w-3 h-3 text-white stroke-2" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="pt-2"
              variants={fadeInUp}
            >
              <motion.button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}