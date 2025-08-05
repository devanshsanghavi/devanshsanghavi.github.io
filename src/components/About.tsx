import React from 'react';
import { Code, Brain, Cloud, BarChart3, FileText } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Developing end-to-end web and mobile applications'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Architecture',
      description: 'Scalable and reliable cloud infrastructure design'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Generative AI',
      description: 'Exploring agentic AI and workflow automation'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'LLM Development',
      description: 'Building and fine-tuning large language models'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 mx-auto leading-relaxed">
            I'm a passionate software engineer with a deep focus on learning and exploring new technologies and using them to create a global impact. I have led the development of applications from scratch and thrive at the intersection of innovation and functionality. I have had the privilege of growing up in 5 different countries, which shaped my adaptability and cultural sensitivity, which I make use of when working with people from diverse backgrounds to ensure a smooth and free-flowing development process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To build thoughtful, scalable, and human-centered technology that makes a real difference. I aim to leverage my technical expertise and cross-cultural perspective to drive innovation, foster meaningful collaboration, and continuously learn from the brilliant minds around me. I believe in building systems that are not only technically excellent but also accessible and beneficial to users and organizations worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;