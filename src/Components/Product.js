"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const products = [
  // ⚙️ Marine Automation
  {
    category: "Marine Automation",
    title: "Boiler Repair",
    description: "Expert repair and automation of marine boiler systems.",
    image: "/img-1.jpg",
  },
  {
    category: "Marine Automation",
    title: "PCB Repair",
    description:
      "Professional PCB-level repair for automation and control boards.",
    image: "/img-2.jpeg",
  },
  {
    category: "Marine Automation",
    title: "Main Engine Repair",
    description:
      "Inspection and complete repair of marine main engines and control units.",
    image: "/img-3.jpg",
  },
  {
    category: "Marine Automation",
    title: "Generator Repair",
    description: "Servicing, overhauling, and part replacement for generators.",
    image: "/img4.jpg",
  },
  {
    category: "Marine Automation",
    title: "PLC Retrofit",
    description:
      "Upgradation and reprogramming of PLC systems for enhanced automation.",
    image: "/img5.jpg",
  },

  // 🧰 Marine Calibration
  {
    category: "Marine Calibration",
    title: "UTI Meter",
    description: "Calibration and maintenance of UTI meters for accuracy.",
    image: "/img31.jpg",
  },
  {
    category: "Marine Calibration",
    title: "Portable Gas Detectors",
    description: "Supply and calibration of portable gas detection devices.",
    image: "/img-7.jpg",
  },
  {
    category: "Marine Calibration",
    title: "ODME Systems",
    description:
      "Oil discharge monitoring systems supply and annual calibration.",
    image: "/IMG-8.jpg",
  },
  {
    category: "Marine Calibration",
    title: "Fixed Gas Detectors",
    description: "Installation and maintenance of fixed gas detection systems.",
    image: "/img-9.jpg",
  },
  {
    category: "Marine Calibration",
    title: "IG O2 Analyzers",
    description: "Calibration and maintenance of inert gas oxygen analyzers.",
    image: "/img10.jpg",
  },
  {
    category: "Marine Calibration",
    title: "Flow Meters",
    description: "Calibration and repair of marine flow meter systems.",
    image: "/img-11.jpg",
  },
  {
    category: "Marine Calibration",
    title: "Life Saving Appliances",
    description: "Inspection and calibration of LSA devices onboard ships.",
    image: "/img-12.jpg",
  },
  {
    category: "Marine Calibration",
    title: "Multimeter",
    description:
      "Marine-grade multimeters for diagnostics and calibration tasks.",
    image: "/img-13.jpg",
  },
  {
    category: "Marine Calibration",
    title: "15ppm Bilge Alarm Monitor",
    description:
      "Supply and servicing of 15ppm bilge alarm monitoring systems.",
    image: "/img-14.jpg",
  },

  // 🧭 Ship Navigation
  {
    category: "Ship Navigation",
    title: "Electronic Navigation",
    description: "Installation and inspection of radar and navigation systems.",
    image: "/img-15.jpg",
  },
  {
    category: "Ship Navigation",
    title: "Cranes Repair",
    description:
      "Hydraulic and electrical crane inspection and repair services.",
    image: "/img-16.jpg",
  },

  // ⚙️ Ship Spares
  {
    category: "Ship Spares",
    title: "Oil Mist Detector",
    description: "Maintenance and calibration of oil mist detection systems.",
    image: "/img-17.png",
  },
  {
    category: "Ship Spares",
    title: "Alarm Monitoring Panel",
    description: "Repair and testing of alarm monitoring control panels.",
    image: "/img-18.png",
  },
  {
    category: "Ship Spares",
    title: "Generator Controller",
    description: "Supply, installation, and testing of generator controllers.",
    image: "/img-19.png",
  },

  // 🛟 Marine Safety (LSA / FFA)
  {
    category: "Marine Safety - LSA / FFA",
    title: "Fire Fighting Systems",
    description:
      "Annual inspection and refilling of firefighting equipment onboard.",
    image: "/img-20.jpg",
  },
  {
    category: "Marine Safety - LSA / FFA",
    title: "Life Saving Appliances",
    description:
      "Inspection and maintenance of life jackets, lifeboats, and rescue boats.",
    image: "/img21.jpg",
  },
];

const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const whatsappNumber = "919819234848";

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#001a29] to-[#000d16] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden scroll-smooth">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d8ff15,transparent_70%)] pointer-events-none" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-bold text-center mb-12 drop-shadow-[0_0_25px_#00d8ff70]"
      >
        ⚙️ Our Products & Services
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {uniqueCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full border font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-cyan-500 text-white border-cyan-400 shadow-[0_0_15px_#00d8ff60]"
                : "bg-[#001f2f]/80 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 hover:text-cyan-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group bg-[#001f2f]/70 border border-cyan-500/40 rounded-2xl overflow-hidden backdrop-blur-md shadow-md hover:shadow-[0_0_30px_#00d8ff70] transition-all duration-300 relative"
          >
            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                  product.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/60 text-cyan-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                💬 Get Enquiry
              </a>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">
                {product.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {product.description}
              </p>
              <span className="inline-block text-xs font-medium text-cyan-200 bg-cyan-900/30 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
