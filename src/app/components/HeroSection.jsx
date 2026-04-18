import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-[75vh] lg:min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      <div className="absolute top-12 -left-24 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 -right-24 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full relative z-10">
        <div className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full border border-primary-500/30 text-primary-400 text-sm font-medium bg-primary-500/5">
              Aspiring Software Developer
            </span>
          </div>

          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-[#B4BDC8] text-lg sm:text-xl font-normal mb-2">
              Hello, I am
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 glow-text">
              Divyanshu Sharma
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6">
            Building thoughtful, reliable digital products.
          </div>

          <p className="text-[#94A3B8] text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            I enjoy crafting clean interfaces, writing readable code, and learning by
            shipping small, meaningful projects. I am focused on frontend fundamentals,
            modern JavaScript, and a practical full-stack toolkit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            {/* <Link
              href="/projects"
              className="group px-8 py-4 rounded-full border border-[#33353F] text-white font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
            >
              View Projects
            </Link> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#33353F]/50 text-center sm:text-left">
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-sm text-[#94A3B8]">Personal Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-[#94A3B8]">Tech Domains Explored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-[#94A3B8]">Hours of Practice</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-5 place-self-center mt-8 lg:mt-0 w-full flex justify-center">
          <div className="relative">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-3xl bg-[#141821] border border-[#2A2F3A] p-6 sm:p-8 shadow-lg">
              <div className="h-full w-full rounded-2xl border border-[#2A2F3A] bg-gradient-to-br from-[#101623] to-[#0B111B] p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#94A3B8]">
                    Portfolio Focus
                  </p>
                  <h2 className="text-xl sm:text-3xl font-semibold text-white mt-3">
                    Web Apps & UI
                  </h2>
                  <p className="text-[#94A3B8] mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                    Clean layouts, responsive design, and solid fundamentals in
                    HTML, CSS, JavaScript, SQL, and Python.
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#94A3B8]">
                  <span>Open to internships</span>
                  <span className="text-primary-300">2026</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl border border-primary-500/30 bg-primary-500/10"></div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl border border-secondary-500/30 bg-secondary-500/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
