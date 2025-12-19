import React from 'react';
export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'C++', 'C#', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Material-UI', 'Framer Motion', 'Node.js', 'Flask', 'FastAPI', 'Spring Boot', 'JUnit'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Apache Airflow', 'PostgreSQL', 'MongoDB', 'MySQL', 'Snowflake', 'VS Code', 'Jira', 'Confluence', 'Microsoft Suite'],
    },
    {
      category: 'Other',
      skills: ['AWS', 'RESTful APIs', 'GraphQL', 'Agile Methodologies', 'Unit Testing'],
    },
    
  ];

  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-blue-500/30 rounded-lg p-8 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gray-950/50"
            >
              <h3 className="text-2xl text-blue-400 mb-8 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all cursor-default border border-gray-700 hover:border-blue-500/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}