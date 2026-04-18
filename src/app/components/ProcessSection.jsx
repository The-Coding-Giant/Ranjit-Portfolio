import React from "react";

const steps = [
  {
    title: "Understand",
    description:
      "Clarify goals, users, and constraints before writing a line of code.",
  },
  {
    title: "Design",
    description:
      "Sketch layouts, define components, and plan a clean content structure.",
  },
  {
    title: "Build",
    description:
      "Implement fast, responsive UI with readable code and iterative feedback.",
  },
  {
    title: "Refine",
    description:
      "Polish UI details, fix bugs, and improve performance across devices.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24" id="process">
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          How I work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Simple, Reliable Process
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#33353F] rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4 text-primary-400 font-semibold">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-[#8892A0] text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
