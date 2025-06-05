// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navigationButtons = [
    { label: 'ABOUT', id: 'about' },
    { label: 'LOGOFOLIO', id: 'logofolio' },
    { label: 'GRAPHICS', id: 'graphics' },
    { label: 'ILLUSTRATIONS', id: 'illustrations' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/main-bg.jpeg" // Your artistic background image
          alt="Creative portfolio background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">

        {/* Main Portfolio Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white font-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 
                     leading-none tracking-tight"
          style={{
            fontFamily: 'var(--font-nagasaki, system-ui)',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            fontWeight: '100',
            letterSpacing: '0em',
            fontSize: '25rem',
            textAlign: 'right'
          }}
        >
          PORTFOLIO
        </motion.h1>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 
                     font-light tracking-[0.3em] mb-8 -mt-8"
          style={{
            fontFamily: 'var(--font-dune-rise, system-ui)',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            fontWeight: '100',
            letterSpacing: '0em',
            fontSize: '1rem',
            textAlign: 'right'
          }}
        >
          KR_SCRIBBLES
        </motion.h2>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {navigationButtons.map((button, index) => (
            <motion.button
              key={button.id}
              onClick={() => scrollToSection(button.id)}
              whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
              duration: 0.6, 
              delay: 0.9 + (index * 0.1),
              hover: { duration: 0.2 }
              }}
              className="px-3 py-1 sm:px-5 sm:py-2 md:px-5 md:py-2 
                   bg-transparent border border-white/30 
                   text-white text-sm sm:text-base md:text-lg 
                   font-medium tracking-wider
                   backdrop-blur-sm
                   hover:border-white/60 hover:shadow-lg
                   transition-all duration-300 ease-out
                   rounded-full"
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-white/60"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-1 h-1 bg-white rounded-full mt-2 mx-auto"
        />
      </motion.div>
    </section>
  )
}

export default Hero