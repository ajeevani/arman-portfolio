
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SplashScreen from '@/components/splash-screen'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ResumeSection from '@/components/resume-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Handle scroll-based active section detection
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    if (!showSplash) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSplash])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white"
    >
      {/* Header */}
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main content */}
      <main className="relative">
        {/* Background elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Animated background particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-cyber-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: activeSection !== 'home' ? 1 : 0,
          scale: activeSection !== 'home' ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setActiveSection('home')
        }}
        className="fixed bottom-8 right-8 z-30 p-3 bg-cyber-blue text-black rounded-full cyber-glow hover:bg-cyber-cyan transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </motion.div>
  )
}
