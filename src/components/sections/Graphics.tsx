'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface GraphicsProps {
  backgroundImages?: string[];
  animationDuration?: number;
}

const Graphics: React.FC<GraphicsProps> = ({ 
  backgroundImages = [    
    '/images/hero/Backgrounds/GRAPHICSbg/Frame2.png',
    '/images/hero/Backgrounds/GRAPHICSbg/Frame3.png',
    '/images/hero/Backgrounds/GRAPHICSbg/Frame4.png',
    '/images/hero/Backgrounds/GRAPHICSbg/Frame5.png'
  ],
  animationDuration = 10
}) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    margin: "-20% 0px -20% 0px" 
  });

  // Background cycling animation
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, (animationDuration * 500) / backgroundImages.length);

    return () => clearInterval(interval);
  }, [isInView, backgroundImages.length, animationDuration]);

  // White fade-in variants
  const fadeInVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 0,
      transition: { 
        duration: 1.5, 
        ease: "easeOut" 
      }
    }
  };

  // Text animation variants
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        delay: 1.5,
        ease: "easeOut" 
      }
    }
  };

  const folioVariants = {
    hidden: { 
      opacity: 0, 
      x: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 2.2,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex justify-center items-center"
    >
      {/* Animated Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((bgImage, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgImage})`,
              willChange: 'opacity'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentBgIndex === index ? 1 : 0 
            }}
            transition={{ 
              duration: 1,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* White Fade Overlay */}
      <motion.div
        className="absolute inset-0 bg-white z-10"
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center">
        {/* LOGO Text */}
        <motion.div
          className="text-white font-black text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tighter"
          style={{
            fontFamily: 'var(--font-nagasaki, system-ui)',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            fontWeight: '100',
            letterSpacing: '0em'
          }}
          variants={logoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          GRAPHICS
        </motion.div>

      </div>
    </section>
  );
};

export default Graphics;