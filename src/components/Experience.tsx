import React from 'react';

export function Experience() {
  const experiences = [
    {
      title: 'Undergraduate Research Assistant',
      company: 'The University of Texas at Dallas',
      location: 'Richardson, TX',
      period: 'Aug. 2025 - Present',
      description: [
        'Implemented and compared DL behavioral models using Lightning Pose, Anipose, and DeepLabCut for motion analysis',
        'Trained unsupervised deep learning models with PyTorch and Lightning AI for high-precision tracking and motion analysis',
        'Applied computer vision and data analysis techniques (OpenCV, NumPy, scikit-learn) to detect subtle motor differences and enhance model precision for neuroscience research',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header (left aligned like the example) */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">
            My professional journey and research contributions
          </p>
        </div>

        {/* Card list */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800/80 bg-gray-950/60 px-10 py-10 md:px-12 md:py-12 shadow-[0_0_0_1px_rgba(59,130,246,0.06)]"
            >
              {/* Top row: left info + right dates */}
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-pink-500 font-medium mb-1">{exp.company}</p>

                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>

                <div className="text-gray-400 text-sm whitespace-nowrap pt-1">
                  {exp.period}
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-8 space-y-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-gray-300 leading-relaxed">
                    <span className="mt-2 h-2 w-2 rounded-full bg-pink-500 flex-none" />
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
