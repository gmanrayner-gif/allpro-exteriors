"use client";

import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/content";
import { motion } from "framer-motion";

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="bg-navy-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl border border-white/20 transition-all active:scale-95 text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          Free Quote
        </a>
      </div>
    </motion.div>
  );
}
