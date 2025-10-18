'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
  const t = useTranslations('gleamer.testimonials');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      clinic: t('testimonial1.clinic'),
      content: t('testimonial1.content'),
      rating: 5,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      clinic: t('testimonial2.clinic'),
      content: t('testimonial2.content'),
      rating: 5,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      clinic: t('testimonial3.clinic'),
      content: t('testimonial3.content'),
      rating: 5,
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: t('testimonial4.name'),
      role: t('testimonial4.role'),
      clinic: t('testimonial4.clinic'),
      content: t('testimonial4.content'),
      rating: 5,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-fana-secondary to-fana-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-fana-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-fana-navy rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-fana-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block bg-fana-primary/10 text-fana-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonios
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-fana-navy mb-6 leading-tight">
              {t('title')}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-lato text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Testimonial Carousel */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="mb-8"
                        >
                          <div className="flex items-center gap-2 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <blockquote>
                            <p className="font-lato text-xl md:text-2xl text-gray-700 leading-relaxed">
                              "{testimonial.content}"
                            </p>
                          </blockquote>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-center gap-4"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-playfair text-xl font-bold text-fana-navy mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="font-lato text-fana-primary font-medium">
                              {testimonial.role}
                            </p>
                            <p className="font-lato text-gray-600 text-sm">
                              {testimonial.clinic}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br ${testimonial.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white text-center relative z-10"
                          >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                              <PlayIcon className="w-16 h-16" />
                            </div>
                            <h4 className="font-playfair text-2xl font-bold mb-4">{testimonial.name}</h4>
                            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                          </motion.div>
                          
                          {/* Decorative elements */}
                          <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                          <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-fana-navy p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group"
          >
            <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-fana-navy p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group"
          >
            <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-fana-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-fana-navy to-fana-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">408K+</span>
                  </div>
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-fana-white mb-4">
                  {t('stats.number')}
                </h3>
                <h4 className="font-playfair text-xl md:text-2xl font-bold text-fana-secondary mb-6">
                  {t('stats.title')}
                </h4>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-lato text-fana-secondary max-w-3xl mx-auto text-lg leading-relaxed"
              >
                {t('stats.description')}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
