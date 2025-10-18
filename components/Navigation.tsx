'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  currentLocale: string;
}

export default function Navigation({ currentLocale }: NavigationProps) {
  const t = useTranslations('navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: `/${currentLocale}`, label: t('home') },
    { href: `/${currentLocale}/servicios`, label: t('services') },
    { href: `/${currentLocale}/materiales`, label: t('materials') },
    { href: `/${currentLocale}/contacto`, label: t('contact') }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-fana-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-fana-primary to-fana-navy rounded-lg flex items-center justify-center shadow-md">
              <span className="text-fana-white font-playfair font-bold text-xl">F</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-fana-navy">
              FANA Milling
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-lato text-fana-navy hover:text-fana-primary transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fana-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button and Language Switcher */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white px-6 py-2 rounded-lg font-lato font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              {t('cta')}
            </button>
            <LanguageSwitcher currentLocale={currentLocale} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-fana-secondary transition-colors"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-fana-navy" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-fana-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-lato text-fana-navy hover:text-fana-primary transition-colors duration-200 font-medium py-2 px-2 rounded-lg hover:bg-fana-secondary/50"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-fana-primary to-fana-navy text-fana-white px-6 py-3 rounded-lg font-lato font-medium hover:shadow-lg transition-all duration-300 mt-4">
                {t('cta')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
