'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  likes: number;
  views: number;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes de ejemplo - reemplaza con tus fotos reales
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907360/20250831_174651_1_1_ddanis.jpg",
      alt: "Retrato profesional de modelo con iluminación natural",
      category: "Retratos",
      shortDescription: "La fotografía es arte",
      fullDescription: "Una sesión de retrato profesional capturando la esencia natural y elegante del modelo con iluminación suave y composición perfecta.",
      likes: 124,
      views: 892
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907344/Generated_Image_September_14_2025_-_9_34PM_1_i6flot.png",
      alt: "Sesión de modelo profesional en estudio",
      category: "Modelos",
      shortDescription: "Capturando emociones",
      fullDescription: "Sesión profesional en estudio con iluminación controlada, capturando la personalidad y estilo único del modelo.",
      likes: 98,
      views: 756
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757910254/20250614_193621_nffuk4.jpg",
      alt: "Fotografía de evento corporativo",
      category: "Eventos",
      shortDescription: "Momentos únicos",
      fullDescription: "Documentación profesional de evento corporativo, capturando momentos importantes y la atmósfera del evento.",
      likes: 156,
      views: 1203
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911246/20250726_154313_bt9tjj.jpg",
      alt: "Fotografía grupal familiar",
      category: "Grupales",
      shortDescription: "Memorias para siempre",
      fullDescription: "Sesión familiar en exteriores, capturando la conexión y amor entre los miembros de la familia en un ambiente natural.",
      likes: 203,
      views: 1456
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911281/20250614_193957_oavzj9.jpg",
      alt: "Retrato masculino profesional",
      category: "Retratos",
      shortDescription: "Luz y sombra",
      fullDescription: "Retrato masculino profesional que destaca la personalidad y confianza del sujeto con una composición impactante.",
      likes: 87,
      views: 634
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911226/Ins_-1066884591_vfwvfq.jpg",
      alt: "Sesión de estudio con iluminación profesional",
      category: "Modelos",
      shortDescription: "Belleza natural",
      fullDescription: "Sesión de estudio con iluminación profesional, creando un ambiente dramático y elegante para el modelo.",
      likes: 142,
      views: 987
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907187/Model1_gm1lta.png",
      alt: "Fotografía de evento especial",
      category: "Eventos",
      shortDescription: "Celebrando la vida",
      fullDescription: "Documentación de evento especial, capturando momentos únicos y la emoción del momento con técnica profesional.",
      likes: 178,
      views: 1123
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907227/model2_sorsds.png",
      alt: "Fotografía familiar en exteriores",
      category: "Grupales",
      shortDescription: "Conexiones auténticas",
      fullDescription: "Fotografía grupal en exteriores, aprovechando la luz natural para crear una imagen cálida y memorable.",
      likes: 165,
      views: 1089
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911546/20250621_102027_kskkcz.jpg",
      alt: "Retrato corporativo profesional",
      category: "Retratos",
      shortDescription: "Profesionalismo puro",
      fullDescription: "Retrato corporativo profesional que transmite profesionalismo y confianza, ideal para perfiles empresariales.",
      likes: 134,
      views: 856
    }
  ];

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02 }
  };

  const expandedVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section id="galeria" className="py-16 bg-gradient-to-br from-black-925 via-black-900 to-black-950 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mejorado */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-6">
            Mi Portafolio
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gold-200 max-w-3xl mx-auto leading-relaxed">
            Una colección cuidadosamente seleccionada de mis mejores trabajos fotográficos
          </motion.p>
        </motion.div>

        {/* Grid de galería mejorado */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-gold-500/20 hover:border-gold-400/50 transition-all duration-700 cursor-pointer bg-gradient-to-br from-black-800/60 to-black-700/60 backdrop-blur-sm shadow-2xl hover:shadow-gold-500/20"
              onClick={() => openModal(image, index)}
            >
              {/* Imagen principal */}
              <motion.div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  Retrato {image.id}
                </h3>
                
                <p className="text-gold-300 text-sm leading-relaxed">
                  {image.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal para vista ampliada con navegación */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-[90vw] h-[90vh] max-w-6xl max-h-[800px] bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón cerrar */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors duration-200 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
                
                {/* Botón anterior */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 cursor-pointer"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                {/* Botón siguiente */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 cursor-pointer"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Contenedor de imagen con dimensiones fijas */}
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                      onClick={(e) => e.stopPropagation()}
                      sizes="90vw"
                    />
                  </div>
                </div>
                
                {/* Información de la imagen - Fija en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {selectedImage.shortDescription}
                    </h3>
                    <div className="flex items-center justify-center space-x-6">
                      <div className="inline-flex items-center px-4 py-2 bg-gold-500/20 rounded-full">
                        <span className="text-gold-400 text-sm font-medium">
                          {selectedImage.category}
                        </span>
                      </div>
                      <div className="text-gold-300 text-sm">
                        {currentIndex + 1} de {images.length}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
