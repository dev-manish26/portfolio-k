'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const About = () => {
  const [currentView, setCurrentView] = useState(0)

  const softwareIcons = [
    { name: 'Photoshop', alt: 'Ps' },
    { name: 'Illustrator', alt: 'Ai' },
    { name: 'Figma', alt: 'Fg' },
    { name: 'Lightroom', alt: 'Lr' },
    { name: 'Canva', alt: 'Canva' },
  ]

  const personalSkills = [
    'STORY TELLING',
    'VISUALISATION', 
    'ACTIVE LISTENER',
    'LEADERSHIP',
    'COLLABORATIONS'
  ]

  return (
    <section className="relative">
      {/* First View - Introduction */}
      <div className="min-h-screen bg-gradient-to-br from-teal-800 via-slate-700 to-teal-900 flex items-center">
        <div className="container mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-480 h-170 relative">
              <Image
                src="/images/hero/hero.jpg"
                alt="Chhitij Ranpal Damai"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-6xl lg:text-8xl font-black text-white mb-4">
                HI!
              </h2>
              <h3 className="text-xl lg:text-2xl font-medium text-white/90 mb-8">
                THIS IS CHHITIJ RANPAL DAMAI
              </h3>
            </div>

            <div className="text-white/90 text-base lg:text-lg leading-relaxed space-y-4">
              <p>
                Currently pursuing Civil Engineering from National Institute of 
                Technology, Agartala.
              </p>
              <p>
                With a keen eye for detail and a knack for storytelling, I bring 
                images to life through my photography, graphic design, and 
                illustration skills.
              </p>
              <p>
                My portfolio showcases a diverse range of projects, from logos to 
                stunning graphics to illustrations. Through my artistry, I aim to 
                evoke emotions, spark curiosity, and inspire others. Let's 
                collaborate and bring your vision to life together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second View - Details */}
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-200 to-cyan-200 flex items-center">
        <div className="container mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Contacts Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6">
                CONTACTS
              </h3>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-sm">@</span>
                  </div>
                  <span className="text-sm lg:text-base">kshitijranpal123@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Be</span>
                  </div>
                  <span className="text-sm lg:text-base">https://www.behance.net/kshitijranpal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Ig</span>
                  </div>
                  <span className="text-sm lg:text-base">https://www.instagram.com/kr_scribbles03/</span>
                </div>
              </div>
            </motion.div>

            {/* Software Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6">
                SOFTWARES
              </h3>
              <div className="flex gap-4">
                {softwareIcons.map((software, index) => (
                  <motion.div
                    key={software.name}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-700 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white text-sm lg:text-base font-bold">
                      {software.alt}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6">
                EXPERIENCE
              </h3>
              <div className="space-y-3 text-slate-700 text-base lg:text-lg">
                <p>-Freelance Graphic Designer</p>
                <p>-Design lead at Board of technical Communication NIT Agartala</p>
                <p>-Design Lead at Kriptees</p>
              </div>
            </motion.div>

            {/* Personal Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6">
                PERSONAL SKILLS
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-slate-600 text-white text-sm lg:text-base rounded-full font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About