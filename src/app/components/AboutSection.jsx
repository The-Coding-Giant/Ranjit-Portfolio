"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Penetration Testing",
      "Network Security",
      "SIEM Tools (Splunk, ELK)",
      "Python, Bash Scripting",
      "Incident Response",
      "Vulnerability Assessment",
      "Cloud Security (AWS, Azure)",
      "Malware Analysis",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "B.Tech in Computer Science",
      "Specialized coursework in Information Security",
      "Continuous learning through cybersecurity certifications",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "AWS Certified Security Specialty",
      "OSCP (Offensive Security Certified Professional)",
    ],
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          Get to know me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          About Me
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-3"></div>
            
            <div className="relative bg-[#181818] rounded-2xl p-8 border border-[#33353F]">
              <p className="text-[#ADB7BE] text-lg leading-relaxed mb-8">
                I am Neeraj Kumar Yogi, a dedicated cybersecurity professional with expertise 
                in protecting organizations from evolving digital threats. My experience spans 
                penetration testing, security operations, incident response, and security 
                architecture design.
              </p>
              <p className="text-[#8892A0] leading-relaxed">
                I believe in proactive defense strategies and staying ahead of threat actors 
                through continuous learning and research. My goal is to help organizations 
                build resilient security postures while maintaining operational efficiency.
              </p>

              {/* Stats inside about card */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#33353F]">
                {[
                  { value: "50+", label: "Security Audits" },
                  { value: "100+", label: "Vulnerabilities" },
                  { value: "20+", label: "Clients" },
                  { value: "4", label: "Certifications" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-[#121212] border border-[#33353F]/50"
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#8892A0] mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  tab === tabItem.id
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                    : "bg-[#181818] text-[#ADB7BE] border border-[#33353F] hover:border-primary-500/50"
                }`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#181818] rounded-2xl p-6 border border-[#33353F]"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {currentTabData.title}
            </h3>
            <ul className="space-y-3">
              {currentTabData.content.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 text-[#ADB7BE]"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
