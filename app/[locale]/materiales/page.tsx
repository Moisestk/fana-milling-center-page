import type { Metadata } from 'next';
import { BeakerIcon, ArchiveBoxIcon, CubeTransparentIcon, ArrowPathIcon, ServerStackIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'materials' });
  
  return {
    title: `${t('title')} - Fana Milling Center`,
    description: t('subtitle'),
  };
}

export default function MaterialesPage() {
  return (
    <MaterialesPageContent />
  );
}

function MaterialesPageContent() {
  const t = useTranslations('materials');
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

      {/* Bloque 1: Zirconio y Disilicato */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <BeakerIcon className="h-8 w-8 text-fana-primary mr-3" />
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy">
                  {t('zirconia.title')}
                </h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjeta Zirconio Premium */}
              <div className="card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-fana-primary text-fana-white px-3 py-1 rounded-full text-sm font-lato font-semibold">
                    {tCommon('materialPremium')}
                  </span>
                </div>
                <div className="mb-4">
                  <BeakerIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('zirconia.zirconiaMultilayer.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('zirconia.zirconiaMultilayer.certification')}</p>
                  <p className="text-sm">• {t('zirconia.zirconiaMultilayer.resistance')}</p>
                  <p className="text-sm">• {t('zirconia.zirconiaMultilayer.translucency')}</p>
                  <p className="text-sm">• {t('zirconia.zirconiaMultilayer.biocompatibility')}</p>
                </div>
              </div>

              {/* Tarjeta Disilicato */}
              <div className="card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-fana-primary text-fana-white px-3 py-1 rounded-full text-sm font-lato font-semibold">
                    {tCommon('materialPremium')}
                  </span>
                </div>
                <div className="mb-4">
                  <BeakerIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('zirconia.lithiumDisilicate.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('zirconia.lithiumDisilicate.resistance')}</p>
                  <p className="text-sm">• {t('zirconia.lithiumDisilicate.aesthetics')}</p>
                  <p className="text-sm">• {t('zirconia.lithiumDisilicate.wear')}</p>
                  <p className="text-sm">• {t('zirconia.lithiumDisilicate.certification')}</p>
                </div>
              </div>

              {/* Tarjeta Metales Avanzados */}
              <div className="card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-fana-primary text-fana-white px-3 py-1 rounded-full text-sm font-lato font-semibold">
                    {tCommon('materialPremium')}
                  </span>
                </div>
                <div className="mb-4">
                  <BeakerIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('zirconia.titanium.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('zirconia.titanium.certification')}</p>
                  <p className="text-sm">• {t('zirconia.titanium.corrosion')}</p>
                  <p className="text-sm">• {t('zirconia.titanium.biocompatibility')}</p>
                  <p className="text-sm">• {t('zirconia.titanium.lightness')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2: Suministros para Laboratorios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mr-3" />
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy">
                  {t('supplies.title')}
                </h2>
              </div>
              <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
                {t('supplies.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* PMMA */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.pmma')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.pmmaDesc')}</p>
              </div>

              {/* Cera */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.wax')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.waxDesc')}</p>
              </div>

              {/* Composite */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.composite')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.compositeDesc')}</p>
              </div>

              {/* PEEK */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.peek')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.peekDesc')}</p>
              </div>

              {/* Resinas Temporales */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.temporaryResins')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.temporaryResinsDesc')}</p>
              </div>

              {/* Zirconio Blanks */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.zirconiaBlanks')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.zirconiaBlanksDesc')}</p>
              </div>

              {/* Disilicato Blanks */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.disilicateBlanks')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.disilicateBlanksDesc')}</p>
              </div>

              {/* Titanio */}
              <div className="bg-fana-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <ArchiveBoxIcon className="h-8 w-8 text-fana-primary mx-auto mb-3" />
                <h3 className="font-lato font-semibold text-fana-navy mb-2">{t('supplies.titaniumBlanks')}</h3>
                <p className="text-sm text-gray-600">{t('supplies.titaniumBlanksDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3: Tecnología CAD/CAM */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy mb-6">
                {t('technology.title')}
              </h2>
              <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
                {t('technology.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fresadoras 5 Ejes */}
              <div className="card">
                <div className="mb-4">
                  <CubeTransparentIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('technology.fiveAxis.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('technology.fiveAxis.precision')}</p>
                  <p className="text-sm">• {t('technology.fiveAxis.multiMaterial')}</p>
                  <p className="text-sm">• {t('technology.fiveAxis.automation')}</p>
                  <p className="text-sm">• {t('technology.fiveAxis.maintenance')}</p>
                </div>
              </div>

              {/* Escáneres de Alta Resolución */}
              <div className="card">
                <div className="mb-4">
                  <ArrowPathIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('technology.scanners.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('technology.scanners.resolution')}</p>
                  <p className="text-sm">• {t('technology.scanners.color')}</p>
                  <p className="text-sm">• {t('technology.scanners.processing')}</p>
                  <p className="text-sm">• {t('technology.scanners.compatibility')}</p>
                </div>
              </div>

              {/* Software de Diseño */}
              <div className="card">
                <div className="mb-4">
                  <ServerStackIcon className="h-12 w-12 text-fana-primary mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('technology.software.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 font-lato">
                  <p className="text-sm">• {t('technology.software.certification')}</p>
                  <p className="text-sm">• {t('technology.software.ai')}</p>
                  <p className="text-sm">• {t('technology.software.simulation')}</p>
                  <p className="text-sm">• {t('technology.software.integration')}</p>
                </div>
              </div>
            </div>

            {/* Características Adicionales */}
            <div className="mt-12 bg-fana-secondary rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-6 text-center">
                {t('technology.features.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.cooling')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.toolChange')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.monitoring')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.isoCertification')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.traceability')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fana-primary rounded-full mt-2"></div>
                    <p className="font-lato text-gray-700">{t('technology.features.support')}</p>
                  </div>
                </div>
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
          <button className="bg-fana-primary text-fana-white px-8 py-4 rounded-lg font-lato font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </main>
  );
}
