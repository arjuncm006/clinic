"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

const TILT_ANGLES = [-8, 6, -5, 9];
function tiltFor(index: number) {
  return TILT_ANGLES[index % TILT_ANGLES.length];
}

export function Pillars() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  function next() {
    setActive((p) => (p + 1) % PILLARS.length);
  }
  function prev() {
    setActive((p) => (p - 1 + PILLARS.length) % PILLARS.length);
  }

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

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative mx-auto h-[320px] w-full max-w-sm md:mx-0">
          <AnimatePresence>
            {PILLARS.map((p, index) => {
              const isActive = index === active;
              return (
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, scale: 0.9, rotate: tiltFor(index) }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1 : 0.95,
                    rotate: isActive ? 0 : tiltFor(index),
                    zIndex: isActive ? 999 : PILLARS.length + 2 - index,
                    y: isActive ? [0, -30, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, rotate: tiltFor(index) }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.doctor}
                      fill
                      sizes="(min-width: 768px) 24rem, 90vw"
                      draggable={false}
                      className={`rounded-3xl object-cover shadow-[0_20px_50px_-20px_rgba(31,35,64,0.4)] ${p.photoPosition ?? "object-[center_15%]"}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-blush font-mono text-4xl font-semibold text-pink-deep shadow-[0_20px_50px_-20px_rgba(31,35,64,0.4)]">
                      {initials(p.doctor)}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{current.title}</h3>
              <p className="mt-1 font-mono text-sm text-pink-deep">{current.doctor}</p>
              <p className="mt-6 max-w-[55ch] text-ink-soft">
                {current.blurb.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.015 * i }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {current.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[0.95rem]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous speciality"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-blush transition-colors hover:bg-pink-line"
            >
              <ArrowLeft className="h-4 w-4 text-ink transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next speciality"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-blush transition-colors hover:bg-pink-line"
            >
              <ArrowRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
