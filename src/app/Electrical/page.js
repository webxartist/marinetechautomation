"use client";

import { motion } from "framer-motion";
import {
  FaBolt,
  FaChargingStation,
  FaTools,
  FaProjectDiagram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const ElectricalPage = () => {
  const electricalServices = [
    {
      icon: <FaBolt className="text-[#00d8ff] text-4xl" />,
      title: "Marine & Industrial Electrical Systems",
      desc: "Design and installation of advanced marine and industrial electrical systems ensuring safety, efficiency, and performance.",
    },
    {
      icon: <FaChargingStation className="text-[#00d8ff] text-4xl" />,
      title: "Power Distribution Panels",
      desc: "Custom-built and tested distribution boards, MCC panels, and control systems for smooth electrical operations.",
    },
    {
      icon: <FaTools className="text-[#00d8ff] text-4xl" />,
      title: "Electrical Maintenance & Repair",
      desc: "Preventive maintenance, fault diagnosis, and repair services for all types of marine and industrial electrical setups.",
    },
    {
      icon: <FaProjectDiagram className="text-[#00d8ff] text-4xl" />,
      title: "Cabling & Installation Works",
      desc: "Complete cabling, termination, and installation services following marine and industrial safety standards.",
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
          Electrical Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          At Marine Tech Automation, our electrical experts deliver reliable and
          efficient electrical engineering services for both marine and
          industrial sectors — covering design, installation, maintenance, and
          troubleshooting.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-16 max-w-7xl mx-auto">
        {electricalServices.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#001829]/80 border border-[#00d8ff30] rounded-2xl p-6 hover:shadow-[0_0_20px_#00d8ff50] transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {item.desc}
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
          Looking for electrical design, installation, or maintenance services?
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

export default ElectricalPage;
