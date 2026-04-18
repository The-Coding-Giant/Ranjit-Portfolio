"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about-us",
  },
  // {
  //   title: "Projects",
  //   path: "/projects",
  // },
  {
    title: "Cybersecurity",
    path: "/cybersecurity-awareness",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0b14]/95 backdrop-blur-md border-b border-[#2f2838]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between py-4">
          <Link href={"/"} className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              AG
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
            <Link
              href="/contact-us"
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-[#1a1624] border border-[#2f2838] flex items-center justify-center text-white hover:border-primary-500/50 transition-colors duration-300"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          navbarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0e0b14]/95 backdrop-blur-md border-t border-[#2f2838] px-6 py-4">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className="block py-3 px-4 text-[#ADB7BE] hover:text-white hover:bg-[#1a1624] rounded-lg transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                onClick={() => setNavbarOpen(false)}
                className="block py-3 px-4 mt-2 text-center rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
