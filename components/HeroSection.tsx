'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations';

export default function HeroSection() {
  const t = useTranslations('newDesign.hero');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    services: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('form.successMessage'));
  };

  const services = [
    { id: 'estructuras', label: t('form.services.implantStructures') },
    { id: 'coronas', label: t('form.services.crownsAndBridges') },
    { id: 'estetica', label: t('form.services.advancedAesthetics') },
    { id: 'provisional', label: t('form.services.provisionalRestorations') }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video not supported */}
            <Image
              src="/images/hero/hero-background.png"
              alt="Fresadora CNC de 5 ejes para prótesis dentales FANA"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </video>
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 py-12"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-fana-primary/20 backdrop-blur-sm border border-fana-primary/30 text-fana-secondary px-4 py-2 rounded-full text-sm font-medium"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 bg-fana-primary rounded-full animate-pulse"></span>
              {t('badge')}
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              variants={fadeInUp}
            >
              {t('title').split(' de Precisión')[0]}{' '}
              <span className="text-fana-primary">
                {t('title').includes('de Precisión') ? 'de Precisión' : t('title').split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
              variants={fadeInUp}
            >
            {t('description')}
          </motion.p>
        </motion.div>

          {/* Right Content - Quote Form */}
          <motion.div 
            className="lg:ml-auto w-full max-w-md"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-8"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t('form.fullName')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('form.phone')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('form.email')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fana-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                {/* Service Options */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('form.serviceOptions')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <motion.label
                        key={service.id}
                        className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-fana-primary bg-fana-secondary/20'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-fana-primary rounded focus:ring-2 focus:ring-fana-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">{service.label}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-fana-primary text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-fana-navy transition-colors"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(18, 93, 163, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t('form.submitButton')}
              </motion.button>
            </form>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
