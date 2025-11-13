"use client";

import { motion } from "framer-motion";
import {
  FaCogs,
  FaMicrochip,
  FaIndustry,
  FaServer,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const AutomationPage = () => {
  const services = [
    {
      icon: <FaCogs className="text-[#00d8ff] text-4xl" />,
      title: "PLC & SCADA Systems",
      desc: "Design and programming of advanced PLC and SCADA systems for industrial automation and remote monitoring.",
    },
    {
      icon: <FaMicrochip className="text-[#00d8ff] text-4xl" />,
      title: "Control Panel Integration",
      desc: "Custom-built control panels with intelligent automation components for seamless operations.",
    },
    {
      icon: <FaIndustry className="text-[#00d8ff] text-4xl" />,
      title: "Process Automation",
      desc: "Automation solutions for process industries to ensure efficiency, safety, and productivity.",
    },
    {
      icon: <FaServer className="text-[#00d8ff] text-4xl" />,
      title: "System Upgrades & Maintenance",
      desc: "Upgradation, troubleshooting, and maintenance of automation systems for optimal uptime.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#00111f] via-[#001d33] to-[#000c18] text-white pt-28 pb-20">
      {/* Hero Section */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-[#00d8ff] drop-shadow-[0_0_10px_#00d8ff]"
        >
          Automation Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          At Marine Tech Automation, we deliver cutting-edge industrial
          automation solutions — from PLC & SCADA integration to process control
          — empowering your business with reliability, efficiency, and
          innovation.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-16 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#001829]/80 border border-[#00d8ff30] rounded-2xl p-6 hover:shadow-[0_0_20px_#00d8ff50] transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Want to automate your marine or industrial system?
        </p>
        <Link
          href="https://wa.me/918087137412"
          target="_blank"
          className="inline-flex items-center gap-2 bg-[#00d8ff] text-[#00111f] font-semibold px-6 py-3 rounded-full hover:bg-[#0ff] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_#00d8ff80]"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </Link>
      </motion.div>
    </section>
  );
};

export default AutomationPage;
