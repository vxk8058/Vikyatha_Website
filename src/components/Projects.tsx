import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

export function Projects() {
  const projects = [
    {
      title: 'Syllabus Agent',
      subtitle: 'AI-Powered Academic Planning Assistant',
      description: 'Built to parse course syllabi and extract key deadlines, grading policies, and requirements using NLP and structured workflows, helping students stay organized and informed.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjYwMDUzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'NLP', 'LLMs', 'Automation'],
      github: 'https://github.com/vxk8058/syllabus-agent'      
    },
    {
      title: 'InvestAssure',
      subtitle: 'AI-Assisted Investment Risk Analysis Platform',
      description: 'Developed to simplify investment decisions by analyzing market news, financial data, and risk signals, delivering clear, AI-powered explanations through an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1OTc2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'React', 'Flask', 'NLP', 'APIs'],
      github: 'https://github.com/Dshah1003/Wehaack2025'
    },
    {
      title: 'BudgetWallet',
      subtitle: 'Smart Personal Finance Tracker',
      description: 'A full-stack budgeting application that helps users track expenses, savings, and spending trends with secure authentication and data-driven insights for better financial decisions.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MDUxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Java', 'JavaScript', 'SQLite', 'HTML', 'CSS'],
      github: 'https://github.com/vxk8058/BudgetWallet'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="mb-20 md:mb-24 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">Projects</h2>
          <p className="text-gray-400 text-lg">Click on a project to view more details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 bg-gray-900/50"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-blue-400 mb-1">{project.title}</h3>
                <p className="text-sm text-blue-300 mb-3">{project.subtitle}</p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}