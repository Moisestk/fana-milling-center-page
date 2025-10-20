'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string || 'es';
  const nav = useTranslations('navigation');
  const footer = useTranslations('footer');

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-10 w-32">
                <Image
                  src="/images/logo/logo-fana-2.png"
                  alt="FANA Milling Center Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed font-body">
              {footer('description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a 
                  key={index}
                  href={href}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-fana-primary transition-colors"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-6 font-heading tracking-tight">{footer('quickLinks')}</h3>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
            >
              {[
                { href: `/${locale}`, label: nav('home') },
                { href: `/${locale}/nosotros`, label: nav('about') },
                { href: `/${locale}/servicios`, label: nav('services') },
                { href: `/${locale}/materiales`, label: nav('materials') },
                { href: `/${locale}/contacto`, label: nav('contact') }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-6 font-heading tracking-tight">{footer('servicesTitle')}</h3>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
            >
              {[
                { href: `/${locale}/servicios`, label: footer('services.generalMilling') },
                { href: `/${locale}/servicios`, label: footer('services.implantStructures') },
                { href: `/${locale}/servicios`, label: footer('services.advancedAesthetics') },
                { href: `/${locale}/materiales`, label: footer('services.b2bSupplies') },
                { href: `/${locale}/servicios`, label: footer('services.qualityControl') }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-6 font-heading tracking-tight">{footer('contactTitle')}</h3>
            <motion.ul 
              className="space-y-4"
              variants={staggerContainer}
            >
              {[
                { 
                  Icon: PhoneIcon, 
                  primary: footer('contact.phone.number'),
                  secondary: footer('contact.phone.hours')
                },
                {
                  Icon: EnvelopeIcon,
                  primary: footer('contact.email.address'),
                  secondary: footer('contact.email.response')
                },
                {
                  Icon: MapPinIcon,
                  primary: footer('contact.address.street'),
                  secondary: footer('contact.address.city')
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <item.Icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm font-body">{item.primary}</p>
                    <p className="text-gray-500 text-xs font-body">{item.secondary}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.p 
              className="text-gray-400 text-sm text-center md:text-left font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              © {new Date().getFullYear()} FANA Milling Center. {footer('copyright')}
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ y: -2 }}>
                <Link href={`/${locale}/politica-privacidad`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body">
                  {footer('legal.privacy')}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href={`/${locale}/terminos-servicio`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body">
                  {footer('legal.terms')}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href={`/${locale}/politica-cookies`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body">
                  {footer('legal.cookies')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}