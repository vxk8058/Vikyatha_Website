import { Heart } from 'lucide-react';
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Drashti.dev. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}