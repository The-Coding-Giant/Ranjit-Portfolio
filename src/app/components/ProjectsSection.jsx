"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A clean personal portfolio with responsive layout and smooth navigation.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Task Tracker",
    description: "A simple CRUD app for tracking tasks with filtering and local storage.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce UI",
    description: "Product listing UI with cart flow, responsive cards, and clean typography.",
    image: "/images/projects/3.png",
    tag: ["All", "UI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "SQL Practice Dashboard",
    description: "Small interface for querying datasets with saved snippets and results view.",
    image: "/images/projects/4.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "API-driven weather app with search, favorites, and unit toggles.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Landing Page Kit",
    description: "Reusable marketing sections and CTA blocks for fast project starts.",
    image: "/images/projects/6.png",
    tag: ["All", "UI"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-10">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          Portfolio
        </span>
        <h2 className="text-4xl font-bold text-white mt-2">My Projects</h2>
      </div>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        {[
          { name: "All" },
          { name: "Web" },
          { name: "UI" },
          { name: "Data" },
        ].map((item) => (
          <ProjectTag
            key={item.name}
            onClick={handleTagChange}
            name={item.name}
            isSelected={tag === item.name}
          />
        ))}
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
