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
      category: 'AI/ML',
      icon: Brain,
      features: [
        'Natural language task input',
        'AI-powered priority suggestions',
        'Smart categorization',
        'Progress analytics'
      ],
      github: 'https://github.com/ajeevani/TaskMind',
      demo: 'https://ai-task-manager-demo.vercel.app',
      status: 'Completed'
    },
    {
      title: 'Advanced Formula 1 Historical Race Simulator',
      description: 'A production-grade ML-powered Formula 1 simulation platform that enables users to create dream races by selecting any driver from F1 history (1950-2024), pairing them with any car from any era, and simulating realistic race outcomes on various tracks with dynamic weather conditions. Uses ensemble machine learning models trained on comprehensive telemetry data, historical performance metrics, and advanced feature engineering to predict lap times, race positions, pit strategies, and overtaking probabilities.',
      technologies: ['Python', 'FastF1 API', 'Ergast API', 'LightGBM', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'AsyncIO', 'DuckDB', 'PostgreSQL', 'Google Cloud Platform', 'Docker', 'Rich CLI', 'Streamlit'],
      category: 'AI/ML',
      icon: RaceCar,
      features: [
        'Historical driver performance modeling across 75 years of F1 (1950-2024)',
        'Cross-era race simulation (e.g., Ayrton Senna in 2023 Red Bull vs. Max Verstappen)',
        'Multi-source data pipeline ingesting telemetry, weather, and historical race data',
        'Ensemble ML models with <1500ms lap time prediction accuracy',
        'Advanced feature engineering with 50+ variables including tyre degradation and track evolution',
        'Dynamic weather impact modeling and race strategy prediction',
        'Interactive CLI for custom grid creation and race simulation',
        'Production-ready deployment with model versioning and error handling'
      ],
      github: 'https://github.com/armanjeevani/formula1-ml-simulator',
      demo: 'https://formula1-simulator-demo.vercel.app',
      status: 'In Process'
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
      title: 'Chess AI with Machine Learning Coach',
      description: 'Professional chess application with AI-powered skill assessment, adaptive difficulty, and real-time coaching. Features neural networks for player analysis and personalized training recommendations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'Socket.io', 'FastAPI'],
      category: 'AI/ML',
      icon: Brain, // or ChessKnight
      features: [
        'Neural network skill assessment (1200-2400 rating prediction)',
        'Adaptive AI difficulty (maintains 50% win rate)',
        'Real-time move analysis (brilliant/good/mistake/blunder)',
        'Personalized coaching with tactical training',
        'Performance analytics with ML insights',
        'Professional Chess.com-quality UI/UX'
      ],
      github: 'https://github.com/yourusername/chess-ai-ml',
      demo: 'https://chess-ai-pro.vercel.app',
      status: 'In Process'
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