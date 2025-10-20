'use client';

import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('gleamer.pricing');

  const pricingPlans = [
    {
      id: 1,
      name: t('plan1.name'),
      description: t('plan1.description'),
      price: t('plan1.price'),
      period: t('plan1.period'),
      features: t('plan1.features'),
      popular: false,
      icon: "🔧",
      gradient: "from-fana-primary to-fana-navy"
    },
    {
      id: 2,
      name: t('plan2.name'),
      description: t('plan2.description'),
      price: t('plan2.price'),
      period: t('plan2.period'),
      features: t('plan2.features'),
      popular: true,
      icon: "✨",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: t('plan3.name'),
      description: t('plan3.description'),
      price: t('plan3.price'),
      period: t('plan3.period'),
      features: t('plan3.features'),
      popular: false,
      icon: "⚙️",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: t('plan4.name'),
      description: t('plan4.description'),
      price: t('plan4.price'),
      period: t('plan4.period'),
      features: t('plan4.features'),
      popular: false,
      icon: "💎",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-fana-white to-fana-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-fana-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-fana-navy rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-fana-primary rounded-full"></div>
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
              Precios transparentes
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                plan.popular ? 'ring-2 ring-fana-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    {t('mostPopular')}
                  </span>
                </motion.div>
              )}

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <span className="text-white text-3xl">{plan.icon}</span>
                  </motion.div>
                  
                  <h3 className="font-playfair text-xl font-bold text-fana-navy mb-3 group-hover:text-fana-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="font-lato text-gray-600 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="font-playfair text-4xl font-bold text-fana-primary">
                      {plan.price}
                    </span>
                    <span className="font-lato text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {Array.isArray(plan.features) ? plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckIcon className="w-5 h-5 text-fana-primary flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-gray-600 text-sm">{feature}</span>
                    </motion.li>
                  )) : (
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-fana-primary flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-gray-600 text-sm">{plan.features}</span>
                    </li>
                  )}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-lato font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white hover:shadow-2xl'
                      : 'border-2 border-fana-primary text-fana-primary hover:bg-fana-primary hover:text-fana-white hover:shadow-xl'
                  }`}
                >
                  {t('bookService')}
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-fana-secondary to-fana-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 right-8 w-20 h-20 border border-fana-primary rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-fana-navy rounded-full"></div>
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
                  <div className="w-16 h-16 bg-fana-primary/10 rounded-full flex items-center justify-center">
                    <StarIcon className="w-8 h-8 text-fana-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-fana-navy mb-4">
                  {t('customQuote.title')}
                </h3>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="font-lato text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                {t('customQuote.subtitle')}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white px-10 py-4 rounded-xl font-lato font-medium hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              >
                {t('customQuote.button')}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
