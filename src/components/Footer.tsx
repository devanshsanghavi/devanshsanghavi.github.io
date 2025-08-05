import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-400" /> by Devansh Sanghavi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;