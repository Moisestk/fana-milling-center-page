'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ServicesCarousel() {
  const t = useTranslations('gleamer.services');
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: t('service1.title'),
      description: t('service1.description'),
      icon: "🔧",
      gradient: "from-fana-primary to-fana-navy"
    },
    {
      id: 2,
      title: t('service2.title'),
      description: t('service2.description'),
      icon: "✨",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: t('service3.title'),
      description: t('service3.description'),
      icon: "📦",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: t('service4.title'),
      description: t('service4.description'),
      icon: "⚙️",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: t('service5.title'),
      description: t('service5.description'),
      icon: "💻",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      id: 6,
      title: t('service6.title'),
      description: t('service6.description'),
      icon: "🔍",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-fana-white to-fana-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-fana-navy mb-6">
            {t('title')}
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[600px]">
                    {/* Content */}
                    <div className="p-8 lg:p-16 bg-white">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                            {service.icon}
                          </div>
                          <span className="text-fana-primary font-bold text-2xl">
                            {String(index + 1).padStart(2, '0')}.
                          </span>
                        </div>
                        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-fana-navy mb-6">
                          {service.title}
                        </h3>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-lato text-lg text-gray-600 mb-8 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white px-8 py-4 rounded-xl font-lato font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
                      >
                        {t('viewDetails')}
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative h-[600px]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}></div>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative h-full flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="text-white text-center"
                        >
                          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                            <span className="text-6xl">{service.icon}</span>
                          </div>
                          <h4 className="font-playfair text-2xl font-bold mb-4">{service.title}</h4>
                          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                        </motion.div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-fana-navy p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group"
          >
            <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-fana-navy p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group"
          >
            <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-fana-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="border-2 border-fana-primary text-fana-primary px-10 py-4 rounded-xl font-lato font-medium hover:bg-fana-primary hover:text-fana-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group">
            {t('viewAllServices')}
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
