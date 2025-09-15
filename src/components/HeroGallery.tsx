'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      alt: "Retrato profesional",
      className: "col-span-1 row-span-2"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
      alt: "Sesión de modelo",
      className: "col-span-1 row-span-1"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
      alt: "Fotografía de evento",
      className: "col-span-1 row-span-1"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      alt: "Fotografía grupal",
      className: "col-span-2 row-span-1"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
      alt: "Retrato masculino",
      className: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&h=400&fit=crop",
      alt: "Retrato femenino",
      className: "col-span-1 row-span-1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 grid-rows-4 gap-4 h-full max-h-[600px]"
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
          className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.className}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroGallery;
