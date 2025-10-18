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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Real Image (will show when image is available) */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-background.jpg"
            alt="Fresadora CNC de 5 ejes para prótesis dentales FANA"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              // Fallback to placeholder if image not found
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70 z-10"></div>
        
        {/* Professional Placeholder (shows if image not available) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
          {/* Simulated tech pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(37, 99, 235, 0.1) 2px, rgba(37, 99, 235, 0.1) 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(37, 99, 235, 0.1) 2px, rgba(37, 99, 235, 0.1) 4px)`
          }}></div>
          
          {/* Tech circles decoration */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* CNC Machine Silhouette Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <rect x="3" y="8" width="18" height="12" rx="1" className="text-blue-400" />
              <path d="M12 8V4M8 4h8M12 4v4" className="text-blue-300" />
              <circle cx="8" cy="14" r="1.5" className="text-blue-500" fill="currentColor" />
              <circle cx="16" cy="14" r="1.5" className="text-blue-500" fill="currentColor" />
              <path d="M10 14h4M12 12v4" className="text-blue-400" />
            </svg>
          </div>
        </div>
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
              className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              {t('badge')}
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              variants={fadeInUp}
            >
              {t('title').split(' de Precisión')[0]}{' '}
              <span className="text-blue-400">
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

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              variants={staggerContainer}
            >
              {[
                { value: t('stats.precision.value'), label: t('stats.precision.label') },
                { value: t('stats.delivery.value'), label: t('stats.delivery.label') },
                { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={staggerItem}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
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
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{service.label}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('form.submitButton')}
                </motion.button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{t('form.trust.iso')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{t('form.trust.shipping')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
