"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home, Sun, Sparkles, Droplets, Zap, Wind, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const ICON_MAP: Record<string, React.ElementType> = {
  Home, Sun, Sparkles, Droplets, Zap, Wind,
};

const CARD_ACCENTS = [
  "from-sky-400/20 to-blue-500/10",
  "from-blue-400/20 to-indigo-500/10",
  "from-cyan-400/20 to-sky-500/10",
  "from-teal-400/20 to-emerald-500/10",
  "from-sky-500/20 to-cyan-400/10",
  "from-indigo-400/20 to-blue-500/10",
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-slate-50" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Professional Exterior Cleaning "
          highlight="Services"
          description="From spotless windows to clean gutters and pressure-washed surfaces — we handle every inch of your home's exterior with care and precision."
          id="services-heading"
        />

        <div ref={ref} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Home;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-xl border border-slate-100 hover:border-sky-100 transition-all duration-300 hover:-translate-y-1 flex flex-col flex-shrink-0 w-72 sm:w-auto snap-start"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${CARD_ACCENTS[i]} flex items-center justify-center mb-5 ring-1 ring-sky-200/60 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-sky-600" />
                </div>

                <h3 className="font-display font-semibold text-xl text-navy-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1 mb-5">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200 group-hover:text-sky-500"
                  aria-label={`Get a quote for ${service.title}`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            Get a Free Quote on Any Service
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
