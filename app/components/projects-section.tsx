'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Database, Brain, Globe, Zap } from 'lucide-react'

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task management application with natural language processing for smart task categorization and priority suggestions.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
      category: 'AI Integration',
      icon: Brain,
      features: [
        'Natural language task input',
        'AI-powered priority suggestions',
        'Smart categorization',
        'Progress analytics'
      ],
      github: 'https://github.com/armanjeevani/ai-task-manager',
      demo: 'https://ai-task-manager-demo.vercel.app',
      status: 'Completed'
    },
    {
      title: 'Real-time Weather API Dashboard',
      description: 'Comprehensive weather dashboard consuming multiple APIs with real-time updates, forecasts, and interactive maps.',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Weather APIs', 'Tailwind CSS'],
      category: 'API Development',
      icon: Globe,
      features: [
        'Multi-source weather data',
        'Interactive weather maps',
        'Historical data analysis',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/armanjeevani/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app',
      status: 'Completed'
    },
    {
      title: 'E-commerce Analytics Platform',
      description: 'Full-stack analytics platform for e-commerce businesses with real-time sales tracking and predictive insights.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'D3.js'],
      category: 'Full-Stack',
      icon: Database,
      features: [
        'Real-time sales tracking',
        'Predictive analytics',
        'Custom dashboard builder',
        'Export functionality'
      ],
      github: 'https://github.com/armanjeevani/ecommerce-analytics',
      demo: 'https://ecommerce-analytics-demo.vercel.app',
      status: 'In Progress'
    },
    {
      title: 'Smart Code Review Assistant',
      description: 'AI-powered code review tool that analyzes code quality, suggests improvements, and detects potential bugs.',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Docker'],
      category: 'AI Integration',
      icon: Zap,
      features: [
        'Automated code analysis',
        'Bug detection',
        'Performance suggestions',
        'Integration with Git'
      ],
      github: 'https://github.com/armanjeevani/code-review-assistant',
      demo: 'https://code-review-assistant-demo.vercel.app',
      status: 'Completed'
    }
  ]

  const categories = ['All', 'AI Integration', 'API Development', 'Full-Stack']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleViewMoreGithub = () => {
    window.open('https://github.com/armanjeevani', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            <span className="text-cyber-blue">user@portfolio:~$</span> ls projects/
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="cyber-text-glow">MY</span>{' '}
            <span className="text-cyber-blue">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0 }}
              className="relative z-10"
            >
              <button
                onClick={() => handleCategoryClick(category)}
                onMouseDown={(e) => e.preventDefault()}
                className={`px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 cursor-pointer relative z-10 select-none ${
                  selectedCategory === category
                    ? 'bg-cyber-blue text-black cyber-glow'
                    : 'bg-cyber-blue/10 text-cyber-cyan border border-cyber-blue/30 hover:bg-cyber-blue/20 hover:scale-105'
                }`}
                type="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCategoryClick(category)
                  }
                }}
                aria-label={`Select ${category} category`}
                aria-pressed={selectedCategory === category}
                role="button"
              >
                {category}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0 }}
                whileHover={{ y: -10 }}
                className="cyber-border rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:cyber-glow transition-all duration-300 group"
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cyber-blue/20">
                      <Icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleGithubClick(project.github)}
                      className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-cyan hover:bg-cyber-blue/20 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDemoClick(project.demo)}
                      className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-cyan hover:bg-cyber-blue/20 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Project description */}
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-mono text-cyber-blue mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-zinc-400 flex items-center">
                        <span className="w-1 h-1 bg-cyber-cyan rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-blue/10 text-cyber-cyan border border-cyber-blue/30 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View more projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 relative z-10"
        >
          <button
            onClick={handleViewMoreGithub}
            onMouseDown={(e) => e.preventDefault()}
            type="button"
            className="inline-flex items-center space-x-2 px-8 py-3 border border-cyber-blue text-cyber-blue font-mono font-semibold rounded-lg hover:bg-cyber-blue/10 hover:scale-105 transition-all duration-300 relative z-10 select-none cursor-pointer"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </button>
        </motion.div>

      </div>
    </section>
  )
}