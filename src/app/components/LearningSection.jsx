import React from "react";

const learningTracks = [
  {
    title: "Frontend Foundations",
    description:
      "HTML semantics, modern CSS layout, and JavaScript fundamentals with a focus on clean UI.",
  },
  {
    title: "React & Next.js",
    description:
      "Component design, routing, state, and data fetching for interactive web apps.",
  },
  {
    title: "Database Basics",
    description:
      "Relational modeling, SQL queries, and simple backend integrations for real data flows.",
  },
  {
    title: "Problem Solving",
    description:
      "Data structures, algorithms, and consistent practice to improve coding fluency.",
  },
];

const LearningSection = () => {
  return (
    <section className="py-24" id="learning">
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          Learning path
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Growth Focus
        </h2>
        <p className="text-[#8892A0] mt-4 max-w-2xl mx-auto">
          I am building strong fundamentals while shipping small, practical projects
          that improve my skill depth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {learningTracks.map((track, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#33353F] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{track.title}</h3>
            <p className="text-[#8892A0] leading-relaxed">{track.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
