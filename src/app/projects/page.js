"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A clean portfolio built with responsive sections, project filtering, and polished UI.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Task Tracker",
    description:
      "CRUD task manager with filters, status badges, and local storage persistence.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["React", "CSS", "LocalStorage"],
  },
  {
    id: 3,
    title: "Movie Explorer",
    description:
      "Search and browse movies with API integration and responsive cards.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["JavaScript", "API", "UI"],
  },
  {
    id: 4,
    title: "SQL Practice Dashboard",
    description:
      "Interface for running sample SQL queries and viewing results cleanly.",
    tag: ["All", "Data"],
    gitUrl: "https://github.com",
    technologies: ["SQL", "Tables", "Filters"],
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Real-time weather search with saved locations and unit toggles.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["JavaScript", "API", "CSS"],
  },
  {
    id: 6,
    title: "Auth UI Kit",
    description:
      "Reusable authentication screens with clean layouts and validation states.",
    tag: ["All", "UI"],
    gitUrl: "https://github.com",
    technologies: ["UI", "Forms", "UX"],
  },
  {
    id: 7,
    title: "Expense Tracker",
    description:
      "Simple expense tracking app with charts and category filters.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    technologies: ["React", "Charts", "State"],
  },
  {
    id: 8,
    title: "Study Planner",
    description:
      "Schedule planner with weekly views and progress reminders.",
    tag: ["All", "UI"],
    gitUrl: "https://github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative bg-[#1a1624] border border-[#2f2838] rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500">
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
    </div>
  );
};

export default function ProjectsPage() {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const tags = ["All", "Web", "UI", "Data"];

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16">
          <div className="text-center mb-16">
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
              A collection of practice builds and UI-focused projects that show
              how I think, design, and ship.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map((tagName) => (
              <button
                key={tagName}
                onClick={() => setTag(tagName)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  tag === tagName
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-[#1a1624] border border-[#2f2838] text-[#8892A0] hover:border-primary-500/50 hover:text-white"
                }`}
              >
                {tagName}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-[#2f2838]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in collaboration?
            </h2>
            <p className="text-[#8892A0] mb-8 max-w-lg mx-auto">
              I am open to internships, freelance work, and collaborative projects.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
