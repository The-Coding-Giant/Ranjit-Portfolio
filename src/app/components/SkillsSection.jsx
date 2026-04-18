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
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          My toolkit
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Technical Skills
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#181818] border border-[#33353F] rounded-lg text-[#E2E8F0]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
              Focus Areas
            </h3>
            <ul className="space-y-3">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-3 text-[#ADB7BE]">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
            Tools I Use
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tooling.map((tool, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-[#33353F] rounded-xl p-4 text-[#ADB7BE]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
