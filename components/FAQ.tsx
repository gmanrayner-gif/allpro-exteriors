"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen ? "border-sky-200 shadow-glass" : "border-slate-100 shadow-sm hover:border-slate-200"
      }`}
    >
      <button
        id={id}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`font-display font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? "text-sky-600" : "text-navy-900 group-hover:text-sky-600"}`}>
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-600"
          }`}
          aria-hidden="true"
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-slate-100 pt-4">
              <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="section-padding bg-slate-50" aria-labelledby="faq-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions "
          highlight="Answered"
          description="Everything you need to know about our services, availability, and process."
          id="faq-heading"
        />

        <div
          className="max-w-3xl mx-auto space-y-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQS.map((item, i) => (
            <div key={i} role="listitem">
              <FAQItem
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="tel:4038889458"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg active:scale-95"
            aria-label="Call AllPro Exteriors for answers"
          >
            Call Us — We're Available 24/7
          </a>
        </motion.div>
      </div>
    </section>
  );
}
