
'use client'

import { motion } from 'framer-motion'
import { Terminal, Heart, Code, Coffee } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-cyber-blue/20 bg-black/50 backdrop-blur-sm">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <Terminal className="w-6 h-6 text-cyber-blue" />
              <span className="font-mono text-lg font-bold text-white cyber-text-glow">
                AJ_SYSTEM
              </span>
            </div>
            <p className="text-zinc-400 text-sm font-mono">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-zinc-400 text-sm">
              <span>Made with</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>by Arman</span>
            </div>
          </motion.div>

          {/* Right - Copyright and tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <div className="text-zinc-400 text-sm font-mono mb-2">
              © {currentYear} Arman Jeevani
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-xs text-zinc-500">
              <Code className="w-3 h-3" />
              <span>Next.js • React • TypeScript</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-cyber-blue/10"
        >
          <div className="text-center">
            {/* Terminal-style footer message */}
            <div className="bg-black/70 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="font-mono text-sm">
                <div className="text-cyber-cyan mb-2">
                  <span className="text-cyber-blue">user@portfolio:~$</span> echo "Thanks for visiting!"
                </div>
                <div className="text-zinc-400">
                  Thanks for visiting! Feel free to explore the code, reach out for collaborations, 
                  or just say hi. My terminal is always open for new connections.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
