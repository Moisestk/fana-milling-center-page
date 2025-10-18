'use client';

import { useState } from 'react';
import { PlayIcon, UserIcon, PhoneIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('newDesign.hero');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Icon and Subtitle */}
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium text-sm">{t('badge')}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-800">{t('title.part1')}</span>
              <span className="text-blue-600">{t('title.part2')}</span>
              <span className="text-gray-800">{t('title.part3')}</span>
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-blue-600 text-white px-7 py-3.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg">
                {t('cta1')}
              </button>
              <button className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm border border-gray-300 px-7 py-3.5 rounded-lg hover:border-blue-600">
                <PlayIcon className="w-5 h-5" />
                <span>{t('cta2')}</span>
              </button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <UserIcon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-500">{t('quickInfo.name')}</p>
                <p className="text-sm font-semibold text-gray-800">{t('quickInfo.nameValue')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <PhoneIcon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-500">{t('quickInfo.phone')}</p>
                <p className="text-sm font-semibold text-gray-800">{t('quickInfo.phoneValue')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <CalendarIcon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-500">{t('quickInfo.date')}</p>
                <p className="text-sm font-semibold text-gray-800">{t('quickInfo.dateValue')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <ClockIcon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-500">{t('quickInfo.time')}</p>
                <p className="text-sm font-semibold text-gray-800">{t('quickInfo.timeValue')}</p>
              </div>
            </div>

            {/* Appointment Button */}
            <div className="pt-2">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm shadow-lg hover:shadow-xl">
                {t('ctaButton')}
              </button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative lg:mt-0">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden">
                {/* Placeholder for professional image */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full h-full bg-gradient-to-t from-blue-600 via-blue-500 to-transparent flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-5xl font-bold">F</span>
                      </div>
                      <p className="text-white font-semibold text-xl">FANA Milling Center</p>
                      <p className="text-blue-100 text-sm">Tecnología CNC de Precisión</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
