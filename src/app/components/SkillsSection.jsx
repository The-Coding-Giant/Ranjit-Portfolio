"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Penetration Testing", level: 95 },
  { name: "Network Security", level: 90 },
  { name: "Python Scripting", level: 85 },
  { name: "SIEM Tools", level: 88 },
  { name: "Incident Response", level: 92 },
  { name: "Cloud Security", level: 85 },
];

const tools = [
  "Burp Suite",
  "Metasploit",
  "Nmap",
  "Wireshark",
  "Splunk",
  "Nessus",
  "OWASP ZAP",
  "Kali Linux",
  "Ghidra",
  "IDA Pro",
  "Snort",
  "Suricata",
];

const methodologies = [
  "OWASP Top 10",
  "MITRE ATT&CK Framework",
  "NIST Cybersecurity Framework",
  "ISO 27001",
  "PTES",
];

const SkillsSection = () => {
  return (
    <section className="py-24" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          My expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Technical Skills
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills with progress bars */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
            Core Competencies
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-[#ADB7BE] font-medium">{skill.name}</span>
                  <span className="text-primary-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#1a1a2e] rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools and Methodologies */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
            Tools and Technologies
          </h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-[#181818] border border-[#33353F] rounded-lg text-[#8892A0] hover:border-primary-500/50 hover:text-primary-400 transition-colors duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400"></span>
            Methodologies
          </h3>
          <div className="space-y-3">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#8892A0] group"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-white transition-colors duration-300">{method}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
