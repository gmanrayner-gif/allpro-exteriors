"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { SERVICE_AREAS, BUSINESS } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function ServiceArea() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="service-area-heading"
    >
      <div className="container-custom" ref={ref}>
        <SectionHeading
          eyebrow="Where We Work"
          title="Proudly Serving "
          highlight="Calgary & Area"
          description={`${BUSINESS.name} is based in Calgary and also serves Nanaimo and Salmon Arm. Not sure if we reach you? Just call — we'll let you know.`}
          id="service-area-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Areas list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h3 className="font-display font-semibold text-navy-900 text-xl mb-5">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-3" role="list" aria-label="Service areas">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" aria-hidden="true" />
                  <span className="text-navy-900 font-medium text-sm">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-sky-50 border border-sky-100 rounded-xl flex gap-3">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-navy-900 font-semibold text-sm">Not on the list?</p>
                <p className="text-slate-600 text-sm mt-0.5">
                  Call us at{" "}
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-sky-600 font-semibold hover:underline"
                    aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
                  >
                    {BUSINESS.phone}
                  </a>{" "}
                  — we likely cover your area too.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-slate-100 aspect-video w-full relative"
              aria-label="Map showing AllPro Exteriors service area around Calgary, Alberta"
              role="img"
            >
              {/* Google Maps embed placeholder */}
              <iframe
                title="AllPro Exteriors Service Area - Calgary, Alberta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160919.14141989647!2d-114.27891474453592!3d51.04471410396948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1718000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-slate-500 text-xs mt-2">
              Calgary, Alberta — and surrounding communities
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
