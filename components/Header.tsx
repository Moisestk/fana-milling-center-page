'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('newDesign.header');
  const nav = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string || 'es';

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1.5">
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>{t('phone')}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <EnvelopeIcon className="w-3.5 h-3.5" />
                <span>{t('email')}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPinIcon className="w-3.5 h-3.5" />
                <span>{t('address')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-3.5 h-3.5" fill="white" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-3.5 h-3.5" fill="white" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-3.5 h-3.5" fill="white" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube className="w-3.5 h-3.5" fill="white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-800">FANA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              <Link href={`/${locale}`} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">{nav('home')}</Link>
              <Link href={`/${locale}/nosotros`} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">Nosotros</Link>
              <Link href={`/${locale}/servicios`} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">{nav('services')}</Link>
              <Link href={`/${locale}/materiales`} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">{nav('materials')}</Link>
              <Link href={`/${locale}/contacto`} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">{nav('contact')}</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm">
                {t('cta')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href={`/${locale}`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{nav('home')}</Link>
                <Link href={`/${locale}/nosotros`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Nosotros</Link>
                <Link href={`/${locale}/servicios`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{nav('services')}</Link>
                <Link href={`/${locale}/materiales`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{nav('materials')}</Link>
                <Link href={`/${locale}/contacto`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{nav('contact')}</Link>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium w-fit">
                  {t('cta')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
