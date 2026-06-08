"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Clock, MapPin, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/content";

const TRUST_BADGES = [
  { icon: Star, label: "5.0 Google Rating", color: "text-amber-400" },
  { icon: Shield, label: "12+ Reviews", color: "text-sky-400" },
  { icon: Clock, label: "Open 24 Hours", color: "text-emerald-400" },
  { icon: MapPin, label: "Serves Calgary", color: "text-rose-400" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&q=90')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #0ea5e9 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Animated water shimmer lines */}
      <div className="absolute inset-x-0 bottom-0 h-64 overflow-hidden" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full opacity-20"
            style={{
              bottom: `${i * 14 + 20}px`,
              background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="flex gap-0.5" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
              ))}
            </span>
            <span className="text-white/90 text-sm font-medium">
              Rated 5.0 by {BUSINESS.reviewCount} Calgary homeowners
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 text-balance"
          >
            Calgary's Trusted{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Window & Exterior</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                aria-hidden="true"
              />
            </span>{" "}
            Cleaning Pros
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {BUSINESS.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="btn-primary text-base w-full sm:w-auto justify-center"
              aria-label="Get a free quote from AllPro Exteriors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="btn-secondary text-base w-full sm:w-auto justify-center"
              aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            role="list"
            aria-label="Trust indicators"
          >
            {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="glass rounded-2xl px-4 py-3.5 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors duration-200"
                role="listitem"
              >
                <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-medium text-center leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
          aria-hidden="true"
        >
          <motion.div
            className="w-1 h-2 bg-sky-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
