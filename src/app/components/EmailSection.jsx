"use client";
import React from "react";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="text-center mb-16">
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          Get in touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Contact Me
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Let&apos;s connect
          </h3>
          <p className="text-[#8892A0] mb-8 leading-relaxed">
            I am open to internships, collaborations, and entry-level opportunities.
            Feel free to reach out for project discussions or feedback.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[#8892A0] text-sm">Email</p>
                <p className="text-white">Sharmadivyanshu6367@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[#8892A0] text-sm">Mobile</p>
                <p className="text-white">6367206509</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[#8892A0] text-sm">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] border border-[#33353F] rounded-2xl p-8 h-full flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">
              Want to talk about a project?
            </h4>
            <p className="text-[#8892A0] leading-relaxed">
              I respond fastest over email. Share a quick overview of your goal,
              timeline, and scope so I can follow up with a clear plan.
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
