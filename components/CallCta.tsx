"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_DISPLAY = "+91 83105 70414";
const PHONE_TEL = "tel:+918310570414";
const WHATSAPP = "https://wa.me/918310570414";

export function CallCta({
  className,
  children,
  onClickCapture,
}: {
  className?: string;
  children: React.ReactNode;
  onClickCapture?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function handleClick(e: React.MouseEvent) {
    // On a phone, let the tel: link do its job and open the dialer directly.
    const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchPrimary) return;
    // On desktop, tel: usually does nothing visible — show the number + WhatsApp instead.
    e.preventDefault();
    setOpen((v) => !v);
  }

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable — the number is already visible to copy by hand.
    }
  }

  return (
    <div className="relative inline-block" ref={wrapRef}>
      <a href={PHONE_TEL} onClick={handleClick} onClickCapture={onClickCapture} className={className}>
        {children}
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-pink-line bg-white p-4 text-left shadow-[0_20px_40px_-16px_rgba(214,37,155,0.35)]"
          >
            <p className="mb-2 text-xs text-ink-soft">On your phone, this taps straight into the dialer. From here:</p>
            <button
              type="button"
              onClick={copyNumber}
              className="mb-2 flex w-full items-center justify-between rounded-lg border border-pink-line px-3 py-2 text-sm font-semibold text-ink hover:border-pink"
            >
              {PHONE_DISPLAY}
              <span className="text-xs text-pink-deep">{copied ? "Copied!" : "Copy"}</span>
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center rounded-lg bg-pink px-3 py-2 text-sm font-semibold text-white hover:bg-pink-deep"
            >
              WhatsApp us instead
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
