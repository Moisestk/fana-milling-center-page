'use client';

import { WrenchScrewdriverIcon, CogIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function OurServicesSection() {
  const t = useTranslations('newDesign.services');
  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: t('service1.title'),
      description: t('service1.description'),
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: CogIcon,
      title: t('service2.title'),
      description: t('service2.description'),
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: SparklesIcon,
      title: t('service3.title'),
      description: t('service3.description'),
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-800">{t('title.part1')}</span>
            <br />
            <span className="text-blue-600">{t('title.part2')}</span>
          </h2>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg">
              {t('cta')}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Service Image with Icon */}
              <div className={`h-52 bg-gradient-to-br ${service.bgColor} flex items-center justify-center relative p-6`}>
                {/* Placeholder image area */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-50"></div>
                
                {/* Icon Circle */}
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                >
                  {t('learnMore')}
                  <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
