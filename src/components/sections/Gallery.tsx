'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// You'll need to place these images in your public folder or import them properly
const galleryImages = {
  col1: [
    '/images/gallery/il-gallery/Chhitij.png',
    '/images/gallery/il-gallery/guitar.png',
    '/images/gallery/il-gallery/hug.jpg',
  ],
  col2: [
    '/images/gallery/il-gallery/20230712143927693.png',
    '/images/gallery/il-gallery/Untitled.jpg',
  ],
};

const Gallery: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-screen min-h-screen bg-black m-0 p-0">
      <motion.div 
        className="flex flex-wrap w-full max-w-none mx-auto overflow-hidden -mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Column 1 */}
        <motion.div className="flex-1 flex flex-col mb-0">
          {galleryImages.col1.map((src, index) => (
            <motion.div
              key={`col1-${index}`}
              variants={imageVariants}
              className="w-full"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div className="flex-1 flex flex-col mb-0">
          {galleryImages.col2.map((src, index) => (
            <motion.div
              key={`col2-${index}`}
              variants={imageVariants}
              className="w-full"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 4}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;