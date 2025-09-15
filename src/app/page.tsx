'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Users, Heart, Sparkles, Camera, Calendar, Gift, X, Phone, Mail, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';
import Gallery from '@/components/Gallery';
import HeroGallery from '@/components/HeroGallery';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear el enlace de mailto con los datos del formulario
    const subject = `Consulta sobre ${formData.service} - ${formData.name}`;
    const body = `Hola Jill,

Mi nombre es ${formData.name} y me interesa contratar tus servicios de ${formData.service}.

Información de contacto:
- Email: ${formData.email}
- Teléfono: ${formData.phone}

Mensaje:
${formData.message}

¡Espero tu respuesta!

Saludos,
${formData.name}`;

    const mailtoLink = `mailto:infojillstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const services = [
    {
      id: 1,
      title: "Fotos de Modelos",
      description: "Sesiones profesionales para modelos y book fotográfico",
      image: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907227/model2_sorsds.png",
      price: "$50",
      duration: "1 hora",
      features: [
        "Sesiones en estudio o exteriores",
        "Asesoramiento de vestuario y pose",
        "Retoque profesional de imágenes",
        "Entrega de galería digital de alta resolución"
      ]
    },
    {
      id: 2,
      title: "Fotos Grupales",
      description: "Fotografías familiares, empresariales y eventos grupales",
      image: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907187/Model1_gm1lta.png",
      price: "$70",
      duration: "1-2 horas",
      features: [
        "Fotografías familiares y empresariales",
        "Eventos grupales y celebraciones",
        "Fotografía de equipos de trabajo",
        "Múltiples poses y composiciones"
      ]
    },
    {
      id: 3,
      title: "Fotos Personales",
      description: "Sesiones individuales y retratos profesionales",
      image: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907372/20250620_181948_bq9bbc.jpg",
      price: "$25",
      duration: "1 hora",
      features: [
        "Retratos individuales y de pareja",
        "Sesiones de maternidad y recién nacidos",
        "Fotografía de estilo de vida",
        "Álbumes personalizados disponibles"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
            {/* Hero Section - Banner Principal Impactante */}
            <section id="inicio" className="relative bg-black-950 text-white overflow-hidden min-h-screen">
              {/* Efectos sutiles de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-950"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
         
               {/* Partículas doradas sutiles */}
               <div className="absolute inset-0">
                 <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-400/30 rounded-full animate-pulse"></div>
                 <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-gold-300/40 rounded-full animate-pulse delay-1000"></div>
                 <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gold-500/20 rounded-full animate-pulse delay-2000"></div>
                 <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-gold-400/30 rounded-full animate-pulse delay-500"></div>
               </div>
        
               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-[85vh]">
                  {/* Columna Izquierda - Contenido (50%) */}
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="flex flex-col justify-center h-full px-12 py-16 max-w-2xl"
                  >
                       <motion.div variants={fadeInUp} className="mb-8">
                         {/* Título Principal */}
                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 text-gold-400 leading-[0.9] tracking-tight">
                           Hola, soy Jill
                         </h1>
                               
                         <p className="text-xl md:text-2xl text-white leading-relaxed font-light max-w-lg">
                           Estoy listo para capturar tus mejores momentos más preciados.
                         </p>
                       </motion.div>

                       <motion.div variants={fadeInUp} className="mb-8">
                         <p className="text-lg text-gold-200 leading-relaxed font-medium">
                           Especializado en modelos, retratos y eventos únicos.
                         </p>
                       </motion.div>
                    
                     <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
                     <a
                       href="#galeria"
                       className="bg-gradient-to-r from-gold-500 to-gold-600 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center justify-center group shadow-2xl shadow-gold-500/30 hover:shadow-gold-400/40 transform hover:scale-105 border-2 border-gold-400 min-w-[200px]"
                     >
                       Ver Proyectos
                       <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                     </a>
                     <a
                       href="#contacto"
                       className="bg-gradient-to-r from-gold-500 to-gold-600 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center justify-center group shadow-2xl shadow-gold-500/30 hover:shadow-gold-400/40 transform hover:scale-105 border-2 border-gold-400 min-w-[200px]"
                     >
                       Contactar
                     </a>
                     </motion.div>
                  </motion.div>

                  {/* Columna Derecha - Imagen de Jill Studio (50%) */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-full overflow-hidden"
                  >
                     <div className="relative w-full h-full">
        <Image
                         src="/assets/images/jillstudio.png"
                         alt="Jill Studio - Fotógrafo Profesional"
                         fill
                         className="object-cover object-bottom"
          priority
                         sizes="(max-width: 768px) 100vw, 50vw"
                       />
                       {/* Efecto sutil de brillo */}
                       <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none"></div>
                       {/* Desvanecido suave en todos los bordes */}
                       <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black-950 via-black-950/80 to-transparent pointer-events-none"></div>
                       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black-950 via-black-950/80 to-transparent pointer-events-none"></div>
                       <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black-950/40 to-transparent pointer-events-none"></div>
                     </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Línea divisoria elegante */}
            <div className="relative w-full h-16 bg-gradient-to-b from-black-950 via-black-900 to-black-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold-500/40 rounded-full"></div>
            </div>

            {/* Services Preview */}
            <section id="servicios" className="py-12 bg-black-700 relative overflow-hidden">
              {/* Efectos de fondo únicos */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-700 via-black-650 to-black-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
              
              {/* Líneas decorativas laterales */}
              <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-gold-500/40 via-gold-500/60 to-gold-500/40 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-gold-500/40 via-gold-500/60 to-gold-500/40 transform -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
                 className="text-center mb-12"
          >
                   <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-serif text-gold-400 mb-4">
                     Mis Servicios
                   </motion.h2>
                   <motion.p variants={fadeInUp} className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                     Especializado en diferentes tipos de fotografía para capturar tus momentos más importantes
                   </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-black-800/90 backdrop-blur-sm rounded-2xl border border-gold-500/30 hover:border-gold-400/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Imagen del servicio */}
                <div className="relative h-80 overflow-hidden">
            <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gold-200 text-sm">
                      {service.price} • {service.duration}
                    </p>
                  </div>
                </div>
                
                {/* Contenido del servicio */}
                <div className="p-6">
                  <p className="text-white/80 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-400 font-semibold text-sm">
                      Haz clic para más información
                    </span>
                    <ArrowRight className="h-5 w-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Línea divisoria elegante */}
            <div className="relative w-full h-16 bg-gradient-to-b from-black-700 via-black-650 to-black-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/15 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold-500/30 rounded-full"></div>
            </div>

            {/* About Preview */}
            <section id="sobre-mi" className="py-16 bg-black-600 relative overflow-hidden">
              {/* Efectos de fondo únicos */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-600 via-black-550 to-black-600"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
              
              {/* Líneas decorativas laterales */}
              <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-gold-500/40 via-gold-500/60 to-gold-500/40 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-gold-500/40 via-gold-500/60 to-gold-500/40 transform -translate-y-1/2"></div>
        
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título principal centrado */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="text-center mb-16"
                >
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-serif text-gold-400 mb-6">
                    Sobre Mí
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                    Conoce la historia detrás de cada fotografía y la pasión que impulsa mi trabajo
                  </motion.p>
                </motion.div>

                {/* Layout con imagen grande superpuesta de manera interesante */}
                <div className="relative min-h-[800px]">
                  
                  {/* Grid de fondo con las dos columnas */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[700px]">
                    
                    {/* Columna izquierda - Historia personal */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 flex flex-col justify-center"
                    >
                      <div className="bg-black-800/60 backdrop-blur-sm rounded-2xl pl-8 pr-30 py-8 border border-gold-500/20 shadow-lg h-full flex flex-col justify-center">
                        <div className="text-center lg:text-left">
                          <h3 className="text-2xl font-bold font-serif text-gold-400 mb-4">
                            Mi Historia
                          </h3>
                          <p className="text-lg text-white mb-4 leading-relaxed">
                            Soy Jill, fotógrafo profesional con más de 5 años de experiencia 
                            capturando momentos únicos y especiales. Mi pasión es crear 
                            imágenes que cuenten historias y preserven recuerdos para toda la vida.
                          </p>
                          <p className="text-lg text-white mb-8 leading-relaxed">
                            Especializado en fotografía de modelos, sesiones personales y 
                            eventos grupales, trabajo con cada cliente para crear imágenes 
                            auténticas y memorables que reflejen su personalidad única.
                          </p>
                        </div>
                        
                        {/* Botón dorado más visible */}
                        <div className="mt-6">
                          <a
                            href="https://instagram.com/jillstudio.pa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-gold-300 to-gold-400 text-black px-8 py-4 rounded-xl font-bold text-xl hover:from-gold-200 hover:to-gold-300 transition-all duration-300 group shadow-2xl hover:shadow-gold-400/40 transform hover:scale-105 w-full justify-center border-2 border-gold-200"
                          >
                            <Instagram className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                            Conoce más sobre mí
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Columna derecha - Estadísticas */}
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 flex flex-col justify-center"
                    >
                      <div className="bg-black-800/80 backdrop-blur-sm rounded-2xl pl-16 pr-8 py-12 border border-gold-500/30 shadow-2xl h-full flex flex-col justify-between">
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold font-serif text-gold-400 mb-12 text-center">
                            Mi Trayectoria
                          </h3>
                          <div className="grid grid-cols-1 gap-6 text-center">
                            <div className="group">
                              <div className="text-4xl font-bold mb-3 text-gold-400 group-hover:scale-110 transition-transform duration-300">5</div>
                              <div className="text-gold-200 font-semibold text-sm uppercase tracking-wide">Años de experiencia</div>
                            </div>
                            <div className="group">
                              <div className="text-4xl font-bold mb-3 text-gold-400 group-hover:scale-110 transition-transform duration-300">50</div>
                              <div className="text-gold-200 font-semibold text-sm uppercase tracking-wide">Clientes satisfechos</div>
                            </div>
                            <div className="group">
                              <div className="text-4xl font-bold mb-3 text-gold-400 group-hover:scale-110 transition-transform duration-300">1000+</div>
                              <div className="text-gold-200 font-semibold text-sm uppercase tracking-wide">Fotos tomadas</div>
                            </div>
                            <div className="group">
                              <div className="text-4xl font-bold mb-3 text-gold-400 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                4.9
                                <Star className="h-5 w-5 ml-1 text-gold-400" />
                              </div>
                              <div className="text-gold-200 font-semibold text-sm uppercase tracking-wide">Calificación</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Línea decorativa inferior */}
                        <div className="mt-8 pt-6 border-t border-gold-500/20">
                          <p className="text-gold-300 text-center text-sm italic">
                            "Cada foto cuenta una historia única"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Imagen grande superpuesta exactamente en los bordes */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="relative w-[520px] h-[720px] lg:w-[620px] lg:h-[820px]">
                      <Image
                        src="/assets/images/jillstudiosentado.png"
                        alt="Jill Studio - Fotógrafo Profesional"
                        fill
                        className="object-contain object-center rounded-3xl shadow-2xl border-4 border-gold-500/40"
                        sizes="(max-width: 768px) 520px, 620px"
                      />
                      {/* Efecto de brillo dorado más intenso */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-gold-500/20 rounded-3xl pointer-events-none"></div>
                      {/* Sombra dorada más dramática */}
                      <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-gold-500/30"></div>
                      {/* Efecto de resplandor exterior */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 rounded-3xl blur-xl"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Línea divisoria elegante */}
            <div className="relative w-full h-16 bg-gradient-to-b from-black-600 via-black-550 to-black-925 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gold-500/20 rounded-full"></div>
            </div>

      {/* Gallery Section */}
      <Gallery />

            {/* Línea divisoria elegante */}
            <div className="relative w-full h-16 bg-gradient-to-b from-black-925 via-black-900 to-black-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/8 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-gold-500/15 rounded-full"></div>
            </div>

            {/* Contact Section */}
            <section id="contacto" className="py-16 bg-black-500 text-white relative overflow-hidden">
              {/* Efectos de fondo únicos */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-500 via-black-450 to-black-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
              
              {/* Líneas decorativas laterales */}
              <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-gold-500/50 via-gold-500/70 to-gold-500/50 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-gold-500/50 via-gold-500/70 to-gold-500/50 transform -translate-y-1/2"></div>
        
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="text-center mb-12"
                >
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gold-400">
                    ¿Listo para capturar tus momentos especiales?
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
                    Contacta conmigo para discutir tu proyecto y crear imágenes increíbles juntos
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Formulario de Contacto */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-black-600/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30 h-full flex flex-col"
                  >
                    <h3 className="text-2xl font-bold font-serif text-gold-400 mb-6">Envíame un mensaje</h3>
                    <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-black-700 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-black-700 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black-700 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                            placeholder="+507 1234-5678"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                            Servicio de interés *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-black-700 border border-gold-500/30 rounded-lg text-white focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 appearance-none"
                            style={{ colorScheme: 'dark' }}
                          >
                            <option value="">Selecciona un servicio</option>
                            <option value="Fotos de Modelos">Fotos de Modelos - $50</option>
                            <option value="Fotos Grupales">Fotos Grupales - $70</option>
                            <option value="Fotos Personales">Fotos Personales - $25</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-black-700 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                          placeholder="Cuéntame sobre tu proyecto, fecha preferida, ubicación, etc."
                        />
                      </div>
                      
                      <div className="mt-auto pt-4">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Enviar Mensaje
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </form>
                  </motion.div>

                  {/* Información de Contacto y Redes Sociales */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    {/* Información de Contacto */}
                    <div className="bg-black-600/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30">
                      <h3 className="text-2xl font-bold font-serif text-gold-400 mb-6">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Mail className="h-6 w-6 text-gold-400 mr-4" />
                          <div>
                            <p className="text-white font-medium">Email</p>
                            <a href="mailto:infojillstudio@gmail.com" className="text-gold-200 hover:text-gold-400 transition-colors">
                              infojillstudio@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-6 w-6 text-gold-400 mr-4" />
                          <div>
                            <p className="text-white font-medium">WhatsApp</p>
                            <a href="https://wa.me/50768252312" className="text-gold-200 hover:text-gold-400 transition-colors">
                              +507 6825-2312
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="bg-black-600/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30">
                      <h3 className="text-2xl font-bold font-serif text-gold-400 mb-6">Sígueme en Redes Sociales</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <a
                          href="https://instagram.com/jillstudio.pa"
            target="_blank"
            rel="noopener noreferrer"
                          className="flex items-center p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 group"
                        >
                          <Instagram className="h-8 w-8 text-white mr-4 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-white font-bold">Instagram</p>
                            <p className="text-white/80 text-sm">@jillstudio.pa</p>
                          </div>
                        </a>
                        
                        <a
                          href="https://facebook.com/jillstudio.pa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 group"
                        >
                          <Facebook className="h-8 w-8 text-white mr-4 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-white font-bold">Facebook</p>
                            <p className="text-white/80 text-sm">@jillstudio.pa</p>
        </div>
                        </a>
                        
        <a
                          href="https://tiktok.com/@jillstudio.pa"
          target="_blank"
          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-gradient-to-r from-black to-gray-800 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 group"
                        >
                          <div className="h-8 w-8 text-white mr-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-bold">TikTok</p>
                            <p className="text-white/80 text-sm">@jillstudio.pa</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

      {/* Modal de Servicio */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-2xl w-full bg-black-800 rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen del modal */}
            <div className="relative h-80 overflow-hidden">
          <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors duration-200 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedService.title}
                </h2>
                <p className="text-gold-200">
                  {selectedService.price} • {selectedService.duration}
                </p>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-8">
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gold-400 mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones de contacto */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/50768252312"
          target="_blank"
          rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp
        </a>
        <a
                  href="mailto:infojillstudio@gmail.com"
                  className="flex-1 bg-gold-600 hover:bg-gold-700 text-black px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}