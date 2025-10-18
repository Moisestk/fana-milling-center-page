'use client';

import { WrenchScrewdriverIcon, SparklesIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

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
    <section className="bg-blue-600 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2.5 text-white hover:opacity-80 transition-opacity cursor-pointer group">
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <service.icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
