'use client'

import { motion, useInView } from 'framer-motion'
import { ChevronDown, Code, AppWindow, Brain, Download } from 'lucide-react'
import { useRef } from 'react'

export default function HeroSection() {
  const skills = [
    { icon: Code, label: 'Web Development', delay: 0.2 },
    { icon: AppWindow, label: 'Software Development', delay: 0.4 },
    { icon: Brain, label: 'AI/ML Integration', delay: 0.6 },
  ]
  const skillsRef = useRef(null)
  const inView = useInView(skillsRef, { once: true })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-28" aria-labelledby="hero-heading">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 cyber-grid-dense opacity-5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-cyber-cyan text-base sm:text-lg mb-4"
          >
            <span className="text-cyber-blue">user@portfolio:~$</span> whoami
          </motion.div>

          {/* Name and title */}
          <div className="space-y-4">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white"
            >
              <span className="cyber-text-glow">ARMAN</span>{' '}
              <span className="text-cyber-blue">JEEVANI</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg font-mono text-cyber-cyan"
            >
              <span className="terminal-cursor">Software & Web Developer</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting innovative digital solutions with modern technologies. 
            Specializing in full-stack development, API architecture, and AI-powered applications.
          </motion.p>

          {/* Skills showcase */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 + skill.delay }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg cyber-border bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300"
                  role="listitem"
                  aria-label={skill.label}
                >
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-cyber-blue" />
                  <span className="font-mono text-xs sm:text-sm text-zinc-300">{skill.label}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 bg-cyber-blue text-black font-mono font-semibold rounded-lg hover:bg-cyber-cyan transition-all duration-300 cyber-glow"
              aria-label="View my projects"
            >
              VIEW PROJECTS
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 border border-cyber-blue text-cyber-blue font-mono font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
              aria-label="Contact me"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="flex flex-col items-center space-y-2 text-cyber-cyan mt-12"
          aria-hidden="true"
        >
          <span className="font-mono text-xs">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  )
}