
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState('INITIALIZING SYSTEM...')
  const [showCursor, setShowCursor] = useState(true)

  const messages = [
    'INITIALIZING SYSTEM...',
    'LOADING NEURAL NETWORKS...',
    'ESTABLISHING CONNECTIONS...',
    'COMPILING PORTFOLIO DATA...',
    'SYSTEM READY'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 1000)
          return 100
        }
        
        // Update message based on progress
        const messageIndex = Math.floor((newProgress / 100) * (messages.length - 1))
        setCurrentMessage(messages[messageIndex])
        
        return newProgress
      })
    }, 200)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-black to-slate-800"
      >
        {/* Glitch overlay */}
        <div className="glitch-overlay" />
        
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid h-full w-full animate-boot-grid-pulse" />
        </div>

        {/* Additional grid layer */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid-dense h-full w-full" />
        </div>

        {/* Main content */}
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="max-w-2xl w-full p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-8"
            >
              {/* System header */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-mono text-cyber-blue cyber-text-glow">
                  ARMAN JEEVANI SYSTEM
                </h1>
                <div className="text-sm text-zinc-400 font-mono">
                  SOFTWARE & WEB DEVELOPER INTERFACE v2.0
                </div>
              </div>

              {/* Boot message */}
              <div className="space-y-4">
                <div className="text-lg sm:text-xl font-mono text-white break-words max-w-[90vw] mx-auto">
                  <span className="text-cyber-cyan">AJ_●&gt;</span> SYSTEM BOOTING...
                  {showCursor && <span className="text-cyber-blue">█</span>}
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-zinc-800 rounded-full h-2 cyber-border">
                  <motion.div
                    className="bg-gradient-to-r from-cyber-blue to-cyber-cyan h-2 rounded-full cyber-glow"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Progress text */}
                <div className="text-sm font-mono text-zinc-400">
                  LOADING SYSTEM {Math.floor(progress)}% COMPLETE
                </div>
              </div>

              {/* Status message */}
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-mono text-cyber-cyan"
              >
                {currentMessage}
              </motion.div>

              {/* System info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-500">
                <div>CORE: REACT.JS v18</div>
                <div>FRAMEWORK: NEXT.JS v14</div>
                <div>STYLING: TAILWIND CSS</div>
                <div>ANIMATIONS: FRAMER MOTION</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-30"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
