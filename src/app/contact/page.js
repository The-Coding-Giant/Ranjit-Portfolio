"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16 relative">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative z-10"
          >
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Get in touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                Me
              </span>
            </h1>
            <p className="text-[#8892A0] max-w-2xl mx-auto">
              Have a project in mind or need cybersecurity consultation? I would
              love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#181818] border border-[#33353F] rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-[#8892A0] mb-8 leading-relaxed">
                  Feel free to reach out through any of the following channels.
                  I typically respond within 24-48 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#8892A0] text-sm">Email</p>
                      <p className="text-white font-medium">
                        neeraj@cybersecurity.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#8892A0] text-sm">Location</p>
                      <p className="text-white font-medium">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#8892A0] text-sm">Availability</p>
                      <p className="text-white font-medium">
                        Open for freelance projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#33353F]">
                  <p className="text-white font-medium mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-[#121212] border border-[#33353F] flex items-center justify-center text-[#8892A0] hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-[#121212] border border-[#33353F] flex items-center justify-center text-[#8892A0] hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-[#121212] border border-[#33353F] flex items-center justify-center text-[#8892A0] hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="bg-[#181818] border border-secondary-500/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-20 h-20 rounded-full bg-secondary-500/10 flex items-center justify-center mb-6"
                  >
                    <svg
                      className="w-10 h-10 text-secondary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Message Sent
                  </h3>
                  <p className="text-[#8892A0] max-w-sm">
                    Thank you for reaching out. I will review your message and
                    get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-xl border border-[#33353F] text-white hover:border-primary-500/50 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#181818] border border-[#33353F] rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Send a Message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121212] border border-[#33353F] rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121212] border border-[#33353F] rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-white text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121212] border border-[#33353F] rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="Security Consultation"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="text-white text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-[#121212] border border-[#33353F] rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or security needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
