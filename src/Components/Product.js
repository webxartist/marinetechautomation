"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const products = [
  // ⚙️ Marine Automation
  {
    category: " Engine Room Automation",
    title: "ME Governor Control",

    image: "/Governor.jpg",
  },
  {
    category: " Engine Room Automation",
    title: "Fuel Oil System",
    image: "/Fuel.jpg",
  },
  {
    category: " Engine Room Automation",
    title: "L.o. Pressure Control & Alarms",
    image: "/Lopressure.jpg",
  },
  {
    category: " Engine Room Automation",
    title: "Jacket Cooling Water Control",

    image: "/Jacket.jpg",
  },
  {
    category: " Engine Room Automation",
    title: "Scavenge Air Monitoring",
    image: "/Scavenge.jpg",
  },
  // 🧰 . Alarm & Monitoring Systems
  {
    category: "Alarm & Monitoring Systems",
    title: "Tank Overfill Alarm",
    image: "/Tank.jpg",
  },
  {
    category: "Alarm & Monitoring Systems",
    title: "Pressure",
    image: "/Pressure.jpg",
  },
  {
    category: "Alarm & Monitoring Systems",
    title: "Temprature",
    image: "/Temprature.jpg",
  },
  {
    category: "Alarm & Monitoring Systems",
    title: "Level",
    image: "/Level.jpg",
  },
  // 🧰 . Navigation Automation
  {
    category: " Navigation Automation",
    title: "ODME Systems",
    description:
      "Oil discharge monitoring systems supply and annual calibration.",
    image: "/IMG-8.jpg",
  },
  {
    category: " Navigation Automation",
    title: "Fixed Gas Detectors",
    description: "Installation and maintenance of fixed gas detection systems.",
    image: "/img-9.jpg",
  },

  //Cargo Control Systems (Tanker / Bulk / LNG)
  {
    category: "Cargo Control Systems (Tanker / Bulk / LNG)",
    title: "Cargo Tank Monitoring System",
    image: "/Cargo.jpg",
  },
  {
    category: "Cargo Control Systems (Tanker / Bulk / LNG)",
    title: "Invert Gas Genrator",
    image: "/Invert.jpg",
  },
  // Safety Systems
  {
    category: " Safety Systems",
    title: "Fire Detection System",
    image: "/fire.jpg",
  },
  {
    category: " Safety Systems",
    title: "Multimeter",
    description:
      "Marine-grade multimeters for diagnostics and calibration tasks.",
    image: "/img-13.jpg",
  },
  //. Power Management System (PMS)
  {
    category: "Power Management System (PMS)",
    title: "15ppm Bilge Alarm Monitor",
    description:
      "Supply and servicing of 15ppm bilge alarm monitoring systems.",
    image: "/img-14.jpg",
  },
  {
    category: "Power Management System (PMS)",
    title: "Electronic Navigation",
    description: "Installation and inspection of radar and navigation systems.",
    image: "/img-15.jpg",
  },
  // Communication & Control Networks
  {
    category: " Communication & Control Networks",
    title: "PCB",
    description:
      "Hydraulic and electrical crane inspection and repair services.",
    image: "/img-16.jpg",
  },

  {
    category: " Communication & Control Networks",
    title: "Oil Mist Detector",
    description: "Maintenance and calibration of oil mist detection systems.",
    image: "/img-17.png",
  },
  // Specialized Engine Room Automation
  {
    category: " Specialized Engine Room Automation",
    title: "Alarm Monitoring Panel",
    description: "Repair and testing of alarm monitoring control panels.",
    image: "/img-18.png",
  },
  {
    category: " Specialized Engine Room Automation",
    title: "Generator Controller",
    description: "Supply, installation, and testing of generator controllers.",
    image: "/img-19.png",
  },

  {
    category: " Specialized Engine Room Automation",
    title: "Fire Fighting Systems",
    description:
      "Annual inspection and refilling of firefighting equipment onboard.",
    image: "/img-20.jpg",
  },
  {
    category: " Specialized Engine Room Automation",
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
                className="object-fill w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
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
