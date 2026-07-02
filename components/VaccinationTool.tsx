"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VACCINE_AGES, VACCINES } from "@/lib/clinic-data";

export function VaccinationTool() {
  const [age, setAge] = useState("6m");
  const list = VACCINES[age];

  return (
    <section id="vaccination-tool" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-pink-deep"
      >
        Vaccination Centre
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-3xl font-semibold sm:text-4xl"
      >
        Know what&apos;s due next
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 max-w-[60ch] text-ink-soft"
      >
        Choose your child&apos;s age to see the checklist. Sample schedule for demo purposes — your
        doctor will confirm the exact plan.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {VACCINE_AGES.map((a) => {
          const isActive = a.key === age;
          return (
            <button
              key={a.key}
              onClick={() => setAge(a.key)}
              className={`relative rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "border-pink text-white" : "border-pink-line text-ink hover:border-pink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="age-pill"
                  className="absolute inset-0 rounded-full bg-pink"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                />
              )}
              <span className="relative z-10">{a.label}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid max-w-xl gap-3">
        <AnimatePresence mode="popLayout">
          {list.map((v, i) => (
            <motion.li
              key={age + v}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-[10px] border border-pink-line bg-white px-4 py-3.5"
            >
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink" />
              {v}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
