'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// You'll need to place these images in your public folder or import them properly
const tshirtImages = [
  '/images/hero/Tee/tee1.png',
  '/images/hero/Tee/tee2.png', 
  '/images/hero/Tee/tee3.png',
  '/images/hero/Tee/tee4.png',
  '/images/hero/Tee/tee5.png',
  '/images/hero/Tee/tee6.png',
  '/images/hero/Tee/tee7.png',
  '/images/hero/Tee/tee8.png',
];

const Kriptees: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Skate Girl - Bottom Left */}
      <motion.div 
        className="absolute -bottom-10 left-0 z-30"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/Tee/skatefirl.svg"
          alt="Skate Girl"
          width={200}
          height={200}
          className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
        />
      </motion.div>

      {/* KT Logo - Bottom Right */}
      <motion.div 
        className="absolute bottom-0 right-4 z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/images/gallery/logos/logo2.png"
          alt="KT Logo"
          width={80}
          height={80}
          className="w-12 h-auto sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32"
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] h-[90vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-[90vw] mx-auto relative">
        
        {/* Left Section - Content (70% width with overflow) */}
        <motion.div 
          className="flex flex-col justify-start z-20 text-center lg:text-left mb-8 lg:mb-0 lg:mt-0 
                     w-full lg:w-[70%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-minecraft text-white  mt-0 mb-6 tracking-[0.5rem] sm:tracking-[0.8rem] md:tracking-[1rem] lg:tracking-[1.5rem] xl:tracking-[2rem] 2xl:tracking-[2.5rem]"
            style={{ fontFamily: 'minecraftReg, sans-serif' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6rem] 2xl:text-[7rem] font-bold">
              KRIPTEES
            </span>
          </motion.h1>
          
          <motion.div 
            className="max-w-full lg:max-w-[85%] leading-relaxed bg-black/80 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 200 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-4xl text-white">
              Kriptees is all about celebrating your love for anime with stylish, high-quality t-shirts. 
              Our passion for anime shines through in every design, making each piece a perfect blend of 
              fandom and fashion. Whether you're into classic series or new hits, Kriptees offers unique, 
              comfy shirts that let you wear your favorite characters and moments with pride. Join us in 
              sharing the joy of anime, one awesome t-shirt at a time.
            </span>
          </motion.div>
        </motion.div>

        {/* Right Section - T-shirt Marquee (30% width) */}
        <motion.div 
          className="mt-23 flex justify-centre items-centre relative w-full lg:w-[50%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 h-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-20 xl:w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-20 xl:w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            
            {/* Infinite scrolling marquee */}
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8"
              animate={{
            x: [0, -2000]
              }}
              transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
              }}
            >
              {/* First set of images */}
              {tshirtImages.map((src, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`T-Shirt ${index + 1}`}
                width={400}
                height={500}
                className="rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[2.5rem] xl:rounded-[3rem] border-2 border-gray-800 object-cover
                  w-[400px] h-[500px]
                  hover:shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
              />
            </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {tshirtImages.map((src, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`T-Shirt ${index + 1} Duplicate`}
                width={450}
                height={500}
                className="rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[2.5rem] xl:rounded-[3rem] border-2 border-gray-800 object-cover
                  w-[400px] h-[500px]
                  hover:shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
              />
            </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Kriptees;