import React from 'react';
import { ExternalLink, Github, Brain, Cloud, BarChart3, MessageSquare, Presentation, Leaf, ShieldHalf, Database, DollarSign } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Documentation Assistant for Software Developers',
      description: 'As a software developer I observed that there is a lot of documentation that I have to go through on a daily basis. Rather than going through the documentation manually, I created a RAG based AI model to which I can query my questions and accelerate development. I also integrated this with a Slack and Discord channel using n8n. I created a basic demo using free documentation available online, as the more detailed version that I use contains some valuable company documentation.',
      technologies: ['Python', 'Retrieval-Augmented Generation', 'LangChain', 'Llama', 'ChromaDB', 'n8n'],
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600',
      github: 'https://github.com/devanshsanghavi/Crustdata',
      demo: 'https://devanshcrustdata.streamlit.app/'
    },
    {
      title: 'Devising Adversarial Prompts using LLM Optimization',
      description: 'Large Language Models tend to handle prompts that are unsafe/unethical quite easily. However, is there a way to break this? This is what was explored in this project. Using a prompt optimization technique, we managed to iteratively create suffixes and meta-instructions that can be passed along with unsafe prompts to LLMs to produce answers to potentially dangerous questions. This helps us understand vulnerabilities in LLMs and mitigate them.',
      technologies: ['Python', 'Llama', 'Vicuna', 'LLMs', 'Prompt Optimization & Engineering', 'GenAI'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-teal-500 to-green-600',
      report: 'https://drive.google.com/file/d/1sjcazl0cFydF8xPKnV2GspapO0c-rzKB/view?usp=sharing',
      presentation: 'https://drive.google.com/file/d/1DbJPTy3Bifn6gxjMwoo1YscAGwj48Pxe/view?usp=sharing'
    },
    {
      title: 'Plant Classification using Neural Networks and Machine Learning',
      description: 'Developed a high-accuracy image classification system to identify plant leaf types across 43 classes, achieving 97% accuracy using the VGG16 model. Evaluated and compared multiple ML and neural network models, applied image preprocessing techniques for feature extraction, and built an interactive UI with Anvil for user-friendly deployment.',
      technologies: ['Python', 'OpenCV', 'CNN', 'SVM', 'Decision Tree', 'Image Processing'],
      icon: <Leaf className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600',
      presentation: 'https://drive.google.com/file/d/1DaRyLNY-QrtSq9IuSPn-3DMeJTj7pdDx/view?usp=sharing'
    },
    {
      title: 'Chess game with Enhanced AI bot',
      description: 'Built a fully functional chess engine in Python and implemented a Negamax-based AI bot with two difficulty levels. Enhanced performance using alpha-beta pruning, reducing state exploration by 80%. Designed an interactive UI featuring a menu screen and game log, and rigorously tested edge cases to ensure reliable gameplay.',
      technologies: ['Python', 'Algorithms', 'Optimization'],
      icon: <ShieldHalf className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600',
      report: 'https://drive.google.com/file/d/1seGvnhAb9FK8SORPP1a2pNpPnX4dmpBL/view?usp=sharing',
    },
    {
      title: 'Income Factors Analysis for Targeted Advertising Optimization',
      description: 'Analyzed key factors influencing individual income to improve targeted advertising strategies and maximize campaign ROI. Utilized SQL for data extraction and Pandas for data wrangling, and applied advanced univariate and multivariate visualizations to uncover meaningful patterns and inform data-driven decisions.',
      technologies: ['Python', 'SQLite', 'Data Analysis'],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-blue-600',
      report: 'https://drive.google.com/file/d/1cg2KkrdEawHK9581iVvsXkRnx_YtlYpQ/view?usp=sharing',
    },
    {
      title: 'Bigtable-Inspired Database System with Minibase',
      description: 'Developed a simplified version of Google’s Bigtable using the Minibase framework. Implemented core database functionalities such as querying, batchInsert, rowSort, and rowJoin, and optimized data access using heapfiles, maps, and B-Trees for indexing. Focused on building efficient data retrieval and manipulation mechanisms to simulate a column-oriented storage system. Gained hands-on experience with low-level database internals, storage structures, and query optimization techniques.',
      technologies: ['Java', 'Database Systems', 'Query Processing', 'Query Optimization'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-600',
      report: 'https://drive.google.com/drive/folders/1hNj-rmNQ6Y8DcSnr-FPZc-crXUGRLP5F?usp=sharing',
    },
    {
      title: 'Payment Processing System',
      description: 'Designed and implemented a secure payment gateway using Java Spring Boot, integrating MySQL for efficient transactional data storage. Improved processing speed by 15% through query optimization. Achieved 95% test coverage with JUnit tests and ensured reliable builds using Maven for automation.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Maven'],
      icon: <DollarSign className="w-8 h-8" />,
      gradient: 'from-red-500 to-red-700',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mr-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target='_blank'
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>}
                  {project.demo && <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target='_blank'
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>}
                  {project.report && <a
                    href={project.report}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target='_blank'
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Report
                  </a>}
                  {project.presentation && <a
                    href={project.presentation}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    target='_blank'
                  >
                    <Presentation size={20} className="mr-2" />
                    Presentation
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;