"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CallCta } from "@/components/CallCta";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-pink-line bg-white/90 px-5 py-3 backdrop-blur-md sm:px-8"
    >
      <a href="#top" className="inline-flex items-center transition-transform hover:scale-[1.03]">
        <Image src="/logo.png" alt="Olavu Clinic" width={160} height={91} className="h-11 w-auto" priority />
      </a>
      <div className="hidden items-center gap-2 text-sm text-ink-soft sm:flex">
        <a href="tel:+918310570414" className="hover:text-pink-deep">
          +91 83105 70414
        </a>
        <span aria-hidden="true">·</span>
        <span>Girinagar, Bengaluru</span>
      </div>
      <div className="hidden sm:block">
        <CallCta className="btn-primary !px-5 !py-2.5 !text-[0.85rem]">Call to book</CallCta>
      </div>
    </motion.header>
  );
}
