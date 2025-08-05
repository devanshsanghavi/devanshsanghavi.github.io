import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'RoomieHub',
      location: 'San Jose, California, United States (Remote)',
      period: 'July 2024 - Present',
      description: 'Start-up focused on matching people with the right roommates and managing roommate living. I helped them launch their MVP application from 0 → 1.',
      link: 'https://apps.apple.com/us/app/roomiehub/id6676999967',
      achievements: [
        'Created user-friendly screens and components using React Native and TypeScript, following Figma designs to ensure seamless navigation and responsiveness across 4+ device types, which resulted in a cohesive user experience.',
        'Developed and integrated RESTful APIs using NestJS (a framework built on top of Node.js), adhering to the MVC pattern reducing server response times by 30%.',
        'Configured AWS S3 and DynamoDB for scalable storage, managing 500+ user-uploaded files and 10,000+ database queries.',
        'Deployed microservices on CloudFormation and Lambda by managing 10+ IAM policies and monitoring CloudWatch logs.',
        'Implemented OAuth 2.0 authentication by configuring AWS Cognito as an API Gateway authorizer for secured API access.',
        'Boosted first-time user engagement by 15% by adding GenAI-driven ice-breaker messages based on user profiles.',
        'Designed and tested a cosine similarity–based roommate matching algorithm using lifestyle preferences to provide better recommendations thus improving match relevance for 100+ users.',
        'Streamlined project management using GitHub project task-board, linking tasks to pull requests to maintain clear progress tracking. Improved productivity by 20%, consistently delivering features on time and reducing sprint overages by 15%.'
      ],
      technologies: ['JavaScript', 'AWS', 'React Native', 'NestJS (Node.js)', 'TypeScript', 'Docker', 'OAuth 2.0', 'System Architecture', 'Redux', 'SQL/NoSQL']
    },
    {
      title: 'Computer Science Tutor',
      company: 'Arizona State University',
      location: 'Tempe, Arizona, United States',
      period: 'July 2023 - April 2024',
      description: 'Tutoring center at ASU that supported undergraduate students across various majors.',
      achievements: [
        'Tutored and mentored 200+ students from diverse backgrounds and learning styles across 6 undergraduate courses, providing guidance and support in understanding complex concepts, resulting in improved grades.',
        "Demonstrated adeptness in breaking down technical topics which enhanced students' problem-solving, code optimization skills, debugging, algorithmic thinking and ability to comprehend low-level computer architecture.",
      ],
      technologies: ['Computer Architecture', 'Data Structures', 'Algorithms', 'Assembly', 'Java', 'Digital Design', 'Theoretical CS', 'Object-Oriented Programming']
    },
    {
      title: 'Machine Learning Intern',
      company: 'K.J. Somaiya College of Engineering',
      location: 'Mumbai, Maharashtra, India',
      period: 'February 2021 - June 2021',
      description: 'Worked on a project to predict Covid-19 cases under Prof. Mansi Kambli.',
      achievements: [
        'Developed a time-series ML model to forecast COVID-19 cases, utilizing historical data to enhance accuracy in predictions.',
        'Conducted comprehensive reviews of scholarly articles, research papers and manuscripts to assess the effectiveness of various predictive models in the context of pandemic forecasting.',
        'Performed steps like data collection through a live API, data preprocessing, and tested various algorithms like Linear Regression, Lasso Regression, Polynomial Regression and ARIMA to identify the most accurate models for the task.',
        'Achieved an accuracy of 91% and 89% using ARIMA and Polynomial Regression respectively.'
      ],
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'SQL']
    },
    {
      title: 'Web Development Intern',
      company: 'UNLO 3D',
      location: 'Mumbai, Maharashtra, India',
      period: 'January 2021 - March 2021',
      description: '3D printing start-up focused on custom designs.',
      achievements: [
        'Collaborated with a team to build a website for the company using HTML, CSS, JavaScript, ReactJS and Redux.',
        'Successfully attained a notable surge in website traffic, achieving a milestone of 100+ users, showcasing prowess in driving impactful online engagement and growth.',
        'Built interactive and data-driven visualizations using D3.js, transforming complex datasets into intuitive charts and dashboards for enhanced user insights and decision-making.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'ReactJS', 'Redux']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through innovative companies and challenging projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pr-8'} ml-12 md:ml-0`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-blue-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {experience.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-300 mb-4">
                      {/* <ExternalLink size={16} className="mr-2" /> */}
                      <span className="font-semibold">{experience.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{experience.location}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description} {experience.link && <a href={experience.link} target='_blank' className="text-blue-300 font-semibold underline">Check it out on the app store.</a>}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-teal-400 mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;