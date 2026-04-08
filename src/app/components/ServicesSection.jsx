"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  LockClosedIcon,
  BugAntIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    icon: BugAntIcon,
  },
  {
    title: "Security Audits",
    description:
      "Thorough evaluation of your security posture, policies, and procedures.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Incident Response",
    description:
      "Rapid response to security breaches with forensic analysis and recovery.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Network Security",
    description:
      "Design and implementation of robust network security architectures.",
    icon: ServerStackIcon,
  },
  {
    title: "Cloud Security",
    description:
      "Securing cloud environments across AWS, Azure, and GCP platforms.",
    icon: CloudIcon,
  },
  {
    title: "Security Training",
    description:
      "Employee awareness training and phishing simulations for teams.",
    icon: LockClosedIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
          What I offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Services
        </h2>
        <p className="text-[#8892A0] mt-4 max-w-xl mx-auto">
          Comprehensive cybersecurity services to protect your organization from evolving threats
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-[#181818] border border-[#33353F] rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#8892A0] leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
