import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C/C++/C#', level: 80 },
        { name: 'SQL', level: 90 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'Swift'}
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 95 },
        { name: 'Firebase', level: 85 },
        { name: 'Supabase/PostgreSQL', level: 90 },
        { name: 'DynamoDB', level: 80 },
        { name: 'ChromaDB', level: 95 }
      ]
    },
    {
      title: 'Frameworks/Tools',
      skills: [
        { name: 'Amazon Web Services', level: 90 },
        { name: 'React/React Native', level: 85 },
        { name: 'Node.js/Express.js/NestJS', level: 80 },
        { name: 'Docker/Kubernetes', level: 85 },
        { name: 'Django/Flask/FastAPI', level: 80 },
        { name: 'CI/CD', level: 90 },
        { name: 'Spring Boot/JUnit/Maven'}
      ]
    },
    {
      title: 'GenAI/ML/Data',
      skills: [
        { name: 'LangChain', level: 95 },
        { name: 'OpenAI API/n8n', level: 85 },
        { name: 'Cursor/Claude Code', level: 90 },
        { name: 'TensorFlow/Keras/SciKit-Learn', level: 90 },
        { name: 'HuggingFace/PyTorch', level: 80 },
        { name: 'Pandas/NumPy', level: 75 },
        { name: 'Tableau/Power BI/Excel'}
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning a wide range of technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      {/* <span className="text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span> */}
                    </div>
                    {/* <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-teal-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Models Deployed', value: '25+' },
            { label: 'Cloud Migrations', value: '15+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;