import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute -top-24 left-12 w-72 h-72 bg-primary-500/18 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-8 w-80 h-80 bg-secondary-500/18 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/3 w-48 h-48 border border-white/10 rounded-3xl rotate-12"></div>

      <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary-200">
            Aspiring Software Developer
          </div>

          <div className="glass-panel rounded-3xl p-8 sm:p-10 ring-1 ring-white/10">
            <p className="text-[#B6C2D6] text-base sm:text-lg">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-200 to-secondary-400 glow-text">
                Ranjit Kumar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-white mt-4">
              Building thoughtful, reliable digital products.
            </p>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mt-5">
              I enjoy crafting clean interfaces, writing readable code, and learning by
              shipping small, meaningful projects. I am focused on frontend fundamentals,
              modern JavaScript, and a practical full-stack toolkit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact-us"
                className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              {/* <Link
                href="/projects"
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-medium hover:border-primary-500/50 hover:bg-white/5 transition-all duration-300"
              >
                View Projects
              </Link> */}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#94A3B8]">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Excel
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Power BI
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                SQL
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Python
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                AI & ML
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-8 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
              Portfolio Focus
            </p>
            <h2 className="text-3xl font-semibold text-white mt-4">Web Apps & UI</h2>
            <p className="text-[#94A3B8] mt-4 leading-relaxed">
              Data-focused work with Excel, Power BI, SQL, Python, and AI/ML concepts
              for clean insights and practical solutions.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 ring-1 ring-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">12+</p>
                <p className="text-xs text-[#94A3B8]">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-xs text-[#94A3B8]">Domains</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-xs text-[#94A3B8]">Hours</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-4 text-sm text-[#94A3B8] ring-1 ring-white/5">
              Open to internships
            </div>
            <div className="glass-panel rounded-2xl p-4 text-sm text-[#94A3B8] ring-1 ring-white/5">
              Based in India
            </div>
            <div className="glass-panel rounded-2xl p-4 text-sm text-[#94A3B8] ring-1 ring-white/5">
              Available 2026
            </div>
            <div className="glass-panel rounded-2xl p-4 text-sm text-[#94A3B8] ring-1 ring-white/5">
              Remote friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
