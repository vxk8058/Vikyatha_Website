import { Heart } from 'lucide-react';
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Vikyatha's website. All rights reserved.</span>
          </div>

          
        </div>
      </div>
    </footer>
  );
}