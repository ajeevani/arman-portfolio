
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Server, Brain, Zap, Users, Trophy } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Projects Completed', value: '25+', icon: Trophy },
    { label: 'Technologies Mastered', value: '15+', icon: Code2 },
    { label: 'Years Experience', value: '3+', icon: Zap },
    { label: 'Happy Clients', value: '10+', icon: Users },
  ]

  const technologies = [
    'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'Express.js', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'OpenAI API'
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            <span className="text-cyber-blue">user@portfolio:~$</span> cat about.txt
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="cyber-text-glow">ABOUT</span>{' '}
            <span className="text-cyber-blue">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I'm a passionate software and web developer with a strong foundation in modern 
                technologies and a keen eye for creating exceptional digital experiences. 
                My journey in tech began with curiosity and has evolved into a professional 
                pursuit of innovative solutions.
              </p>
              <p>
                Specializing in full-stack development, I bring ideas to life through clean, 
                efficient code and intuitive user interfaces. I'm particularly interested in 
                AI integration and building scalable web applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-mono text-cyber-blue">Technologies I Work With:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-3 py-1 bg-cyber-blue/10 text-cyber-cyan border border-cyber-blue/30 rounded-full text-sm font-mono hover:bg-cyber-blue/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-blue to-cyber-cyan p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-cyber-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-mono text-white">Arman Jeevani</h3>
                  <p className="text-cyber-cyan font-mono">Software & Web Developer</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{duration: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm text-center hover:cyber-glow transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-cyber-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-mono text-zinc-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-mono text-cyber-blue mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Frontend Development', level: 85 },
              { skill: 'Backend Development', level: 90 },
              { skill: 'Database Design', level: 80 },
              { skill: 'AI/ML Integration', level: 75 },
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-zinc-300">{item.skill}</span>
                  <span className="text-cyber-cyan">{item.level}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                    className="bg-gradient-to-r from-cyber-blue to-cyber-cyan h-2 rounded-full cyber-glow"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
