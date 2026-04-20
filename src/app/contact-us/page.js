import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactCards = [
  {
    title: "Email",
    value: "ranjitkumar01324@gmail.com",
  },
  {
    title: "Mobile",
    value: "9334500204",
  },
  {
    title: "Location",
    value: "India",
  },
];

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <section className="py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div>
              <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
                Contact
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
                Let&apos;s Connect
              </h1>
              <p className="text-[#8892A0] max-w-2xl mt-4">
                I am open to internships, entry-level roles, and collaboration. Reach
                out with a short description of your project or opportunity.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-3">Quick Note</h2>
              <p className="text-[#8892A0] leading-relaxed">
                This site does not send messages directly. Please use email or phone
                and I will reply as soon as possible.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {contactCards.map((item, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6"
              >
                <p className="text-[#8892A0] text-xs uppercase tracking-[0.3em]">
                  {item.title}
                </p>
                <p className="text-white text-lg mt-3 break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
