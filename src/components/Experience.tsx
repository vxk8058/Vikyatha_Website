import React from 'react';

export function Experience() {
  const experiences = [
    {
      title: 'Undergraduate Research Assistant',
      company: 'The University of Texas at Dallas',
      location: 'Richardson, TX',
      period: 'Aug. 2025 – Present',
      description: [
        'Implemented and compared DL behavioral models using Lightning Pose, Anipose, and DeepLabCut for motion analysis',
        'Trained unsupervised deep learning models with PyTorch and Lightning AI for high-precision tracking and motion analysis',
        'Applied computer vision and data analysis techniques (OpenCV, NumPy, scikit-learn) to detect subtle motor differences and enhance model precision for neuroscience research',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and research contributions
          </p>
        </div>

        {/* Experience card */}
        <div className="max-w-5xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative
                rounded-xl
                border border-blue-500/40
                bg-gray-950/70
                px-10 py-8
                md:px-12 md:py-10
              "
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-blue-400 font-medium mb-1">
                    {exp.company}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {exp.location}
                  </p>
                </div>

                <div className="text-gray-400 text-sm whitespace-nowrap pt-1">
                  {exp.period}
                </div>
              </div>

              {/* Bullet list */}
              <ul className="mt-8 space-y-4 pl-1">
                {exp.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 text-gray-300 leading-relaxed"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 flex-none" />
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
