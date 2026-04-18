import React from "react";
import {
  CodeBracketIcon,
  WindowIcon,
  CircleStackIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces using HTML, CSS, JavaScript, and React.",
    icon: WindowIcon,
  },
  {
    title: "UI Implementation",
    description:
      "Convert designs into clean, reusable components with a strong eye for layout.",
    icon: Squares2X2Icon,
  },
  {
    title: "API Integration",
    description:
      "Connect frontend experiences with REST APIs and handle real-world data states.",
    icon: CodeBracketIcon,
  },
  {
    title: "Database Basics",
    description:
      "Design and query relational data with SQL for simple, reliable backends.",
    icon: CircleStackIcon,
  },
  {
    title: "Debugging & Fixes",
    description:
      "Track issues, improve UX details, and ship stable updates with confidence.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Performance Focus",
    description:
      "Keep pages fast, responsive, and optimized for mobile-first experiences.",
    icon: RocketLaunchIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          What I offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Services
        </h2>
        <p className="text-[#8892A0] mt-4 max-w-xl mx-auto">
          Practical web development support built around clarity, responsiveness, and clean code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-[#1a1624] border border-[#2f2838] rounded-2xl p-8 hover:border-primary-500/40 transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8892A0] leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
