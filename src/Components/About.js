"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative bg-[#00111f] text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d8ff10] via-transparent to-[#00111f]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-[#00d8ff30] shadow-[0_0_20px_#00d8ff40]"
        >
          <Image
            src="/about.jpeg"
            alt="About MarineTech Automation"
            width={600}
            height={400}
            className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00111f90] to-transparent" />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-[#00d8ff] drop-shadow-lg">
              MarineTech Automation
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We specialize in delivering{" "}
            <strong>
              innovative marine automation and electrical control solutions
            </strong>{" "}
            for vessels worldwide. Our focus is on integrating cutting-edge
            technology to ensure reliability, safety, and efficiency at sea.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            With a team of skilled marine engineers and automation experts, we
            provide <strong>turnkey solutions</strong> - from system design to
            installation, maintenance, and upgrades. Our mission is to empower
            the marine industry through automation and smarter operations.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00d8ff80" }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 bg-[#00d8ff] text-black font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
