import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1502957291543-d85480254bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHN0YXJzfGVufDF8fHx8MTc2NTk4OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="max-w-4xl">
          <div className="inline-block px-8 py-5 rounded-full border border-blue-400 mb-8">
            <span className="text-blue-400 text-sm">Full-Stack Developer & Data Engineer</span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-8">
            I am <span className="text-blue-400">Vikyatha Komandla</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-4xl leading-relaxed">
          I’m a full-stack developer and aspiring data engineer who enjoys building intelligent, user-centered applications. I combine 
          clean, intuitive frontend design with scalable backend and data-driven systems to create products that are both impactful and 
          thoughtfully crafted. My experience spans React, Next.js, Flask, Prisma, and cloud-based architectures, with a growing focus 
          on applying machine learning and data engineering principles to solve real-world problems.
          </p>

          <div className="flex gap-4 mt-12">
            <a
              href="https://github.com/vxk8058"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/vikyatha-komandla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vikcloud09@gmail.com"
              className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}