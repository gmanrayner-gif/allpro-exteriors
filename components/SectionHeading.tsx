"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  light?: boolean;
  center?: boolean;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  light = false,
  center = true,
  id,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div ref={ref} className={clsx("max-w-3xl mb-12 md:mb-16", center && "mx-auto text-center")}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
          aria-hidden="true"
        >
          <span className="h-px w-8 bg-sky-500" />
          <span
            className={clsx(
              "text-sm font-semibold uppercase tracking-widest",
              light ? "text-sky-400" : "text-sky-600"
            )}
          >
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-sky-500" />
        </motion.div>
      )}

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08 }}
        className={clsx(
          "font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className={light ? "gradient-text" : "text-sky-600"}>{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16 }}
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-slate-600"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
