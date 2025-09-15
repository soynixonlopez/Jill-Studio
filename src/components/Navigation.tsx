'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Activar el scroll suave personalizado
  useSmoothScroll();

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Mi Trabajo', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
        <nav className="bg-black-950 shadow-2xl sticky top-0 z-50 border-b border-gold-500/30 backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Logo y menú en la misma línea */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between py-4">
            {/* Logo a la izquierda */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Jill Studio Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-lg group-hover:bg-gold-400/30 transition-all duration-300"></div>
              </div>
            </Link>
            
            {/* Menú a la derecha */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gold-400 hover:text-white transition-all duration-300 font-medium text-lg relative group"
                >
                  {/* Texto principal */}
                  <span className="relative z-10">
                    {item.name}
                  </span>
                  
                  {/* Línea decorativa inferior simple */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Logo izquierda, menú hamburguesa */}
        <div className="md:hidden">
          <div className="flex justify-between items-center h-16">
            {/* Logo a la izquierda */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/assets/logos/logo.png"
                alt="Jill Studio Logo"
                width={120}
                height={40}
                className="h-8 w-auto group-hover:scale-105 transition-all duration-300"
              />
                     <span className="text-lg font-bold font-serif text-gold-400">
                       Jill Studio
                     </span>
            </Link>

            {/* Botón menú hamburguesa */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-400 hover:text-white transition-all duration-300 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menú móvil desplegable */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
                     <div className="px-2 pt-2 pb-3 space-y-1 bg-black-950 border-t border-gold-500/20">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gold-400 hover:text-white transition-all duration-300 relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Texto principal */}
                    <span className="relative z-10">
                      {item.name}
                    </span>
                    
                    {/* Línea decorativa inferior simple */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
