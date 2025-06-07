'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Terminal, User, Briefcase, FileText, Mail } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu first
    setIsMenuOpen(false)
    
    // Update active section
    onSectionChange(sectionId)
    
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate header height to offset scroll position
        const headerHeight = 80 // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100) // Small delay to allow menu animation to start
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md cyber-border border-b' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <Terminal className="w-6 h-6 text-cyber-blue" />
            <span className="font-mono text-lg font-bold text-white cyber-text-glow">
              AJ_SYSTEM
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cyber-blue/20 text-cyber-blue cyber-border'
                      : 'text-zinc-400 hover:text-cyber-cyan hover:bg-cyber-blue/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-cyber-blue hover:text-cyber-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 cyber-border"
        >
          <div className="py-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 font-mono text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cyber-blue/20 text-cyber-blue'
                      : 'text-zinc-400 hover:text-cyber-cyan hover:bg-cyber-blue/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}