"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full border border-primary-500/30 text-primary-400 text-sm font-medium bg-primary-500/5">
              Cybersecurity Professional
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block text-[#ADB7BE] text-xl sm:text-2xl lg:text-3xl font-normal mb-2">
              Hello, I am
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 glow-text">
              Neeraj Kumar Yogi
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 h-12"
          >
            <TypeAnimation
              sequence={[
                "Security Analyst",
                2000,
                "Penetration Tester",
                2000,
                "Threat Hunter",
                2000,
                "Security Architect",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#ADB7BE]"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#8892A0] text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
          >
            Dedicated to protecting digital assets and infrastructure through 
            proactive security measures, vulnerability assessment, and incident response.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/projects"
              className="group px-8 py-4 rounded-full border border-[#33353F] text-white font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-[#33353F]/50"
          >
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-[#8892A0]">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-[#33353F]"></div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-[#8892A0]">Security Audits</div>
            </div>
            <div className="w-px h-12 bg-[#33353F]"></div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-[#8892A0]">Vulnerabilities</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
          className="col-span-1 lg:col-span-5 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative">
            {/* Outer ring - animated */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary-500/20"
              style={{ width: "420px", height: "420px", margin: "-10px" }}
            ></motion.div>

            {/* Middle ring with gradient */}
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full relative animate-float">
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border border-primary-500/30 animate-pulse-ring"></div>
              <div className="absolute inset-[-20px] rounded-full border border-primary-500/10 animate-pulse-ring" style={{ animationDelay: "1s" }}></div>
              
              {/* Main gradient ring */}
              <div className="absolute inset-0 rounded-full animated-gradient p-[2px]">
                <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
                  {/* Inner content */}
                  <div className="text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-400"
                    >
                      NKY
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                      className="text-[#8892A0] text-sm lg:text-base mt-2 tracking-widest uppercase"
                    >
                      Security Expert
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating icons around the circle */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-lg bg-[#181818] border border-[#33353F] flex items-center justify-center text-primary-400"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 rounded-lg bg-[#181818] border border-[#33353F] flex items-center justify-center text-secondary-400"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 rounded-lg bg-[#181818] border border-[#33353F] flex items-center justify-center text-primary-400"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
