'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ContactoPage() {
  return (
    <ContactoPageContent />
  );
}

function ContactoPageContent() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoCaso: '',
    mensaje: '',
    archivos: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      archivos: e.target.files
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.');
    setIsSubmitting(false);
    
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoCaso: '',
      mensaje: '',
      archivos: null
    });
  };

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

      {/* Bloque 1: Formulario de Subida de Caso */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy mb-6">
                {t('form.title')}
              </h2>
              <p className="font-lato text-lg text-gray-600">
                {t('form.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-fana-secondary rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block font-lato font-semibold text-fana-navy mb-2">
                    {t('form.clinicName')} *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fana-primary focus:border-transparent font-lato"
                    placeholder="Ej: Clínica Dental Madrid"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-lato font-semibold text-fana-navy mb-2">
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fana-primary focus:border-transparent font-lato"
                    placeholder="doctor@clinica.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block font-lato font-semibold text-fana-navy mb-2">
                    {t('form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fana-primary focus:border-transparent font-lato"
                    placeholder="+34 600 000 000"
                  />
                </div>

                {/* Tipo de Caso */}
                <div>
                  <label htmlFor="tipoCaso" className="block font-lato font-semibold text-fana-navy mb-2">
                    {t('form.caseType')} *
                  </label>
                  <select
                    id="tipoCaso"
                    name="tipoCaso"
                    value={formData.tipoCaso}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fana-primary focus:border-transparent font-lato"
                  >
                    <option value="">{t('form.caseTypeOptions.select')}</option>
                    <option value="estetica">{t('form.caseTypeOptions.aesthetics')}</option>
                    <option value="implante">{t('form.caseTypeOptions.implant')}</option>
                    <option value="estructura">{t('form.caseTypeOptions.structure')}</option>
                    <option value="provisional">{t('form.caseTypeOptions.provisional')}</option>
                    <option value="otro">{t('form.caseTypeOptions.other')}</option>
                  </select>
                </div>
              </div>

              {/* Subida de Archivos */}
              <div className="mb-6">
                <label htmlFor="archivos" className="block font-lato font-semibold text-fana-navy mb-2">
                  {t('form.files')}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-fana-primary transition-colors">
                  <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    id="archivos"
                    name="archivos"
                    onChange={handleFileChange}
                    multiple
                    accept=".stl,.ply,.obj,.3ds,.dae"
                    className="hidden"
                  />
                  <label htmlFor="archivos" className="cursor-pointer">
                    <span className="text-fana-primary font-lato font-semibold hover:underline">
                      {t('form.fileUpload')}
                    </span>
                    <p className="text-gray-500 font-lato text-sm mt-2">
                      {t('form.fileDragDrop')}
                    </p>
                  </label>
                  {formData.archivos && (
                    <div className="mt-4">
                      <p className="font-lato text-sm text-gray-600">
                        {formData.archivos.length} {t('form.filesSelected')}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div className="mb-8">
                <label htmlFor="mensaje" className="block font-lato font-semibold text-fana-navy mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fana-primary focus:border-transparent font-lato"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              {/* Botón de Envío */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-fana-primary text-fana-white px-8 py-4 rounded-lg font-lato font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bloque 2: Información de Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-fana-navy mb-6">
                {t('info.title')}
              </h2>
              <p className="font-lato text-lg text-gray-600">
                {t('info.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Teléfono */}
              <div className="card text-center">
                <div className="mb-4">
                  <PhoneIcon className="h-12 w-12 text-fana-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('info.phone.title')}
                  </h3>
                </div>
                <p className="font-lato text-lg text-gray-700 mb-2">{t('info.phone.number')}</p>
                <p className="font-lato text-sm text-gray-500">{t('info.phone.hours')}</p>
              </div>

              {/* Email */}
              <div className="card text-center">
                <div className="mb-4">
                  <EnvelopeIcon className="h-12 w-12 text-fana-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('info.email.title')}
                  </h3>
                </div>
                <p className="font-lato text-lg text-gray-700 mb-2">{t('info.email.address')}</p>
                <p className="font-lato text-sm text-gray-500">{t('info.email.response')}</p>
              </div>

              {/* Dirección */}
              <div className="card text-center">
                <div className="mb-4">
                  <MapPinIcon className="h-12 w-12 text-fana-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-fana-navy mb-3">
                    {t('info.address.title')}
                  </h3>
                </div>
                <p className="font-lato text-lg text-gray-700 mb-2">
                  {t('info.address.street')}<br />
                  {t('info.address.city')}<br />
                  {t('info.address.postal')}
                </p>
                <p className="font-lato text-sm text-gray-500">{t('info.address.visits')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3: Mapa y Horarios */}
      <section className="py-16 bg-fana-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mapa */}
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-6">
                  {t('location.title')}
                </h3>
                <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPinIcon className="h-16 w-16 mx-auto mb-4" />
                    <p className="font-lato text-lg">{t('location.mapTitle')}</p>
                    <p className="font-lato text-sm">{t('location.mapAddress')}</p>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-fana-navy mb-6">
                  {t('location.hours.title')}
                </h3>
                <div className="bg-fana-secondary rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-300">
                      <span className="font-lato font-semibold text-fana-navy">{t('location.hours.weekdays')}</span>
                      <span className="font-lato text-gray-700">{t('location.hours.weekdaysHours')}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-300">
                      <span className="font-lato font-semibold text-fana-navy">{t('location.hours.saturday')}</span>
                      <span className="font-lato text-gray-700">{t('location.hours.saturdayHours')}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-lato font-semibold text-fana-navy">{t('location.hours.sunday')}</span>
                      <span className="font-lato text-gray-700">{t('location.hours.sundayHours')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-fana-primary rounded-lg">
                    <h4 className="font-lato font-semibold text-fana-white mb-2">
                      {t('location.hours.emergency.title')}
                    </h4>
                    <p className="font-lato text-fana-white text-sm">
                      {t('location.hours.emergency.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
