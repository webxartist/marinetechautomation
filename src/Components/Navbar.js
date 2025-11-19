"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];

  const serviceLinks = [
    { name: "Automation", href: "/Automation" },
    { name: "Instrumentation", href: "/Instrumentation" },
    { name: "Electrical", href: "/Electrical" },
    { name: "Calibration", href: "/Calibration" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#00111f] via-[#002b4d] to-[#00111f] backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl lg:text-3xl font-bold tracking-wide select-none flex items-center gap-1"
          >
            <img src="/logo.png" alt="" height={60} width={60} />
            <span className="text-[#00d8ff] drop-shadow-lg">Marine</span>
            <span className="text-white">Tech Automation</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-200 text-[17px] font-medium transition-colors duration-300 hover:text-[#00d8ff]"
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}

            {/* Services Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-200 text-[17px] font-medium transition-colors duration-300 hover:text-[#00d8ff]">
                Our Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>

              <AnimatePresence>
                {isServiceOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-10 left-0 w-56 bg-[#001829] rounded-lg border border-[#00d8ff30] shadow-lg py-3 overflow-hidden z-50"
                  >
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-5 py-2 text-gray-200 hover:text-[#00d8ff] hover:bg-[#002b4d] transition-colors duration-300"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Contact Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            {/* Gmail */}
            <Link
              href="mailto:info@marinetech.com"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Send Email"
            >
              <Mail className="text-[#00d8ff] hover:text-[#0ff] drop-shadow-md" />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/918087137412"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="text-[#00d8ff] text-2xl hover:text-[#0ff] drop-shadow-md" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-[#00d8ff] transition-transform duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[76px] left-0 w-full bg-[#001829] border-t border-[#00d8ff30] md:hidden shadow-lg z-40"
            >
              <ul className="flex flex-col items-center gap-6 py-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-100 text-lg font-medium hover:text-[#00d8ff] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* Services (Mobile) */}
                <details className="w-full text-center relative group">
                  <summary className="cursor-pointer text-gray-100 text-lg font-medium hover:text-[#00d8ff]">
                    Our Services
                  </summary>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-yellow-400 group-hover:w-20 transition-all duration-300"></span>
                  <ul className="mt-2 flex flex-col gap-2">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-400 hover:text-[#00d8ff] text-base"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Contact Icons (Mobile) */}
                <div className="flex gap-6 mt-4">
                  <Link
                    href="mailto:info@marinetech.com"
                    aria-label="Send Email"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Mail className="text-[#00d8ff] text-2xl hover:text-[#0ff]" />
                  </Link>

                  <Link
                    href="https://wa.me/9819234848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="text-[#00d8ff] text-2xl hover:text-[#0ff]" />
                  </Link>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9819234848"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00d8ff] hover:bg-[#0ff] p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl drop-shadow-md" />
      </a>
    </>
  );
};

export default Navbar;
