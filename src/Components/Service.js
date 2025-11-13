"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Network, Shield } from "lucide-react";

const services = [
  {
    icon: <Cpu size={36} className="text-[#00d8ff]" />,
    title: "Marine Automation Systems",
    desc: "Complete automation solutions for main engines, auxiliary systems, and power management.",
  },
  {
    icon: <Wrench size={36} className="text-[#00d8ff]" />,
    title: "Repair & Maintenance",
    desc: "Expert troubleshooting and maintenance for automation, navigation, and control equipment.",
  },
  {
    icon: <Network size={36} className="text-[#00d8ff]" />,
    title: "System Integration",
    desc: "We integrate PLCs, sensors, and control systems ensuring seamless vessel operations.",
  },
  {
    icon: <Shield size={36} className="text-[#00d8ff]" />,
    title: "Safety & Monitoring",
    desc: "Advanced alarm monitoring, safety protocols, and fault detection systems.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#00111f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-[#00d8ff] drop-shadow-lg">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Delivering reliable marine automation solutions and technical support
          across global waters.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-[#001b2b] rounded-2xl p-8 border border-[#00d8ff30] hover:border-[#00d8ff80] hover:shadow-[0_0_20px_#00d8ff50] transition-all duration-500 overflow-hidden"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00d8ff10] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="mb-5 drop-shadow-md">{service.icon}</div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
