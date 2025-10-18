'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string || 'es';
  const nav = useTranslations('navigation');

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold">FANA</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Tu socio tecnológico en fabricación dental. Laboratorio CAD/CAM especializado en prótesis de precisión y suministros de alta calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/nosotros`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {nav('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/materiales`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {nav('materials')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Fresado General
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Estructuras de Implantes
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Estética Avanzada
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/materiales`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Suministros B2B
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Control de Calidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">+34 91 123 45 67</p>
                  <p className="text-gray-500 text-xs">Lun-Vie: 8:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">info@fanamilling.com</p>
                  <p className="text-gray-500 text-xs">Respuesta en 24h</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Polígono Industrial Norte</p>
                  <p className="text-gray-400 text-sm">28050 Madrid, España</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} FANA Milling Center. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}