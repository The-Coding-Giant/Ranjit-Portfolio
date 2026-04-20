import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Ranjit Kumar | Aspiring Software Developer",
  description:
    "Aspiring software developer focused on building clean, reliable, and user-friendly web experiences.",
  keywords: [
    "software developer",
    "web developer",
    "frontend",
    "full stack",
    "javascript",
    "react",
  ],
  authors: [{ name: "Ranjit Kumar" }],
  openGraph: {
    title: "Ranjit Kumar | Aspiring Software Developer",
    description:
      "Aspiring software developer focused on building clean, reliable, and user-friendly web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  );
}
