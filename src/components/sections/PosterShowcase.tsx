'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Poster {
  image: string;
  title: string;
  description: string;
}

const posters: Poster[] = [
  { 
    image: '/images/gallery/Posters/poster1/poster1.png', 
    title: 'Boundless Reach', 
    description: `This poster features the iconic hands from Michelangelo's "The Creation of Adam," symbolizing the divine spark and human potential. The phrase "the world at the tip of my fingers" underscores the immense power and possibilities within our reach. This visual metaphor serves to inspire viewers to recognize and harness their own potential to shape and influence the world around them. The motivation behind this creation is to remind individuals of their inherent ability to create, innovate, and impact their surroundings profoundly.` 
  },
  { 
    image: '/images/gallery/Posters/poster2/poster2.png', 
    title: 'Dream', 
    description: `This poster, adorned with yin-yang inspired graphics, encapsulates the balance and harmony inherent in the concept of dreams. The design symbolizes the interplay between opposites and the unity they create, reflecting how dreams blend aspirations with reality. The motivation behind this artwork is to inspire viewers to find equilibrium in their dreams, encouraging a pursuit of balance in their personal and professional lives.` 
  },
  { 
    image: '/images/gallery/Posters/poster3/poster3.png', 
    title: 'Awwwgust', 
    description: `The poster, created by AWWGUST GRAPHICS, symbolizes the vibrancy and dynamism of August. It aims to capture the essence of summer's peak, a time of growth, celebration, and creativity. The motivation behind this poster is to evoke a sense of joy and to inspire viewers to embrace the energetic spirit of August in their endeavors.` 
  },
  { 
    image: '/images/gallery/Posters/poster4/poster4.png', 
    title: 'Gojo', 
    description: `This striking poster features Gojo Satoru, prominently labeled as the "Most Wanted" sorcerer. The design highlights his formidable reputation and unparalleled power within the jujutsu world. The poster aims to emphasize Gojo's unmatched abilities, the fear he instills in curses and enemies alike, and the high stakes of being such a powerful figure in a perilous world. It serves to motivate fans by showcasing the intense and thrilling nature of his character and the series.` 
  },
  { 
    image: '/images/gallery/Posters/poster5/poster5.png', 
    title: 'Serendipity', 
    description: `This poster, titled "Serendipity Unveiled," embodies the concept of unexpected and fortunate discoveries. Through vibrant and interconnected graphics, it illustrates the beauty of chance encounters and the magic of finding joy in the unplanned. The motivation behind creating this poster is to remind viewers to embrace the unexpected moments in life, as they often lead to the most delightful and meaningful experiences.` 
  },
  { 
    image: '/images/gallery/Posters/poster6/poster6.png', 
    title: 'Elixier', 
    description: `This poster, adorned with vibrant elixir graphics, symbolizes the magical blend of inspiration and innovation. It represents the boundless potential of creative thinking and the transformative power of imagination. The motivation behind creating this poster is to inspire individuals to tap into their creative essence and unlock new possibilities in their personal and professional lives.` 
  },
];

const PosterShowcase: React.FC = () => {
  const [currentPoster, setCurrentPoster] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 5000);
  };

  const handleMouseEnter = (): void => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleNext = (): void => {
    setDirection(1);
    setCurrentPoster((currentPoster + 1) % posters.length);
  };

  const handlePrevious = (): void => {
    setDirection(-1);
    setCurrentPoster((currentPoster - 1 + posters.length) % posters.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const thumbnailVariants = {
    enter: {
      opacity: 0,
      scale: 0.9
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.9
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPoster}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${posters[currentPoster].image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>

      {/* Base Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
      
      {/* Hover Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/80 z-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        /* onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} */
      />

      {/* Poster Details */}
      <motion.div 
        className="absolute bottom-20 left-8 w-3/5 text-white z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentPoster}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`font-black uppercase m-0 mb-4 ${
              posters[currentPoster].title === 'Boundless Reach' 
                ? 'text-5xl' 
                : 'text-7xl'
            }`}
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            {posters[currentPoster].title}
          </motion.h1>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={`${currentPoster}-desc`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-light text-base p-0 m-0 font-montserrat leading-relaxed"
          >
            {posters[currentPoster].description}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Single Thumbnail in Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPoster}
            variants={thumbnailVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              src={posters[currentPoster].image}
              alt={posters[currentPoster].title}
              className="w-[300px] h-[300px] object-cover rounded-xl ring-4 ring-white/20"
              draggable={false}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            {/* Optional: Add a subtle overlay or frame effect */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white border border-white/20 text-base cursor-pointer z-50 w-12 h-12 rounded-full flex justify-center items-center hover:bg-white/20 transition-all duration-200"
        onClick={handlePrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={20} />
      </motion.button>
      
      <motion.button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white border border-white/20 text-base cursor-pointer z-50 w-12 h-12 rounded-full flex justify-center items-center hover:bg-white/20 transition-all duration-200"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default PosterShowcase;