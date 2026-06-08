"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin, Star, CheckCircle, MessageCircle, Shield, Clock,
} from "lucide-react";
import Image from "next/image";
import { WHY_CHOOSE, BUSINESS } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const ICON_MAP: Record<string, React.ElementType> = {
  MapPin, Star, CheckCircle, MessageCircle, Shield, Clock,
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040e1a 0%, #071629 50%, #0b2252 100%)" }}
      aria-labelledby="why-heading"
    >
      {/* Decorative orb */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Why AllPro"
              title="Exterior Cleaning You Can "
              highlight="Actually Trust"
              description={`We're not just another cleaning company — we're your Calgary neighbours, and we treat every home like it's our own.`}
              light
              center={false}
              id="why-heading"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex-shrink-0"
          >
            <Image
              src="/technician.jpg"
              alt="AllPro Exteriors technician with professional cleaning equipment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass rounded-xl px-3 py-2 text-center">
                <p className="text-white font-semibold text-sm">Professional & Friendly</p>
                <p className="text-white/70 text-xs">Pure water system technology</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          role="list"
          aria-label="Company statistics"
        >
          {[
            { value: "5.0★", label: "Google Rating" },
            { value: "12+", label: "Happy Customers" },
            { value: "24/7", label: "Available" },
            { value: "100%", label: "Streak-Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center" role="listitem">
              <div className="font-display font-bold text-3xl md:text-4xl text-sky-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
