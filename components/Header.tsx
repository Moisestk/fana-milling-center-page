'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('newDesign.header');
  const nav = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string || 'es';

  const navItems = [
    { href: `/${locale}`, label: nav('home') },
    { href: `/${locale}/nosotros`, label: nav('about') },
    { href: `/${locale}/servicios`, label: nav('services') },
    { href: `/${locale}/materiales`, label: nav('materials') },
    { href: `/${locale}/contacto`, label: nav('contact') }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div 
        className="bg-blue-600 text-white py-2.5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>{t('phone')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <EnvelopeIcon className="w-3.5 h-3.5" />
                <span>{t('email')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <MapPinIcon className="w-3.5 h-3.5" />
                <span>{t('address')}</span>
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hover:opacity-80 transition-opacity">
                <Facebook className="w-3.5 h-3.5" fill="white" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hover:opacity-80 transition-opacity">
                <Twitter className="w-3.5 h-3.5" fill="white" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hover:opacity-80 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-3.5 h-3.5" fill="white" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hover:opacity-80 transition-opacity">
                <Youtube className="w-3.5 h-3.5" fill="white" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href={`/${locale}`}>
              <motion.div 
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-14 w-44">
                  <Image
                    src="/images/logo/logo-fana-1.png"
                    alt="FANA Milling Center Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="176px"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex items-center space-x-7"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.span 
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors cursor-pointer relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </motion.span>
                </Link>
              ))}
            </motion.div>

            {/* CTA Button & Language Switcher */}
            <motion.div 
              className="hidden lg:flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <LanguageSwitcher currentLocale={locale} />
              <Link href={`/${locale}/contacto`}>
                <motion.button 
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('cta')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden py-4 border-t overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div 
                  className="flex flex-col space-y-4"
                  initial="initial"
                  animate="animate"
                  variants={{
                    animate: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors block"
                      >
                        {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Language Switcher Mobile */}
              <motion.div
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
                className="py-2"
              >
                <LanguageSwitcher currentLocale={locale} />
              </motion.div>

              <Link href={`/${locale}/contacto`}>
                <motion.button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium w-fit"
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('cta')}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.nav>
</>
);
}
