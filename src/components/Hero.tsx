import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Devansh
              </span>
              <br />
              <span className="text-white">Sanghavi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Software Engineer specializing in{' '}
              <span className="text-blue-400 font-semibold">Full-Stack Development</span>,{' '}
              <span className="text-teal-400 font-semibold">Cloud Architecture</span>,{' '}
              <span className="text-orange-400 font-semibold">Generative AI</span>, and{' '}
              <span className="text-purple-400 font-semibold">Large Language Models</span>.
            </p>
            <p className="text-m md:text-l text-gray-300 max-w-3xl mx-auto">
              <span>Master of Computer Science from Arizona State University, Tempe</span>
              <br />
              <span>Bachelor of Technology, Computer Engineering from the University of Mumbai</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <a 
                href="https://drive.google.com/file/d/1GyMseiqFC7gHvk4tsqMtcFP9SIyJVrew/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </a>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/devanshsanghavi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dasanghavi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dsangha3@asu.edu"
              className="p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button> */}
      </div>
    </section>
  );
};

export default Hero;