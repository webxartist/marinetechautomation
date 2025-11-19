"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

const certificates = [
  {
    title: "ISO 9001:2015 Certification",
    description:
      "Quality Management Systems certified for Calibration, Testing, Servicing & Marine Automation.",
    file: "/iso.pdf",
    image: "/iso.jpg",
  },
  {
    title: "RvA IAF Accreditation Seal",
    description:
      "IRQS accredited RvA & IAF seal certifying compliance with ISO 9001:2015 Standards.",
    file: "/irqs.pdf",
    image: "/irqs.jpg",
  },
];

const CertificateCard = ({ cert }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-[#001f2f]/60 border border-cyan-500/30 rounded-xl shadow-lg p-6 backdrop-blur-md hover:shadow-cyan-500/40 transition-all duration-300"
  >
    <div className="w-full h-48 bg-[#002b3d] rounded-lg overflow-hidden flex items-center justify-center mb-4">
      {cert.image ? (
        <Image
          src={cert.image}
          alt={cert.title}
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
      ) : (
        <FileText className="text-cyan-400 w-20 h-20" />
      )}
    </div>

    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{cert.title}</h3>

    <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

    <div className="flex gap-3">
      <a
        href={cert.file}
        target="_blank"
        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all text-sm"
      >
        <ExternalLink className="w-4 h-4" /> View
      </a>

      <a
        href={cert.file}
        download
        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all text-sm"
      >
        <Download className="w-4 h-4" /> Download
      </a>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-[#001a29] to-[#000c14] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-6xl font-bold mb-12 drop-shadow-[0_0_20px_#00d8ff70]"
        >
          🏅 Our Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
