'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Privacidad', href: '#' },
  ];

  return (
    <footer className="bg-primary text-light py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">LP</span>
              </div>
              FUNERARIA LA PAZ
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Servicios funerarios profesionales con 25 años de experiencia,
              ofreciendo dignidad y respeto en cada momento.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-yellow-500 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400">
              <strong>Emergencias 24/7:</strong><br />
              <a href="tel:+34600123456" className="hover:text-accent transition-colors">
                +34 600 123 456
              </a>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} FUNERARIA LA PAZ. Todos los derechos reservados.
              Hecho con <Heart size={16} className="text-accent" />
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Términos de Servicio | Política de Privacidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
