import React from "react";

const coreSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Python",
  "React",
  "Next.js",
  "Git & GitHub",
];

const focusAreas = [
  "Responsive UI implementation",
  "Component-based architecture",
  "API integration",
  "Database fundamentals",
  "Clean code practices",
  "Basic testing and debugging",
];

const tooling = [
  "VS Code",
  "Figma (handoffs)",
  "Postman",
  "Vercel",
  "Netlify",
  "MySQL",
  "GitHub Projects",
];

const SkillsSection = () => {
  return (
    <section className="py-24" id="skills">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
            My toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Technical Skills
          </h2>
        </div>
        <p className="text-[#94A3B8] max-w-2xl">
          A balanced mix of frontend foundations, practical tools, and focused
          learning areas that help me ship reliable web experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-2 rounded-full bg-[#0e0b14] border border-[#2f2838] text-[#E2E8F0] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Focus Areas</h3>
          <div className="space-y-4">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[#ADB7BE]">{area}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Tools I Use</h3>
          <div className="space-y-3">
            {tooling.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-[#0e0b14] border border-[#2f2838] px-4 py-3 text-[#ADB7BE]"
              >
                <span>{tool}</span>
                <span className="text-primary-300 text-xs">Everyday</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
