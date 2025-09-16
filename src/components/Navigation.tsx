'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Activar el scroll suave personalizado
  useSmoothScroll();

  // Prevenir scroll del body cuando el sidebar está abierto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
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
                  className="text-gold-400 hover:text-white transition-all duration-300 font-medium text-lg relative group cursor-pointer"
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
            {/* Logo a la izquierda - Solo logo, sin texto */}
            <Link href="/" className="flex items-center group cursor-pointer">
              <Image
                src="/assets/logos/logo.png"
                alt="Jill Studio Logo"
                width={120}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-all duration-300"
              />
            </Link>

            {/* Botón menú hamburguesa */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-400 hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu para móviles y tablets */}
      {isOpen && (
        <>
          {/* Overlay con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black-950 border-l border-gold-500/30 z-50 md:hidden flex flex-col"
          >
            {/* Header del sidebar */}
            <div className="flex items-center justify-between p-6 border-b border-gold-500/20 bg-black-950">
              <div className="flex items-center space-x-3">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Jill Studio Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gold-400 hover:text-white transition-all duration-300 p-2 rounded-lg cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menú del sidebar */}
            <nav className="p-6 flex-1 bg-black-950">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gold-400 hover:text-white hover:bg-gold-500/10 rounded-lg transition-all duration-300 relative group cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg font-medium">
                        {item.name}
                      </span>
                      <div className="absolute left-0 top-0 w-1 h-full bg-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer del sidebar */}
            <div className="p-6 border-t border-gold-500/20 bg-black-950">
              <div className="text-center">
                <p className="text-gold-300 text-sm">
                  Capturando momentos únicos
                </p>
                <p className="text-gold-400 text-xs mt-1">
                  © 2025 Jill Studio
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
