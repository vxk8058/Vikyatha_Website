import React from 'react';

export function Experience() {
  const experiences = [
    {
      title: 'Data Engineering Intern',
      company: 'RSM Technology.',
      location: 'Remote',
      period: 'May 2025 - Aug 2025',
      description: [ //fix this
        'Developed responsive web applications using React, TypeScript, and Tailwind CSS',
        'Collaborated with cross-functional teams to deliver features on tight deadlines',
        'Optimized application performance resulting in 40% faster load times',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey and research contributions</p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto mt-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-blue-500/30 rounded-lg p-8 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gray-950/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-blue-400 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-300 mb-1">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-gray-400">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}