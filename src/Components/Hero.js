"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Marine Tech Automation",
    subtitle:
      "Powering marine innovation through advanced automation, calibration, and navigation systems.",
    image:
      "https://www.senamarineservices.com/sena-mist/images-mist/images/webimages/our-services/marine-automation.jpg",
  },
  {
    id: 2,
    title: "Precision at Sea",
    subtitle:
      "From engine control to navigation — we deliver reliability for every voyage.",
    image: "https://www.techmarineservices.ae/assets/img/slider/1.jpg",
  },
  {
    id: 3,
    title: "Smart Marine Engineering",
    subtitle:
      "Integrating cutting-edge marine technology with expert craftsmanship.",
    image:
      "https://www.shutterstock.com/image-photo/engine-officer-recording-working-parameters-260nw-2369534131.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a29]/80 via-[#000c14]/70 to-[#000c14]/95 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cyan-400 leading-tight drop-shadow-[0_0_30px_#00d8ff80]"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mt-4 leading-relaxed"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="https://wa.me/919819234848?text=Hi!%20I%20want%20to%20know%20more%20about%20Marine%20Tech%20Automation%20services."
            target="_blank"
            className="inline-block bg-gradient-to-r from-[#00d8ff] to-[#00ffa3] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-[0_0_25px_rgba(0,216,255,0.6)] hover:shadow-[0_0_35px_rgba(0,255,163,0.8)] hover:scale-105 transition-all duration-300"
          >
            Contact Us on WhatsApp
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute mt-8 inset-x-0 top-1/2 flex justify-between items-center px-4 sm:px-8 z-20">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-cyan-400/20 p-2 sm:p-3 rounded-full backdrop-blur-md text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-cyan-400/20 p-2 sm:p-3 rounded-full backdrop-blur-md text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? "bg-cyan-400 shadow-[0_0_15px_#00d8ff]"
                : "bg-gray-400/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
