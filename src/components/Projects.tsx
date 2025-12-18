import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

export function Projects() {
  const projects = [
    {
      title: 'AgentGrove',
      subtitle: 'Multi-Agent System for Product Managers',
      description: 'Built at HackUTD using AWS Bedrock Agents, Lambda, and structured agent workflows to automate product management tasks.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjYwMDUzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AWS', 'Bedrock', 'Lambda', 'Agents'],
      github: '#',
      demo: '#',
    },
    {
      title: 'ResuBot',
      subtitle: 'AI Resume Chatbot',
      description: 'NLP-powered resume analyzer using spaCy, Flask, MongoDB, and React frontend to help users optimize their resumes.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1OTc2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Flask', 'MongoDB', 'React'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Study Buddy',
      subtitle: 'AI Study Scheduler',
      description: 'Full-stack React + Firebase productivity assistant with chat UI and dashboard to help students manage their study schedules.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MDUxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Firebase', 'AI', 'Chat'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="mb-20 md:mb-24 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">Projects</h2>
          <p className="text-gray-400 text-lg">Click on a project to view more details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
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
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
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