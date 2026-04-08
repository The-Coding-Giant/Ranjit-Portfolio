"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "Vulnerability Scanner",
    description:
      "Automated vulnerability scanning tool built with Python that identifies security weaknesses in web applications and generates detailed reports.",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com",
    technologies: ["Python", "Nmap", "SQLite"],
  },
  {
    id: 2,
    title: "Network Traffic Analyzer",
    description:
      "Real-time network packet analysis tool for detecting suspicious activities and potential intrusion attempts.",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com",
    technologies: ["Python", "Scapy", "Wireshark"],
  },
  {
    id: 3,
    title: "Phishing Detection System",
    description:
      "Machine learning-based system that analyzes URLs and email content to detect phishing attempts with high accuracy.",
    tag: ["All", "Security"],
    gitUrl: "https://github.com",
    technologies: ["Python", "TensorFlow", "NLP"],
  },
  {
    id: 4,
    title: "Security Dashboard",
    description:
      "Comprehensive security monitoring dashboard that aggregates data from multiple sources for SOC operations.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["React", "Node.js", "Elasticsearch"],
  },
  {
    id: 5,
    title: "Password Strength Analyzer",
    description:
      "Tool that evaluates password strength using entropy calculation and checks against known breach databases.",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com",
    technologies: ["Python", "API Integration", "Hashing"],
  },
  {
    id: 6,
    title: "Malware Analysis Sandbox",
    description:
      "Isolated environment for safely analyzing suspicious files and understanding malware behavior patterns.",
    tag: ["All", "Security"],
    gitUrl: "https://github.com",
    technologies: ["Python", "Docker", "YARA"],
  },
  {
    id: 7,
    title: "Incident Response Toolkit",
    description:
      "Collection of scripts and tools for rapid incident response, evidence collection, and forensic analysis.",
    tag: ["All", "Tools"],
    gitUrl: "https://github.com",
    technologies: ["Python", "PowerShell", "Bash"],
  },
  {
    id: 8,
    title: "Cloud Security Scanner",
    description:
      "Tool for continuous monitoring and assessment of cloud infrastructure security across AWS, Azure, and GCP.",
    tag: ["All", "Security"],
    gitUrl: "https://github.com",
    technologies: ["Python", "Terraform", "Cloud APIs"],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative bg-[#181818] border border-[#33353F] rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500">
        <div className="h-48 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="text-6xl font-bold text-primary-500/20">
            {String(project.id).padStart(2, "0")}
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center transition-colors bg-black/30 backdrop-blur-sm"
            >
              <CodeBracketIcon className="w-5 h-5 text-white" />
            </a>
            <button className="w-12 h-12 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center transition-colors bg-black/30 backdrop-blur-sm">
              <EyeIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[#8892A0] text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const tags = ["All", "Tools", "Security", "Web"];

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                Projects
              </span>
            </h1>
            <p className="text-[#8892A0] max-w-2xl mx-auto">
              A collection of cybersecurity tools, research projects, and
              applications I have developed to solve real-world security
              challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {tags.map((tagName) => (
              <button
                key={tagName}
                onClick={() => setTag(tagName)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  tag === tagName
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-[#181818] border border-[#33353F] text-[#8892A0] hover:border-primary-500/50 hover:text-white"
                }`}
              >
                {tagName}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-[#33353F]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in collaboration?
            </h2>
            <p className="text-[#8892A0] mb-8 max-w-lg mx-auto">
              I am always open to discussing new security projects and research
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
