"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-gray-200 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-400 text-transparent bg-clip-text mb-4">
            Marine Tech Automation
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            AN ISO 9001:2015 Company Certified by ABS. Providing marine
            automation and control system solutions globally.
          </p>

          {/* Socials */}
          <div className="flex gap-5 mt-5">
            <Link
              href="https://wa.me/919819234848"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-green-400 hover:text-green-500 text-2xl transition-transform hover:scale-125" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-400 hover:text-blue-500 text-2xl transition-transform hover:scale-125" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-pink-400 hover:text-pink-500 text-2xl transition-transform hover:scale-125" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-sky-400 hover:text-sky-500 text-2xl transition-transform hover:scale-125" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-5 border-b border-blue-800 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-5 border-b border-blue-800 pb-2">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <span>
                204, AAR PEE CENTRE, CTS - 70, MIDC RD NO - 11, ANDHERI EAST,
                Opp. SEEPZ Gate, Gufic Compound, Mumbai - 400093, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <Link
                href="tel:+91 22 4607 6496"
                className="hover:text-blue-400 transition-colors"
              >
                +91 22 40100662
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <Link
                href="mailto:services@marinetechautomation.com"
                className="hover:text-blue-400 transition-colors"
              >
                services@marinetechautomation.in
              </Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-5 border-b border-blue-800 pb-2">
            Working Hours
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 1:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative border-t border-blue-800/50 backdrop-blur-md py-4 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Marine Tech Automation. All Rights
          Reserved. | Built by{" "}
          <Link
            href="https://www.webxartist.com"
            target="_blank"
            className="text-blue-400 hover:text-cyan-300 font-medium transition-colors"
          >
            WebXArtist.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
