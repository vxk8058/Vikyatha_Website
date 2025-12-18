import { useState, useEffect } from 'react';
import React from 'react';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent',
        'border-b border-gray-800/40',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-6 md:py-7">
          {/* Bigger brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            <span className="text-blue-400">D</span>rashti
            <span className="text-blue-400">.dev</span>
          </button>

          {/* Bigger nav items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={[
                  'uppercase tracking-wider transition-colors',
                  'text-sm md:text-base',
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-200',
                  'hover:text-blue-400',
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
