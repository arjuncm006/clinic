"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PILLARS } from "@/lib/clinic-data";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Pillars() {
  const [activeKey, setActiveKey] = useState(PILLARS[0].key);
  const active = PILLARS.find((p) => p.key === activeKey)!;

  return (
    <section id="pillars" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-pink-deep"
      >
        What we treat
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-[26ch] font-display text-3xl font-semibold sm:text-4xl"
      >
        Four specialities. One continuous record.
      </motion.h2>

      <div className="mt-10 grid gap-8 md:grid-cols-[300px_1fr] md:gap-12">
        <div
          role="tablist"
          aria-label="Clinic specialities"
          className="relative flex flex-col border-l-2 border-pink-line pl-7"
        >
          {PILLARS.map((p) => {
            const isActive = p.key === activeKey;
            return (
              <button
                key={p.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveKey(p.key)}
                className="relative flex items-center gap-3.5 py-3.5 text-left"
              >
                <span className="absolute -left-[1.94rem] grid h-3 w-3 place-items-center">
                  {isActive ? (
                    <motion.span
                      layoutId="pillar-dot"
                      className="absolute h-3 w-3 rounded-full bg-pink shadow-[0_0_0_4px_var(--blush)]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  ) : (
                    <span className="h-3 w-3 rounded-full border-2 border-pink-line bg-white" />
                  )}
                </span>
                <span>
                  <strong className={`block text-[1.05rem] ${isActive ? "text-pink-deep" : "text-ink"}`}>
                    {p.label}
                  </strong>
                  <small className="text-sm text-ink-soft">{p.tagline}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-pink-line bg-white p-6 shadow-[0_12px_30px_-14px_rgba(214,37,155,0.22)] sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-2xl font-semibold">{active.title}</h3>
              <div className="mb-4 mt-4 flex items-center gap-3.5">
                {active.photo ? (
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full shadow-[0_4px_14px_-4px_rgba(31,35,64,0.25)]"
                  >
                    <Image
                      src={active.photo}
                      alt={active.doctor}
                      width={56}
                      height={56}
                      className={`h-14 w-14 object-cover ${active.photoPosition ?? "object-[center_15%]"}`}
                    />
                  </motion.div>
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush font-mono text-base font-semibold text-pink-deep">
                    {initials(active.doctor)}
                  </span>
                )}
                <p className="font-mono text-sm text-pink-deep">{active.doctor}</p>
              </div>
              <p className="max-w-[55ch] text-ink-soft">{active.blurb}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {active.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[0.95rem]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
