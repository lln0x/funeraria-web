'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-light py-2 px-4">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <div className="flex gap-6">
            <a href="tel:+34600123456" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+34 600 123 456</span>
            </a>
            <a href="mailto:contacto@funerarialapaz.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} />
              <span>contacto@funerarialapaz.com</span>
            </a>
          </div>
          <div className="text-xs">Atención 24/7</div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container-custom flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">LP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-primary text-lg">FUNERARIA LA PAZ</h1>
              <p className="text-xs text-muted">Servicios Funerarios</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-primary hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
