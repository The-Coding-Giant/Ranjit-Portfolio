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
  "Focused on HTML, CSS, JavaScript, SQL, and Python",
  "Interested in frontend engineering and UI craft",
  "Open to internships and entry-level roles",
  "Based in India, available remotely",
];

const AboutSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          Get to know me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          About Me
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-2"></div>
          <div className="relative bg-[#181818] rounded-2xl p-8 border border-[#33353F]">
            <p className="text-[#ADB7BE] text-lg leading-relaxed mb-6">
              I am Divyanshu Sharma, an aspiring software developer who enjoys turning
              ideas into reliable, user-friendly web experiences. I focus on strong
              fundamentals, responsive UI, and consistent delivery.
            </p>
            <p className="text-[#8892A0] leading-relaxed">
              My goal is to build products that are thoughtful and easy to use while
              continuously improving my skills through real projects and collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#33353F]">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="text-sm text-[#8892A0] p-4 rounded-xl bg-[#121212] border border-[#33353F]/50"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#181818] rounded-2xl p-6 border border-[#33353F]"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-[#ADB7BE] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
