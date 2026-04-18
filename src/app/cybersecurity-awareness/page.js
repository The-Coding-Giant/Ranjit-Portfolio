import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tips = [
  {
    title: "Password safety",
    description:
      "Use long, unique passwords for every account. A password manager helps you store them securely and avoid reuse.",
  },
  {
    title: "Phishing awareness",
    description:
      "Be cautious with links and attachments. Check the sender address and look for spelling or urgency red flags before clicking.",
  },
  {
    title: "Safe browsing",
    description:
      "Stick to trusted websites, avoid unknown downloads, and keep your browser updated to prevent security gaps.",
  },
  {
    title: "Social media privacy",
    description:
      "Limit what you share publicly, review privacy settings, and avoid posting personal details that could be misused.",
  },
  {
    title: "OTP & scam awareness",
    description:
      "Never share OTPs or verification codes. Legit services will not ask for them by phone or email.",
  },
];

export default function CybersecurityAwarenessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Part 3: Cybersecurity Awareness
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Cyber Safety Tips for Students
            </h1>
            <p className="text-[#8892A0] max-w-2xl mx-auto mt-4">
              A quick and simple checklist to stay safe online while studying and
              using digital tools.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#181818] border border-[#33353F] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Include:</h2>
            <div className="space-y-5">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></span>
                  <div>
                    <h3 className="text-white font-semibold">{tip.title}</h3>
                    <p className="text-[#ADB7BE] mt-1 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
