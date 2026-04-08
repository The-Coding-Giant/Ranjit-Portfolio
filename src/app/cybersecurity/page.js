"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  GlobeAltIcon,
  ServerStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { value: "2,200+", label: "Cyberattacks per day globally" },
  { value: "$4.45M", label: "Average cost of a data breach" },
  { value: "95%", label: "Breaches caused by human error" },
  { value: "277", label: "Days to identify a breach" },
];

const threats = [
  {
    icon: ExclamationTriangleIcon,
    title: "Ransomware Attacks",
    description:
      "Malicious software that encrypts your data and demands payment for its release. Organizations lose millions annually to ransomware.",
  },
  {
    icon: GlobeAltIcon,
    title: "Phishing Campaigns",
    description:
      "Deceptive emails and websites designed to steal credentials and sensitive information through social engineering tactics.",
  },
  {
    icon: ServerStackIcon,
    title: "Data Breaches",
    description:
      "Unauthorized access to sensitive data can lead to financial loss, reputation damage, and regulatory penalties.",
  },
  {
    icon: UserGroupIcon,
    title: "Insider Threats",
    description:
      "Employees or contractors who misuse their access, whether intentionally or accidentally, pose significant security risks.",
  },
];

const bestPractices = [
  {
    title: "Strong Password Policies",
    description:
      "Implement complex passwords, multi-factor authentication, and regular password rotation to protect accounts.",
  },
  {
    title: "Regular Security Training",
    description:
      "Educate employees about security threats, phishing awareness, and safe computing practices.",
  },
  {
    title: "Keep Systems Updated",
    description:
      "Apply security patches and updates promptly to close vulnerabilities that attackers could exploit.",
  },
  {
    title: "Data Encryption",
    description:
      "Encrypt sensitive data both at rest and in transit to protect it from unauthorized access.",
  },
  {
    title: "Network Segmentation",
    description:
      "Divide your network into segments to contain breaches and limit lateral movement by attackers.",
  },
  {
    title: "Incident Response Plan",
    description:
      "Have a documented plan for responding to security incidents to minimize damage and recovery time.",
  },
];

const frameworks = [
  {
    name: "NIST Cybersecurity Framework",
    description:
      "A comprehensive framework for managing and reducing cybersecurity risk across organizations.",
  },
  {
    name: "ISO 27001",
    description:
      "International standard for information security management systems (ISMS).",
  },
  {
    name: "OWASP Top 10",
    description:
      "A standard awareness document for web application security risks.",
  },
  {
    name: "MITRE ATT&CK",
    description:
      "A knowledge base of adversary tactics and techniques based on real-world observations.",
  },
];

export default function CybersecurityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative z-10"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                Cybersecurity
              </span>{" "}
              Matters
            </h1>
            <p className="text-[#8892A0] max-w-2xl mx-auto text-lg">
              In an increasingly connected world, protecting your digital assets
              is not optional but essential for survival and success.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 text-center hover:border-primary-500/30 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-[#8892A0] text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Threat Landscape */}
        <section className="py-16 border-t border-[#33353F]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Threat Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Common Cyber Threats
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#181818] border border-[#33353F] rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <threat.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {threat.title}
                      </h3>
                      <p className="text-[#8892A0] leading-relaxed">
                        {threat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 border-t border-[#33353F]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Security Best Practices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4">
                  <span className="text-primary-400 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {practice.title}
                </h3>
                <p className="text-[#8892A0] text-sm leading-relaxed">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security Frameworks */}
        <section className="py-16 border-t border-[#33353F]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Security Frameworks
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#181818] border border-[#33353F] rounded-2xl p-6 hover:border-secondary-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></div>
                  <h3 className="text-lg font-semibold text-white">
                    {framework.name}
                  </h3>
                </div>
                <p className="text-[#8892A0] leading-relaxed pl-5">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-[#33353F]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 border border-[#33353F] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="relative z-10">
              <ShieldCheckIcon className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Protect Your Organization
              </h2>
              <p className="text-[#8892A0] max-w-2xl mx-auto mb-8">
                Do not wait for a breach to happen. Take proactive steps to
                secure your digital assets. I can help you assess your security
                posture and implement robust defenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  Get Security Assessment
                </Link>
                <Link
                  href="/#services"
                  className="px-8 py-4 rounded-full border border-[#33353F] text-white font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
