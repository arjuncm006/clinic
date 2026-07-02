"use client";

import { motion } from "framer-motion";

export function MobileCallBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-pink-line bg-white/95 px-4 pt-3 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a href="tel:+918310570414" className="btn-primary flex-1 !py-3">
        Call now
      </a>
      <a
        href="https://wa.me/918310570414"
        target="_blank"
        rel="noopener"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink"
      >
        WhatsApp
      </a>
    </motion.div>
  );
}
