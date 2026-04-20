import React from "react";

const highlights = [
  {
    title: "Curious Builder",
    description:
      "I learn by building and iterating, focusing on clean layouts, solid fundamentals, and clear UX.",
  },
  {
    title: "Problem Solver",
    description:
      "I break down problems into small steps, write readable code, and test ideas quickly.",
  },
  {
    title: "Team Friendly",
    description:
      "I value collaboration, clear communication, and steady progress over flashy shortcuts.",
  },
];

const quickFacts = [
  "Focused on Excel, Power BI, SQL, Python, and AI/ML",
  "Interested in data insights and practical analytics",
  "Open to internships and entry-level roles",
  "Based in India, available remotely",
];

const AboutSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
        <div className="space-y-8">
          <div>
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              About Me
            </h2>
          </div>

          <div className="glass-panel rounded-3xl p-8 ring-1 ring-white/10">
            <p className="text-[#ADB7BE] text-lg leading-relaxed mb-6">
              I am Ranjit Kumar, an aspiring software developer who enjoys turning
              ideas into reliable, user-friendly web experiences. I focus on strong
              fundamentals, responsive UI, and consistent delivery.
            </p>
            <p className="text-[#8892A0] leading-relaxed">
              My goal is to build products that are thoughtful and easy to use while
              continuously improving my skills through real projects and collaboration.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="text-sm text-[#8892A0] px-4 py-3 rounded-full glass-panel ring-1 ring-white/10"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl glass-panel p-6 flex gap-6 ring-1 ring-white/10"
            >
              <div className="text-primary-300 text-lg font-semibold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-[#ADB7BE] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
