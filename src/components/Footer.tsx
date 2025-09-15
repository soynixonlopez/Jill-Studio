import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
           <footer className="bg-black-950 text-white relative overflow-hidden">
      {/* Efecto de fondo dorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Jill Studio Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-lg"></div>
              </div>
            </div>
            <p className="text-white mb-6 max-w-md leading-relaxed">
              Capturando momentos únicos con pasión y profesionalismo. 
              Especializado en fotografía de modelos, sesiones personales, 
              grupales y eventos especiales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/jillstudio.pa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-all duration-300 p-2 rounded-lg hover:bg-gold-500/10 group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://facebook.com/jillstudio.pa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-all duration-300 p-2 rounded-lg hover:bg-gold-500/10 group"
              >
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://tiktok.com/@jillstudio.pa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-all duration-300 p-2 rounded-lg hover:bg-gold-500/10 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
                   <h3 className="text-lg font-semibold mb-6 text-gold-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white hover:text-gold-400 transition-all duration-300 relative group">
                  Inicio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white hover:text-gold-400 transition-all duration-300 relative group">
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-white hover:text-gold-400 transition-all duration-300 relative group">
                  Sobre Mí
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white hover:text-gold-400 transition-all duration-300 relative group">
                  Mi Trabajo
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white hover:text-gold-400 transition-all duration-300 relative group">
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
                   <h3 className="text-lg font-semibold mb-6 text-gold-400">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <a
                  href="https://wa.me/50768252312"
                  target="_blank"
                  rel="noopener noreferrer"
                         className="text-white hover:text-gold-400 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <a
                  href="mailto:infojillstudio@gmail.com"
                         className="text-white hover:text-gold-400 transition-all duration-300"
                >
                  infojillstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </div>
                       <span className="text-white">Panama City, Panama</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/20 mt-12 pt-8 text-center">
                 <p className="text-white">
            © {new Date().getFullYear()} nixdev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;