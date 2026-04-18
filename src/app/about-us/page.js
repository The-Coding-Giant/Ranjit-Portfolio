import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Clarity",
    description:
      "I focus on clean UI, readable code, and layouts that are easy to understand.",
  },
  {
    title: "Consistency",
    description:
      "I value steady progress, reusable components, and scalable patterns.",
  },
  {
    title: "Curiosity",
    description:
      "I enjoy learning new tools and improving my craft through real projects.",
  },
];

const focusAreas = [
  "Frontend fundamentals and responsive design",
  "JavaScript, React, and Next.js workflows",
  "SQL basics and data-driven UI",
  "Problem solving and algorithmic thinking",
];

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div className="space-y-6">
              <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
                About me
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Anirudh Gangwar
              </h1>
              <p className="text-[#8892A0] max-w-2xl">
                Aspiring software developer focused on building thoughtful, reliable,
                and user-friendly web experiences.
              </p>
              <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
                <p className="text-[#ADB7BE] leading-relaxed mb-4">
                  I am passionate about turning ideas into real products. I enjoy
                  building clean interfaces, learning new tools, and improving my
                  skills through consistent practice.
                </p>
                <p className="text-[#8892A0] leading-relaxed">
                  My goal is to grow into a well-rounded developer who can contribute
                  to collaborative teams and build products that feel simple and useful.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#2f2838] bg-[#1a1624] p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#8892A0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-[#2f2838]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Current Focus</h2>
              <p className="text-[#8892A0] mt-3 max-w-2xl">
                I am building depth in these areas while continuing to ship portfolio
                projects and practical demos.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {focusAreas.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#1a1624] border border-[#2f2838] rounded-xl p-4"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                <p className="text-[#ADB7BE]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
