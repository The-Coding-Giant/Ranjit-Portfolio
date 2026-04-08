import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neeraj Kumar Yogi | Cybersecurity Expert',
  description: 'Cybersecurity professional specializing in penetration testing, network security, and threat analysis. Protecting digital assets and securing the future.',
  keywords: ['cybersecurity', 'penetration testing', 'security analyst', 'network security', 'ethical hacker'],
  authors: [{ name: 'Neeraj Kumar Yogi' }],
  openGraph: {
    title: 'Neeraj Kumar Yogi | Cybersecurity Expert',
    description: 'Cybersecurity professional specializing in penetration testing, network security, and threat analysis.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
