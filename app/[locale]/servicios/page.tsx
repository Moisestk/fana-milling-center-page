import type { Metadata } from 'next';
import { CogIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return {
    title: `${t('title')} - Fana Milling Center`,
    description: t('subtitle'),
  };
}

export default function ServiciosPage() {
  return (
    <ServiciosPageContent />
  );
}

function ServiciosPageContent() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  return (
    <main className="min-h-screen bg-fana-white">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-fana-secondary to-fana-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-fana-navy mb-6">
              {t('title')}
            </h1>
            <p className="font-lato text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 1: Fresado de Estructuras (Implantes) */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <CogIcon className="h-8 w-8 text-fana-primary mr-3" />
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy">
                  {t('implants.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato">
                <p className="text-lg leading-relaxed">
                  {t('implants.description1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('implants.description2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('implants.description3')}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-fana-secondary to-fana-primary rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-fana-white">
                  <CogIcon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <p className="font-lato text-lg">{tCommon('diagramTechnical')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2: Estética y Materiales Avanzados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="bg-gradient-to-br from-fana-primary to-fana-navy rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-fana-white">
                  <SparklesIcon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <p className="font-lato text-lg">{tCommon('highAesthetics')}</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-8 w-8 text-fana-primary mr-3" />
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy">
                  {t('aesthetics.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato">
                <p className="text-lg leading-relaxed">
                  {t('aesthetics.description1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('aesthetics.description2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('aesthetics.description3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3: Flujo Digital FANA */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy mb-6">
              {t('workflow.title')}
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
              {t('workflow.subtitle')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Paso 1 */}
              <div className="flex items-center space-x-6 p-6 bg-fana-secondary rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-fana-primary rounded-full flex items-center justify-center">
                    <span className="text-fana-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-lato text-xl font-semibold text-fana-navy mb-2">{t('workflow.step1.title')}</h3>
                  <p className="font-lato text-gray-700">{t('workflow.step1.description')}</p>
                </div>
                <ArrowRightIcon className="h-6 w-6 text-fana-primary" />
              </div>

              {/* Paso 2 */}
              <div className="flex items-center space-x-6 p-6 bg-fana-secondary rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-fana-primary rounded-full flex items-center justify-center">
                    <span className="text-fana-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-lato text-xl font-semibold text-fana-navy mb-2">{t('workflow.step2.title')}</h3>
                  <p className="font-lato text-gray-700">{t('workflow.step2.description')}</p>
                </div>
                <ArrowRightIcon className="h-6 w-6 text-fana-primary" />
              </div>

              {/* Paso 3 */}
              <div className="flex items-center space-x-6 p-6 bg-fana-secondary rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-fana-primary rounded-full flex items-center justify-center">
                    <span className="text-fana-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-lato text-xl font-semibold text-fana-navy mb-2">{t('workflow.step3.title')}</h3>
                  <p className="font-lato text-gray-700">{t('workflow.step3.description')}</p>
                </div>
                <ArrowRightIcon className="h-6 w-6 text-fana-primary" />
              </div>

              {/* Paso 4 */}
              <div className="flex items-center space-x-6 p-6 bg-fana-secondary rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-fana-primary rounded-full flex items-center justify-center">
                    <span className="text-fana-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-lato text-xl font-semibold text-fana-navy mb-2">{t('workflow.step4.title')}</h3>
                  <p className="font-lato text-gray-700">{t('workflow.step4.description')}</p>
                </div>
                <ArrowRightIcon className="h-6 w-6 text-fana-primary" />
              </div>

              {/* Paso 5 */}
              <div className="flex items-center space-x-6 p-6 bg-fana-secondary rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-fana-primary rounded-full flex items-center justify-center">
                    <span className="text-fana-white font-bold text-lg">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-lato text-xl font-semibold text-fana-navy mb-2">{t('workflow.step5.title')}</h3>
                  <p className="font-lato text-gray-700">{t('workflow.step5.description')}</p>
                </div>
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-fana-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="font-lato text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-fana-primary text-fana-white px-8 py-4 rounded-lg font-lato font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
