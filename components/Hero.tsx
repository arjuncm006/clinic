"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { CallCta } from "@/components/CallCta";
import { PILLARS } from "@/lib/clinic-data";

const HEADLINE = "Here for your family,\nat every step.";

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function useVideoScrub(videoRef: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevX: number | null = null;
    let duration = 0;

    function onLoadedMetadata() {
      if (video) duration = video.duration;
    }

    function onMouseMove(e: MouseEvent) {
      if (window.innerWidth < 1024) return;
      if (!video || !duration || !isFinite(duration)) return;
      if (prevX === null) {
        prevX = e.clientX;
        return;
      }
      const deltaX = e.clientX - prevX;
      prevX = e.clientX;
      const next = video.currentTime + (deltaX / window.innerWidth) * 0.8 * duration;
      video.currentTime = Math.min(Math.max(next, 0), duration);
    }

    function onSeeked() {}

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) duration = video.duration;
    window.addEventListener("mousemove", onMouseMove);
    video.addEventListener("seeked", onSeeked);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("mousemove", onMouseMove);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.play().catch(() => {});
    }
  }, [videoRef]);
}

function ServicePills() {
  const [selected, setSelected] = useState<string[]>([]);
  const options = PILLARS.map((p) => p.label);

  function toggle(label: string) {
    setSelected((sel) => (sel.includes(label) ? sel.filter((s) => s !== label) : [...sel, label]));
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-medium tracking-tight text-ink">What sort of service?</h2>
      <p className="mb-8 text-ink-soft opacity-85">Select all that apply</p>

      <div className="mb-6 flex flex-wrap gap-3">
        {options.map((label) => {
          const active = selected.includes(label);
          return (
            <motion.button
              key={label}
              type="button"
              onClick={() => toggle(label)}
              whileTap={{ scale: 0.96 }}
              className={
                active
                  ? "flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-ink/10 transform"
                  : "flex items-center gap-2 rounded-full border border-pink-line bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-pink-line/40"
              }
            >
              {label}
              {active && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex"
                >
                  <Check className="h-4 w-4" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="text-xs italic text-ink-soft"
          >
            Please click to select services above.
          </motion.p>
        ) : (
          <motion.div
            key="filled"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden rounded-2xl border border-pink-line bg-[#FAFBF9]"
          >
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-sm text-ink">Ready to inquire about: {selected.join(", ")}</p>
              <CallCta className="whitespace-nowrap text-xs font-semibold uppercase text-pink-deep">
                Let&apos;s Go
              </CallCta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { displayed, done } = useTypewriter(HEADLINE);
  useVideoScrub(videoRef);

  return (
    <div
      id="top"
      className="relative flex flex-col overflow-x-hidden bg-white font-sans text-ink antialiased selection:bg-blush selection:text-ink lg:block lg:min-h-screen"
    >
      <Header />

      <div className="hidden overflow-hidden bg-neutral-50 pointer-events-none lg:absolute lg:inset-0 lg:z-0 lg:block lg:h-full lg:bg-transparent">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/hero-scrub.mp4"
          className="h-full w-full object-cover object-right-bottom"
        />
      </div>

      <div className="relative z-10 hidden w-full flex-col bg-white pb-8 lg:flex lg:min-h-screen lg:bg-transparent lg:pb-0">
        <main id="spade-hero" className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-8 w-full select-none whitespace-pre-wrap text-5xl font-normal leading-[1.08] tracking-tight text-black md:text-6xl lg:text-[76px]">
              {displayed}
              {!done && <span className="ml-[2px] inline-block h-[1.1em] w-[2px] animate-blink bg-black align-middle" />}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-14 max-w-2xl text-lg font-normal leading-relaxed text-ink-soft md:text-xl">
              Whether it&apos;s a check-up, a question, or a shot that&apos;s due, <br />
              reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <ServicePills />
        </main>
      </div>
    </div>
  );
}
