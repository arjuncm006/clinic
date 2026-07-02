"use client";

import { motion, type Variants } from "framer-motion";
import { CallCta } from "@/components/CallCta";

const BENEFITS = [
  {
    title: "Book privately",
    body: "Reserve a psychiatry visit by phone or WhatsApp — no waiting room, no explaining why you're here.",
  },
  {
    title: "One file, four specialities",
    body: "Vaccination records, allergy tests and growth charts live in one place — not scattered across clinics.",
  },
  {
    title: "Doctors who know your family",
    body: "See the same doctor every visit. Dr. Puneeth H R and Dr. Vathsalya S Gowda track your case over years, not minutes.",
  },
  {
    title: "Two minutes from Girinagar Post Office",
    body: "A full family clinic in your neighbourhood — no drive across town for a specialist.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl rounded-[32px] bg-blush px-5 py-16 sm:px-8 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-pink-deep"
      >
        Why families choose Olavu
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-[26ch] font-display text-3xl font-semibold sm:text-4xl"
      >
        Everything your family needs, in one clinic
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {BENEFITS.map((b) => (
          <motion.div
            key={b.title}
            variants={item}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white p-7 shadow-[0_12px_30px_-14px_rgba(214,37,155,0.22)] transition-shadow hover:shadow-[0_18px_36px_-14px_rgba(214,37,155,0.32)]"
          >
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush text-xl text-pink">
              ✿
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold">{b.title}</h3>
            <p className="text-[0.95rem] text-ink-soft">{b.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-ink p-8 text-white sm:p-10"
      >
        <div>
          <h3 className="font-display text-xl font-semibold sm:text-2xl">Ready to visit?</h3>
          <p className="mt-1 text-white/75">Call or message us and we&apos;ll find you a slot today.</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <CallCta className="btn-primary">Call +91 83105 70414</CallCta>
          <a
            href="https://wa.me/918310570414"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            WhatsApp us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
