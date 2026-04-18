import React from "react";

const experiences = [
  {
    year: "2022 - 2023",
    title: "Foundations",
    company: "CS Fundamentals",
    description:
      "Built a strong base in programming, data structures, and web fundamentals.",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Projects",
    company: "Personal Portfolio",
    description:
      "Created responsive UI projects, landing pages, and interactive components.",
  },
  {
    year: "2024 - 2025",
    title: "Full-Stack Basics",
    company: "Practice Builds",
    description:
      "Explored APIs, databases, and authentication patterns with small full-stack apps.",
  },
  {
    year: "2025 - Present",
    title: "Career Growth",
    company: "Open to opportunities",
    description:
      "Polishing portfolio work and preparing for internships and entry-level roles.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24" id="experience">
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          My journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Experience Timeline
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-12 last:mb-0 md:w-1/2 ${
              index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            }`}
          >
            <div
              className={`absolute top-6 w-4 h-4 rounded-full bg-[#0e0b14] border-2 border-primary-500 z-10 ${
                index % 2 === 0
                  ? "left-[-8px] md:left-auto md:right-[-8px]"
                  : "left-[-8px]"
              }`}
            >
              <div className="absolute inset-1 rounded-full bg-primary-500"></div>
            </div>

            <div className="ml-8 md:ml-0">
              <div className="bg-[#1a1624] border border-[#2f2838] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-secondary-400 text-sm mb-3">{exp.company}</p>
                  <p className="text-[#8892A0] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
