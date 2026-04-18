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
      <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 items-start">
        <div>
          <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
            How I work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Simple, Reliable Process
          </h2>
          <p className="text-[#94A3B8] mt-4">
            A lightweight process that keeps the work focused, collaborative, and
            easy to review at every stage.
          </p>
        </div>

        <div className="relative pl-6 border-l border-[#2f2838] space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-[#8892A0] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
