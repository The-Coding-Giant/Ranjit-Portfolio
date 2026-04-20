import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tips = [
  {
    title: "Password safety",
    description:
      "Use long, unique passwords for every account, especially for your email and study portals. Aim for at least 12 to 16 characters with a mix of letters, numbers, and symbols. Avoid reusing passwords across sites because one leak can compromise multiple accounts. A password manager can generate strong passwords and keep them secure, so you do not need to memorize everything. Update passwords if you suspect a breach, and never share them with friends or classmates. Consider enabling login alerts so you know if someone tries to access your account from a new device. These habits reduce the risk of account takeovers, lost assignments, or unauthorized access to your personal data.",
  },
  {
    title: "Phishing awareness",
    description:
      "Be cautious with links and attachments, even if the message looks official. Verify the sender address, check for small spelling mistakes, and question urgent or threatening language. Phishing scams often pretend to be your college, a bank, or a popular service. If a message asks for passwords, OTPs, or payment details, stop and verify through the official website or app. Hover over links to preview the destination before clicking. When in doubt, open a new tab and type the trusted website address yourself. Report suspicious emails to your institution if possible so others are warned. These steps prevent stolen accounts and financial loss.",
  },
  {
    title: "Safe browsing",
    description:
      "Stick to trusted websites and avoid unknown downloads, especially for cracked software, games, or files shared in random groups. Keep your browser updated so security patches are applied automatically. Use HTTPS websites when logging in or sharing data, and avoid entering passwords on suspicious pages. If you must use public Wi-Fi, do not access sensitive accounts unless you are using a trusted VPN. Clear your downloads folder and scan files before opening them. Log out of shared computers and avoid saving passwords on public devices. Safe browsing habits protect your device from malware and keep your assignments and personal data intact.",
  },
  {
    title: "Social media privacy",
    description:
      "Limit what you share publicly and review privacy settings regularly. Avoid posting personal details like your phone number, address, daily routine, or exam schedules. Scammers can use small details to guess security questions or impersonate you. Be cautious with friend requests from unknown people and double check tagged photos before they go live. Turn on two factor authentication for your social accounts and keep your profile visibility limited to trusted circles. Avoid posting real time locations and wait until you leave a place to share updates. A safer profile reduces identity theft risks and prevents strangers from tracking your location or habits.",
  },
  {
    title: "OTP & scam awareness",
    description:
      "Never share OTPs or verification codes, even with someone claiming to be support staff. Legit services do not ask for OTPs over phone, email, or chat. Scammers often create urgency, saying your account will be blocked unless you act immediately. Pause and verify directly from the official website or app. If you receive a code you did not request, do not share it and consider changing your password. Be cautious with screen sharing requests during calls and never read codes aloud. Teach friends and family the same rule because scams often spread quickly in student groups and class chats.",
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
              A practical, student-friendly guide to staying safe online. These tips
              cover everyday situations like logging into accounts, browsing for
              study material, and protecting personal information across apps.
            </p>
            <p className="text-[#94A3B8] max-w-2xl mx-auto mt-3">
              Use this as a quick checklist whenever you create accounts, use public
              Wi-Fi, or share content on social platforms. Small habits make a big
              difference over time.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#1a1624] border border-[#2f2838] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Include:</h2>
            <p className="text-[#94A3B8] mb-6">
              Each point below explains what to do and why it matters in real-world
              student scenarios. Keep it handy during exams, placements, and online
              transactions.
            </p>
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
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[#94A3B8] text-sm">
                Quick response tip: If you suspect a scam, stop responding, change
                your passwords, enable two factor authentication, and inform the
                relevant service or bank immediately.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
