'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ResumeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDownload = () => {
    // Create a simple resume PDF download
    const link = document.createElement('a')
    link.href = '/resume-arman-jeevani.pdf'
    link.download = 'Arman_Jeevani_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast.success('Resume download started!', {
      icon: '📄',
      duration: 3000,
    })
  }

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Tipsy Oak Liquors',
      period: '2025 - Present',
      location: 'Remote',
      description: 'Developing company website using React, Node.js, and cloud technologies.',
      achievements: [
        'Built company website serving 5k+ users',
        'Increased customer engagement by 30%',
        'Increased sales by 25%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Ruby Infosys Ltd.',
      period: '2019',
      location: 'Kampala, UG',
      description: 'Created responsive web interfaces and collaborated with design teams.',
      achievements: [
        'Delivered 15+ client projects on time',
        'Implemented modern UI/UX best practices',
        'Mentored 2 junior developers'
      ]
    }
  ]

  const education = [
    {
      degree: 'Advanced Diploma in Programming & Analysis',
      school: 'Seneca Polytechnic',
      period: '2022 - 2025',
      location: 'Toronto, CA',
      gpa: '3.9/4.0',
      achievements: [
      ]
    }
  ]

  const certifications = [
    'Oracle OCI Foundations Associate',
    'Oracle APEX Developer Professional',
    'Oracle OCI Generative AI Professional',
    'CS50x Intro to Computer Science',
    'CS50w Web Development with Python and Javascipt',
    'Programiz C, C++ and Python'
  ]

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
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
            <span className="text-cyber-blue">user@portfolio:~$</span> cat resume.pdf
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="cyber-text-glow">MY</span>{' '}
            <span className="text-cyber-blue">RESUME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0 }}
          className="text-center mb-12 relative z-10"
        >
          <button
            onClick={handleDownload}
            onMouseDown={(e) => e.preventDefault()}
            type="button"
            className="inline-flex items-center space-x-2 px-8 py-3 border border-cyber-blue text-cyber-blue font-mono font-semibold rounded-lg hover:bg-cyber-blue/10 hover:scale-105 transition-all duration-300 relative z-10 select-none cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume PDF</span>
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Experience & Education */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="w-6 h-6 text-cyber-blue" />
                <h3 className="text-2xl font-mono text-cyber-blue">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{job.title}</h4>
                      <div className="flex items-center space-x-2 text-cyber-cyan text-sm font-mono">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-zinc-400">
                      <span className="font-semibold">{job.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-zinc-300 mb-4">{job.description}</p>
                    
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-zinc-400 flex items-start">
                          <span className="w-1 h-1 bg-cyber-cyan rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="w-6 h-6 text-cyber-blue" />
                <h3 className="text-2xl font-mono text-cyber-blue">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center space-x-2 text-cyber-cyan text-sm font-mono">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-zinc-400">{edu.school}</span>
                      <span className="text-cyber-blue font-mono">GPA: {edu.gpa}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-4 text-zinc-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-zinc-400 flex items-start">
                          <span className="w-1 h-1 bg-cyber-cyan rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills & Certifications */}
          <div className="space-y-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-6 h-6 text-cyber-blue" />
                <h3 className="text-2xl font-mono text-cyber-blue">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300 flex items-center space-x-3"
                  >
                    <Award className="w-5 h-5 text-cyber-cyan flex-shrink-0" />
                    <span className="text-white font-mono">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-mono text-cyber-blue mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Years of Experience</span>
                  <span className="text-cyber-cyan font-mono font-bold">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Projects Completed</span>
                  <span className="text-cyber-cyan font-mono font-bold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Technologies Mastered</span>
                  <span className="text-cyber-cyan font-mono font-bold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Certifications</span>
                  <span className="text-cyber-cyan font-mono font-bold">4</span>
                </div>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-mono text-cyber-blue mb-6">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="text-zinc-300">
                  <span className="text-cyber-cyan">Email:</span> arman.jeevani@email.com
                </div>
                <div className="text-zinc-300">
                  <span className="text-cyber-cyan">Location:</span> Available for Remote Work
                </div>
                <div className="text-zinc-300">
                  <span className="text-cyber-cyan">Status:</span> Open to Opportunities
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}