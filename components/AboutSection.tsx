'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { Sparkles, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('newDesign.about');
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main circular image container */}
              <div className="relative aspect-square">
                {/* Background decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"></div>
                
                {/* Main image circle */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-white rounded-full overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">F</span>
                    </div>
                    <p className="text-blue-600 font-semibold text-lg">FANA Milling</p>
                    <p className="text-gray-600 text-sm">Tecnología CNC</p>
                  </div>
                </div>

                {/* Decorative stars */}
                <div className="absolute -top-4 -left-4">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute top-8 -left-6">
                  <Star className="w-6 h-6 text-blue-400 fill-blue-400" />
                </div>

                {/* Quality Badge */}
                <div className="absolute bottom-8 -right-4 bg-blue-900 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <p className="text-xs font-semibold">CALIDAD</p>
                    <p className="text-2xl font-bold">ISO</p>
                    <p className="text-xs">13485</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {t('badge')}
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-blue-600">{t('title.part1')}</span>
              <br />
              <span className="text-gray-800">{t('title.part2')}</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white stroke-2" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{t('features.feature1')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white stroke-2" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{t('features.feature2')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white stroke-2" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{t('features.feature3')}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg">
                {t('cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}