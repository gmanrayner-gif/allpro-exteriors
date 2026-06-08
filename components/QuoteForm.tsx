"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Upload, CheckCircle, AlertCircle, X } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/content";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INPUT_BASE =
  "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 text-sm";

const LABEL_BASE = "block text-sm font-semibold text-navy-800 mb-1.5";

export default function QuoteForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [files, setFiles] = useState<File[]>([]);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files).slice(0, 5));
    }
  };

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xrevkglb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          service: form.service,
          message: form.message,
          _subject: `New Quote Request from ${form.name} — AllPro Exteriors`,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eef4fb 100%)" }}
      aria-labelledby="quote-heading"
    >
      <div className="container-custom" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2"
            >
              <span className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-sky-500" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Free Quote</span>
                <span className="h-px w-8 bg-sky-500" aria-hidden="true" />
              </span>

              <h2
                id="quote-heading"
                className="font-display font-bold text-3xl sm:text-4xl text-navy-900 leading-tight mb-4"
              >
                Get Your Free, No-Obligation Quote
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Fill out the form and we'll get back to you fast — usually within the hour. Or call us directly anytime.
              </p>

              {/* Quick contact */}
              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 p-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow active:scale-95 group"
                  aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Call Us Anytime</div>
                    <div className="font-display font-bold text-lg">{BUSINESS.phone}</div>
                  </div>
                </a>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-navy-900 text-sm">Fast Response</div>
                      <div className="text-slate-500 text-xs mt-0.5">We reply within the hour, 24/7</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-navy-900 text-sm">No Obligation</div>
                      <div className="text-slate-500 text-xs mt-0.5">Quote is completely free — no pressure</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-6 sm:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">
                      Quote Request Received!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thanks! We'll be in touch within the hour. Or call us now at{" "}
                      <a href={BUSINESS.phoneHref} className="text-sky-600 font-semibold hover:underline">
                        {BUSINESS.phone}
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", email: "", address: "", service: "", message: "" }); setFiles([]); }}
                      className="text-sm text-slate-500 hover:text-navy-900 underline transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Quote request form">
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-6">
                      Request a Free Quote
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className={LABEL_BASE}>
                          Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          className={INPUT_BASE}
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={LABEL_BASE}>
                          Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="(403) 555-0100"
                          value={form.phone}
                          onChange={handleChange}
                          className={INPUT_BASE}
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className={LABEL_BASE}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={INPUT_BASE}
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="address" className={LABEL_BASE}>
                        Property Address <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        autoComplete="street-address"
                        placeholder="123 Main Street SW, Calgary, AB"
                        value={form.address}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        aria-required="true"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="service" className={LABEL_BASE}>
                        Service Needed <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        aria-required="true"
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Multiple Services">Multiple Services</option>
                        <option value="Not Sure">Not Sure — Please Advise</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="message" className={LABEL_BASE}>Additional Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Number of windows, property size, specific concerns, preferred timing…"
                        value={form.message}
                        onChange={handleChange}
                        className={`${INPUT_BASE} resize-none`}
                      />
                    </div>

                    {/* File upload */}
                    <div className="mb-6">
                      <label className={LABEL_BASE}>
                        Upload Photos{" "}
                        <span className="font-normal text-slate-400">(optional, max 5)</span>
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 hover:border-sky-300 rounded-xl p-5 text-center cursor-pointer transition-colors duration-200 hover:bg-sky-50/50"
                        role="button"
                        tabIndex={0}
                        aria-label="Upload photos of your property"
                      >
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" aria-hidden="true" />
                        <p className="text-sm text-slate-500">
                          Click to upload photos of your property
                        </p>
                        <p className="text-xs text-slate-400 mt-1">JPG, PNG, HEIC up to 10MB each</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFiles}
                          className="sr-only"
                          aria-label="Choose photo files to upload"
                        />
                      </div>

                      {files.length > 0 && (
                        <ul className="mt-3 space-y-2" aria-label="Selected files">
                          {files.map((file, i) => (
                            <li
                              key={i}
                              className="flex items-center justify-between p-2.5 bg-sky-50 rounded-lg border border-sky-100 text-sm"
                            >
                              <span className="text-navy-800 truncate max-w-xs">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-slate-400 hover:text-rose-500 transition-colors ml-2"
                                aria-label={`Remove file ${file.name}`}
                              >
                                <X className="w-4 h-4" aria-hidden="true" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl mb-5 text-rose-700 text-sm" role="alert" aria-live="assertive">
                        <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        Something went wrong. Please call us at {BUSINESS.phone}.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow active:scale-95 text-base"
                      aria-busy={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          Send My Free Quote Request
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-3">
                      No spam. No pressure. We'll respond within the hour.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
