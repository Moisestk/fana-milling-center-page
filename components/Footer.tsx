'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-fana-navy text-fana-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                FANA Milling Center
              </h3>
              <p className="font-lato text-fana-secondary leading-relaxed mb-6">
                Tu socio tecnológico en fabricación de prótesis y suministros. 
                Calidad, rapidez y el flujo digital CAD/CAM más eficiente.
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-fana-primary mr-3" />
                <span className="font-lato text-fana-secondary">+34 91 123 45 67</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-fana-primary mr-3" />
                <span className="font-lato text-fana-secondary">info@fanamilling.com</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-fana-primary mr-3 mt-1" />
                <span className="font-lato text-fana-secondary">
                  Polígono Industrial Norte<br />
                  Madrid, España
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-fana-primary mr-3" />
                <div>
                  <p className="font-lato text-fana-secondary">Lun - Vie: 8:00 - 18:00</p>
                  <p className="font-lato text-fana-secondary">Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-fana-secondary text-sm mb-4 md:mb-0">
              © 2024 FANA Milling Center. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-lato text-fana-secondary hover:text-fana-primary transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="font-lato text-fana-secondary hover:text-fana-primary transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}