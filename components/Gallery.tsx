"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=90",
    alt: "Beautiful Calgary home serviced by AllPro Exteriors",
    label: "Residential Cleaning",
    large: true,
  },
  {
    src: "/exterior window cleaning.jpg",
    alt: "Professional exterior window cleaning in progress",
    label: "Exterior Windows",
    large: false,
  },
  {
    src: "/streak-free results.png",
    alt: "Streak-free crystal clear windows after cleaning",
    label: "Streak-Free Results",
    large: false,
  },
  {
    src: "/gutter cleaning.jpg",
    alt: "Gutter cleaning service on Calgary home",
    label: "Gutter Cleaning",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=90",
    alt: "Premium home exterior cleaned by AllPro Exteriors Calgary",
    label: "Premium Homes",
    large: false,
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-white" aria-labelledby="gallery-heading">
      <div className="container-custom" ref={ref}>
        <SectionHeading
          eyebrow="Our Work"
          title="Real Results from "
          highlight="Real Calgary Homes"
          description="Every job is done with care, precision, and a streak-free guarantee."
          id="gallery-heading"
        />

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Large feature photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card relative group"
          >
            <img
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/70 to-transparent p-5">
              <span className="text-white font-semibold text-sm">{PHOTOS[0].label}</span>
            </div>
          </motion.div>

          {/* Small photos */}
          {PHOTOS.slice(1).map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-card relative group bg-slate-100"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/70 to-transparent p-3">
                <span className="text-white font-semibold text-xs">{photo.label}</span>
              </div>
            </motion.div>
          ))}

          {/* Technician card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-card relative group bg-slate-100"
          >
            <img
              src="/technician.jpg"
              alt="AllPro Exteriors technician with professional pure water system"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/70 to-transparent p-3">
              <span className="text-white font-semibold text-xs">Our Team & Equipment</span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-4">Want results like these at your home?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow active:scale-95"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
