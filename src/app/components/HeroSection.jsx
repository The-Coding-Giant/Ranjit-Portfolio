import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute -top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 right-6 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 text-primary-300 text-xs uppercase tracking-[0.3em] bg-primary-500/10">
              Aspiring Software Developer
            </span>
          </div>

          <div>
            <p className="text-[#B4BDC8] text-base sm:text-lg">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 glow-text">
                Anirudh Gangwar
              </span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl font-semibold text-white">
            Building thoughtful, reliable digital products.
          </p>

          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I enjoy crafting clean interfaces, writing readable code, and learning by
            shipping small, meaningful projects. I am focused on frontend fundamentals,
            modern JavaScript, and a practical full-stack toolkit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact-us"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            {/* <Link
              href="/projects"
              className="px-8 py-4 rounded-full border border-[#2f2838] text-white font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
            >
              View Projects
            </Link> */}
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-[#94A3B8]">
            <span className="px-4 py-2 rounded-full bg-[#1a1624] border border-[#2f2838]">
              Open to internships
            </span>
            <span className="px-4 py-2 rounded-full bg-[#1a1624] border border-[#2f2838]">
              Based in India
            </span>
            <span className="px-4 py-2 rounded-full bg-[#1a1624] border border-[#2f2838]">
              Available 2026
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-[#1a1624] border border-[#2f2838] p-8 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
              Portfolio Focus
            </p>
            <h2 className="text-3xl font-semibold text-white mt-4">Web Apps & UI</h2>
            <p className="text-[#94A3B8] mt-4 leading-relaxed">
              Clean layouts, responsive design, and solid fundamentals in HTML, CSS,
              JavaScript, SQL, and Python.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-4 text-center">
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-xs text-[#94A3B8]">Personal Projects</p>
            </div>
            <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-4 text-center">
              <p className="text-2xl font-bold text-white">5</p>
              <p className="text-xs text-[#94A3B8]">Tech Domains</p>
            </div>
            <div className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-4 text-center">
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-xs text-[#94A3B8]">Hours of Practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
