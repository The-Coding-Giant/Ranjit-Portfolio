"use client";
import React from "react";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Contact Me
          </h2>
        </div>
        <p className="text-[#94A3B8] max-w-2xl">
          I am open to internships, collaborations, and entry-level opportunities.
          Feel free to reach out for project discussions or feedback.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 relative z-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Email</p>
            <p className="text-white text-lg mt-3">ranjitkumar01324@gmail.com</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Mobile</p>
            <p className="text-white text-lg mt-3">9334500204</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 sm:col-span-2 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Location</p>
            <p className="text-white text-lg mt-3">India</p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between ring-1 ring-white/10">
          <div>
            <h4 className="text-2xl font-semibold text-white mb-3">
              Ready to collaborate?
            </h4>
            <p className="text-[#8892A0] leading-relaxed">
              Share a short outline of your project goals, timeline, and scope.
              I will respond with next steps and a clear plan.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Open Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
