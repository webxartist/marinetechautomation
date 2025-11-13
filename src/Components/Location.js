"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const indianPorts = [
  "Mundra",
  "Kandla",
  "Sikka",
  "Hazira",
  "Pipavav",
  "Dahej",
  "JNPT",
  "Goa",
  "Mangalore",
  "Kakinada",
  "Kochi",
  "Chennai",
  "Tuticorin",
  "Vizag",
  "Kolkata",
];

const internationalPorts = [
  "Dubai",
  "Singapore",
  "Hong Kong",
  "Turkey",
  "South Africa",
  "China",
  "Sri Lanka",
];

const ServiceLocations = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/map.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000b14]/90 via-[#00101a]/80 to-[#000b14]/90" />

      {/* Bottom Ship Image */}
      <div className="absolute bottom-0 left-0 w-full h-56 md:h-72">
        <img
          src="/ship-bg.png"
          alt="ship background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 py-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-10 sm:mb-12 drop-shadow-[0_0_25px_#00d8ff50]">
          🌍 Our Service Locations
        </h2>

        {/* Indian Ports */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_15px_#00d8ff60]">
            Indian Ports 🇮🇳
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
            {indianPorts.map((port, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 
                  bg-[#00233a]/80 border border-cyan-500/40 rounded-full text-cyan-300 
                  text-sm sm:text-base font-medium shadow-[0_0_10px_#00d8ff30] backdrop-blur-sm cursor-pointer
                  hover:bg-cyan-500/20 hover:text-cyan-100 hover:shadow-[0_0_20px_#00d8ff80] 
                  transition-all duration-300 w-full sm:w-auto text-center"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                {port}
              </motion.div>
            ))}
          </div>
        </div>

        {/* International Ports */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_15px_#00d8ff60]">
            International Ports 🌐
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
            {internationalPorts.map((port, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 
                  bg-[#00233a]/80 border border-cyan-500/40 rounded-full text-cyan-300 
                  text-sm sm:text-base font-medium shadow-[0_0_10px_#00d8ff30] backdrop-blur-sm cursor-pointer
                  hover:bg-cyan-500/20 hover:text-cyan-100 hover:shadow-[0_0_20px_#00d8ff80] 
                  transition-all duration-300 w-full sm:w-auto text-center"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                {port}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-14 inline-block bg-gradient-to-r from-[#00d8ff] to-[#00ffa3] hover:from-[#00ffa3] hover:to-[#00d8ff] 
          text-black px-10 py-3 rounded-full font-semibold shadow-[0_0_20px_#00d8ff60] transition-all duration-300"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ServiceLocations;
