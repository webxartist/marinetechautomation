"use client";

import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfoItem = ({ icon: Icon, children }) => (
  <p className="flex items-center gap-3 text-gray-300">
    {Icon && <Icon className="text-[#00d8ff]" />}
    {children}
  </p>
);

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  // ✅ Ensure animations only run after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "9819234848";
    const text = `Hello, I am *${name}*.\nMy email: ${email}\n\n${message}`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  // ✅ Render a static fallback until client mounts
  if (!mounted)
    return (
      <section className="min-h-screen bg-[#00111f] text-white flex items-center justify-center">
        <p>Loading contact form...</p>
      </section>
    );

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#00111f] via-[#002b4d] to-[#00111f] text-white py-20 px-6 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Get in <span className="text-[#00d8ff] drop-shadow-lg">Touch</span>
      </motion.h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#001829]/70 border border-[#00d8ff30] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 border-b border-[#00d8ff30] pb-2">
            Contact Information
          </h3>

          <div className="space-y-5">
            <ContactInfoItem icon={FaMapMarkerAlt}>
              204, AAR PEE CENTRE, CTS - 70, MIDC RD NO - 11, Andheri East, Opp.
              SEEPZ Gate, Gufic CMPND, Mumbai - 400093, India
            </ContactInfoItem>
            <ContactInfoItem icon={FaPhoneAlt}>+91 98192 34848</ContactInfoItem>
            <ContactInfoItem icon={FaPhoneAlt}>
              +91 22 4607 6496
            </ContactInfoItem>
            <ContactInfoItem icon={FaEnvelope}>
              arun@marinetechautomation.com
            </ContactInfoItem>
            <ContactInfoItem icon={FaEnvelope}>
              services@marinetechautomation.in
            </ContactInfoItem>
            <ContactInfoItem icon={FaGlobe}>
              www.marinetechautomation.com www.marinetechautomation.in
            </ContactInfoItem>

            <div className="mt-6">
              <p className="font-semibold text-[#00d8ff] text-lg">
                Mr. Arun L. D’souza
              </p>
              <p className="text-gray-400">Proprietor / Technical Manager</p>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#001829]/70 border border-[#00d8ff30] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 border-b border-[#00d8ff30] pb-2">
            Send Us a Message
          </h3>

          <div className="space-y-5">
            {["name", "email", "message"].map((field) =>
              field !== "message" ? (
                <input
                  key={field}
                  type={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                  required
                  className="w-full p-3 rounded-lg bg-[#002b4d]/40 border border-[#00d8ff40] focus:border-[#00d8ff] outline-none text-gray-200 placeholder-gray-400"
                />
              ) : (
                <textarea
                  key={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-[#002b4d]/40 border border-[#00d8ff40] focus:border-[#00d8ff] outline-none text-gray-200 placeholder-gray-400 resize-none"
                />
              )
            )}
            <button
              type="submit"
              className="w-full bg-[#00d8ff] text-[#00111f] font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
