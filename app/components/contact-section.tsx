'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Instagram, MapPin, Phone, Send, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import EmailDialog from './email-dialog'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/armanjeevani',
      color: 'hover:text-white',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/arman-jeevani-673315226/',
      color: 'hover:text-blue-400',
      description: 'Professional network'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/armanj718/',
      color: 'hover:text-pink-400',
      description: 'Behind the scenes'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arman.jeevani@email.com',
      action: () => setIsEmailDialogOpen(true)
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for Remote Work',
      action: null
    },
    {
      icon: Phone,
      label: 'Status',
      value: 'Open to Opportunities',
      action: null
    }
  ]

  const handleViewResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

  return (
    <>
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 cyber-grid opacity-5" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-cyber-cyan mb-4">
              <span className="text-cyber-blue">user@portfolio:~$</span> ./contact.sh
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="cyber-text-glow">GET IN</span>{' '}
              <span className="text-cyber-blue">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-mono text-cyber-blue mb-6">Let's Connect</h3>
                <p className="text-zinc-300 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you have a question, want to work together, or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300 ${
                        info.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-cyber-blue/20">
                          <Icon className="w-6 h-6 text-cyber-blue" />
                        </div>
                        <div>
                          <div className="text-sm font-mono text-cyber-cyan">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                        {info.action && (
                          <Send className="w-4 h-4 text-cyber-cyan ml-auto" />
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h4 className="text-lg font-mono text-cyber-blue">Follow Me</h4>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-cyber-blue/20 group-hover:bg-cyber-blue/30 transition-colors">
                            <Icon className={`w-6 h-6 text-cyber-cyan transition-colors ${social.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyber-blue transition-colors">
                              {social.name}
                            </div>
                            <div className="text-sm text-zinc-400">{social.description}</div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right side - Quick contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="cyber-border rounded-lg p-8 bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-mono text-cyber-blue mb-6">Quick Message</h3>
              
              <div className="space-y-6">
                <p className="text-zinc-300">
                  Ready to start a conversation? Click the button below to open the contact form 
                  and send me a message directly.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEmailDialogOpen(true)}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-cyber-blue text-black font-mono font-semibold rounded-lg hover:bg-cyber-cyan transition-all duration-300 cyber-glow"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>

                {/* Terminal-style output */}
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-cyber-cyan mb-2">
                    <span className="text-cyber-blue">user@contact:~$</span> status
                  </div>
                  <div className="space-y-1 text-zinc-400">
                    <div>● Status: <span className="text-green-400">Available</span></div>
                    <div>● Response Time: <span className="text-cyber-cyan">&lt; 24 hours</span></div>
                    <div>● Preferred Contact: <span className="text-cyber-cyan">Email</span></div>
                  </div>
                </div>

                {/* Fun fact */}
                <div className="cyber-border rounded-lg p-4 bg-cyber-blue/5">
                  <div className="text-cyber-blue font-mono text-sm mb-2">💡 Fun Fact</div>
                  <div className="text-zinc-300 text-sm">
                    I respond to messages faster than my code compiles! Usually within a few hours 
                    during business days.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="cyber-border rounded-lg p-8 bg-black/30 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-mono text-cyber-blue mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-zinc-300 mb-6">
                Let's discuss your next project and bring your ideas to life with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEmailDialogOpen(true)}
                  className="px-8 py-3 bg-cyber-blue text-black font-mono font-semibold rounded-lg hover:bg-cyber-cyan transition-all duration-300 cyber-glow"
                >
                  Start a Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewResume}
                  className="px-8 py-3 border border-cyber-blue text-cyber-blue font-mono font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
                >
                  View Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Dialog */}
      <EmailDialog 
        isOpen={isEmailDialogOpen} 
        onClose={() => setIsEmailDialogOpen(false)} 
      />
    </>
  )
}