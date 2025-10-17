'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  currentLocale: string;
}

export default function Navigation({ currentLocale }: NavigationProps) {
  const t = useTranslations('navigation');

  const navItems = [
    { href: `/${currentLocale}`, label: t('home') },
    { href: `/${currentLocale}/servicios`, label: t('services') },
    { href: `/${currentLocale}/materiales`, label: t('materials') },
    { href: `/${currentLocale}/contacto`, label: t('contact') }
  ];

  return (
    <nav className="bg-fana-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-fana-primary rounded-lg flex items-center justify-center">
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
                className="font-lato text-fana-navy hover:text-fana-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher currentLocale={currentLocale} />

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-fana-secondary transition-colors">
            <svg className="h-6 w-6 text-fana-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-lato text-fana-navy hover:text-fana-primary transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
