"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Security Analyst",
    company: "Enterprise Security Solutions",
    description:
      "Lead security operations, conduct advanced threat hunting, and manage incident response for enterprise clients.",
  },
  {
    year: "2021 - 2023",
    title: "Penetration Tester",
    company: "CyberDefense Corp",
    description:
      "Performed comprehensive penetration testing on web applications, networks, and cloud infrastructure.",
  },
  {
    year: "2019 - 2021",
    title: "Security Operations Analyst",
    company: "TechSecure Inc",
    description:
      "Monitored security events, analyzed threats using SIEM tools, and coordinated incident response activities.",
  },
  {
    year: "2018 - 2019",
    title: "Junior Security Analyst",
    company: "InfoSec Startups",
    description:
      "Assisted in vulnerability assessments, security audits, and maintained security documentation.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          My journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Experience
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-12 last:mb-0 md:w-1/2 ${
              index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            }`}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
              viewport={{ once: true }}
              className={`absolute top-6 w-4 h-4 rounded-full bg-[#121212] border-2 border-primary-500 z-10 ${
                index % 2 === 0
                  ? "left-[-8px] md:left-auto md:right-[-8px]"
                  : "left-[-8px]"
              }`}
            >
              <div className="absolute inset-1 rounded-full bg-primary-500"></div>
            </motion.div>

            {/* Content card */}
            <div className="ml-8 md:ml-0 group">
              <div className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-secondary-400 text-sm mb-3">{exp.company}</p>
                  <p className="text-[#8892A0] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
