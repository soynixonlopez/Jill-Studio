'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes de ejemplo - reemplaza con tus fotos reales
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907360/20250831_174651_1_1_ddanis.jpg",
      alt: "Retrato profesional",
      category: "Retratos"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907344/Generated_Image_September_14_2025_-_9_34PM_1_i6flot.png",
      alt: "Sesión de modelo",
      category: "Modelos"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757910254/20250614_193621_nffuk4.jpg",
      alt: "Fotografía de evento",
      category: "Eventos"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911246/20250726_154313_bt9tjj.jpg",
      alt: "Fotografía grupal",
      category: "Grupales"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911281/20250614_193957_oavzj9.jpg",
      alt: "Retrato masculino",
      category: "Retratos"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911226/Ins_-1066884591_vfwvfq.jpg",
      alt: "Sesión de estudio",
      category: "Modelos"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907187/Model1_gm1lta.png",
      alt: "Fotografía de boda",
      category: "Eventos"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757907227/model2_sorsds.png",
      alt: "Fotografía familiar",
      category: "Grupales"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dewe5s4xv/image/upload/v1757911546/20250621_102027_kskkcz.jpg",
      alt: "Retrato corporativo",
      category: "Retratos"
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

         return (
           <section id="galeria" className="py-8 bg-gradient-to-br from-black-925 via-black-900 to-black-950 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-6">
            Mi Trabajo
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gold-200 max-w-3xl mx-auto leading-relaxed">
            Una selección de mis mejores trabajos fotográficos
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-electric-500/20 hover:border-electric-400/40 transition-all duration-300 cursor-pointer bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-electric-100 font-semibold text-lg mb-1">
                    {image.alt}
                  </h3>
                  <p className="text-electric-400 text-sm">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal para vista ampliada */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-electric-400 transition-colors duration-200 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-400 transition-colors duration-200 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-400 transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white font-semibold text-xl mb-1">
                  {selectedImage.alt}
                </h3>
                <p className="text-electric-300">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
