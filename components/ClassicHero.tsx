"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CallCta } from "@/components/CallCta";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const PETALS = [
  { size: 220, style: { top: "-10%", left: "-10%" }, duration: 14 },
  { size: 160, style: { bottom: "-8%", right: "-5%" }, duration: 18 },
  { size: 120, style: { bottom: "20%", left: "15%" }, duration: 11 },
];

export function ClassicHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-20 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:py-20">
      <motion.div
        initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blush shadow-[0_24px_60px_-24px_rgba(214,37,155,0.35)] md:order-1"
      >
        {!prefersReduced && (
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {PETALS.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full blur-[2px]"
                style={{
                  width: p.size,
                  height: p.size,
                  opacity: 0.35,
                  background: "radial-gradient(circle at 35% 35%, var(--pink), transparent 70%)",
                  ...p.style,
                }}
                animate={{ x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
        )}
        <motion.div
          className="absolute inset-0"
          animate={prefersReduced ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/cover_plyground.png"
            alt="Children painting together at Olavu Clinic"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="relative z-10 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)] backdrop-blur-sm"
        >
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-pink" />
          A calm, colourful space for kids
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial={prefersReduced ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="md:order-2"
      >
        <motion.p variants={item} className="mb-3 font-mono text-xs uppercase tracking-widest text-pink-deep">
          Girinagar · Avalahalli, Bengaluru
        </motion.p>
        <motion.h2
          variants={item}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
        >
          One clinic. Every stage of your family&apos;s care.
        </motion.h2>
        <motion.p variants={item} className="mt-5 max-w-[46ch] text-lg text-ink-soft">
          Pediatrics, psychiatry, allergy-asthma and vaccination, under one roof — so you&apos;re not
          sent across town when your child&apos;s cough turns out to need a different doctor than
          their check-up.
        </motion.p>
        <motion.div variants={item} className="mt-7 flex flex-wrap gap-3.5">
          <CallCta className="btn-primary">Call to book</CallCta>
          <a href="#pillars" className="btn-ghost">
            Explore specialities
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
