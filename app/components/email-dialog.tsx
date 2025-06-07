'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

interface EmailDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailDialog({ isOpen, onClose }: EmailDialogProps) {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration - you'll need to set these up
      const serviceId = 'service_wdrqgze' // Replace with your EmailJS service ID
      const templateId = 'template_khfdqe4' // Replace with your EmailJS template ID
      const publicKey = '1r_W_twV6ZCFRKEj3' // Replace with your EmailJS public key

      if (form.current) {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          icon: '🚀',
          duration: 5000,
        })
        
        setFormData({ name: '', email: '', subject: '', message: '' })
        onClose()
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Failed to send message. Please try again or contact me directly.', {
        icon: '❌',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl cyber-border rounded-lg bg-black/90 backdrop-blur-md p-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-mono text-cyber-blue cyber-text-glow">Send Message</h2>
                <p className="text-sm text-zinc-400 font-mono mt-1">
                  user@contact:~$ compose_message.sh
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-cyan hover:bg-cyber-blue/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-cyber-cyan font-mono text-sm">
                  <User className="w-4 h-4" />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-zinc-500 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 font-mono"
                  placeholder="Your full name"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-cyber-cyan font-mono text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-zinc-500 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 font-mono"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-cyber-cyan font-mono text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-zinc-500 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 font-mono"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-cyber-cyan font-mono text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-zinc-500 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 font-mono resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              {/* Terminal output simulation */}
              <div className="bg-black/70 rounded-lg p-4 font-mono text-sm">
                <div className="text-cyber-cyan mb-2">
                  <span className="text-cyber-blue">system@mailer:~$</span> validate_form
                </div>
                <div className="space-y-1 text-zinc-400">
                  <div>● Name: <span className={formData.name ? 'text-green-400' : 'text-red-400'}>
                    {formData.name ? '✓ Valid' : '✗ Required'}
                  </span></div>
                  <div>● Email: <span className={formData.email ? 'text-green-400' : 'text-red-400'}>
                    {formData.email ? '✓ Valid' : '✗ Required'}
                  </span></div>
                  <div>● Subject: <span className={formData.subject ? 'text-green-400' : 'text-red-400'}>
                    {formData.subject ? '✓ Valid' : '✗ Required'}
                  </span></div>
                  <div>● Message: <span className={formData.message ? 'text-green-400' : 'text-red-400'}>
                    {formData.message ? '✓ Valid' : '✗ Required'}
                  </span></div>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="flex-1 flex items-center justify-center space-x-3 px-6 py-3 bg-cyber-blue text-black font-mono font-semibold rounded-lg hover:bg-cyber-cyan transition-all duration-300 cyber-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-cyber-blue/30 text-cyber-cyan font-mono font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
                >
                  Cancel
                </motion.button>
              </div>
            </form>

            {/* Footer info */}
            <div className="mt-6 pt-6 border-t border-cyber-blue/20">
              <div className="text-xs text-zinc-500 font-mono text-center">
                Your message will be sent directly to my email and I'll respond within 24 hours.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}