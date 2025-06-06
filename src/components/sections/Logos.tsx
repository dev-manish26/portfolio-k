'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
  id: string;
  name: string;
  image: string;
  alt: string;
}

interface LogoFolioProps {
  logos?: Logo[];
}

const logos: React.FC<LogoFolioProps> = ({ 
  logos = [
    { id: '1', name: 'TAPAS MEDIA', image: '/images/gallery/logos/logo1.png', alt: 'Tapas Media Logo' },
    { id: '2', name: 'KST', image: '/images/gallery/logos/logo2.png', alt: 'KST Logo' },
    { id: '3', name: 'BUSINESS CLUB', image: '/images/gallery/logos/logo3.png', alt: 'Business Club Nilagarhia Logo' },
    { id: '4', name: 'LOGO', image: '/images/gallery/logos/logo4.jpg', alt: 'Logo 4' },
    { id: '5', name: 'TASTES LIKE SEOUL', image: '/images/gallery/logos/logo5.png', alt: 'Tastes Like Seoul Logo' },
    /* { id: '6', name: 'KRATUU', image: '/images/gallery/logos/logo6.png', alt: 'Kratuu Logo' } */
  ]
}) => {

  // Marquee text - repeated for seamless loop
  const marqueeText = "LOGOFOLIO  .".repeat(1000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
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
    <section className="relative 100vh max-h-screen bg-gray-50 overflow-hidden">
      {/* White Fade In Overlay */}
      <motion.div
        className="absolute inset-0 bg-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Marquee Header */}
      <div className="relative overflow-hidden bg-black text-white py-3">
        <motion.div
          className="flex whitespace-nowrap text-lg font-bold tracking-wider"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ letterSpacing: '0.5rem'}} // Optimize for performance
        >
          <span className="inline-block">{marqueeText}</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto  py-10 ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className="group relative"
              variants={logoVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="">
                {/* Using Flexbox for image alignment */}
                <div className="aspect-square relative flex items-center justify-center">
                  <Image
                    src={logo.image} // PUT YOUR IMAGE PATH HERE - example: '/images/gallery/logos/logo1.png'
                    alt={logo.alt}
                    fill
                    className="object-contain" // Maintains aspect ratio and fits within container
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default logos;