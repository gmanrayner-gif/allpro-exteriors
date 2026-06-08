"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/content";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-xl shadow-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center group" aria-label="AllPro Exteriors - Home">
              <Image
                src="/logo.PNG"
                alt="AllPro Exteriors Logo"
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow active:scale-95"
                aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute top-0 left-0 right-0 bg-navy-950 border-b border-white/10 pt-20 pb-6 px-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-4 py-3.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/8 rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95"
                  onClick={handleNavClick}
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS.phone}
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3.5 rounded-xl border border-white/15 transition-all active:scale-95"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
